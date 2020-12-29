<script>
import Vue from 'vue'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import { Datetime } from 'vue-datetime';
import moment from "moment";
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
import { getLguById,
 stagingarea, lguemployee, haulers, getVehiclesByHaulerId, haulerEmployees, CreateOutgoingTrip
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
      tripData:[],
      loginlguid:null,
      printPdf:[],
      lguName:null,
      haulerName:''
    };
  },
  filters: {
    formatDate: function(value) {
      return moment(value).format("DD MMMM YYYY");
    },
    formatTime: function(value) {
      return moment(value).format("hh:mm A");
    }
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  async mounted() {
     const result = JSON.parse(localStorage.getItem('auth.currentUser'))
      this.loginlguid = result.lguemployee.lguId
      const result1 = await getLguById(this.loginlguid)
      this.lguName = result1.data.response.result.lguName
    this.tripData = this.$route.params
    console.log(this.tripData)
    const result2 = await haulers()
    const data = result2.data.response.HaulerMaster
    data.map(e => {
      if(e.id == this.tripData.haulerId) {
        this.haulerName = e.userName
      }
    })
    this.printPdf = this.tripData
  },
  methods:{
    print(){
      var divContents = document.getElementById('pdf-voucher').innerHTML
      console.log("divcontents",divContents)
      var a = window.open('', '', 'height=1500, width=1500')
      a.document.write('<html>')
      a.document.write('<body >')
      a.document.write('<div>')
      a.document.write(divContents)
      a.document.write('</div></body></html>')
      a.document.close()
      a.print()
      a.close()
    }
  }
}
</script>

