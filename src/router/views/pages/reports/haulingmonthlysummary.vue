<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import { Datetime } from 'vue-datetime';
import NProgress from 'nprogress/nprogress'
import moment from "moment";
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 Attendance, deleteattendance,employees,pdfgenerate,triphaulingsummarygenerate,downloadpdf
} from '../../../../services/auth'
import axios from "axios";
import Datepicker from 'vuejs-datepicker';
import {
    api, serviceMaker,
    methods,
} from "../../../../services/index.js";

export default {
  page: {
    title: 'Hauling Monthly Summary Expenses',
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
    Datepicker
  },
 
  data() {
    return {
     year:"",
       DatePickerFormat: 'yyyy',
      lgudata:[],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Hauling Monthly Summary Expenses',
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
  methods :{
   async create() {
    //  console.log("test")
    //      var id = "pdf"
     try{
        //   const payload = {
        //               year:moment(this.year).format('YYYY')
        //   }
//         const result = await triphaulingsummarygenerate(payload)
//         let reportname = result.data
//         // const result1 = await downloadpdf(reportname)
//         debugger
//         var buf = new ArrayBuffer(reportname.length*2); // 2 bytes for each char
//   var bufView = new Uint16Array(buf);
//   for (var i=0, strLen=reportname.length; i < strLen; i++) {
//     bufView[i] = reportname.charCodeAt(i);
//   }
//   debugger
        // const buffer = new ArrayBuffer(reportname);
       axios 
         .get(api.NGB.defaults.baseURL+"/reports/generate/monthlySummaryExpense/"+ moment(this.year).format('YYYY'),{
          // .get("http://65.0.10.135:9000/api/v1/management/reports/generate/monthlySummaryExpense/"+ moment(this.year).format('YYYY'),{
 headers: {
   Authorization: 'Bearer ' + this.getUserDetails.authToken}, responseType: 'arraybuffer'
})
          .then(response => {
            //   debugger
    // url: `http://65.0.10.135:9000/api/v1/management/reports/download/${reportname}`,
    // method: "GET",
    // responseType: "blob"
// }).then(function(response) {
    // var fileURL = URL.createObjectURL(response.data);
    
    const file = new Blob([response.data], {type: 'application/pdf'});

            // process to auto download it
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = "Hauling Monthly Summary" + moment(new Date()).format('DD-MM-YYYY')+ ".pdf";
            link.click();
    window.open(fileURL);
});
        //  const result1 = await downloadpdf(reportname)
        //  var response = result1.data
        //  console.log(response)
        //  debugger
        //  var file = new Blob([response], {type: 'application/pdf'});
    //    var fileURL = URL.createObjectURL(response);
    //    window.open(fileURL);
    //      let link = document.createElement('a')
    //      let blob = new Blob([response], { type: 'application/pdf' })
         
      
    //   link.href = window.URL.createObjectURL(blob)
    //   link.download = 'test.pdf'
    //   link.click()
      } catch (e) {
         this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
 
}
  },
  mounted() {
    // debugger
      // console.log("api",api.NGB.defaults.baseURL)
  },
  
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card
        header="Hauling Monthly Summary Expenses"

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
                     <Datepicker 
      v-model="year"
      :format="DatePickerFormat"
     placeholder="SELECT  YEAR"
      minimum-view="year"              
      name="datepicker"
      id="input-id"
      input-class="form-control"></Datepicker>
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
                  @click="downloadFile()"
                  > Download</b-button
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
    console.log(err);
        }
    }
}
</script>