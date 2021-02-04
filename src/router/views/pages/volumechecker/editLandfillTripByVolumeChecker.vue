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
import {
 getBaraggayByLguId,getHaulerByBaranggayId, CreateDirectTrip,haulerEmployees,vehicle,
 getRoutesByBaranggayId, haulers, getVehiclesByHaulerId, users,employees,lguemployee,
 getLguById,stagingarea,editdirecttripvolumechecker, routemaster
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
      inputs: [
        {
          name: ''
        }
      ],
      areadata:[],
      areaarray:"",
      routedate:[],
      routearray:[],
      emp:[],
      code:null,
      controlno:"",
      area:"",
      route:"",
      driver:"",
      contractor:"",
      collector:"",
      lgu:"lgu1",
      plate:"",
      plates:[],
      body:"",
      tripDate:"",
      trucktype:"",
      driverid:"",
      helperid:"",
      haulerId:"",
      checkerId:"",
      startTime:"",
      drivers:[],
      helpers:[],
      vehicles:[],
      servingAreas:[],
      route:"",
      driver:"",
      helper:null,
      servingRoutes:[],
      driverList:[],
      checkerList:[],
      checkerListNames:[],
      checker:"",
      control:"",
      controlListNames:[],
      hauler:"",
      haulerCode:"",
      volumecollected:"",
      totalkms:'',
      haulerList:[],
      haulerListNames:[],
      collectorList:[],
      collectorListNames:[],
      stagingAreas:[],
      stagingAreaNames:[],
      staging:"",
      dumping:"",
      dumpingLocations:[],
      dumpingLocationNames:[],
      paleroList:[],
      garbage:null,

      areaId:null,
      routeId:null,
      garbageCollectors:[],
      selectedGB:[],
      brgy:{},
      routeCodes:[],
      loginDetails:{},
      baranggayId:null,
      totalCapacity: null,
      stagingAreaId:null,
      dumpingLocationId:null,
      controlCheckerId:null,
      controlCheckerName:'',
      lguName:'',
      baranggayName:'',
      stagingAreaName:'',
      dumpingLocationName:'',
      tripData:[],
      routeNames:[],
      selectedRoutes:[],
      routes:[]
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  mounted() {
    this.getLgu()
    this.tripData = this.$route.params
    this.getBaraggay()
    console.log(this.tripData)
    this.getRoutes()
    this.getHaulers()
    this.getStagingArea()
    this.tripData.collectors.map(e => {
      this.garbageCollectors.push(e.garbageCollectorName)
      this.selectedGB.push(e.garbageCollectorName)
    })
  },
  methods:{
    async getHaulers() {
      const result = await haulers()
        this.haulerList =  result.data.response.HaulerMaster
        this.haulerList.map(e => {
          this.haulerListNames.push(e.haulerName)
        })
        this.haulerList.map(e => {
          if(e.id == this.tripData.haulerId) {
            this.hauler = e.haulerName;
          }
        })
    },
    async getRoutes() {
      try {
        const result = await getRoutesByBaranggayId(this.tripData.baranggayId)
        this.routearray = result.data.response.result.routeMaster
        this.routearray.map(e => {
          this.routeNames.push(e.routeName)
        })
        for(var i=0;i<this.tripData.routes.length;i++) {
          this.routearray.map(e => {
            if(e.id ==  this.tripData.routes[i].servingRouteId)
            {
              this.selectedRoutes.push(e.routeName)
            }
          })
        }
      } catch(e) {
        console.error(e)
      }
    },
    async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))
      this.loginlguid = result.lguemployee.lguId
      const result1 = await getLguById(this.loginlguid)
      this.lguName = result1.data.response.result.lguName
    },
    async getBaraggay() {
      try {
        const result = await getBaraggayByLguId(this.loginlguid)
        const data = result.data.response.result
        data.map( e => {
          //console.log(e.id+' '+this.tripData.baranggayId)
          if(e.id == this.tripData.baranggayId) {
            this.baranggayName = e.areaName
          }
        })
      } catch(e) {
        console.log(e)
      }
    },
    async getStagingArea() {
      try {
        const result = await stagingarea()
        const data = result.data.response.stagingArea
        data.map(e => {
          if(this.tripData.stagingAreaId == e.id){
            this.staging = e.stagingAreaName
            this.dumping = e.dumpingArea.dumpingAreaName
          }
        })
      } catch(e) {
        console.log(e)
      }
    },
  async create() {
      try {
        const payload =   {
            id :this.$route.params.id,
           volumeCheckerMeasuredVolume:this.volumecollected,         
        volumeCheckerTotalKm: this.totalkms,
        volumeCheckerVerified:"1"
       }
        let result = await editdirecttripvolumechecker(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Updated Volume Checker Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Volumechecker'})
            
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },

  }
}
</script>

<template>
  <Layout>
    <PageHeader/>
    <div class="animated">
      <b-card
        header="Edit Landfill Trip"
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
                        >LGU</label
                      >
                      <input
                       class="form-control"
                       v-model="lguName"
                       readonly
                      />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Baranggay</label
                    >
                    <input
                       class="form-control"
                       v-model="baranggayName"
                       readonly
                      />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >Serving Route</label
                      >
                      <multiselect
                        v-model="selectedRoutes"
                        :multiple="true"       
                        :options="routeNames"
                        
                      >
                      </multiselect>
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
                      >Trip Start Time</label
                    >
                    <datetime 
                      v-model="tripData.tripStartTime"
                      :format="{
                        hour: 'numeric',
                        minute: '2-digit',
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
                      >Hauler</label
                    >
                   <b-form-select
                      v-model="hauler"
                      class="form-control"        
                      :options="haulerListNames"
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
                      >Plate No</label
                    >
                     <input
                       class="form-control"
                       v-model="tripData.plateNo"
                       readonly
                      />
                  </b-col>
                  <b-col class="ml-4">
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Truck Type</label
                    >
                   <input
                      v-model="tripData.truckType"
                      class="form-control"
                      name="trucktype"
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
                      readonly
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Driver Name</label
                    >
                     <input
                       class="form-control"
                       v-model="tripData.driverName"
                       readonly
                      />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Helper</label
                    >
                     <input
                       class="form-control"
                       v-model="tripData.helperName"
                       readonly
                      />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Garbage Collectors</label
                    >
                    <multiselect
                        v-model="selectedGB"
                        :multiple="true"   
                        :options="garbageCollectors"
                      >
                    </multiselect>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Volume Checker</label
                    >
                     <input
                       class="form-control"
                       v-model="tripData.volumeCheckerName"
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
                       class="form-control"
                       v-model="tripData.controlCheckerName"
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
                       class="form-control"
                       v-model="staging"
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
                      v-model="dumping"
                      class="form-control"
                      readonly
                    >
                  </b-col>
                </b-row>
                <b-row>
                   <b-col>
                <!-- Default input email -->

                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Volume Collected</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="volumecollected"
                placeholder="Enter volume"
                  type="text"
                  class="form-control"
                />
              </b-col>

              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Total Kms</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="totalkms"
                  placeholder="Enter Totalkms"
                
                  type="text"
                  class="form-control"
                />
              </b-col>
                </b-row>
                <button
           
                  type="submit"
                   class="btn float-right btn-secondary mt-3 mr-2"
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