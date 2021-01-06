<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import { Edituser, users,Areamasters } from '../../../../services/auth'

export default {
  page: {
    title: 'View Baranggay',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
         printPdf: [],
    data:this.$route.params,
    inputs:this.$route.params.garbageCollector,
      baranggayid:"",
      contractorDispatcherId:this.$route.params.contractorDispatcherId,
      contractorDispatcherName: this.$route.params.contractorDispatcherName,
      contractorDispatcherVerified: this.$route.params.contractorDispatcherVerified,
      controlNo: this.$route.params.controlNo,
      createdBy: this.$route.params.createdBy,
      createdDate: this.$route.params.createdDate,
      driverId: this.$route.params.driverId,
      driverName: this.$route.params.driverName,
      garbageCollector: this.$route.params,
      haulerId: this.$route.params.haulerId,
      helperId: this.$route.params.helperId,
      helperName: this.$route.params.helperName,
      id: this.$route.params.id,
      isDeleted: this.$route.params,
      lguId: this.$route.params.lguId,
      modifiedBy: this.$route.params.modifiedBy,
      modifiedDate: this.$route.params.modifiedDate,
      status: this.$route.params.status,
      tripDate: this.$route.params.tripDate,
      tripEndTime: this.$route.params.tripEndTime,
      tripIncomingAreaRoute: this.$route.params.tripIncomingAreaRoute,
      tripStartTime: this.$route.params.tripStartTime,
      truckBodyNo: this.$route.params.bodyNo,
      truckType: this.$route.params.truckType,
      truckplateNo: this.$route.params.plateNo,
      volumeCheckerId: this.$route.params.volumeCheckerId,
      volumeCheckerMeasuredVolume: this.$route.params.volumeCheckerMeasuredVolume,
      volumeCheckerName:this.$route.params.volumeCheckerName,
      volumeCheckerTotalKmServed: this.$route.params.volumeCheckerTotalKmServed,
      volumeCheckerVerified: this.$route.params.volumeCheckerVerified,
      items: [
        {
          text: 'home',
          href: '/',
        },
        {
          text: 'Direct Trips',
          href: '#/Trips/DirectTrips',
        },
        {
          text: 'View Direct Trips',
          active: true,
        },
      ],
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    console.log(this.$route.params)
    // this.$route.params.data.response.result = this.$route.params.data.response.result
    // this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    this.getplans()
    // this.userdata()
  },
  methods: {
     async getplans() {
       try {
        
      const result = await  Areamasters()
      var data = result.data.response.areaMaster
      data.map(e=>{
        if(this.$route.params.baranggayId === e.id){
          this.baranggayid = e.areaName
        }
      })
       
      } catch (error) {}
   
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

    <div class="animated fadeIn">
      <b-card header="View Direct Trip" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form>
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Baranggay</label
                >
                <input
                  v-model="baranggayid"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
                <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >LGU ID</label
                >
                <input
                  v-model="lguId"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Trip Date</label
                >
                <input
                  id="defaultFormCardNameEx"
                  v-model="tripDate"
                  disabled
                  type="text"
                  class="form-control"
                />

                <!-- Default input email -->
              </b-col>

              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                  >Trip Start Time</label
                >

                <input
                  id="defaultFormCardNameEx"
                  v-model="tripStartTime"
                  disabled
                  type="text"
                  class="form-control"
                />

                <!-- Default input name -->
              </b-col>
              <br />
            </b-row>
            <br />
            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Control NO</label
                >

                <input
                  id="defaultFormCardEmailEx"
                  v-model="controlNo"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Driver Name</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="driverName"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Helper Name</label
                >
                <input
                  v-model="helperName"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Dispatcher Name</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="contractorDispatcherName"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col v-for="(input, k) in inputs" :key="k">
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Garbage Collector</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="input.garbageCollectorName"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
            </b-row>
            <br />

            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Truck Plate No</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckplateNo"
                  disabled
                  type="email"
                  class="form-control"
                />
                <br />
              </b-col>

              <br />

              <b-col>
                <!-- Default input email -->

                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Truck BodyNo</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckBodyNo"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>

              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >TruckType</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckType"
                  disabled
                  type="email"
                  class="form-control"
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

            <br />
            <!-- <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-custome float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Create</b-button
                > -->
          </form>
          <!-- Default form subscription -->
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
        <h1 style="text-align:center;font-size:22px">DIRECT TRIP TICKET</h1>
         <h2 style="margin-left:40px">
          Baranggay: 
          <span style="font-size:18px">{{baranggayid}}</span>
        </h2>
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
          Hauler Name: 
          <span style="font-size:18px">{{printPdf.haulerName}}</span>
        </h2>
        <h2 style="margin-left:450px;margin-top:-44px">
          Lgu Name: 
          <span style="font-size:18px">{{printPdf.lguName}}</span>
        </h2>
        <h2 style="margin-left:40px">
          Truck Type: 
          <span style="font-size:18px">{{printPdf.truckType}}</span>
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
          Dumping Location: 
          <span style="font-size:18px">{{printPdf.dumpingLocationName}}</span>
        </h2>
        <h2 style="margin-left:40px">
         Total Capacity: 
          <span style="font-size:18px">{{printPdf.totalCapacity}}</span>
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
