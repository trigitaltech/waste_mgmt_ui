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
  createroute,
  users,
  Areamasters,
  days,
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Route',
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
      supervisor: null,
      routename: '',
      routetype: null,
      areaname: [],
      areatype: '',
      routedistance: '',
      description: '',
      city: '',
      createdby: '',
      roadname: '',
      createddate: new Date(),
      modifydate: new Date(),
      modifyby: '',
      title: 'Register',
      code: '',
      areas: [],
      roads: [],
      baranggay: '',
      inputs: [
        {
          baranggayId: '',
          code: '',
          roadName: '',
          routeName: this.routename,
        },
      ],
      option: [
        { value: null, text: 'Please select an option' },
        { value: 'mainroad', text: 'Mainroad' },
        { value: 'serviceroad', text: 'Serviceroad' },
        { value: 'internalroad', text: 'Internalroad' },
      ],
      item: [{ value: null, text: 'Please select an user' }],
      item2: [],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Route Master',
          href: '#/Setup/RouteMaster',
        },
        {
          text: 'Create Route',
          active: true,
        },
      ],
      selectedBaranggays:[],
      areasid: [],
      daysdata: [],
      baranggays: [],
      daysmaster: [],
      days: [],
      Days: [{ day: 'SUNDAY'},{ day: 'MONDAY'},{ day: 'TUESDAY'},{ day: 'WEDNESDAY'},{ day: 'THURSDAY'},{ day: 'FRIDAY'},{ day: 'SATURDAY'}],
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    this.getplans()
    this.userdata()
    this.getdays()
  },
  methods: {
    add() {
      this.inputs.push({
        code: '',
        roadName: '',
        routeName: this.routename,
        baranggayId: '',
      })
      console.log(this.inputs)
    },

    remove(index) {
      this.inputs.splice(index, 1)
    },
    getid() {
      this.baranggays = []
      for (var i = 0; i < this.areaname.length; i++) {
        this.areas.map((e) => {
          if (this.areaname[i] === e.areaName) {
            this.baranggays.push(e)
            this.selectedBaranggays.push(e.areaName)
            console.log('routedata', this.baranggays)
          }
        })
      }
      this.selectedBaranggays = this.selectedBaranggays.filter( function(item,index,inputArray) {
        return inputArray.indexOf(item) == index;
      })
      // console.log("haiiiiii",this.item2)
    },
    getbaranggayid() {
      for (var i = 0; i < this.baranggay.length; i++) {
        this.areas.map((e) => {
          if (this.baranggay[i] === e.areaName) {
            this.inputs.baranggayId = e.id
            console.log('routedata', this.baranggays)
          }
        })
      }
      // console.log("haiiiiii",this.item2)
    },
    // async getdays() {
    //   try {
    //     const result = await days()
    //     this.daysmaster = result.data.response.TripDays
        //  this.daysmaster.map(e=>{
        //    this.Days.push(e.day)
        //  })
    //   } catch (error) {}
    // },
    getdaysdata() {
      this.daysdata = []
      this.daysdata.push({ day: this.days })
    },
    async getplans() {
      try {
        const result = await Areamasters()
        this.areas = result.data.response.areaMaster
        //   console.log("users",data[0].userName)
        // JSON.parse(JSON.stringify(result))
        // for(i=0;i<data.length;i++){
        //   this.item[i]=data[i].userName
        // }

        this.areas.map((e) => {
          this.item2.push(e.areaName)
          console.log('user', e)
        })
        console.log('users', this.item)
      } catch (error) {}
    },
    getRouteName() {
      this.inputs[0].routeName = this.routename
      console.log(this.inputs.routeName)
    },
    async userdata() {
      try {
        const result = await users()
        var data = result.data.response.Users
        console.log('users', data[0].userName)
        // JSON.parse(JSON.stringify(result))
        // for(i=0;i<data.length;i++){
        //   this.item[i]=data[i].userName
        // }

        data.map((e) => {
          this.item.push(e.userName)
          console.log('user', e)
        })
        console.log('users', this.item)
      } catch (error) {}
    },
    async create() {
      try {
        const payload = {
          code: this.code,
          routeName: this.routename,
          routeType: this.routetype,
          supervisor: this.supervisor,
          routeDistance: this.routedistance,
          description: this.description,
          baranggay: this.baranggays,
          routeRoads: this.inputs,
          days: this.days
        }
        let result = await createroute(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Route Successfully`,
            duration: 5000,
          })

          this.$router.push({ path: '/Setup/RouteMaster' })
        }
      } catch (e) {
        /*this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })*/
      }
    },

    async refresh() {
      setTimeout(function () {
        location.reload()
      }, 200)
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card header="Create Route" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form @submit.prevent="create">
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Baranggay Name</label
                >
                <multiselect
                  v-model="areaname"
                  :multiple="true"
                  :options="item2"
                  @input="getid"
                >
                </multiselect>

                <!-- Default input name -->
              </b-col>
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Route Name</label
                >
                <input
                  id="defaultFormCardNameEx"
                  v-model="routename"
                  type="text"
                  oninvalid="this.setCustomValidity('Route Name is required ')"
                  oninput="setCustomValidity('')"
                  @change="getRouteName"
                  placeholder="Enter Routename"
                  class="form-control"
                  required
                />

                <!-- Default input text -->
              </b-col>

              <br />
            </b-row>
            <br />
            <b-row>
              <!-- <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                  >Route Type</label
                >
                <b-form-select
                  v-model="routetype"
                  :options="option"
                  oninvalid="this.setCustomValidity('Route Type is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Select Route Type"
                  class="form-control"
                  required
                ></b-form-select> -->

              <!-- Default input name -->
              <!-- </b-col> -->

              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Code</label
                >
                <input
                  id="defaultFormCardNameEx"
                  v-model="code"
                  type="text"
                  oninvalid="this.setCustomValidity('code is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter code"
                  class="form-control"
                  required
                />
              </b-col>
              <!-- <b-col> -->
              <!-- Default input text -->
              <!-- <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Supervisor</label
                >
                <b-form-select
                  v-model.trim="supervisor"
                  placeholder="Select Supervisor"
                  label="value"
                  :options="item"
                  oninvalid="this.setCustomValidity('Supervisor is required ')"
                  oninput="setCustomValidity('')"
                  class="form-control"
                  required
                ></b-form-select>
              </b-col> -->
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Route Distance</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="routedistance"
                  type="text"
                  oninvalid="this.setCustomValidity('Route distance is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Route Distance"
                  class="form-control"
                  required
                />
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col>
                <!-- Default input text -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Description</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="description"
                  type="text"
                  class="form-control"
                  placeholder="Enter Description"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Days</label
                >
                <multiselect
                  v-model="days"
                  placeholder="Select Days"
                  :options="Days"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  label="day"
                  track-by="day"
                 
                  @input="getdaysdata"
                
                ></multiselect>

                <!-- Default input name -->
              </b-col>
            </b-row>

            <br />

            <b-row>
              <!-- <b-col> -->
              <!-- Default input text -->
              <!-- <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Created Date</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="createddate"
                    />
 <br/>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Modify Date</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="modifydate"
                    />
                  </b-col> -->

              <!-- <br/>

                   <b-col> -->
              <!-- Default input text -->
              <!-- <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Created By</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="createdby"
                    />
 <br/>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Modify By</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="modifyby"
                    />
                  </b-col> -->
            </b-row>
            <!-- <b-row>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Road Name</label
                >
                <multiselect
                  :multiple="true"
                  :close-on-select="true"
                  v-model.trim="roads"
                  placeholder="Select Roads"
                  :options="option"
                  @input="getcity"
                ></multiselect>
              </b-col>
            </b-row> -->

            <br />

            <b-row v-for="(input, k) in inputs" :key="k">
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Baranggay Name</label
                >
                <b-form-select
                  v-model="input.baranggayId"
                  :options="selectedBaranggays"
                  class="form-control"
                >
                </b-form-select>

                <!-- Default input name -->
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Code</label
                >

                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="input.code"
                  placeholder="Enter code"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Road Name</label
                >
                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="input.roadName"
                  placeholder="Enter roadname"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Route Name</label
                >
                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="input.routeName"
                  placeholder="Enter routename"
                />
              </b-col>

              <b-col>
                <span>
                  <i
                    class="fas fa-minus-circle"
                    @click="remove(k)"
                    v-show="k || (!k && inputs.length > 1)"
                    >Remove</i
                  >
                  <i
                    class="fas fa-plus-circle"
                    @click="add(k)"
                    v-show="k == inputs.length - 1"
                    >Add Roads</i
                  >
                </span>
              </b-col>
            </b-row>

            <button
              type="submit"
              class="btn btn-custome float-right btn-secondary mb-3"
              >Submit</button
            >
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
