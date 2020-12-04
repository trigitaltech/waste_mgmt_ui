<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import { Datetime } from 'vue-datetime';
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
// import JsonExcel from 'vue-json-excel'
// Vue.component('downloadExcel', JsonExcel)
import {
  // eslint-disable-next-line no-unused-vars
<<<<<<< HEAD
 Tripdownload,Areamasters,routemaster, CreateIncomingTrip,users
=======
 Tripdownload,Areamasters,routemaster, CreateIncomingTrip,employees
>>>>>>> f669fa8483a19604c52a546820e1b5d81efacab6
} from '../../../../services/auth'
import Multiselect from 'vue-multiselect'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
<<<<<<< HEAD
      users:{},
      area:null,
      route:null,
      driver:null,
      contractor:null,
      collector:null,
      lgu:null,
      plate:null,
      body:null,
      tripDate:"",
      trucktype:null,
      tripdate:null,
=======
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
      body:"",
      tripDate:"",
      trucktype:"",
      tripdate:"",
      driverid:"",
>>>>>>> f669fa8483a19604c52a546820e1b5d81efacab6
      startTime:"",
      owners:[],
      servingAreas:[],
      route:"",
      driver:"",
      servingRoutes:[],
      driverList:[],
      contractorList:[],
      collectorList:[],
      lguList:[]
    };
  },
  components: { Layout, PageHeader,VueTimepicker ,Multiselect, datetime: Datetime, },
  mounted() {
<<<<<<< HEAD
    this.areadata();
    this.routedata();
    this.getUsers();
  },
  methods:{
    async getUsers(){
      try{
        let result = await users();
        this.users = result.data.response.Users;
        console.log(this.users);
        this.users.map(e => {
          if(e.roles.length>0){
            if(e.roles[0].name == "LGU")
              this.lguList.push(e.userName);
            if(e.roles[0].name == "CONTRACTOR")
              this.contractorList.push(e.userName);
          }
        });
        console.log(this.lguList);
        console.log(this.contractorList);
      }
      catch(e){
        console.log(e);
      }
    },
    async areadata() {
=======
    this.areas();
    this.routes();
    this.employeedata()
  },
  methods:{
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
    //   console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      this.emp.map(e=>{
      this.owners.push(e.userName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
     },
    async areas() {
>>>>>>> f669fa8483a19604c52a546820e1b5d81efacab6
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
      try {
      let payload = {
        controlNo:7261,
        tripDate:this.tripDate,
        collectionStartTime:this.startTime,
        bodyNo:this.body,
        plateNo:this.plate,
        truckType:this.truckType,
        servingArea:"hyderabad",
        servingRoute:"uppal",
        driverName:"sample",
        driverId:1,
        guide:"guide",
        isDeleted:false,
        lgu:"trg",
        contractor_DISPATCHER_NAME:"fgh"
      };
      /*try{
        let payload = {
<<<<<<< HEAD
          bodyNo: this.body,
          collectionEndTime: null,
          collectionStartTime: null,
          contractor_DISPATCHER_ID: null,
          contractor_DISPATCHER_MEASURED_VOLUME: null,
          contractor_DISPATCHER_NAME: null,
          contractor_DISPATCHER_VERIFIED: null,
          controlNo: null,
          createdBy: null,
          createdDate: null,
          driverId: null,
          driverName: null,
          guide: null,
          isDeleted: false,
          lgu: null,
          id: null,
          lgu_CHECKER_ID: null,
          lgu_CHECKER_MEASURED_VOLUME: null,
          lgu_CHECKER_NAME: null,
          lgu_CHECKER_VERIFIED: null,
          mmda_Verified: null,
          mmda_revewer_ID: null,
          mmda_revewer_NAME: null,
          modifiedBy: null,
          modifiedDate: null,
          plateNo: null,
          servingArea: this.area,
          servingRoute: {},
          status: null,
          totalKmServed: null,
          tripDate: "",
          truckType: ""
        };
        console.log(payload);*/
=======
            controlNo: this.controlno,
            tripDate: this.tripdate,
            bodyNo: this.body,
            plateNo: this.plate,
            truckType: this.trucktype,
            collectionStartTime: this.startTime,
            servingArea: this.areaarray,
            servingRoute: this.routearray,
            driverName: this.driver,
            driverId: this.driverid,
            guide: "guide",
            isDeleted: false,
            contractor_DISPATCHER_NAME: this.contractor,
            lgu: this.lgu
            }
        console.log(payload);
>>>>>>> f669fa8483a19604c52a546820e1b5d81efacab6
        const result = await CreateIncomingTrip(payload);
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Incoming Trip Created`,
            duration: 5000,
          });
          this.$router.push({path:'/Trips/IncomingTrips'});
        }
      }
      catch(e) {

      }
    },
    onSelect (option, id) {
      this.route = this.servingRoutes[0];
      this.route = Object.assign(this.route);
    }
  }
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="animated fadeIn">
      <b-card
        header="Create Incoming Trip"
       
        header-text-variant="white"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-1">
          <div class="card mx-xl-5">
            <div class="card-body">
              <form @submit.prevent="create">
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Serving Area</label
                    >
<<<<<<< HEAD
                    <multiselect
                      v-model="area"
                      :multiple="true"
                      :options="servingAreas">
                    </multiselect>
=======
                    <b-form-select
                      v-model.trim="area"
                      class="form-control"        
                      :options="servingAreas"
                      @change="getareas" 
                    >
                    </b-form-select>
>>>>>>> f669fa8483a19604c52a546820e1b5d81efacab6
                  </b-col>
                  <b-col>
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >Serving Route</label
                      >
                      <multiselect
                        v-model="route" 
                        @select="onSelect"      
                        :options="servingRoutes"
<<<<<<< HEAD
=======
                        @change="getroutes" 
>>>>>>> f669fa8483a19604c52a546820e1b5d81efacab6
                      >
                      </multiselect>
                    </b-col>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Date</label
                    >
<<<<<<< HEAD
                    <datetime 
                      v-model="tripDate"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                      }"
                      type="date"
                      placeholder="SELECT Date"
                      name="startdate"
                 ></datetime>
=======
                   <flat-pickr
                      v-model="tripdate"
                      class="form-control"
                      placeholder="SELECT TRIP DATE"
                      name="startdate"
                    ></flat-pickr>
>>>>>>> f669fa8483a19604c52a546820e1b5d81efacab6
                  </b-col>
                  <b-col class="ml-3 mt-4">
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
                        minute: '2-digit',
                        second: '2-digit',
                        milisecond: '2-digit'
                      }"
                      type="time"
                      placeholder="SELECT TIME"
                      name="startdate"
                 ></datetime>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Plate No.</label
                    >
                    <input
                      v-model="plate"
                      class="form-control"
                      name="plate"
                    />
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
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Body No</label
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
                      >Driver Name</label
                    >
                     <b-form-select
                      v-model.trim="driver"
                      class="form-control"        
                      :options="owners"
                      @change="getid" 
                    >
                    </b-form-select>
                  </b-col>
                  <b-col>
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >Contractor</label
                      >
                       <b-form-select
                      v-model.trim="contractor"
                      class="form-control"        
                      :options="owners"
                     
                    >
                    </b-form-select>
                    </b-col>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Garbage Collectors</label
                    >
<<<<<<< HEAD
                    <multiselect
                      v-model="collector"
                      :multiple="true"
                      :options="collectorList">
                    </multiselect>
=======
                      <input
                      v-model="garbage"
                      class="form-control"
                      name="body"
                    />
>>>>>>> f669fa8483a19604c52a546820e1b5d81efacab6
                  </b-col>
                  <b-col>
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >LGU</label
                      >
                       <input
                      v-model="lgu"
                      class="form-control"
                      name="body"
                    />
                    </b-col>
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