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
 getBaraggayByLguId,getHaulerByBaraggayId, CreateIncomingTrip,haulerEmployees,vehicle,getgarbagebyId,getvolumebyId,getLguById,getgarbagebystate,
getRoutesByBaranggayId, haulers, getVehiclesByHaulerId, users,employees,lguemployee,getnameByLguId,getHaulerByBaranggayId,getEMPByLguId,getEMPhelpByLguId
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
      tripdata:[],
      inputs: [
        {
          name: ''
        }
      ],
      dispatcherid:"",
      dispatchername:"",
      username:"",
      areadata:[],
      helperdata:[],
      areaarray:"",
      routedate:[],
      routearray:[],
      emp:[],
      code:null,
      controlno:"",
      area:"",
        loginlguid:"",
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
      areaid:"",
      drivers:[],
      helpers:[],
      vehicles:[],
      servingAreas:[],
     
      driver:"",
      helper:null,
      servingRoutes:[],
      driverList:[],
      checkerList:[],
      checkerListNames:[],
      checker:"",
      hauler:"",
      haulerid:"",
      haulerCode:"",
      userdata:[],
      haulerList:[],
      haulerListNames:[],
      collectorList:[],
      collectorListNames:[],
      garbagearray:[],
      paleroList:[],
      garbage:null,
      areaId:null,
      routeId:null,
      garbageCollectors:[],
      driverdata:[],
      brgy:{},
      routeCodes:[],
      loginDetails:{},
    routearray:[],
    date:"",
    district:"",
    time:"",
    state:""
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.date = moment(new Date()).format('DD/MM/YYYY')
    this.time = moment(new Date()).format('HH:mm:ss')
    this.tripDate = new Date()
    this.startTime = new Date()
    console.log(this.tripDate+" "+this.startTime)
    this.getLgu()
    this.getBaraggay();
    //this.areas();
    //this.routes();
    this.getvolume()
    this.getname()
    this.getUsers();
    //this.employeedata()
    console.log(JSON.parse(localStorage.getItem('auth.currentUser')))
  },
  methods:{
    async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))
      this.loginlguid = result.lguemployee.lguId
     this.dispatcherid = result.lguemployee.id
     this.district = result.lguemployee.district
     this.state = result.lguemployee.state
     this.dispatchername = result.lguemployee.firstName
     const result1 = await getLguById(this.loginlguid)
      this.loginDetails = {
        
        lguEmployeeCode: result.lguemployee.code,
        id: result.lguemployee.lguid,
        name: result1.data.response.result.lguName
      }
      console.log(this.loginDetails)
    },
    async getBaraggay() {
      try {
        const result = await getBaraggayByLguId(this.loginlguid)
        this.areadata = result.data.response.result
        // console.log(this.areadata)
        // this.servingAreas.push(this.areadata.areaName)
        this.areadata.map( e => {

          this.servingAreas.push(e.areaName)
        })
      } catch(e) {
        console.log(e)
      }
    },
     async getvolume() {
      try {
        var id3 = "VOLUME_CHECKER"
        const result = await getvolumebyId(this.loginlguid,id3)
       this.checkerList = result.data.response.result
        
              this.checkerList.map(g => {
             
                      this.checkerListNames.push(g.userName)
      })
      } catch(e) {
        console.log(e)
      }
    },
     async getname() {
      try {
        const result = await getnameByLguId(this.loginlguid)
        this.username = result.data.response.result.lguName
        // console.log(this.userdata)
        // this.servingAreas.push(this.areadata.areaName)
        /*this.areadata.map( e => {
          this.servingAreas.push(e.areaName)
        })*/
      } catch(e) {
        console.log(e)
      }
    },
    async getUsers() {
      try {
      
      } catch(e) {
        console.log(e)
      }
    },
    async getVehiclesDriversHelpers() {
      try {
          for(var i = 0 ; i<this.haulerList.length ;i++){
       if(this.hauler === this.haulerList[i].haulerName){
                    this.haulerid = this.haulerList[i].id
            const result1 = await getVehiclesByHaulerId(this.haulerList[i].id)
            this.vehicles = result1.data.response.result
            this.vehicles.map(e => {
              
                  this.plates.push(e.plateNo)
              })
              var id2 = "DRIVER"
              const result2 = await getEMPByLguId(this.haulerList[i].id,id2)
            this.driverdata = result2.data.response.result
            this.driverdata.map(e => {
              
                   this.drivers.push(e.firstName +" "+ e.lastName)
              })
                 var id3 = "HELPER"
                const result3 = await getEMPhelpByLguId(this.haulerList[i].id,id3)
            this.helperdata = result3.data.response.result
            this.helperdata.map(e => {
              
                    this.helpers.push(e.firstName +" "+ e.lastName)
              })
            
          }
        }
        // this.haulerList.map(async (e) => {
        //   if(this.hauler == e.haulerName) {
           
        //   }
        // })
        // this.employeedata()
      } catch(e) {
        console.log(e)
      }
    },
    // async gethaulers() {
    //   try {
    //      for(var i = 0 ; i<this.areadata.length ;i++){
    //    if(this.area === this.areadata[i].areaName){
       
    //    }}
    //   } catch(e) {
    //     console.log(e);
    //   }
    // },
    async getRoutes() {
    
      try{
      for(var i = 0 ; i<this.areadata.length ;i++){
       if(this.area === this.areadata[i].areaName){
           this.areaid = this.areadata[i].id
          const result2 = await haulers()
        
        this.haulerList = result2.data.response.HaulerMaster

        this.haulerList.map(e=>{
 this.haulerListNames.push( e.haulerName)
        })
      
           var type = "PALERO"
        const result4 = await getgarbagebystate(type,this.state);
        this.collectorList = result4.data.response.result;
        console.log(this.collectorList)
        this.collectorList.map( e => {
        
            this.collectorListNames.push(e.firstName)
        })

         const result = await getRoutesByBaranggayId(this.areadata[i].id)
          this.routedata = result.data.response.result.routeMaster
         
           
            if(this.routedata.length > 0) {
              this.routedata.map(f=>{
                if(f.routeName != null) 
                  this.servingRoutes.push(f.routeName);

              })
            }
            // const result1 = await lguemployee()
            // this.checkerList = result1.data.response.result
            // console.log(this.checkerList)
            // if(this.checkerList.length > 0)
            // {
            //   this.checkerList.map(g => {
            //     if(g.lgu_Id != null){
            //       if(g.lgu_Id.baranggay != null) {
            //         if(g.type == "VOLUME_CHECKER" && g.lgu_Id.baranggay.id == this.areadata[i].id) {
            //           this.checkerListNames.push(g.userName)
            //         }
            //       }
            //     }
            //   })
            // }
            // this.gethaulers()
            /*const result2 = await getHaulerByBaraggayId(e.id)
            this.haulerList = result2.data.response.HaulerMaster
            this.haulerList.map( h => {
              this.haulerListNames.push(h.haulerName)
            })*/
          }
        //})
      }
      
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
        this.driverdata.map(e=>{
            if(this.driver === (e.firstName +" "+ e.lastName)){
                this.driverid = e.id    
                       }
        })
      },
      gethelperid(){
        this.helperdata.map(e=>{
            if(this.helper == (e.firstName +" "+ e.lastName)){
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
      console.log("hai",this.route)
      this.routearray=[]
       for(var i = 0 ; i<this.route.length ;i++){
        //  debugger
         this.routedata.map(e=>{
        if(this.route[i] === e.routeName){
             
          this.routearray.push({routeId:e.id})
          console.log("routedata",this.routearray)
       
        }
         })
      
       }
    },
    getgarbage() {
      console.log("hai",this.collector)
      this.garbagearray=[]
       for(var i = 0 ; i<this.collector.length ;i++){
        //  debugger
         this.collectorList.map(e=>{
        if(this.collector[i] === e.userName){
          this.garbagearray.push({garbageCollectorId:e.id ,garbageCollectorName:e.userName})
          console.log("routedata",this.garbagearray)
       
        }
         })
      
       }
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
            "lguId": this.loginlguid,
            "haulerid": this.haulerid, 
            "truckBodyNo": this.body,
            "truckplateNo": this.plate,
            "truckType":this.trucktype,
            "tripStartTime":  this.startTime,
            "tripEndTime": "",
            "baranggayId": this.areaid,
            helperId:this.helperid,
            helperName:this.helper,
            driverId: this.driverid,
            driverName: this.driver,
            "contractorDispatcherId": this.dispatcherid,
            "contractorDispatcherName": this.dispatchername,
            "volumeCheckerName": this.checker,
            "volumeCheckerId": this.checkerId,
            "volumeCheckerMeasuredVolume": "",
            "volumeCheckerTotalKmServed": "",
            "tripIncomingAreaRoute":this.routearray,
            "garbageCollector":this.garbagearray
            }
          
        const result = await CreateIncomingTrip(payload);
        // debugger
        // console.log(result)
        this.tripdata = result.data.response.result
        console.log("tripdata",this.tripdata)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Incoming Trip Created`,
            duration: 5000,
          })
          this.$router.push({ name: 'Viewtripincoming', params: this.tripdata});
        }
        this.$router.push({ name: 'Viewtripincoming', params: this.tripdata});
      }
      catch(e) {

      }
    },
    getTruckType(){
      this.vehicles.map( e => {
        if(e.plateNo == this.plate)
        {
          this.code = e.code
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
                        >LGU</label
                      >
                      <input
                       class="form-control"
                       v-model="username"
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
                          oninvalid="this.setCustomValidity('Baranggay is required ')"
                  oninput="setCustomValidity('')"
                  required
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
                        @input="getRouteCode"
                         oninvalid="this.setCustomValidity('Serving Route is required ')"
                  oninput="setCustomValidity('')"
                  required
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
                          oninvalid="this.setCustomValidity('Control No is required ')"
                  oninput="setCustomValidity('')"
                  required
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
                      v-model="date"
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
                      v-model="time"
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
                          oninvalid="this.setCustomValidity('Hauler is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>
                  </b-col>
                   <b-col class>
                  
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
                          oninvalid="this.setCustomValidity('Plate No is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>
                  </b-col>
                
                
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
                      disabled
                    
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
                      disabled
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
                      :options="drivers"
                      @change="getid" 
                          oninvalid="this.setCustomValidity('Driver Name is required ')"
                  oninput="setCustomValidity('')"
                  required
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
                      :options="helpers"
                      @change="gethelperid" 
                   
                    >
                    </b-form-select>
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
                        :options="collectorListNames"
                        @input="getgarbage"
                            oninvalid="this.setCustomValidity('Garbage Collector is required ')"
                  oninput="setCustomValidity('')"
                  required
                      >
                    </multiselect>
                  </b-col>
               
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
                          oninvalid="this.setCustomValidity('Volume Checker is required ')"
                  oninput="setCustomValidity('')"
                  required
                    >
                    </b-form-select>
                  </b-col>
                 
                </b-row>
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >District</label
                    >
                     <input
                      v-model.trim="district"
                      class="form-control"        
                     disabled
                    />
                  
                  </b-col>
                 <b-col>

                 </b-col>
                </b-row>
                <button
                  type="submit"
                   class="btn btn-custome ml-4 btn-secondary mb-3 float-right mr-2 mt-5"
                  >Create</button>
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