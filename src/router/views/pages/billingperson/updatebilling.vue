<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
  Edituser,
  users,
  editvolumechecker,
  approveincomingtrip,
} from '../../../../services/auth'

export default {
  page: {
    title: 'Update Billing Person',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
      printPdf: [],
      data: this.$route.params,
      baranggayid: this.$route.params.baranggayId,
      contractorDispatcherId: this.$route.params.contractorDispatcherId,
      contractorDispatcherName: this.$route.params.contractorDispatcherName,
      contractorDispatcherVerified: this.$route.params
        .contractorDispatcherVerified,
      controlNo: this.$route.params.controlNo,
      createdBy: this.$route.params.createdBy,
      createdDate: this.$route.params.createdDate,
      driverId: this.$route.params.driverId,
      driverName: this.$route.params.driverName,
      garbageCollector: this.$route.params.garbageCollector[0]
        .garbageCollectorName,
      haulerId: this.$route.params.haulerId,
      helperId: this.$route.params.helperId,
      helperName: this.$route.params.helperName,
      id: this.$route.params.id,
      isDeleted: this.$route.params,
      lguId: this.$route.params.lguId,
      modifiedBy: this.$route.params.modifiedBy,
      modifiedDate: this.$route.params.modifiedDate,
      status: this.$route.params.status,
      tripDate: this.$route.params.tripDate,
      tripEndTime: this.$route.params.tripEndTime,
      tripIncomingAreaRoute: this.$route.params.tripIncomingAreaRoute,
      tripStartTime: this.$route.params.tripStartTime,
      truckBodyNo: this.$route.params.truckBodyNo,
      truckType: this.$route.params.truckType,
      truckplateNo: this.$route.params.truckplateNo,
      volumeCheckerId: this.$route.params.volumeCheckerId,
      volumeCheckerMeasuredVolume: this.$route.params
        .volumeCheckerMeasuredVolume,
      volumeCheckerName: this.$route.params.volumeCheckerName,
      volumeCheckerTotalKmServed: this.$route.params.volumeCheckerTotalKmServed,
      volumeCheckerVerified: this.$route.params.volumeCheckerVerified,
      items: [
        {
          text: 'home',
          href: '/',
        },
        // {
        //   text: 'Trip Incoming',
        //   href: '#/Trips/IncomingTrips',
        // },
        {
          text: 'Update Volume Checker',
          active: true,
        },
      ],
      volumecollected: this.$route.params.volumeCheckerMeasuredVolume,
      totalkms: this.$route.params.volumeCheckerTotalKmServed,
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    console.log(this.$route.params)
    // this.$route.params.data.response.result = this.$route.params.data.response.result
    // this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    // this.getplans()
    // this.userdata()
  },
  methods: {
    demoFun() {
      console.log('heee')
      var divContents = document.getElementById('pdf-voucher').innerHTML
      console.log('divcontents', divContents)
      var a = window.open('', '', 'height=500, width=500')
      a.document.write('<html>')
      a.document.write('<body >')
      a.document.write('<div>')
      a.document.write(divContents)
      a.document.write('</div></body></html>')
      a.document.close()
      a.print()
    },

    async approve() {
      try {
        const payload = {
          tripId: this.$route.params.id,
        }
        let result = await approveincomingtrip(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Approved Successfully`,
            duration: 5000,
          })

          this.$router.push({ path: '/Billingperson' })
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card header="View Trip In Coming" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form>
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Baranggay</label
                >
                <input
                  v-model="baranggayid"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >LGU ID</label
                >
                <input
                  v-model="lguId"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Trip Date</label
                >
                <input
                  id="defaultFormCardNameEx"
                  v-model="tripDate"
                  disabled
                  type="text"
                  class="form-control"
                />

                <!-- Default input email -->
              </b-col>

              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                  >Trip Start Time</label
                >

                <input
                  id="defaultFormCardNameEx"
                  v-model="tripStartTime"
                  disabled
                  type="text"
                  class="form-control"
                />

                <!-- Default input name -->
              </b-col>
              <br />
            </b-row>
            <br />
            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Control NO</label
                >

                <input
                  id="defaultFormCardEmailEx"
                  v-model="controlNo"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Driver Name</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="driverName"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Helper Name</label
                >
                <input
                  v-model="helperName"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Dispatcher Name</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="contractorDispatcherName"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Garbage Collector</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="garbageCollector"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
            </b-row>
            <br />

            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Truck Plate No</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckplateNo"
                  disabled
                  type="email"
                  class="form-control"
                />
                <br />
              </b-col>

              <br />

              <b-col>
                <!-- Default input email -->

                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Truck BodyNo</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckBodyNo"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>

              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >TruckType</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckType"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col>
                <!-- Default input email -->

                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Volume Collected</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="volumecollected"
                  placeholder="Enter volume"
                  type="email"
                  class="form-control"
                  disabled
                />
              </b-col>

              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Total Kms</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="totalkms"
                  placeholder="Enter Totalkms"
                  type="email"
                  class="form-control"
                  disabled
                />
              </b-col>
            </b-row>
             <!-- <b-row v-for="(input, k) in inputs" :key="k">
              <b-col md="4">
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Garbage Collectors</label
                >

                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="input.code"
                  placeholder="Enter code"
                />
              </b-col> -->
            <b-row>
              <b-col>
                <!-- <b-button
                  class="btn btn-custome ml-4 btn-secondary  float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Edit</b-button
                > -->

                <b-button
                  class="btn btn-custome ml-4 btn-secondary float-right mr-2 mt-5"
                  text="Create Tenant"
                  @click="approve"
                  >Approve</b-button
                >
              </b-col>
            </b-row>

            <br />
            <!-- <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-custome float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Create</b-button
                > -->
          </form>
          <!-- Default form subscription -->
        </div>
      </b-card>
    </div>

    <!-- end row -->
  </Layout>
</template>

<style lang="sass" scoped>
.edit
    color: #a7a7a7 !important
.text-center
    text-align: center
.form-div label
    margin-top: 8px
</style>
<style lang="sass" scoped>
.card-wrap
    box-shadow: 0 0 10px #ccc
.role-details
    margin: 10px
</style>
