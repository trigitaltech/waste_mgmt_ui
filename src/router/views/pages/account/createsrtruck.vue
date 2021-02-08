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
  Createsrtruck,
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
    title: 'Create Servicerequest Truck',
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
          text: 'Create SR Truck',
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
        if (this.dumpinglocation === this.dumpingdata[i].dumpingAreaName) {
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
      console.log(this.hauler)
      for (var i = 0; i < this.haulerdata.length; i++) {
        if (this.hauler === this.haulerdata[i].haulerName) {
          this.haulerid = this.haulerdata[i].id
          const result = await getVehiclesByhauler(this.haulerid)
          this.vehicledata = result.data.response.result
          this.vehicledata.map((e) => {
            this.plates.push(e.plateNo)
          })
        }
      }
      //     debugger
      //  this.haulerdata.map(e => {
      //   if (this.hauler === e.haulerName) {
      //     this.haulerid = e.id
      //     debugger
      //   }
      //    console.log("haiiiiii",this.haulerid)
      // })
      //  if(this.haulerid !== ""){
      //
      //    console.log(result)
      //  }
    },
    // async getvehicles() {
    //   const result = await vehicle()
    //   this.vehicles = result.data.response.vehicles
    //   this.vehicles.map((e) => {
    //     this.plates.push(e.plateNo)
    //   })
    //   console.log(this.plates)
    // },
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
    // getid() {
    //   console.log('haiiiiii')
    //   this.emp.map((e) => {
    //     if (this.driver === e.userName) {
    //       this.driverid = e.id
    //     }
    //   })
    // },
    async employeedata() {
      try {
        const result = await haulerEmployees()
        this.emp = result.data.response.HaulerEmployees
        console.log(this.emp)
        this.emp.map((e) => {
          if (e.type == 'DRIVER') this.drivers.push(e.firstName +" "+ e.lastName)
          if (e.type == 'HELPER') this.helpers.push(e.firstName +" "+ e.lastName)
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
    getdriverid() {
      // debugger
      this.emp.map((e) => {
        if (this.driver[0] === (e.firstName +" "+ e.lastName)) {
          this.driverid = e.id
        }
      })
    },
    gethelperid() {
      // debugger
      this.emp.map((e) => {
        if (this.helper[0] === (e.firstName +" "+ e.lastName)) {
          this.helperid = e.id
        }
      })
    },

    async create() {
      try {
     
        let payload = {
          controlNo: this.controlno,

          tripDate: this.tripDate,

          dumpingareaId: this.dumpid,

          plateNo: this.plateno[0],

          bodyNo: this.vehicleno[0],

          truckType: this.trucktype,

          driverId: this.driverid,
          driverName: this.driver[0],

          helperId: this.helperid,
          helperName: this.helper[0],

          fromPoint: this.fromdumpingpoint,
          toPoint: this.todumpingpoint,

          volumeCapacity: this.volumecapacity,

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

          dispatchedBy: this.dispatcherid,
        }
        const result = await Createsrtruck(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Service Request Truck Created`,
            duration: 5000,
          })
          this.$router.push({ path: '/Servicerequest/Truck' })
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
        header="Create Servicerequest Truck"
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
                      >Plate No</label
                    >
                    <multiselect
                      v-model="plateno"
                      :multiple="true"
                      :options="plates"
                      @input="platedetails"
                    >
                    </multiselect>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Vehicle No</label
                    >
                    <input
                      v-model="vehicleno"
                      class="form-control"
                      name="body"
                      readonly
                      placeholder="Enter Vehicle No"
                    />
                  </b-col>
                </b-row>
                <b-row>
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
                      placeholder="Enter Trucktype"
                      readonly
                    />
                  </b-col>
                
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Volume Capacity</label
                    >
                    <input
                      v-model="volumecapacity"
                      class="form-control"
                      name="trucktype"
                      readonly
                      placeholder="Enter Volume Capacity"
                    />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Driver</label
                    >
                    <multiselect
                      v-model="driver"
                      :multiple="true"
                      :options="drivers"
                      @input="getdriverid"
                    >
                    </multiselect>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Helper</label
                    >
                    <multiselect
                      v-model="helper"
                      :multiple="true"
                      :options="helpers"
                      @input="gethelperid"
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