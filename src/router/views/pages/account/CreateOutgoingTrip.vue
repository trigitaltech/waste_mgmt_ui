<script>
import Vue from 'vue'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import { Datetime } from 'vue-datetime';
import Multiselect from 'vue-multiselect'
import moment from 'moment';
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
      controlno:"",
      area:"",
      route:"",
      driver:"",
      contractor:"",
      collector:null,
      lgu:"",
      plate:"",
      plates:[],
      body:"",
      tripDate:"",
      trucktype:"",
      startTime:"",
      drivers:[],
      driverNames:[],
      helperNames:[],
      helpers:[],
      vehicles:[],
      servingAreas:[],
      route:"",
      driver:"",
      helper:null,
      servingRoutes:[],
      driverList:[],
      contractorList:[],
      garbage:null,
      lgu:null,
      loginDetails:{
        name:''
      },
      loginlguid:null,
      staging:'',
      stagingAreas:[],
      stagingAreaNames:[],
      dumping:'',
      dumpings:[],
      dumpingLocations:[],
      lguEmployees:[],
      checker:'',
      checkerList:[],
      checkerListNames:[],
      control:'',
      controlList:[],
      controlListNames:[],
      hauler:'',
      haulerList:[],
      haulerListNames:[],
      haulerId:'',
      driverId:'',
      helperId:'',
      stagingAreaId:'',
      volumeCheckerId:'',
      contractorDispatcherId:'',
      controlCheckerId:'',
      dumpingLocationId:'',
      contractorDispatcherName:'',
      contractorDispatcherId:'',
      district:""
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime,moment },
  mounted() {
     this.date = moment(new Date()).format('DD/MM/YYYY')
    this.time = moment(new Date()).format('HH:mm:ss')
    this.tripDate = new Date()
    this.startTime = new Date()
    this.getLgu()
    this.getStagingArea()
    this.getLguEmployee()
    this.getHaulers()
  },
  methods:{
    async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))
      this.loginlguid = result.lguemployee.lguId
       this.district = result.lguemployee.district
      this.contractorDispatcherId = result.lguemployee.id
      this.contractorDispatcherName = result.lguemployee.userName
      const result1 = await getLguById(this.loginlguid)
      this.loginDetails.name = result1.data.response.result.lguName
    },
    async getStagingArea() {
      try {
        const result = await stagingarea()
        this.stagingAreas = result.data.response.stagingArea
        console.log(this.stagingAreas)
        this.stagingAreas.map(e => {
          console.log(this.loginlguid+' '+e.lguName.id)
          if(this.loginlguid == e.lguName.id){
            this.stagingAreaNames.push(e.stagingAreaName)
          }
        })
        console.log(this.loginDetails.name)
      } catch(e) {
        console.log(e)
      }
    },
    async getLguEmployee() {
      try {
        const result = await lguemployee()
        this.lguEmployees = result.data.response.result
        this.lguEmployees.map(e => {
          console.log(e.lguId+' '+this.loginlguid)
          console.log(e.type)
          if(e.type == "VOLUME_CHECKER" && e.lguId == this.loginlguid) {
            this.checkerList.push(e)
            this.checkerListNames.push(e.userName)
          }
          if(e.type == "CONTROL_CHECKER" && e.lguId == this.loginlguid) {
            this.controlList.push(e)
            this.controlListNames.push(e.userName)
          }
        })
      } catch(e) {
        console.log(e)
      }
    },
    async getHaulers() {
      try {
        const result = await haulers()
        this.haulerList = result.data.response.HaulerMaster
        this.haulerList.map(e => {
          this.haulerListNames.push(e.haulerName)
        })
      } catch(e) {
        console.log(e)
      }
    },
    async getVehiclesDriversHelpers() {
      try {
        this.haulerList.map(e => {
          if(e.haulerName == this.hauler) {
            this.haulerId = e.id
          }
        })
        const result1 = await getVehiclesByHaulerId(this.haulerId)
        this.vehicles = result1.data.response.result
        this.vehicles.map(f => {
          this.plates.push(f.vehicleNo)
        })
        const result2 = await haulerEmployees()
        const data = result2.data.response.HaulerEmployees
        data.map(g => {
          if(g.type == "DRIVER" && g.haulerId == this.haulerId){
            this.drivers.push(g)
            this.driverNames.push(g.firstName +" "+ g.lastName)
          }
          if(g.type == "HELPER" && g.haulerId == this.haulerId){
            this.helpers.push(g)
            this.helperNames.push(g.firstName +" "+ g.lastName)
          }
        })
      } catch(error) {
        console.log(error)
      }
    },
    getTruckType() {
      this.vehicles.map(e => {
        if(this.body == e.vehicleNo) {
          this.trucktype = e.vehicleType.truckType
          this.plate = e.plateNo
        }
      })
    },
    getDumpingLocation() {
      this.stagingAreas.map(e => {
        if(e.stagingAreaName == this.staging) {
          this.dumpings.push(e)
          this.dumpingLocations.push(e.dumpingArea.dumpingAreaName)
          this.dumping = e.dumpingArea.dumpingAreaName
        }
      })
    },
    async create() {
      try {
        this.dumpings.map(e => {
          if(this.dumping == e.dumpingArea.dumpingAreaName) {
            this.dumpingLocationId = e.id
          }
        })
        this.drivers.map(e => {
          if(this.driver == (e.firstName +" "+ e.lastName)) {
            this.driverId = e.id
          }
        })
        this.helpers.map(e => {
          if(this.helper == (e.firstName +" "+ e.lastName)) {
            this.helperId = e.id
          }
        })
        this.stagingAreas.map(e => {
          if(this.staging == e.stagingAreaName) {
            this.stagingAreaId = e.id
          }
        })
        this.checkerList.map(e => {
          if(this.checker == e.userName) {
            this.volumeCheckerId = e.id
          }
        })
        this.controlList.map(e => {
          if(this.control == e.userName) {
            this.controlCheckerId = e.id
          }
        })
        const payload = {
          controlNo: this.controlno,
          tripDate: this.tripDate,
          bodyNo: this.body,
          plateNo: this.plate,
          typeOfUnit: this.trucktype,
          lguId: this.loginlguid,
          haulerId: this.haulerId,
          loadingStartTime: this.startTime,
          driverId: this.driverId,
          driverName: this.driver,
          helperName: this.helper,
          helperId: this.helperId,
          stagingAreaName: this.staging,
          stagingAreaId: this.stagingAreaId,
          volumeCheckerName: this.checker,
          volumeCheckerId: this.volumeCheckerId,
          contractorDispatcherName: this.contractorDispatcherName,
          contractorDispatcherId: this.contractorDispatcherId,
          contractorDispatcherVerified: 1,
          controlCheckerName: this.control,
          controlCheckerId: this.controlCheckerId,
          dumpingLocationId: this.dumpingLocationId,
          dumpingLocationName: this.dumping 
        }
        const result = await CreateOutgoingTrip(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Trip Created Successfully`,
            duration: 5000,
          })
          this.$router.push({path:'/Encoder'})
        }
      } catch(e) {
        this.$toasted.error(e.message.response.result, {
          duration: 7000,
        })
      }
    }
  }
}
</script>

<template>
  <Layout>
    <div class="animated">
      <b-card
        header="Create Outgoing Trip"
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
                       v-model="loginDetails.name"
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
                      v-model="controlno"
                      class="form-control"
                      name="body"
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
                    <b-form-select
                      v-model.trim="staging"
                      class="form-control"        
                      :options="stagingAreaNames"
                      @change="getDumpingLocation" 
                          oninvalid="this.setCustomValidity('Staging Area is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>
                  </b-col>
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >Dumping Location</label
                      >
                      <b-form-select
                        v-model="dumping"     
                        :options="dumpingLocations"
                            oninvalid="this.setCustomValidity('Dumping Location is required ')"
                  oninput="setCustomValidity('')"
                  required
                      >
                      </b-form-select>
                    </b-col>
                
                </b-row>
                <b-row class="mt-3">
                   <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Date</label
                    >
                    <input
                      type="text"
                      v-model="date"
                      class="form-control"
                    />
                  </b-col>
                  <b-col class="ml-3">
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark mr-2"
                      >Trip Start Time</label
                    >
                    <input
                      v-model="time"
                      class="form-control"
                      type="text"
                    />
                  </b-col>
                  <!-- <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Date</label
                    >
                   <datetime 
                      v-model="tripDate"
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
                      v-model="startTime"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      }"
                      type="datetime"
                      placeholder="SELECT Time"
                 ></datetime>
                  </b-col> -->
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Volume Checker</label
                    >
                   <b-form-select
                      v-model="checker"
                      class="form-control"        
                      :options="checkerListNames"
                          oninvalid="this.setCustomValidity('Volume Checker is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Control Checker</label
                    >
                     <b-form-select
                      v-model.trim="control"
                      class="form-control"        
                      :options="controlListNames"
                          oninvalid="this.setCustomValidity('Control Checker is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Hauler</label
                    >
                   <b-form-select
                      v-model="hauler"
                      class="form-control"        
                      :options="haulerListNames"
                      @change="getVehiclesDriversHelpers"
                          oninvalid="this.setCustomValidity('Hauler is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>
                  </b-col>
                  <b-col>
                   
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                     <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Body No</label
                    >
                     <b-form-select
                      v-model="body"
                      :options="plates"
                      class="form-control"
                      @change="getTruckType"
                          oninvalid="this.setCustomValidity('Body No is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>

                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Plate No</label
                    >
                    <input
                      v-model="plate"
                      class="form-control"
                      name="body"
                    disabled
                    />
                  </b-col>
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Truck Type</label
                    >
                   <input
                      v-model="trucktype"
                      class="form-control"
                      name="trucktype"
                      readonly
                      disabled
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
                     <b-form-select
                      v-model.trim="driver"
                      class="form-control"        
                      :options="driverNames"
                          oninvalid="this.setCustomValidity('Driver Name is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Helper</label
                    >
                     <b-form-select
                      v-model.trim="helper"
                      class="form-control"        
                      :options="helperNames"
                      
                    >
                    </b-form-select>
                  </b-col>
                </b-row>
                <b-row>
                   <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >District</label
                    >
                     <input
                      v-model.trim="district"
                      class="form-control"        
                     disabled
                    />
                  
                  </b-col>
                 <b-col>

                 </b-col>


                </b-row>
                <button
                   class="btn btn-custome float-right btn-secondary mt-3 mr-2"
                  >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </b-card>
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