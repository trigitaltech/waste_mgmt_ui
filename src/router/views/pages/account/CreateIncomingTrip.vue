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
 Tripdownload,Areamasters,routemaster, CreateIncomingTrip,employees
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
      areadata:[],
      areaarray:null,
      routedate:[],
      routearray:null,
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
  components: { Layout, PageHeader,VueTimepicker  },
  mounted() {
    this.areas();
    this.routes();
    this.employeedata()
  },
  methods:{
     getroutes(){
        this.routedata.map(e=>{
          if(this.route === e.routeName){
          
            this.routearray.push(e)
          }
        })
    },
      getareas(){
        this.areadata.map(e=>{
          if(this.area === e.areaName){
            this.areaarray.push(e)
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
        let payload = {
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
                      @change="getareas" 
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
                        @change="getroutes" 
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
                      v-model="tripdate"
                      class="form-control"
                      placeholder="SELECT TRIP DATE"
                      name="startdate"
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
                      <input
                      v-model="garbage"
                      class="form-control"
                      name="body"
                    />
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