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
 Createdays,classmaster
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Days',
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
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Days',
          href: '#/Setup/DaysMaster',
        },
        {
          text: 'Create Days',
          active: true,
        },
      ],
      days: [
      
        { value: 'BIO', text: 'BIO' },
        { value: 'NON-BIO', text: 'NON-BIO' },
      ],
       days1: [
      
        { value: 'SUNDAY', text: 'SUNDAY' },
        { value: 'MONDAY', text: 'MONDAY' },
         { value: 'TUESDAY', text: 'TUESDAY' },
          { value: 'WEDNESDAY', text: 'WEDNESDAY' },
           { value: 'THURSDAY', text: 'THURSDAY' },
            { value: 'FRIDAY', text: 'FRIDAY' },
             { value: 'SATURDAY', text: 'SATURDAY' },
      ],
      code:"",
      classdata:[],
      triptype:"",
      tripclass:"",
      classid:"",
      day:"",
      TripClass:[],
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
    getid(){
this.classdata.map(e=>{
if(this.tripclass === e.name){
  this.classid = e.id
}
})


    },
    async create() {
      try {
        const payload = {
         
            "tripType":this.triptype,
            "tripClass":this.classid,
            "day":this.day,
            "status":1
        }
        const result = await Createdays(payload)

        // this.rid = result.data.response.Roles.id
        // console.log(this.rid)

        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Created Days Successfully`,
            duration: 5000,
          })
           this.$router.push({path:'/Setup/DaysMaster'})
        }
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
 async getclass() {
       try {
       
      const result = await  classmaster()
      this.classdata = result.data.response.TripClass
    this.classdata.map(e=>{
        this.TripClass.push(e.name)
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
      <b-card header="Create Days" class="mt-10 ml-10 mr-10 mx-auto">
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
                  v-model="triptype"
                  type="text"
                  oninvalid="this.setCustomValidity('Trip Type is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Trip Type"
                  :options="days"
                  class="form-control"
                  required
                />

                <!-- Default input name -->
              </b-col>

            
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Day</label
                >
                <!-- <input
                  v-model="day"
                  type="text"
                  oninvalid="this.setCustomValidity('Day is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Day"
                  class="form-control"
                  required
                /> -->
                 <b-form-select
                 v-model="day"
                  type="text"
                
                  oninvalid="this.setCustomValidity('Day is required ')"
                  oninput="setCustomValidity('')"
                  :options="days1"
                  class="form-control"
                
                  required
                />

                <!-- Default input text -->
              </b-col>
            </b-row>
            <b-row>

              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                Trip Class</label
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
           <b-col></b-col>
              <br />
            </b-row>

            <br />
            <button
              type="submit"
              class="btn btn-custome float-right btn-secondary mb-3"
              >Submit</button
            >
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