<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
// import JsonExcel from 'vue-json-excel'
// Vue.component('downloadExcel', JsonExcel)
import {
  // eslint-disable-next-line no-unused-vars
 Tripdownload,Areamasters,routemaster, CreateIncomingTrip
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
      area:null,
      route:null,
      driver:null,
      contractor:null,
      collector:null,
      lgu:null,
      plate:null,
      body:null,
      tripDate:null,
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
  components: { Layout, PageHeader,VueTimepicker  },
  mounted() {
    this.areadata();
    this.routedata();
  },
  methods:{
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
      try{
        let payload = {
          bodyNo: "",
          collectionEndTime: null,
          collectionStartTime: "2020-11-10T05:00:00.000+00:00",
          contractor_DISPATCHER_ID: 1212,
          contractor_DISPATCHER_MEASURED_VOLUME: 345,
          contractor_DISPATCHER_NAME: "ram",
          contractor_DISPATCHER_VERIFIED: 1,
          controlNo: 7261,
          createdBy: "admin",
          createdDate: "2020-11-30T12:14:44.000+00:00",
          driverId: 12412,
          driverName: "samuel",
          guide: "guide",
          isDeleted: false,
          lgu: "NY",
          id: 1,
          lgu_CHECKER_ID: 1721,
          lgu_CHECKER_MEASURED_VOLUME: "234",
          lgu_CHECKER_NAME: "shyam",
          lgu_CHECKER_VERIFIED: 1,
          mmda_Verified: true,
          mmda_revewer_ID: 5632,
          mmda_revewer_NAME: "sam",
          modifiedBy: "admin",
          modifiedDate: "2020-11-30T12:14:44.000+00:00",
          plateNo: "GHKD463",
          servingArea: {id: 2, areaName: null, areaType: null, supervisor: null, areaSqKm: null, isDeleted: null},
          servingRoute: {id: 2, routeName: null, routeType: null, supervisor: null, route_distance: null, areaId: null},
          status: null,
          totalKmServed: 23,
          tripDate: "2020-11-10T05:00:00.000+00:00",
          truckType: "heavyLoad"
        };
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
                    <b-form-select
                      v-model.trim="area"
                      class="form-control"        
                      :options="servingAreas"
                      @change="getAreaId" 
                    >
                    </b-form-select>
                  </b-col>
                  <b-col>
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >Serving Route</label
                      >
                      <b-form-select
                        v-model.trim="route"
                        class="form-control"        
                        :options="servingRoutes"
                        @change="getRouteId" 
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
                      >Trip Date</label
                    >
                    <flat-pickr
                      v-model="tripDate"
                      class="form-control"
                      placeholder="SELECT RECORD DATE"
                      name="tripdate"
                    ></flat-pickr>
                  </b-col>
                  <b-col class="ml-3 mt-4">
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark mr-2"
                      >Trip Start Time</label
                    >
                    <vue-timepicker format="hh:mm A" v-model="startTime"></vue-timepicker>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Plate</label
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
                      >Body</label
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
                    <b-form-select
                      v-model.trim="collector"
                      class="form-control"        
                      :options="collectorList"
                      @change="getCollectorId" 
                    >
                    </b-form-select>
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