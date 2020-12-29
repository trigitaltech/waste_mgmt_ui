<script>
import Vue from 'vue'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import { Datetime } from 'vue-datetime';
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
      contractorDispatcherId:''
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  mounted() {
    this.getLgu()
    this.getStagingArea()
    this.getLguEmployee()
    this.getHaulers()
  },
  methods:{
    async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))
      this.loginlguid = result.lguemployee.lguId
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
          console.log(e.lguId+'  '+this.loginlguid)
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
          this.haulerListNames.push(e.userName)
        })
      } catch(e) {
        console.log(e)
      }
    },
    async getVehiclesDriversHelpers() {
      try {
        this.haulerList.map(e => {
          if(e.userName == this.hauler) {
            this.haulerId = e.id
          }
        })
        const result1 = await getVehiclesByHaulerId(this.haulerId)
        this.vehicles = result1.data.response.result
        this.vehicles.map(f => {
          this.plates.push(f.plateNo)
        })
        const result2 = await haulerEmployees()
        const data = result2.data.response.HaulerEmployees
        data.map(g => {
          if(g.type == "DRIVER" && g.haulerId == this.haulerId){
            this.drivers.push(g)
            this.driverNames.push(g.userName)
          }
          if(g.type == "HELPER" && g.haulerId == this.haulerId){
            this.helpers.push(g)
            this.helperNames.push(g.userName)
          }
        })
      } catch(error) {
        console.log(error)
      }
    },
    getTruckType() {
      this.vehicles.map(e => {
        if(this.plate == e.plateNo) {
          this.trucktype = e.vehicleType.truckType
          this.body = e.vehicleNo
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
          if(this.driver == e.userName) {
            this.driverId = e.id
          }
        })
        this.helpers.map(e => {
          if(this.helper == e.userName) {
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
      } catch(error) {
        console.log(error)
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
                  </b-col>
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
                    >
                    </b-form-select>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Plate No</label
                    >
                     <b-form-select
                      v-model="plate"
                      :options="plates"
                      class="form-control"
                      @change="getTruckType"
                    >
                    </b-form-select>
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
                      v-model="body"
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
                      v-model="trucktype"
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
                     <b-form-select
                      v-model.trim="driver"
                      class="form-control"        
                      :options="driverNames"
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