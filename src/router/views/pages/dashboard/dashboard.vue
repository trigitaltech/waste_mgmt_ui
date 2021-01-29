<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import { getCardData } from '../../../../services/dashboard'
import StatChart from '@components/widget-stat-chart'
import Overview from '@components/overview'
import Member from '@components/member'
import Task from '@components/task'
import Chat from '@components/chat'
import {
  dashboardbrgy,
  dashboardlgu,
  dashboardhauler,
  dashboardroute,
  dashboardvehicle,
  dashboardequipment,
  dashboardincoming,
  dashboardoutgoing,
  dashboarddirect,
  dashboardemployee,
  dashboardsrequipment,
  dashboardsrtruck,
  dashboarddumping,
} from '../../../../services/auth'
import {
  revenueAreaChart,
  targetsBarChart,
  salesDonutChart,
  salesDonutChartstb,
  ordersData,
} from './data'

/**
 * Dashboard-1 Component
 */
export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    VuePerfectScrollbar,
    Layout,
    StatChart,
    Overview,
    Member,
    Task,
    Chat,
  },
  data() {
    return {
      srtruck: '',
      srequipment: '',
      dumping: '',
      employee: '',
      areas: '',
      haulers: '',
      lgus: '',
      equipment: '',
      vehicle: '',
      route: '',
      incoming: '',
      outgoing: '',
      direct: '',
      value: this.areas,
      max: 1000,
    }
  },
  mounted() {
    // this.getDashboard()
    this.getbrgy()
    this.getlgu()
    this.gethauler()
    this.getvehicle()
    this.getequipment()
    this.getroute()
    this.getincoming()
    this.getoutgoing()
    this.getdirect()
    this.getemployee()
    this.getsrequipment()
    this.getsrtruck()
    this.getdumping()
  },
  methods: {
    async getsrtruck() {
      try {
        const result = await dashboardsrtruck()
        this.srtruck = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getdumping() {
      try {
        const result = await dashboarddumping()
        this.dumping = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getsrequipment() {
      try {
        const result = await dashboardsrequipment()
        this.srequipment = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getemployee() {
      try {
        const result = await dashboardemployee()
        this.employee = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getincoming() {
      try {
        const result = await dashboardincoming()
        this.incoming = result.data.response.Incomingtrip
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getoutgoing() {
      try {
        const result = await dashboardoutgoing()
        this.outgoing = result.data.response.OutgoingTrips
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getdirect() {
      try {
        const result = await dashboarddirect()
        this.direct = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getbrgy() {
      try {
        const result = await dashboardbrgy()
        this.areas = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getlgu() {
      try {
        const result = await dashboardlgu()
        this.lgus = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async gethauler() {
      try {
        const result = await dashboardhauler()
        this.haulers = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getvehicle() {
      try {
        const result = await dashboardvehicle()
        this.vehicle = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getequipment() {
      try {
        const result = await dashboardequipment()
        this.equipment = result.data.response.result
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getroute() {
      try {
        const result = await dashboardroute()
        this.route = result.data.response.RouteMaster
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
  },
}
</script>

<template>
  <Layout>
    <div class="row page-title align-items-center">
      <div class="col-sm-4 col-xl-6">
        <h4 class="mb-1 mt-0">Dashboard</h4>
      </div>
      <div class="container my-3">
        <!-- Section: Block Content -->
        <section>
          <!-- <hr class="w-header my-4" /> -->
          <div class="row white-text">
            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Primary -->
              <div
                class="card classic-admin-card primary-color"
                style="
                  background-color: #21d4fd;
                  background-image: linear-gradient(19deg,rgb(129 194 26) 0%,rgb(235, 222, 63) 100%);"
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >BARANGGAY</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ areas }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="far fa-building"
                        style="
                          font-size: 90px;
                          position: absolute;
                          right: -31px;
                          top: -49px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <!-- <div>
            <i class="far fa-money-bill-alt"></i>
          </div> -->
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="areas" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3"> </div>
              </div>
              <!-- Card Primary -->
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Yellow -->
              <div
                class="card classic-admin-card warning-color"
                style="
                  background-color: #8bc6ec;
                  background-image: linear-gradient(
                    135deg,
                    #8bc6ec 0%,
                    #9599e2 100%
                  );
                "
              >
                <div>
                  <div class="card-body" style="overflow: hidden">
                    <div class="media p-3">
                      <div class="media-body">
                        <span
                          class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                          >LGUS</span
                        >
                        <h2 class="mb-0 text-dark-blue">{{ lgus }}</h2>
                      </div>
                      <div class="align-self-center" style="position: relative">
                        <i
                          class="fas fa-user-plus"
                          style="
                            font-size: 100px;
                            position: absolute;
                            right: -33px;
                            top: -55px;
                            opacity: 0.3;
                            color: #fff;
                          "
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div class="progress md-progress mx-2">
                    <b-progress-bar :value="lgus" :max="max"></b-progress-bar>
                  </div>
                  <div class="card-body pt-2 pb-3">
                    <!-- <p class="small mb-0">Worse than last week (25%)</p> -->
                  </div>
                </div>
                <!-- Card Yellow -->
              </div>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Blue -->
              <div
                class="card classic-admin-card light-blue lighten-1"
                style="
                  background-color: #fbab7e;
                  background-image: linear-gradient(
                    62deg,
                    #fbab7e 0%,
                    #f7ce68 100%
                  );
                "
              >
                <div class="card-body" style="overflow: hidden" >
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >HAULERS</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ haulers }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="fas fa-user-secret"
                        style="
                          font-size: 100px;
                          position: absolute;
                          right: -33px;
                          top: -55px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="haulers" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3">
                  <!-- <p class="small mb-0">Worse than last week (25%)</p> -->
                </div>
              </div>
              <!-- Card Blue -->
            </div>
            <!-- Grid column -->
  <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Red -->
              <div
                class="card classic-admin-card red accent-2"
                style="background-color: #ff7e5f"
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >EMPLOYEES</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ employee }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="fas fa-users"
                        style="
                          font-size: 100px;
                          position: absolute;
                          right: -33px;
                          top: -55px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="employee" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3"> </div>
              </div>
            </div>
            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Red -->
              <div
                class="card classic-admin-card red accent-2"
                style="
                  background-color: #faaca8;
                  background-image: linear-gradient(
                    19deg,
                    #faaca8 0%,
                    #ddd6f3 100%
                  );
                "
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >ROUTES</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ route }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="fas fa-road"
                        style="
                          font-size: 100px;
                          position: absolute;
                          right: -33px;
                          top: -55px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="route" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3">
                  <!-- <p class="small mb-0">Worse than last week (25%)</p> -->
                </div>
              </div>
              <!-- Card Red -->
            </div>
            <!-- Grid column -->
          
          <!-- <div class="row white-text"> -->
            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Primary -->
              <div
                class="card classic-admin-card primary-color"
                style="background-color: #928dab"
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-gray text-uppercase font-size-12 font-weight-bold"
                        >INCOMING TRIPS</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ incoming }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="far fa-money-bill-alt"
                        style="
                          font-size: 90px;
                          position: absolute;
                          right: -31px;
                          top: -49px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="incoming" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3"> </div>
              </div>
              <!-- Card Primary -->
            </div>
            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Red -->
              <div
                class="card classic-admin-card red accent-2"
                style="background-color: #536976"
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >OUTGOING TRIPS</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ outgoing }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="fas fa-file"
                        style="
                          font-size: 100px;
                          position: absolute;
                          right: -33px;
                          top: -55px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="outgoing" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3"> </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Red -->
              <div
                class="card classic-admin-card red accent-2"
                style="background-color: #fbc7d4"
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >DIRECT TRIPS</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ direct }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="fas fa-folder"
                        style="
                          font-size: 100px;
                          position: absolute;
                          right: -33px;
                          top: -55px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="direct" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3"> </div>
              </div>
            </div>
            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Yellow -->
              <div
                class="card classic-admin-card warning-color"
                style="background-color: #4ca1af"
              >
                <div>
                  <div class="card-body" style="overflow: hidden">
                    <div class="media p-3">
                      <div class="media-body">
                        <span
                          class="text-dark-blue text-uppercase font-size-12 font-weight-white"
                          >SR TRUCK</span
                        >
                        <h2 class="mb-0 text-dark-blue">{{ srtruck }}</h2>
                      </div>
                      <div class="align-self-center" style="position: relative">
                        <i
                          class="fas fa-file-upload"
                          style="
                            font-size: 100px;
                            position: absolute;
                            right: -33px;
                            top: -55px;
                            opacity: 0.3;
                            color: #fff;
                          "
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div class="progress md-progress mx-2">
                    <b-progress-bar
                      :value="srtruck"
                      :max="max"
                    ></b-progress-bar>
                  </div>
                  <div class="card-body pt-2 pb-3"> </div>
                </div>
                <!-- Card Yellow -->
              </div>
            </div>
            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Yellow -->
              <div
                class="card classic-admin-card warning-color"
                style="background-color: #ffc371"
              >
                <div>
                  <div class="card-body" style="overflow: hidden">
                    <div class="media p-3">
                      <div class="media-body">
                        <span
                          class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                          >SR EQUIPMENT</span
                        >
                        <h2 class="mb-0 text-dark-blue">{{ srequipment }}</h2>
                      </div>
                      <div class="align-self-center" style="position: relative">
                        <i
                          class="fas fa-address-card"
                          style="
                            font-size: 100px;
                            position: absolute;
                            right: -33px;
                            top: -55px;
                            opacity: 0.3;
                            color: #fff;
                          "
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div class="progress md-progress mx-2">
                    <b-progress-bar
                      :value="srequipment"
                      :max="max"
                    ></b-progress-bar>
                  </div>
                  <div class="card-body pt-2 pb-3"> </div>
                </div>
                <!-- Card Yellow -->
              </div>
            </div>
            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Blue -->
              <div
                class="card classic-admin-card light-blue lighten-1"
                style="background-color: #ef629f"
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >EQUIPMENTS</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ equipment }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="fas fa-toolbox"
                        style="
                          font-size: 100px;
                          position: absolute;
                          right: -33px;
                          top: -55px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar
                    :value="equipment"
                    :max="max"
                  ></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3"> </div>
              </div>
              <!-- Card Blue -->
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Red -->
              <div
                class="card classic-admin-card red accent-2"
                style="background-color: #2980b9"
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >VEHICLES</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ vehicle }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="fas fa-truck"
                        style="
                          font-size: 100px;
                          position: absolute;
                          right: -33px;
                          top: -55px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="vehicle" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3"> </div>
              </div>
              <!-- Card Red -->
            </div>
            <!-- Grid column -->

          
            <div class="col-xl-3 col-md-6 mb-4">
              <!-- Card Red -->
              <div
                class="card classic-admin-card red accent-2"
                style="background-color: #a5cc82"
              >
                <div class="card-body" style="overflow: hidden">
                  <div class="media p-3">
                    <div class="media-body">
                      <span
                        class="text-dark-blue text-uppercase font-size-12 font-weight-bold"
                        >Dumping</span
                      >
                      <h2 class="mb-0 text-dark-blue">{{ dumping }}</h2>
                    </div>
                    <div class="align-self-center" style="position: relative">
                      <i
                        class="fas fa-trash"
                        style="
                          font-size: 100px;
                          position: absolute;
                          right: -33px;
                          top: -55px;
                          opacity: 0.3;
                          color: #fff;
                        "
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="progress md-progress mx-2">
                  <b-progress-bar :value="dumping" :max="max"></b-progress-bar>
                </div>
                <div class="card-body pt-2 pb-3"> </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Section: Block Content -->
      </div>
    </div>
  </Layout>
</template>
