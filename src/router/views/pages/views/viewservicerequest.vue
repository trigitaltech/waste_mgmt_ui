<script>
import Vue from 'vue'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import { Datetime } from 'vue-datetime'
import Multiselect from 'vue-multiselect'
import moment from 'moment'
Vue.component('multiselect', Multiselect)
import {
  getVehiclesByhauler,
  Createsrtruck,
  getdumpdata,
  dumpinglocation,
  haulers,
  Tripdownload,
  Areamasters,
  routemaster,
  CreateIncomingTrip,
  haulerEmployees,
  vehicle,
  getRoutesByBaranggayId,
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Servicerequest Equipment',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return {
      inputs: [
        {
          name: '',
        },
      ],
      items: [
        {
          text: 'Servicerequests',
          href: '/',
        },
        {
          text: 'Servicerequest Equipment',
          href: '#/Servicerequest/Equipment',
        },
        {
          text: 'Create SR Equipment',
          active: true,
        },
      ],
      areadata: [],
       printPdf: [],
      areaarray: '',
      routedate: [],
      haulerarray: [],
      routearray: [],
      emp: [],
      dumpid: '',
      dumpinglocation: '',
      controlno: this.$route.params.controlNo,
      tripDate: this.$route.params.created_date,
      plateno: '',
      hauler: '',
      vehicleno: '',
      Type:this.$route.params.type,
      equipmentno:this.$route.params.equipmentNo,
      model:this.$route.params.equipmentmodel,
      driver1:this.$route.params.driverName,
      helper1: this.$route.params.helperName,
      volumecapacity: this.$route.params.volumeCapacity,
      trucktype:this.$route.params.truckType,
      frompoint:this.$route.params.fromPoint,
      topoint:this.$route.params.toPoint,
      dispatchedby:this.$route.params.dispatchedBy,
      body: '',
      area: '',
      route: '',
      driver: '',
      contractor: '',
      collector: null,
      lgu: '',

      vehicleno: '',
      plates: [],
      body: '',
      vehicledata: [],
timeinpm:this.$route.params.driverTimeIn,
      driverid: '',
      startTime: '',
      drivers: [],
      trucktype:this.$route.params.truckType,
      Verified:this.$route.params.verifiedBy,
      totaltrips:this.$route.params.totalTrips,
      helpers: [],
      vehicles: [],
      servingAreas: [],
      route: '',
   
      helperid: '',
    
      servingRoutes: [],
      haulerid: '',
      driverList: [],
      hauler: '',
      haulerList: [],
      contractorList: [],
      vehicledata: [],
      paleroList: [],
      garbage: null,
      dumpings: [],
      haulers: [],
      dumpingdata: [],
      plates: [],
      haulerdata: [],
      fromdumpings: [],
      todumpings: [],
      lgu: null,
      dumpingid: '',
      haulerid: '',
      dispatcherid: '',
    }
  },
  components: {
    Layout,
    PageHeader,
    VueTimepicker,
    Multiselect,
    datetime: Datetime,
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.tripDate = moment(new Date()).format('DD-MM-YYYY')
    this.startTime = moment(new Date()).format('DD-MM-YYYY hh:mm A')
    console.log(this.tripDate + ' ' + this.startTime)
    // this.getdumping()
    // this.gethaulers()
    // this.areas()
    console.log(this.$route.params)
    // this.routes()
    // this.getUsers()
    // this.employeedata()
    // this.getLgu()
    // this.getvehicles()
  },
  methods: {
    async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))

      this.dispatcherid = result.lguemployee.id

      console.log(this.loginDetails)
    },
   demoFun() {
      console.log('heee')
      var divContents = document.getElementById('pdf-voucher').innerHTML
      console.log("divcontents",divContents)
      var a = window.open('', '', 'height=500, width=500')
      a.document.write('<html>')
      a.document.write('<body >')
      a.document.write('<div>')
      a.document.write(divContents)
      a.document.write('</div></body></html>')
      a.document.close()
      a.print()
    },

       create(pay) {
     
        this.printPdf = this.$route.params
        console.log("haii",this.printPdf)

        setTimeout(() => {
         
          this.demoFun()
        }, 2000)
      
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />
    <div class="animated">
      <b-card
        header="View Servicerequest Equipment"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-1">
          <div class="mx-xl-5">
            <div class="card-body">
              <form @submit.prevent="create">
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >CONTROL NO</label
                    >
                    <input
                      v-model="controlno"
                      class="form-control"
                      placeholder="Enter Contol No"
                      name="body"
                      disabled
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Date</label
                    >
                    <input
                      v-model="tripDate"
                      class="form-control"
                      placeholder="Enter Contol No"
                      name="body"
                      disabled
                    />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Dumping Location</label
                    >
                    <input
                      v-model="dumping"
                      class="form-control"
                      placeholder="Enter Dumping"
                      name="body"
                      disabled
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Hauler</label
                    >
                  <input
                      v-model="controlno"
                      class="form-control"
                      placeholder="Enter Contol No"
                      name="body"
                      disabled
                    />
                  </b-col>
                
                
               
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Type</label
                    >
                    <input
                      v-model="Type"
                      class="form-control"
                      name="body"
                      readonly
                      placeholder="Enter Type"
                      disabled
                    />
                  </b-col>
                 
                </b-row>
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Equipment No</label
                    >
                   <input
                      v-model="equipmentno"
                      class="form-control"
                    disabled
                      name="body"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Model</label
                    >
                    <input
                      v-model="model"
                      class="form-control"
                   
                      name="body"
                      disabled
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >From Dumping Point</label
                    >
                   <input
                      v-model="frompoint"
                      class="form-control"
                      placeholder="Enter Contol No"
                      name="body"
                      disabled
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >To Dumping Point</label
                    >
                    <input
                      v-model="topoint"
                      class="form-control"
                      placeholder="Enter Contol No"
                      name="body"
                      disabled
                    />
                  </b-col>
                </b-row>
                 <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Dispatched By</label
                    >
                   <input
                      v-model="dispatchedby"
                      class="form-control"
                      placeholder="Enter Dispacted By"
                      name="body"
                      disabled
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Verified By</label
                    >
                    <input
                      v-model="Verified"
                      class="form-control"
                      placeholder="Enter Verified By"
                      name="body"
                      disabled
                    />
                  </b-col>
                </b-row>
                   <b-row >
              <b-col md="4">
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  TiME IN AM</label
                >

                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="timeinpm"
                  placeholder="Enter Time IN AM"
                  disabled
                />
              </b-col>
              <b-col md="4">
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  TIME OUT AM</label
                >
                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="timeinpm"
                  placeholder="Enter Time Out Am"
                  disabled
                />
              </b-col>
              <b-col md="4">
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  TOTAL Trips</label
                >
                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="totaltrips"
                  placeholder="Enter Total Trips"
                  disabled
                />
              </b-col>
             
            </b-row>
              <b-row >
              <b-col md="4">
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Time IN PM</label
                >

                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="timeinpm"
                  placeholder="Enter Time IN PM"
                  disabled
                />
              </b-col>
              <b-col md="4">
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  TIME OUT PM</label
                >
                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="timeinpm"
                  placeholder="Enter Time Out PM"
                  disabled
                />
              </b-col>
              <b-col md="4">
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  TOTAL Trips</label
                >
                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="input"
                  placeholder="Enter Total Trips"
                  disabled
                />
              </b-col>
             
            </b-row>
                <br />
                   <b-row>
              <b-col>
                     <b-button
                  class="btn btn-custome ml-4 btn-secondary mb-3 float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >PRINT</b-button
                >
                  </b-col>
            </b-row>
                <!-- <button
                  type="submit"
                  class="btn btn-custome float-right btn-secondary mb-3"
                  >Submit</button
                > -->
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
        <h1 style="text-align:center;font-size:22px">SERVICE REQUEST EQUIPMENT TICKET</h1>
         <!-- <h2 style="margin-left:40px">
          Baranggay: 
          <span style="font-size:18px">{{baranggayid}}</span>
        </h2> -->
      <h2 style="margin-left:40px">
          Driver's Name: 
          <span style="font-size:18px">{{printPdf.driverName}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          Total TRIPS: 
          <span style="font-size:18px">{{printPdf.totalTrips}}</span>
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
          Hauler Name: 
          <span style="font-size:18px">{{printPdf.haulerName}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          TRUCK TYPE: 
          <span style="font-size:18px">{{printPdf.truckType}}</span>
        </h2>
        <h2 style="margin-left:40px">
       TOTAL DISTANCE: 
          <span style="font-size:18px">{{printPdf.totalDistance}}</span>
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
          Body No: 
          <span style="font-size:18px">{{printPdf.bodyNo}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          FROM POINT: 
          <span style="font-size:18px">{{printPdf.fromPoint}}</span>
        </h2>
        <h2 style="margin-left:40px">
         TO POINT: 
          <span style="font-size:18px">{{printPdf.toPoint}}</span>
        </h2>
        <h2 style="margin-left:40px">
        AM Trip: 
          <span style="font-size:18px">{{printPdf.amTrip}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          PM Trip: 
          <span style="font-size:18px">{{printPdf.pmTrip}}</span>
        </h2>
        <h2 style="margin-left:40px">
          TICKET NO: 
          <span style="font-size:18px">000000{{printPdf.id}}</span>
        </h2>
         <h2 style="margin-left:450px;margin-top:-44px">
          CONTROL NO:
          <span style="font-size:18px">{{printPdf.controlNo}}</span>
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
.cardheader.title {
  color: black;
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