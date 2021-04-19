<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import DualListBox from 'dual-listbox-vue'
import 'dual-listbox-vue/dist/dual-listbox.css'
import { ModelSelect } from 'vue-search-select'
import addplan from '@components/addplan'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 Createdays,type,triptypebilling,tripbillinggenerate
} from '../../../../services/auth'

export default {
  page: {
    title: 'Payroll Trip Billing',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    DualListBox,
    addplan,
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
      items: [
        {
          text: 'Payroll ',
          href: '/',
        },
      
        {
          text: 'Trips Billing',
          active: true,
        },
      ],
     
      code:"",
      classdata:[],
      triptype:"",
      tripclass:"",
      classid:"",
      day:"",
      TripClass:[],
      Tripids:[],
      tripdata:[],
      tripid:"",

    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.getclass()
    // this.getClientDetails()
    // this.getplans()
    this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.permission()
  },
  methods: {

    async create() {
       try {
       
      const result = await  tripbillinggenerate(this.classid,this.tripid)
     
       
      } catch (error) {}
   
    },
  async  getid(){

 for(var i = 0 ; i<this.classdata.length ;i++){
       if(this.tripclass === this.classdata[i].tripType){
           this.classid = this.classdata[i].id
        
          const result2 = await triptypebilling(this.classdata[i].id)
        this.tripdata = result2.data.response.result
        this.tripdata.map(e=>{
  this.Tripids.push(e.id)
        })
      



       }
    }
  },
   
 async getclass() {
       try {
       
      const result = await  type()
     this.classdata = result.data.response.TripType
    this.classdata.map(e=>{
        this.TripClass.push(e.tripType)
      })
       
      } catch (error) {}
   
    },
    
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
      <b-card header="Trip Billing" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form @submit.prevent="create">
         
            <b-row>

              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                Trip Type</label
                >
                 <b-form-select
                  v-model="tripclass"
                  type="text"
                
                  placeholder="Enter Trip Type"
                  :options="TripClass"
                  class="form-control"
                  @change="getid"
                  required
                />
               

                <!-- Default input name -->
              </b-col>
           <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                Trip ID</label
                >
                 <b-form-select
                  v-model="tripid"
                  type="text"
                
                  placeholder="Enter Trip Type"
                  :options="Tripids"
                  class="form-control"
                  @change="getripid"
                  required
                />
           </b-col>
         
                    <b-col>
                    <b-button
                      class="btn btn-custome ml-4 btn-secondary mt-4"
                      text="Create Tenant"
                      @click="create"
                      >Generate</b-button
                    >
                  </b-col>  </b-row>
          </form>
          <!-- Default form subscription -->
        </div>
      </b-card>
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
<style>
.list-box-wrapper .list-box-item .bulk-action .select-all {
  background: #3757f5;
}
.btn-action {
  background: #3757f5;
}
.list-box-wrapper .list-box-item .bulk-action .deselect-all {
  background-color: #c7c7ca;
  color: black;
}
</style>