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
import {
  // eslint-disable-next-line no-unused-vars
 Tripdownload,Areamasters,routemaster, CreateIncomingTrip,employees,vehicle
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
      areadata:[],
      areaarray:"",
      routedate:[],
      routearray:"",
      emp:[],
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
      driverid:"",
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
      hauler:"",
      haulerList:[],
      contractorList:[],
      garbage:null,
      lgu:null
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  mounted() {
    this.areas();
    this.routes();
    this.employeedata()
    this.getvehicles()
  },
  methods:{
    async getvehicles() {
      const result = await vehicle()
      this.vehicles = result.data.response.vehicles
      this.vehicles.map(e => {
        this.plates.push(e.plateNo)
      })
      console.log(this.plates)
    },
     getroutes(){
        this.routedata.map(e=>{
          if(this.route === e.routeName){
          
            this.routearray = e
          }
        })
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
      async employeedata() {
        try {
          const result = await employees()
          this.emp = result.data.response.result
          console.log(this.emp)
          this.emp.map(e=>{
            if(e.type == "DRIVER")
              this.drivers.push(e.userName)
            if(e.type == "HELPER")
              this.helpers.push(e.userName)
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
    async create() {
      try{        
        console.log(this.areaarray)
        let payload = {
            controlNo: this.controlno,
            tripDate: this.tripDate,
            bodyNo: this.body,
            plateNo: this.plate,
            truckType: this.trucktype,
            collectionStartTime: this.startTime,
            "servingArea": {
                "id": this.areaarray.id,
                "areaName": this.areaarray.areaName,
                "areaType": this.areaarray.areaType,
                "supervisor": this.areaarray.supervisor,
                "areaSqKm": this.areaarray.areaSqKm,
                "isDeleted": true,
                "createdDate": this.areaarray.createdDate,
                "createdBy": this.areaarray.createdBy,
                "modifiedDate": this.areaarray.modifiedDate,
                "modifiedBy": this.areaarray.modifiedBy,
                "state": this.areaarray.state,
                "country": this.areaarray.country,
                "description": this.areaarray.description,
                "city": this.areaarray.city,
                "zip": this.areaarray.zip
            },
            "servingRoute": {
                "id": this.routearray.id,
                "routeName": this.routearray.routeName,
                "routeType": this.routearray.routeType,
                "supervisor": this.routearray.supervisor,
                "route_distance": this.routearray.route_distance,
                "areaId": this.routearray.areaId,
                "areaName": this.areaarray.areaName,
                "isDeleted": false,
                "createdDate": this.routearray.createdDate,
                "createdBy": "",
                "modifiedDate": this.routearray.modifiedDate,
                "modifiedBy": "",
                "description": this.routearray.description,
                "city": this.routearray.city
            },
            driverName: this.driver,
            driverId: this.driverid,
            guide: "guide",
            isDeleted: false,
            contractor_DISPATCHER_NAME: this.contractor,
            lgu: this.lgu
        }
        console.log(payload);
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
    getAreaId() {

    },
    getRouteId() {

    },
    getDriverId() {

    },
    getContractorId() {

    },
    getCollectorId() {

    },
    getLguId() {

    }
  }
}
</script>

<template>
  <Layout>
    <PageHeader/>
    <div class="animated">
      <b-card
        header="Create Incoming Trip"
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
                      >Baranggay</label
                    >
                    <b-form-select
                      v-model.trim="area"
                      class="form-control"        
                      :options="servingAreas"
                      @change="getareas" 
                    >
                    </b-form-select>
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
                        >Serving Route</label
                      >
                      <multiselect
                        v-model="route"
                        :multiple="true"       
                        :options="servingRoutes"
                      >
                      </multiselect>
                    </b-col>
                  <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >LGU</label
                      >
                      <input
                       class="form-control"
                       v-model="lgu"
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
                      >Trip Start Time</label
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
                      >Hauler</label
                    >
                   <b-form-select
                      v-model="hauler"
                      class="form-control"        
                      :options="haulerList"
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
                      @change="getid" 
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
                        v-model="route"
                        :multiple="true"       
                        :options="servingRoutes"
                      >
                    </multiselect>
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