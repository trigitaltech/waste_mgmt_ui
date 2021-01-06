<script>
import Vue from 'vue'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import { Datetime } from 'vue-datetime'
import Multiselect from 'vue-multiselect'
import moment from 'moment'
Vue.component('multiselect', Multiselect)
import {
  getVehiclesByhauler,
  equipment,
  Createsrequipment,
  getdumpdata,
  dumpinglocation,
  haulers,
  Tripdownload,
  Areamasters,
  routemaster,
  CreateIncomingTrip,
  haulerEmployees,
  vehicle,
  getRoutesByBaranggayId,
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Servicerequest Equipment',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return {
      inputs: [
        {
          name: '',
        },
      ],
      items: [
        {
          text: 'Servicerequests',
          href: '/',
        },
        {
          text: 'Servicerequest Trucks',
          href: '#/Servicerequest/Truck',
        },
        {
          text: 'Create SR Equipment',
          active: true,
        },
      ],
      areadata: [],
      areaarray: '',
      routedate: [],
      haulerarray: [],
      routearray: [],
      emp: [],
      dumpid: '',
      dumpinglocation: '',
        jobtypes: ["JOBTYPE1", ,
        "JOBTYPE2",
      ],
      controlno: '',
      tripDate: '',
      plateno: '',
      hauler: '',
      vehicleno: '',
      fromdumpingpoint: '',
      todumpingpoint: '',
      driver: '',
      helper: '',
      volumecapacity: '',
      trucktype: '',
      body: '',
      area: '',
      route: '',
      driver: '',
      contractor: '',
      collector: null,
      lgu: '',

      vehicleno: '',
      plates: [],
      body: '',
      vehicledata: [],

      driverid: '',
      startTime: '',
      drivers: [],
      helpers: [],
      vehicles: [],
      servingAreas: [],
      route: '',
      driver: '',
      helperid: '',
      helper: null,
      servingRoutes: [],
      haulerid: '',
      driverList: [],
      hauler: '',
      haulerList: [],
      contractorList: [],
      vehicledata: [],
      paleroList: [],
      garbage: null,
      dumpings: [],
      haulers: [],
      dumpingdata: [],
      plates: [],
      haulerdata: [],
      fromdumpings: [],
      todumpings: [],
      lgu: null,
      dumpingid: '',
      haulerid: '',
      dispatcherid: '',
      equipmentdata:[],
      equipments:[],
      equipment:'',
      model:"",
      jobtype:"",
      operator:"",
      operatorid:"",
    }
  },
  components: {
    Layout,
    PageHeader,
    VueTimepicker,
    Multiselect,
    datetime: Datetime,
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.tripDate = new Date()
    this.startTime = moment(new Date()).format('DD-MM-YYYY hh:mm A')
    console.log(this.tripDate + ' ' + this.startTime)
    this.getdumping()
    this.gethaulers()
    this.getequipment()
    // this.areas()
    // this.routes()
    // this.getUsers()
    this.employeedata()
    this.getLgu()
    // this.getvehicles()
  },
  methods: {
    async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))

      this.dispatcherid = result.user.id

      console.log(this.loginDetails)
    },
    async getdump() {
      for (var i = 0; i < this.dumpingdata.length; i++) {
        if (this.dumpinglocation[0] === this.dumpingdata[i].dumpingAreaName) {
          this.dumpid = this.dumpingdata[i].id
          const result = await getdumpdata(this.dumpid)
          var dumpdata = result.data.response.result.dumpingPoint
          dumpdata.map((e) => {
            this.fromdumpings.push(e.dumpingPointName)
            this.todumpings.push(e.dumpingPointName)
          })
        }
      }
    },
    platedetails() {
      for (var i = 0; i < this.vehicledata.length; i++) {
        if (this.plateno[0] === this.vehicledata[i].plateNo) {
          this.vehicleno = this.vehicledata[i].vehicleNo
          this.trucktype = this.vehicledata[i].vehicleType.truckType
          this.volumecapacity = this.vehicledata[i].volumeCapacity
        }
      }
    },
    async gethaulers() {
      try {
        const result = await haulers()
        this.haulerdata = result.data.response.HaulerMaster
        this.haulerdata.map((e) => {
          this.haulers.push(e.haulerName)
        })
      } catch (error) {}
    },
    //   async getvehiclehauler() {
    //    try {

    //   const result = await  getVehiclesByhauler(id)
    //   this.dumpingdata = result.data.response.dumpingLocation
    //   this.dumpingdata.map(e=>{
    //     this.dumpings.push(e.dumpingAreaName)
    //   })

    //   } catch (error) {}

    // },
    async getdumping() {
      try {
        const result = await dumpinglocation()
        this.dumpingdata = result.data.response.dumpingLocation
        this.dumpingdata.map((e) => {
          this.dumpings.push(e.dumpingAreaName)
        })
      } catch (error) {}
    },
    async vehiclehauler() {
      for (var i = 0; i < this.haulerdata.length; i++) {
        if (this.hauler[0] === this.haulerdata[i].haulerName) {
          this.haulerid = this.haulerdata[i].id
          const result = await getVehiclesByhauler(this.haulerid)
          this.vehicledata = result.data.response.result
          this.vehicledata.map((e) => {
            this.plates.push(e.plateNo)
          })
        }
      }
     
    },
   
    getroutes() {
      this.routedata.map((e) => {
        if (this.route === e.routeName) {
          this.routearray.push(e)
        }
      })
    },
    getareas() {
      this.areadata.map((e) => {
        if (this.area === e.areaName) {
          this.areaarray = e
        }
      })
    },
   getoperatorid(){
        this.emp.map(e=> {
          if(this.operator[0] === e.userName){
this.operatorid = e.id
          }
        })
   },
    async employeedata() {
      try {
        const result = await haulerEmployees()
        this.emp = result.data.response.HaulerEmployees
        console.log(this.emp)
        this.emp.map((e) => {
          if (e.type == 'OPERATOR') this.drivers.push(e.userName)
        
        })
      } catch (error) {}
    },
    async areas() {
      try {
        const result = await Areamasters()
        this.areadata = result.data.response.areaMaster
        this.areadata.map((e) => {
          if (e.areaName != null) this.servingAreas.push(e.areaName)
        })
      } catch (error) {
        console.log(error)
      }
      console.log(this.servingAreas)
    },
    async routes() {
      try {
        const result = await routemaster()
        console.log(result)
        this.routedata = result.data.response.RouteMaster
        this.routedata.map((e) => {
          if (e.routeName != null) this.servingRoutes.push(e.routeName)
        })
      } catch (error) {}
    },
    getRouteObject(name) {
      this.routedata.map((e) => {
        if (name == e.routeName) {
          console.log(e)
          return e
        }
      })
    },
     async getequipment() {
       try {
      
      const result = await  equipment()
      this.equipmentdata = result.data.response.equipment
      this.equipmentdata.map(e=>{
        this.equipments.push(e.equipmentNo)
      })
   
      } catch (error) {}
   
    },
    
     getequip() {
      // debugger
      this.equipmentdata.map((e) => {
        if (this.equipment[0] === e.equipmentNo) {
          this.model = e.model
        }
      })
    },
    getdriverid() {
      // debugger
      this.emp.map((e) => {
        if (this.driver[0] === e.userName) {
          this.driverid = e.id
        }
      })
    },
    gethelperid() {
      // debugger
      this.emp.map((e) => {
        if (this.helper[0] === e.userName) {
          this.helperid = e.id
        }
      })
    },

    async create() {
      try {
        // const date = moment(this.startTime).format('YYYY-MM-DDThh:mm:SS+00:00')
        // console.log(date)
        // const areaarray = Object.assign({}, areaarray, this.areaarray)
        let payload = {
          controlNo: this.controlno,

          tripDate: this.tripDate,

          dumpingareaId: this.dumpid,
            equipmentNo:this.equipment[0],
          equipmentmodel:this.model,
          type:this.jobtype[0],
          fromPoint: this.fromdumpingpoint[0],
          toPoint: this.todumpingpoint[0],
       
          haulerId: this.haulerid,

          timeInAM: '',

          timeOutAM: '',

          timeInPM: '',

          timeOutPM: '',

          aMTrip: '',

          pMTrip: '',

          totalTrips: '',

          driverTimeIn: '',

          totalDistance: '',
        verifiedBy:this.operatorid,
          dispatchedBy: this.dispatcherid,
        }
        const result = await Createsrequipment(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Service Request Equipment Created`,
            duration: 5000,
          })
          this.$router.push({ path: '/Servicerequest/Equipment' })
        }
      } catch (e) {}
    },
    getTruckType() {
      this.vehicles.map((e) => {
        if (e.plateNo == this.plate) {
          this.trucktype = e.vehicleType.code
          this.vehicleno = e.vehicleNo
        }
      })
    },
    add(index) {
      if (this.inputs.length <= 4) this.inputs.push({ name: '' })
    },
    remove(index) {
      this.inputs.splice(index, 1)
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />
    <div class="animated">
      <b-card
        header="Create Servicerequest Equipment"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-1">
          <div class="mx-xl-5">
            <div class="card-body">
              <form @submit.prevent="create">
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >CONTROL NO</label
                    >
                    <input
                      v-model="controlno"
                      class="form-control"
                      placeholder="Enter Contol No"
                      name="body"
                    />
                  </b-col>
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
                </b-row>
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Dumping Location</label
                    >
                    <multiselect
                      v-model="dumpinglocation"
                      :multiple="true"
                      :options="dumpings"
                      @input="getdump"
                    >
                    </multiselect>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Hauler</label
                    >
                    <multiselect
                      v-model="hauler"
                      :multiple="true"
                      :options="haulers"
                      @input="vehiclehauler"
                    >
                    </multiselect>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Equipment</label
                    >
                    <multiselect
                      v-model="equipment"
                      :multiple="true"
                      :options="equipments"
                     @input="getequip"
                    >
                    </multiselect>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Model</label
                    >
                    <input
                      v-model="model"
                      class="form-control"
                      name="trucktype"
                      placeholder="Enter Model"
                      disabled
                      readonly
                    />
                  </b-col>
                </b-row>
                
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Operator</label
                    >
                    <multiselect
                      v-model="operator"
                      :multiple="true"
                      :options="drivers"
                      @input="getoperatorid"
                    >
                    </multiselect>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Job Type</label
                    >
                    <multiselect
                      v-model="jobtype"
                      :multiple="true"
                      :options="jobtypes"
                    
                    >
                    </multiselect>
                  </b-col>
                </b-row>
                 <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >From Dumping Point</label
                    >
                    <multiselect
                      v-model="fromdumpingpoint"
                      :multiple="true"
                      :options="fromdumpings"
                    >
                    </multiselect>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >To Dumping Point</label
                    >
                    <multiselect
                      v-model="todumpingpoint"
                      :multiple="true"
                      :options="todumpings"
                    >
                    </multiselect>
                  </b-col>
                </b-row>
                
                <br />
                <button
                  type="submit"
                  class="btn btn-custome float-right btn-secondary mb-3"
                  >Submit</button
                >
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
.cardheader.title {
  color: black;
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