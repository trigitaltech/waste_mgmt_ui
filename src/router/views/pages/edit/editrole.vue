<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import DualListBox from 'dual-listbox-vue'
import 'dual-listbox-vue/dist/dual-listbox.css'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 editrole, permissions,addpermissiontorole
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Role',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    DualListBox,
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
      plandata: '',
      striped: false,
      bordered: true,
      filter: '',
      perPage: 10,
      hover: true,
      currentPage: 1,
      small: false,
      dark: false,
      fixed: false,
      amount: '',
        planList: [],
      item:[],
      payloadData: [],
       source: [
                
               
            ],
            destination:this.$route.params.permissions,
      submitted: false,
      title: 'Register',
    
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Roles / Edit Role',
          active: true,
        },
      ],
        option: [
        { value: null, text: 'Please select an option' },
        { value: 'POST', text: 'POST' },
        { value: 'GET', text: 'GET' },
        { value: 'PUT', text: 'PUT' },
        { value: 'DELETE', text: 'DELETE' },
      ],
        name:this.$route.params.name,
      Operation: null,
      createdby:this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
      url: '',
      title: 'Register',
      modifydate: new Date(),
      modifyby:"",
    }

  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    console.log(this.$route.params)
    // this.getClientDetails()
    // this.getplans()
      this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
      this.permission()
  },
  methods: {
     onChangeList: function ({ source, destination }) {
      this.source = source
      this.destination = destination
      // debugger
      console.log("destination",this.destination)
      this.planList = this.destination.map(function (x) {
        // debugger
        return {
        
        name: x.label !== undefined ? x.label: x.name,
      
        }
      })
      // this.amount = 0;
      // this.destination.map(e=>{
      //   this.amount = this.amount + e.price
      // });
// console.log("amount:",amount)
        console.log('plan', this.planList)
    
      this.payloadData = this.planList.map(function (e) {
        return {
          
        name: e.name,
        
        }
      })
        // console.log('destination', this.planList[0].label)
    },
    
      async permission() {
       try {
      
      const result = await permissions()
      // this.item = result.data.response.PermissionMaster
      this.source = result.data.response.PermissionMaster.map(function (x) {
          return {
          
            label:x.name,
         
          }
        })
     
      } catch (error) {}
     },
    async create() {
      try {
        const payload = {
          id:this.$route.params.id,
          name: this.name,
          status: 200,
          isDeleted: false,
          createdDate: this.createddate,
          createdBy: this.createdby,
          modifiedDate: this.modifydate,
          modifiedBy: this.modifyby,
}
        let result = await editrole(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Edited Role Successfully`,
            duration: 5000,
          })
        
           this.$router.push({path:'/Setup/Roles'})
        }
      } catch (e) {
         this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
      async add() {
      // console.log('id', this.ids)
      // if(this.form.firstName && this.form.lastName && this.form.number && this.form.address){
      try {
        const payload = this.payloadData 
        console.log('form', payload)
        const result = await addpermissiontorole(this.$route.params.id, payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Added Permission To Role successfully`,
            duration: 5000,
          })
        }
      } catch (e) {
        this.$notify({
          group: 'alert',
          type: 'error',
          text: `${e.message.error}`,
          duration: 5000,
        })
      }},
 
    async refresh() {
      setTimeout(function () {
        location.reload()
      }, 200)
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card
        header="Edit Role"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              <form>
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                   <input
                      id="defaultFormCardNameEx"
                      type="text"
                      disabled
                      class="form-control"
                      placeholder="Role Name"
                    />
                  </b-col>
                  <b-col style="margin-left:50px">
                    <input
                      id="defaultFormCardNameEx"
                      v-model="name"
                      type="text"
                      class="form-control"
                    />

                  </b-col>
                  <b-col>
                     <b-button
                  class="btn btn-custome float-right btn-secondary mb-3"
                  text="Create Tenant"
                  @click="create"
                  >Save</b-button
                >
                  </b-col>
                </b-row>
                <br />
      
              </form>
              <!-- Default form subscription -->
        </div>
      </b-card>
                 <div class="animated fadeIn">
      <b-row >
      <b-col md="12">
          <b-card
            class="card-wrap"
            header="Add Permission To Role"
          >
           
            <div>
              <DualListBox
                  :source="source"
                  :destination="destination"
                  label="name"
                  @onChangeList="onChangeList"
                />
            </div>
            <div class="row mt-1 justify-content-center">
            
              <div class="col-md-11" style="margin-top:50px">
           
                  <button
                    class="btn btn-primary d-inline-flex align-items-center"
                    type="submit"
                @click="add()"
                  >Add Permission To Role</button>
                </div>
            </div>
        
          </b-card>
      </b-col>
      </b-row>
                 </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
<style lang="sass" scoped>
.edit
  color: #a7a7a7 !important
.text-center
  text-align: center
.form-div label
  margin-top: 8px
</style>
<style lang="sass" scoped>
.card-wrap
  box-shadow: 0 0 10px #ccc
  .role-details
    margin: 10px
</style>
