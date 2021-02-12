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
 getBaraggayByLguId,getHaulerByBaraggayId, CreateDirectTrip,haulerEmployees,vehicle,
 getRoutesByBaranggayId, haulers, getVehiclesByHaulerId, users,employees,lguemployee,
 getLguById,stagingarea,editdirecttripvolumechecker,dumpinglocation
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
      brgy:{},
      routeCodes:[],
      loginDetails:{},
      baranggayId:null,
      totalCapacity: null,
      stagingAreaId:null,
      dumpingLocationId:null,
        inputs:this.$route.params.collectors,
      controlCheckerId:null,
      controlCheckerName:'',
      lguName:'',
      baranggayName:'',
      stagingAreaName:'',
      dumpingLocationName:'',
      tripData:[],
      stagingarea:"",
      dumpingarea:""
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  mounted() {
    this.getLgu()
    this.tripData = this.$route.params
    this.getBaraggay()
    this.getStagingArea()
    this.getdumpingArea()
    console.log(this.tripData)
  },
  methods:{
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
          console.log(e.id+' '+this.tripData.baranggayId)
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
          if(this.tripData.stagingAreaId === e.id){
            console.log(e)
            this.stagingarea = e.stagingAreaName
          }
        })
      } catch(e) {
        console.log(e)
      }
    },
     async getdumpingArea() {
      try {
        const result = await dumpinglocation()
        const data = result.data.response.dumpingLocation
        data.map(e => {
          if(this.tripData.dumpinglocationId === e.id){
            console.log(e)
            this.dumpingarea = e.dumpingAreaName
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
                        v-model="route"
                        :multiple="true"       
                        :options="servingRoutes"
                        @change="getRouteCode"
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
                     <input
                      v-model="tripData.tripDate"
                      class="form-control"
                      name="body"
                    />
                  </b-col>
                  <b-col class="ml-3">
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark mr-2"
                      >Trip Start Time</label
                    >
                   <input
                      v-model="tripData.tripStartTime"
                      class="form-control"
                      name="body"
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
                       class="form-control"
                       v-model="tripData.haulerName"
                       readonly
                      />
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
                 <b-col v-for="(input, k) in inputs" :key="k">
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Garbage Collector</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="input.garbageCollectorName"
                   readonly
                  class="form-control"
                />
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
                       v-model="stagingarea"
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
                      v-model="dumpingarea"
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