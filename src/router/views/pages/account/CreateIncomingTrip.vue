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
 Tripdownload,Areamasters,routemaster, CreateIncomingTrip,users
} from '../../../../services/auth'
import Multiselect from 'vue-multiselect'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
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
      startTime:"",
      servingAreas:[],
      servingRoutes:[],
      driverList:[],
      contractorList:[],
      collectorList:[],
      lguList:[]
    };
  },
  components: { Layout, PageHeader,VueTimepicker ,Multiselect, datetime: Datetime, },
  mounted() {
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
      try {
        const result = await Areamasters();
        var data = result.data.response.areaMaster
          data.map(e=>{
            if(e.areaName!=null)
              this.servingAreas.push(e.areaName);
        })
      } catch (error) { 
        console.log(error);
      }
      console.log(this.servingAreas);
    },
    async routedata() {
      try {
        const result = await routemaster();
        console.log(result);
        var data = result.data.response.RouteMaster
        data.map(e=>{
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
        header-bg-variant="info"
        border-variant="info"
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
                    <multiselect
                      v-model="area"
                      :multiple="true"
                      :options="servingAreas">
                    </multiselect>
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
                      :options="driverList"
                      @change="getDriverId" 
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
                        :options="contractorList"
                        @change="getContractorId" 
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
                    <multiselect
                      v-model="collector"
                      :multiple="true"
                      :options="collectorList">
                    </multiselect>
                  </b-col>
                  <b-col>
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >LGU</label
                      >
                      <b-form-select
                        v-model.trim="lgu"
                        class="form-control"        
                        :options="lguList"
                        @change="getLguId" 
                      >
                      </b-form-select>
                    </b-col>
                  </b-col>
                </b-row>
                <button
                  style="background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  type="submit"
                  class="btn btn-info mt-3"
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
.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #26a69a;
  border-color: #5369f8;
}
.pdf-content {
  background: #fff;
  font-family: sans-serif;
  .chart-container {
    padding: 20px;
    background: #e5e0dd;
    border: 3px dotted #ddd;
    pointer-events: none;
    //   .vaucher {
    //     width: 100%;
    //   }
    //   .voucher-value {
    //     position: absolute;
    //   }
  }
  .brack {
    page-break-inside: avoid;
  }
}
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
}
.print-voucher-text {
  position: absolute;
  top: 36%;
  left: 14%;
  font-size: 17px;
  font-weight: 700;
  color: #000;
}
@media all {
  .page-break {
    display: none;
  }
}
.text-muted {
    color: black!important;
}
.page-break {
  display: block;
  page-break-before: always;
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