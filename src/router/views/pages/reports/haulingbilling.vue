<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import { Datetime } from 'vue-datetime'
import NProgress from 'nprogress/nprogress'
import moment from 'moment'
import axios from "axios";
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
  Attendance,
  deleteattendance,
  employees,
  haulers,
  lgus
} from '../../../../services/auth'
import {
    api, serviceMaker,
    methods,
} from "../../../../services/index.js";

export default {
  page: {
    title: 'Hauling Billing Summary',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
    Datetime,
  },

  data() {
    return {
      date1:"",
      date2:"",
      lgus:[],
      haulers:[],
      lgudata:[],
      haulerdata:[],
      hauler:"",
      lgu:"",
      haulerid:"",
      lguid:"",
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Hauling Billing Summary',
          active: true,
        },
      ],
    }
  },
  computed: {
    //  rows(){
    //  return this.item.length
    // },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.getemployees()
    this.getlgus()
  },
  methods: {
        async getemployees() {
       try {
      
      const result = await haulers()
      this.haulerdata = result.data.response.HaulerMaster
    this.haulerdata.map(e=>{
         this.haulers.push(e.haulerName)
       })
     
      } catch (error) {}
   
    },
     async getlgus() {
       try {
      
      const result = await lgus()
      this.lgudata = result.data.response.result
    this.lgudata.map(e=>{
         this.lgus.push(e.lguName)
       })
     
      } catch (error) {}
   
    },
    gethaulerid(){
    this.haulerdata.map(e => {
          if(this.hauler == e.haulerName){
            this.haulerid = e.id
          }
        })

    },
    getlguid(){
 this.lgudata.map(e => {
          if(this.lgu == e.lguName){
            this.lguid = e.id
          }
        })

    },
    async create() {
  //  debugger

     try{
       axios
          .get(api.NGB.defaults.baseURL+"/reports/generate/billingSummary/"+this.haulerid+"/"+this.lguid+"/"+moment(this.date1).format('YYYY-MM-DD')+"/"+moment(this.date2).format('YYYY-MM-DD'),{
 headers: {
   Authorization: 'Bearer ' + this.getUserDetails.authToken}, responseType: 'arraybuffer'
})
          .then(response => {
        
    
    const file = new Blob([response.data], {type: 'application/pdf'});

            // process to auto download it
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = "Hauling Billing" + moment(new Date()).format('DD-MM-YYYY') + ".pdf";
            link.click();
    window.open(fileURL);
});
      
      } catch (e) {
         this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
 
}
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card
        header="Hauling Billing Summary"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
          <!-- Card -->
          <div class="mx-xl-5">
            <!-- Card body -->
            <div class="card-body">
              <!-- Default form subscription -->
              <form>
                <b-row>
                
                  <b-col>
                    <multiselect
                      v-model="hauler"
                     
                      placeholder="SELECT HAULER"
                      :options="haulers"
                    @input="gethaulerid()"
                    >
                    </multiselect>
                  </b-col>
                 
                  <b-col>
                     <multiselect
                      v-model="lgu"
                     
                      placeholder="SELECT LGU"
                      :options="lgus"
                    @input="getlguid()"
                    >
                    </multiselect>
                  </b-col>
                </b-row>
                <br />
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <datetime
                      v-model="date1"
                      type="year"
                      placeholder="SELECT START DATE"
                    ></datetime>
                  </b-col>
                  <b-col style="margin-left: 50px">
                    <datetime
                      v-model="date2"
                      type="year"
                      placeholder="SELECT END DATE"
                    ></datetime>
                  </b-col>
                  <b-col>
                    <b-button
                      class="btn btn-custome ml-4 btn-secondary mb-3"
                      text="Create Tenant"
                      @click="create"
                      >Submit</b-button
                    >
                  </b-col>
                  <!-- <b-col>
                    <b-button
                      class="btn btn-custome ml-4 btn-secondary mb-3"
                      text="Create Tenant"
                      @click="create"
                    >
                      Download</b-button
                    >
                  </b-col> -->
                </b-row>
                <br />
              </form>
            </div>
            <!-- Default form subscription -->
          </div>
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
