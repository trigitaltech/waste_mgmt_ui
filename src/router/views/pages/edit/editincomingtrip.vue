<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { Datetime } from 'vue-datetime';
import moment from 'moment'
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 checkout,users,employees,Tripdownload
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
  },
  data() {
    return {
      trip:this.$route.params.id,
      tripDate:this.$route.params.tripDate,
      tripStartTime:this.$route.params.collectionStartTime,
      plate:this.$route.params.plateNo,
      truckType:this.$route.params.truckType,
      body:this.$route.params.bodyNo,
      driver:this.$route.params.driverName,
      collector:this.$route.params.driverName,
      servingArea:null,
      lgu:null,
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
    update() {

    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

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
                        v-model="trip"
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
                        >Serving Area: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="servingArea"
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
                        >LGU: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="lgu"
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
                      <input
                        class="ml-2 form-control"
                        v-model="servingRoute"
                        name="servingRoute"
                        id="servingRoute"
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
                        >Trip Date: </label
                      >
                      <input
                        class="ml-2 form-control"
                        readonly
                        v-model="tripDate"
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
                        v-model="tripStartTime"
                      />
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
                        v-model="plate"
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
                        v-model="truckType"
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
                        v-model="body"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >From Time: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="fromTime"
                      />
                    </div>
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
                        v-model="driver"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >To Time: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="toTime"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Garbage Collectors: </label
                      >
                      <input
                        class="ml-2 form-control"
                        readonly
                        v-model="collector"
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Dispatch Time: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="dispatchTime"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="form-group">
                      <label
                        class="grey-text font-weight-dark ml-3"
                        >Total Distance: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="totalDistance"
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
                        >Volume Disposal: </label
                      >
                      <input
                        class="ml-2 form-control"
                        v-model="volume"
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
