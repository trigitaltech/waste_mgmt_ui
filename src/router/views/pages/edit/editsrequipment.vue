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
  Tripdownload,
  Areamasters,
  routemaster,
  CreateIncomingTrip,
  employees,
  vehicle,
  getRoutesByBaranggayId,
} from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Servicerequest Equipment',
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
          href: '#/Servicerequest/Equipment',
        },
        {
          text: 'Edit SR Equipment',
          active: true,
        },
      ],
      areadata: [],
      areaarray: '',
      routedate: [],
      routearray: [],
      emp: [],
      controlno: '',
      area: '',
      route: '',
      driver: '',
      contractor: '',
      collector: null,
      lgu: '',
      plate: '',
      plates: [],
      body: '',
      tripDate: '',
      trucktype: '',
      driverid: '',
      startTime: '',
      drivers: [],
      helpers: [],
      vehicles: [],
      servingAreas: [],
      route: '',
      driver: '',
      helper: null,
      servingRoutes: [],
      driverList: [],
      hauler: '',
      haulerList: [],
      contractorList: [],
      paleroList: [],
      garbage: null,
      lgu: null,
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
    this.tripDate = moment(new Date()).format('DD-MM-YYYY')
    this.startTime = moment(new Date()).format('DD-MM-YYYY hh:mm A')
    console.log(this.tripDate + ' ' + this.startTime)
    this.areas()
    this.routes()
    this.getUsers()
    this.employeedata()
    this.getvehicles()
  },
  methods: {
    async getRoutes() {
      try {
        this.areadata.map(async (e) => {
          if (this.area === e.areaName) {
            console.log(e)
            this.areaarray = e
            const result = await getRoutesByBaranggayId(e.id)
            console.log(result)
          }
        })
        const result = await getRoutesByBaranggayId(id)
        console.log(result)
      } catch (e) {
        console.log(e)
      }
    },
    async getvehicles() {
      const result = await vehicle()
      this.vehicles = result.data.response.vehicles
      this.vehicles.map((e) => {
        this.plates.push(e.plateNo)
      })
      console.log(this.plates)
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
    getid() {
      console.log('haiiiiii')
      this.emp.map((e) => {
        if (this.driver === e.userName) {
          this.driverid = e.id
        }
      })
    },
    async employeedata() {
      try {
        const result = await employees()
        this.emp = result.data.response.result
        console.log(this.emp)
        this.emp.map((e) => {
          if (e.type == 'DRIVER') this.drivers.push(e.userName)
          if (e.type == 'HELPER') this.helpers.push(e.userName)
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
    async create() {
      try {
        const date = moment(this.startTime).format('YYYY-MM-DDThh:mm:SS+00:00')
        console.log(date)
        const areaarray = Object.assign({}, areaarray, this.areaarray)
        let payload = {
          controlNo: this.controlno,
          tripDate: this.tripDate,
          lgu: this.lgu,
          bodyNo: this.body,
          plateNo: this.plate,
          truckType: this.trucktype,
          collectionStartTime: this.startTime,
          servingArea: areaarray,
          servingRoute: {
            id: this.routearray.id,
            code: this.routearray.code,
            routeName: this.routearray.routeName,
            routeType: this.routearray.routeType,
            supervisor: this.routearray.supervisor,
            route_distance: this.routearray.route_distance,
            areaId: this.routearray.areaId,
            areaName: this.areaarray.areaName,
            isDeleted: false,
            routeRoads: [],
            createdDate: this.routearray.createdDate,
            createdBy: '',
            modifiedDate: this.routearray.modifiedDate,
            modifiedBy: '',
            description: this.routearray.description,
          },
          helperId: 199,
          helperName: null,
          driverId: this.driverid,
          driverName: this.driver,
          contractorDispatcherName: null,
          contractorDispatcherId: null,
          contractorDispatcherVerified: null,
          volumeCheckerName: null,
          volumeCheckerId: null,
          volumeCheckerVerified: null,
          volumeCheckerMeasuredVolume: null,
          volumeCheckerTotalKmServed: null,
          isDeleted: false,
          status: 'INITIATED',
          createdBy: this.getUserDetails.user.username,
          createdDate: this.tripDate,
          modifiedBy: this.getUserDetails.user.username,
          modifiedDate: this.tripDate,
        }
        const result = await (payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Incoming Trip Created`,
            duration: 5000,
          })
          this.$router.push({ path: '/Trips/IncomingTrips' })
        }
      } catch (e) {}
    },
    getTruckType() {
      this.vehicles.map((e) => {
        if (e.plateNo == this.plate) {
          this.trucktype = e.vehicleType.code
          this.body = e.vehicleNo
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
        header="Edit Servicerequest Equipment"
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
                      name="body"
                      placeholder="Enter Contol No"
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
                      >Hauler</label
                    >
                    <multiselect
                      v-model="route"
                      :multiple="true"
                      :options="servingRoutes"
                    >
                    </multiselect>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Equipment No</label
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
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Model</label
                    >
                    <input
                      v-model="trucktype"
                      class="form-control"
                      name="trucktype"
                      readonly
                      placeholder="Enter Model"
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Operator</label
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
                      >Job Type</label
                    >
                    <multiselect
                      v-model="route"
                      :multiple="true"
                      :options="servingRoutes"
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