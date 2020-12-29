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
 getLguById,stagingarea
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
      controlCheckerId:null,
      controlCheckerName:'',
      tripData:[]
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  mounted() {
    this.tripData = this.$route.params
    console.log(this.tripData)
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
                      :options="tripData.routes"
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
                      :options="haulerListNames"
                      @change="getVehiclesDriversHelpers"
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
                      v-model.trim="control"
                      class="form-control"        
                      :options="controlListNames"
                      @change="getControlId"
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
                     <input
                      v-model="dumping"
                      class="form-control"
                      readonly
                    >
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