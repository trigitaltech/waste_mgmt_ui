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
 getBaraggayByLguId,getHaulerByBaraggayId, CreateIncomingTrip,haulerEmployees,vehicle,
 getRoutesByBaranggayId, haulers, getVehiclesByHaulerId, users,employees,lguemployee
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
      hauler:"",
      haulerCode:"",
      haulerList:[],
      haulerListNames:[],
      collectorList:[],
      collectorListNames:[],
      paleroList:[],
      garbage:null,
      areaId:null,
      routeId:null,
      garbageCollectors:[],
      brgy:{},
      routeCodes:[],
      loginDetails:{}
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.tripDate = moment(new Date()).format("DD-MM-YYYY")
    this.startTime = moment(new Date()).format("DD-MM-YYYY hh:mm A")
    console.log(this.tripDate+" "+this.startTime)
    this.getLgu()
    this.getBaraggay();
    //this.areas();
    //this.routes();
    this.getUsers();
    //this.employeedata()
  },
  methods:{
    async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))
      this.loginDetails = {
        lguEmployeeCode: result.lguemployee.code,
        id: result.lguemployee.lgu_Id.id,
        name: result.lguemployee.lgu_Id.userName
      }
      console.log(this.loginDetails)
    },
    async getBaraggay() {
      try {
        const result = await getBaraggayByLguId(this.loginDetails.id)
        this.areadata = result.data.response.result
        console.log(this.areadata)
        this.servingAreas.push(this.areadata.areaName)
        /*this.areadata.map( e => 
          this.servingAreas.push(e.areaName)
        })*/
      } catch(e) {
        console.log(e)
      }
    },
    async getUsers() {
      try {
        const result = await employees();
        this.collectorList = result.data.response.result;
        console.log(this.collectorList)
        this.collectorList.map( e => {
          if(e.type == 'PALERO')
            this.collectorListNames.push(e.userName)
        })
      } catch(e) {
        console.log(e)
      }
    },
    async getVehiclesDriversHelpers() {
      try {
        this.haulerList.map(e => {
          if(this.hauler == e.haulerName){
            this.haulerId = e.id
            this.haulerCode = e.code
          }
        })
        this.haulerList.map(async (e) => {
          if(this.hauler == e.haulerName) {
            const result1 = await vehicle()
            this.vehicles = result1.data.response.vehicles
            this.vehicles.map(e => {
              if(e.hauler != null) {
                console.log(e.hauler)
                if(e.hauler.haulerName == this.hauler)
                  this.plates.push(e.plateNo)
              }
            })
          }
        })
        this.employeedata()
      } catch(e) {
        console.log(e)
      }
    },
    async gethaulers() {
      try {
        const result = await haulers()
        console.log(result)
        this.haulerList = result.data.response.HaulerMaster;
        this.haulerList.map( e => {
          if(e.baranggay != null) {
            if(e.baranggay.id == this.areadata.id) {
              this.haulerListNames.push(e.haulerName)
            }
          }
        })
      } catch(e) {
        console.log(e);
      }
    },
    async getRoutes() {
      try {
        //this.areadata.map(async (e) => {
          if(this.area === this.areadata.areaName){
            //alert(this.areadata.id)
            const result = await getRoutesByBaranggayId(this.areadata.id)
            this.routedata = result.data.response.result
            if(this.routedata.length > 0) {
              this.routedata.map(f=>{
                if(f.routeName != null) 
                  this.servingRoutes.push(f.routeName);

              })
            }
            const result1 = await lguemployee()
            this.checkerList = result1.data.response.result
            console.log(this.checkerList)
            if(this.checkerList.length > 0)
            {
              this.checkerList.map(g => {
                if(g.lgu_Id != null){
                  if(g.lgu_Id.baranggay != null) {
                    if(g.type == "VOLUME_CHECKER" && g.lgu_Id.baranggay.id == this.areadata.id) {
                      this.checkerListNames.push(g.userName)
                    }
                  }
                }
              })
            }
            this.gethaulers()
            /*const result2 = await getHaulerByBaraggayId(e.id)
            this.haulerList = result2.data.response.HaulerMaster
            this.haulerList.map( h => {
              this.haulerListNames.push(h.haulerName)
            })*/
          }
        //})
      } catch(e) {  
        console.log(e)
      }
    },
    async getvehicles() {
      const result = await vehicle()
      this.vehicles = result.data.response.vehicles
      this.vehicles.map(e => {
        this.plates.push(e.plateNo)
      })
      console.log(this.plates)
    },
      getareas(){
        this.areadata.map(e=>{
          if(this.area === e.areaName){
            this.areaarray = e
          }
        })
    },
       getid(){
        console.log("haiiiiii",)
        this.emp.map(e=>{
            if(this.driver === e.userName){
                this.driverid = e.id    
                       }
        })
      },
      gethelperid(){
        this.emp.map(e=>{
            if(this.helper == e.userName){
              console.log(e)
                this.helperid = e.id
            }
        })
        console.log(this.helperid)
      },
      getGarbageCollectors() {
        this.collector.map(e => {
          this.collectorList.map(f => {
            if(e == f.userName) {
              const data = {
                employeeCode: f.code
              }
              this.garbageCollectors.push(data)
            }
          })
        })
      },
      gethaulerid() {
        this.haulerList.map(e => {
          if(this.hauler == e.userName){
            this.haulerId = e.id
          }
        })
      },
      getCheckerId() {
        this.checkerList.map(e => {
          if(this.checker == e.userName){
            this.checkerId = e.id
          }
        })
      },
      async employeedata() {
        try {
          const result = await haulerEmployees()
          this.emp = result.data.response.HaulerEmployees
          console.log(this.emp)
          this.emp.map(e=>{
            if(e.haulerId != null) {
              if(e.type == "DRIVER" && e.haulerId.id == this.haulerId)
                this.drivers.push(e.userName)
              if(e.type == "HELPER" && e.haulerId.id == this.haulerId)
                this.helpers.push(e.userName)
            }
          })
      } catch (error) {}
     },
    async areas() {
      try {
        const result = await Areamasters();
        this.areadata = result.data.response.areaMaster
        this.areadata.map(e=>{
            if(e.areaName!=null)
              this.servingAreas.push(e.areaName);
        })
      } catch (error) { 
        console.log(error);
      }
      console.log(this.servingAreas);
    },
    getRouteCode() {
      console.log(this.route)
    },
    async routes() {
      try {
        const result = await routemaster();
        console.log(result);
        this.routedata = result.data.response.RouteMaster
        this.routedata.map(e=>{
        if(e.routeName != null) 
          this.servingRoutes.push(e.routeName);
      })
      } catch (error) {}
    },
    getRouteObject(name) {
      this.routedata.map( e => {
        if(name == e.routeName) {
          console.log(e)
          return e
        }
      })
    },
    async create() {
      try{       
        this.route.map( e => {
          this.routedata.map(f => {
            if(e == f.routeName) {
              const a = {
                code: f.code
              }
              this.routeCodes.push(a)
            }
          })
        })
        this.getGarbageCollectors()
          if(this.areadata.areaName == this.area) {
            this.areaId = this.areadata.code
          }
        const payload = {
            controlNo: this.controlno,
            tripDate: this.tripDate,
            bodyNo: this.body,
            plateNo: this.plate,
            truckType: this.trucktype,
            collectionStartTime: this.startTime,
            baranggayCode: this.areaId,
            routes: this.routeCodes,
            helperId:this.helperid,
            helperName:this.helper,
            driverId: this.driverid,
            driverName: this.driver,
            lguEmployeeCode: this.loginDetails.lguEmployeeCode,
            haulerCode: this.haulerCode,
            volumeCheckerName: this.checker,
            volumeCheckerId: this.checkerId,
            employees: this.garbageCollectors
        }
        const result = await CreateIncomingTrip(payload);
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Incoming Trip Created`,
            duration: 5000,
          })
          this.$router.push({path:'/Trips/IncomingTrips'});
        }
      }
      catch(e) {

      }
    },
    getTruckType(){
      this.vehicles.map( e => {
        if(e.plateNo == this.plate)
        {
          this.trucktype = e.vehicleType.code
          this.body = e.vehicleNo
        }
      })
    },
    add(index) {
      if(this.inputs.length <=4)
       this.inputs.push({ name: '' });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    }
  }
}
</script>

<template>
  <Layout>
    <PageHeader/>
    <div class="animated">
      <b-card
        header="Create Landfill Trip"
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
                       v-model="loginDetails.name"
                       readonly
                      />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Baranggay</label
                    >
                    <b-form-select
                      v-model.trim="area"
                      class="form-control"        
                      :options="servingAreas"
                      @change="getRoutes" 
                    >
                    </b-form-select>
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
                      >Trip Date</label
                    >
                    <input
                      type="text"
                      v-model="tripDate"
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
                      v-model="startTime"
                      class="form-control"
                      type="text"
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
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Code</label
                    >
                    <input
                      v-model="code"
                      class="form-control"
                      name="trucktype"
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
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
                  <b-col class="ml-4">
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
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Body</label
                    >
                    <input
                      v-model="body"
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
                     <b-form-select
                      v-model.trim="driver"
                      class="form-control"        
                      :options="drivers"
                      @change="getid" 
                    >
                    </b-form-select>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Helper</label
                    >
                     <b-form-select
                      v-model.trim="helper"
                      class="form-control"        
                      :options="helpers"
                      @change="gethelperid" 
                    >
                    </b-form-select>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Garbage Collectors</label
                    >
                    <multiselect
                        v-model="collector"
                        :multiple="true"   
                        :options="collectorListNames"
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
                     <b-form-select
                      v-model.trim="checker"
                      class="form-control"        
                      :options="checkerListNames"
                      @change="getCheckerId" 
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
                      v-model.trim="checker"
                      class="form-control"        
                      :options="checkerListNames"
                      @change="getCheckerId" 
                    >
                    </b-form-select>
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
                      v-model.trim="checker"
                      class="form-control"        
                      :options="checkerListNames"
                      @change="getCheckerId" 
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
                      v-model.trim="checker"
                      class="form-control"        
                      :options="checkerListNames"
                      @change="getCheckerId" 
                    >
                    </b-form-select>
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