<script>
  import Vue from 'vue'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
import { Datetime } from 'vue-datetime';
import moment from 'moment'
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 checkout,users,employees,Tripdownload, updateIncomingTrip, lgus
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create AreaMaster',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    datetime: Datetime,
    Layout,
    PageHeader,
    Multiselect
  },
  data() {
    return {
      servingArea:null,
      servingRoute:[],
      route:"",
      lgu:null,
      lguId: '',
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Incoming Trip / Edit',
          active: true,
        },
      ]
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    console.log(this.$route.params)
    this.getTripDetails();
  },  
  methods: {
    async getTripDetails() {
      let result = await Tripdownload(7);
      console.log(result);
    },
    async update() {
      const result1 = await  lgus()
      const data = result1.data.response.result;
      data.map(e => {
        if(e.lguName == this.$route.params.lguId){
          this.lguId = e.id
        }
      })
      const payload = {
        "id": this.$route.params.id,
        "controlNo": this.$route.params.controlNo,
        "tripDate": this.$route.params.tripDate,
        "lguId": this.lguId,
        "tripType": this.$route.params.tripType,
        "haulerId": this.$route.params.haulerId,
        "truckBodyNo": this.$route.params.truckBodyNo,
        "truckplateNo": this.$route.params.truckplateNo,
        "truckType": this.$route.params.truckType,
        "tripStartTime": this.$route.params.tripStartTime,
        "tripEndTime": this.$route.params.tripEndTime,
        "district": this.$route.params.district,
        "baranggayId": this.$route.params.baranggayId,
        "helperId": this.$route.params.helperId,
        "helperName": this.$route.params.helperName,
        "driverId": this.$route.params.driverId,
        "driverName": this.$route.params.driverName,
        "contractorDispatcherId": this.$route.params.contractorDispatcherId,
        "contractorDispatcherName": this.$route.params.contractorDispatcherName,
        "contractorDispatcherVerified": this.$route.params.contractorDispatcherVerified,
        "volumeCheckerId": this.$route.params.volumeCheckerId,
        "volumeCheckerName": this.$route.params.volumeCheckerName,
        "volumeCheckerVerified": this.$route.params.volumeCheckerVerified,
        "volumeCheckerMeasuredVolume": this.$route.params.volumeCheckerVerified,
        "volumeCheckerTotalKmServed": this.$route.params.volumeCheckerTotalKmServed,
        "isDeleted": false,
        "status": this.$route.params.status,
        "tripIncomingAreaRoute": [],
        "garbageCollector": [],
        "createdBy": this.$route.params.createdBy,
        "createdDate": this.$route.params.createdDate,
        "modifiedBy": this.$route.params.modifiedBy,
        "modifiedDate": this.$route.params.modifiedDate
      };
      const result = await updateIncomingTrip(payload);
      if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Incoming Trip updated Successfully`,
            duration: 5000,
          })

          this.$router.push({ path: '/Trips/IncomingTrips' })
      }
    }
  },
}
</script>

<template>
  <Layout>
    <div class="animated fadeIn">
      <b-card
        header="Update Incoming Trip"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
          <!-- Card -->
          <div class="card mx-xl-5">
            <!-- Card body -->
            <div class="card-body">
              <form @submit.prevent="update">
                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        for="trip"
                        class="grey-text font-weight-dark"
                        >Trip: </label
                      >
                      <input
                        class="ml-2"
                        v-model="$route.params.id"
                        name="trip"
                        id="trip"
                        readonly
                      />
                      
                    </div>
                  </b-col>
                  <b-col></b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        for="servingArea"
                        class="grey-text font-weight-dark ml-3"
                        >Baranggay: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="$route.params.baranggayId"
                        name="servingArea"
                        id="servingArea"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        for="lgu"
                        class="grey-text font-weight-dark ml-3"
                        >Control No: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="$route.params.controlNo"
                        name="lgu"
                        id="lgu"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        for="servingRoute"
                        class="grey-text font-weight-dark ml-3"
                        >Serving Route: </label
                      >
                      <multiselect
                        v-model="route"
                        :multiple="true"       
                        :options="servingRoute"
                      >
                      </multiselect>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >LGU: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="$route.params.lguId"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Trip Date: </label
                      >
                      <input
                        class="ml-2 form-control"
                        readonly
                        v-model="$route.params.tripDate"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Trip Start Time: </label
                      >
                      <input
                        class="ml-2 form-control"
                        readonly
                        v-model="$route.params.tripStartTime"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        for="lgu"
                        class="grey-text font-weight-dark ml-3"
                        >Hauler: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="$route.params.haulerId"
                        name="lgu"
                        id="lgu"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        for="lgu"
                        class="grey-text font-weight-dark ml-3"
                        >Trip End Time: </label
                      >
                      <datetime 
                      v-model="$route.params.tripEndTime"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      }"
                      type="datetime"
                      placeholder="SELECT Time"
                 ></datetime>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Plate: </label
                      >
                      <input
                        class="ml-2 form-control"
                        readonly
                        v-model="$route.params.truckplateNo"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Truck Type: </label
                      >
                      <input
                        class="ml-2 form-control"
                        readonly
                        v-model="$route.params.truckType"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Body: </label
                      >
                      <input
                        class="ml-2 form-control"
                        readonly
                        v-model="$route.params.truckBodyNo"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Driver Name: </label
                      >
                      <input
                        class="ml-2 form-control"
                        readonly
                        v-model="$route.params.driverName"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Garbage Collectors: </label
                      >
                      <multiselect
                        v-model="route"
                        :multiple="true"       
                        :options="servingRoute"
                      >
                      </multiselect>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Helper: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="$route.params.helperName"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Volume Checker: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="$route.params.volumeCheckerName"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Volume Collected: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="$route.params.volumeCheckerMeasuredVolume"
                      />
                    </div>
                  </b-col>
                  <b-col></b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Total KM: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="$route.params.volumeCheckerTotalKmServed"
                      />
                    </div>
                  </b-col>
                  <b-col></b-col>
                </b-row>
                <button
                  style="background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  type="submit"
                  class="btn btn-info mt-3 mx-auto"
                  >Save</button>
              </form>
            </div>
            <!-- Card body -->
          </div>
          <!-- Card -->
        </div>
      </b-card>
    </div>
    <!-- end row -->
  </Layout>
</template>
<style lang="sass" scoped>
.edit
  color: white !important
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