<template>
  <Layout>
    <div class="animated">
      <b-card
        header="View Outgoing Trip"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-1">
          <div class="mx-xl-5">
            <div class="card-body">
              <form @submit.prevent="create">
                <b-row>
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >LGU Name</label
                      >
                      <input
                       class="form-control"
                       v-model="lguName"
                       readonly
                      />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >CONTROL NO</label
                    >
                    <input
                      v-model="tripData.controlNo"
                      class="form-control"
                      name="body"
                      readonly
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Staging Area</label
                    >
                    <input
                      v-model="tripData.stagingAreaName"
                      class="form-control"
                      name="body"
                      readonly
                    />
                  </b-col>
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >Dumping Location</label
                      >
                      <input
                      v-model="tripData.dumpingLocationName"
                      class="form-control"
                      name="body"
                      readonly
                    />
                    </b-col>
                
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Date</label
                    >
                   <datetime 
                      v-model="tripData.tripDate"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                      }"
                      type="date"
                      placeholder="SELECT Date"
                 ></datetime>
                  </b-col>
                  <b-col class="ml-3">
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark mr-2"
                      >Loading Time</label
                    >
                    <datetime 
                      v-model="tripData.loadingStartTime"
                      :format="{
                        hour: 'numeric',
                        minute: '2-digit'
                      }"
                      type="datetime"
                      placeholder="SELECT Time"
                 ></datetime>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Volume Checker</label
                    >
                   <input
                      v-model="tripData.volumeCheckerName"
                      class="form-control"
                      name="body"
                      readonly
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Control Checker</label
                    >
                    <input
                      v-model="tripData.controlCheckerName"
                      class="form-control"
                      name="body"
                      readonly
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Hauler</label
                    >
                   <input
                      v-model="haulerName"
                      class="form-control"
                      name="body"
                      readonly
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Plate No</label
                    >
                     <input
                      v-model="tripData.plateNo"
                      class="form-control"
                      name="body"
                      readonly
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Body</label
                    >
                    <input
                      v-model="tripData.bodyNo"
                      class="form-control"
                      name="body"
                    />
                  </b-col>
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Truck Type</label
                    >
                   <input
                      v-model="tripData.typeOfUnit"
                      class="form-control"
                      name="trucktype"
                      readonly
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Driver Name</label
                    >
                    <input
                      v-model="tripData.driverName"
                      class="form-control"
                      name="body"
                      readonly
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Helper</label
                    >
                     <input
                      v-model="tripData.helperName"
                      class="form-control"
                      name="body"
                      readonly
                    />
                  </b-col>
                </b-row>
                <button style="background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-info mt-3 mx-auto"
                  @click="print"
                  >Print</button>
              </form>
            </div>
          </div>
        </div>
      </b-card>
    </div>
    <div
      id="pdf-voucher"
      class="mt-4 pdf-voucher"
      style="font-family: sans-serif;display:none"
    >
      <section class="pdf-content row justify-content-center">
        <h1 style="text-align:center;font-size:24px;text-decoration:underline">
          INT'L SWIMS INC.
        </h1>    
        <h6 style="text-align:center;margin-top:-20px">INTERNATIONAL SOLID WASTE INTEGRATED</h6>
        <h6 style="text-align:center;margin-top:-16px">MANAGEMENT SPECIAL INCORPORATED</h6>
        <h1 style="text-align:center;font-size:22px">TRIP TICKET</h1>
        <h2 style="margin-left:40px">
          Driver's Name: 
          <span style="font-size:18px">{{printPdf.driverName}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          Total Kilometer: 
          <span style="font-size:18px">{{printPdf.totalDistance}}</span>
        </h2>
        <h2 style="margin-left:40px">
          Plate No: 
          <span style="font-size:18px">{{printPdf.plateNo}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          Date: 
          <span style="font-size:18px">{{printPdf.tripDate | formatDate}}</span>
        </h2>
        <h2 style="margin-left:40px">
          Truck Type: 
          <span style="font-size:18px">{{printPdf.typeOfUnit}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          Time In: 
          <span style="font-size:18px">{{printPdf.tripStartTime | formatTime}}</span>
        </h2>
        <h2 style="margin-left:40px">
          Volume: 
          <span style="font-size:18px">{{printPdf.volumeCheckerMeasuredVolume}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          Time Out: 
          <span style="font-size:18px">{{printPdf.tripEndTime | formatTime}}</span>
        </h2>
        <h2 style="margin-left:40px">
          Staging Area: 
          <span style="font-size:18px">{{printPdf.stagingAreaName}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          Dumping Location: 
          <span style="font-size:18px">{{printPdf.dumpingLocationName}}</span>
        </h2>
        <h2 style="margin-left:40px">
          Ton/s: 
          <span style="font-size:18px">{{printPdf.ton}}</span>
        </h2>
        <h2 style="margin-left:40px">
          Volume Checker: 
          <span style="font-size:18px">{{printPdf.volumeCheckerName}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          Control Checker: 
          <span style="font-size:18px">{{printPdf.controlCheckerName}}</span>
        </h2>
        <h2 style="margin-left:40px">
          TICKET NO: 
          <span style="font-size:18px">000000{{printPdf.id}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          CENRO: Ronaldo R. Vocalan 
          <span style="font-size:18px"></span>
        </h2>
        <p style="margin-left:480px;margin-top:30px;font-size:22px">
          CUSTOMER'S COPY
        </p>
        <h4 style="margin-left:40px">NOTE:</h4>
        <p style="margin-left:40px">1. Waste collected should be segregated and sprayed with deodorizer prior to transport to the site.</p>
        <p style="margin-left:40px">2. Truck must be sealed/covered and that there is no leakage of waste liquid while transporting</p>
        <p style="margin-left:40px">3. Any violation in transporting of which cargo will be responsibility of the hauling contractor.</p>
        <p style="margin-left:40px">4. The permit to Dump Certificate should be surrendered to the Gate guard before entering the premises.</p>
        <p style="margin-left:40px">5. Observe and obey RA 9003 and the rules and regulations set by INT’L SWIMS INC</p>
        <p style="margin-left:40px">6. Any violation therefore shall be grounded for suspension or cancellation of the accreditation.</p>
      </section>
    </div>
  </Layout>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped media="print">
.cardheader.title{
  color:black
}
</style>
<style lang="stylus" scoped>
body {
  font-family: Arial;
}

.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}
</style>