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
import { createstaging, users ,lguEmployees ,dumpinglocation} from '../../../../services/auth'
import csc from 'country-state-city'
export default {
  page: {
    title: 'Create Staging',
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
      dumparea:"",
      lgumaster:[],
      dumpmaster:[],
      code:"",
      lgu:"",
      dumps:[],
      lgus:[],
      areaname: '',
      description: '',
      supervisor: null,
      lguemployee:[],
      dumpingarea:[],
      city: '',
      state: '',
      country: '',
      zip: '',
      geoLat: '',
      geoLong: '',
      area: '',
      workinghours: '',
      message: '',
      stagingtype: null,
      createdby: '',
      createddate: new Date(),
      modifydate: new Date(),
      modifyby: '',
      option: [
        { value: null, text: 'Please select an option' },
        { value: 'Areastaging', text: 'Area Staging' },
        { value: 'Centralstaging', text: 'Central Staging' },
      ],
      item: [{ value: null, text: 'Please select an user' }],
      lgu: '',
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Staging Area',
          href: '#/Setup/StagingArea',
        },
        {
          text: 'Create Staging',
          active: true,
        },
      ],
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
    // this.getplans()
    this.userdata()
    this.getlgus()
    this.getdumping()
  },
  methods: {
    getdumpdata(){
       this.dumpmaster.map(e=>{
         if(this.dumparea === e.dumpingAreaName ){
          // debugger
          this.dumpingarea = e
          // console.log(this.lgus)
         }
        })
    
    },
     getlgudata(){
       this.lgumaster.map(e=>{
         if(this.lgu === e.lguName ){
          // debugger
          this.lguemployee = e
          // console.log(this.lgus)
         }
        })
    
    },
     async getdumping() {
       try {
      
      const result = await  dumpinglocation()
      this.dumpmaster = result.data.response.dumpingLocation
    this.dumpmaster.map(e=>{
          // debugger
          this.dumps.push(e. dumpingAreaName)
          console.log(this.lgus)
        })
    
      } catch (error) {}
   
    },
    async setPlace(p) {
      let place = await p
      let position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }
      this.position = position
      this.geoLat = this.position.lat
      this.geoLong = this.position.lng
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
          
            code:this.code,
            lguName: this.lguemployee,
           
            dumpingArea:this.dumpingarea ,
          stagingAreaName: this.areaname,
          staging_type: this.stagingtype,
          supervisor: '',
          working_hrs: this.workinghours,
          geoLat: this.geoLat,
          geoLong: this.geoLong,
          isDeleted: true,
          status: 300,
          createdDate: this.createddate,
          createdBy: this.createdby,
          modifiedDate: this.modifydate,
          modifiedBy: this.modifyby,
          address: this.address,
          state: this.state,
          country: this.country,
          description: this.description,
          holiday_message: this.message,
          zip: this.zip,
          city: this.city,
          area: this.area,
        }
        let result = await createstaging(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Staging Successfully`,
            duration: 5000,
          })

          this.$router.push({ path: '/Setup/StagingArea' })
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },
     async getlgus() {
       try {
        
        const result = await  lguEmployees()
        this.lgumaster  = result.data.response.LGUMaster
        console.log(this.lgumaster)
        this.lgumaster.map(e=>{
          // debugger
          this.lgus.push(e.lguName)
          console.log(this.lgus)
        })
       
      } catch (error) {}
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
      <b-card header="Create Stagingarea" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form @submit.prevent="create">
             <b-row class="mb-3">
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
                  oninvalid="this.setCustomValidity('Code is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Code"
                  class="form-control"
                  required
                />
                <!-- Default input text -->
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                  >Dumping Area</label
                >
                <b-form-select
                  v-model="dumparea"
                  @change="getdumpdata"
                  :options="dumps"
                  oninvalid="this.setCustomValidity('Dumping Area is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Select Dumping Area"
                  class="form-control"
                  required
                ></b-form-select>
              </b-col>
            </b-row>
            <b-row class="mb-3">
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Staging Area Name</label
                >
                <input
                  id="defaultFormCardNameEx"
                  v-model="areaname"
                  type="text"
                  oninvalid="this.setCustomValidity('Area Name is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter  Area Name"
                  class="form-control"
                  required
                />
                <!-- Default input text -->
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                  >Staging Type</label
                >
                <b-form-select
                  v-model="stagingtype"
                  :options="option"
                  oninvalid="this.setCustomValidity('Staging Type is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Select Staging Type"
                  class="form-control"
                  required
                ></b-form-select>
              </b-col>
            </b-row>
            <b-row class="mb-3">
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Address</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="address"
                  type="text"
                  oninvalid="this.setCustomValidity('Address is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Address"
                  class="form-control"
                  required
                />
              </b-col>
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >State</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="state"
                  type="text"
                  class="form-control"
                  placeholder="Enter state"
                />
              </b-col>
              <br />
            </b-row>
            <b-row class="mb-3">
              <b-col>
                <!-- Default input text -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >LGU</label
                >
                <b-form-select
                  v-model.trim="lgu"
                  placeholder="Select LGU"
                  @change="getlgudata"
                  label="value"
                  :options="lgus"
                  oninvalid="this.setCustomValidity('lgu is required ')"
                  oninput="setCustomValidity('')"
                  class="form-control"
                  required
                ></b-form-select>
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Working Hours</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="workinghours"
                  type="text"
                  class="form-control"
                  placeholder="Enter working hours"
                />
              </b-col>
            </b-row>
            <b-row class="mb-3">
              <b-col>
                <!-- Default input text -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >City</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="city"
                  type="text"
                  class="form-control"
                  placeholder="Enter city"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Country</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="country"
                  type="text"
                  class="form-control"
                  placeholder="Enter country"
                />
              </b-col>
            </b-row>
            <b-row class="mb-3">
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
                  placeholder="Enter description"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Holiday Message</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="message"
                  type="text"
                  class="form-control"
                  placeholder="Enter holiday message"
                />
              </b-col>
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
            </b-row>
            <b-row class="mb-3">
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Location</label
                >
                <GmapAutocomplete
                  :placeholder="'Select Target Location'"
                  class="form-control"
                  @place_changed="setPlace"
                ></GmapAutocomplete>
              </b-col>
              <b-col>
                <!-- Default input text -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Zip</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="zip"
                  type="text"
                  class="form-control"
                  placeholder="Enter zip"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Area</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="area"
                  type="text"
                  class="form-control"
                  placeholder="Enter area"
                />
              </b-col>
            </b-row>
            <br />
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
