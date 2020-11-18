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
import {createstaging,users}from '../../../../services/auth'
import csc from "country-state-city";
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
      areaname:"",
      description:"",
      supervisor:null,
      city:"",
      state:"",
      country:"",
      zip:"",
      geoLat:"",
      geoLong:"",
      area:"",
      workinghours:"",
      message:"",
      stagingtype:null,
      createdby: "",
      createddate: new Date(),
      modifydate: new Date(),
      modifyby:"",
       option: [
        { value: null, text: 'Please select an option' },
        { value: 'Areastaging', text: 'Area Staging' },
        { value: 'Centralstaging', text: 'Central Staging' },
      ],
      item:[ { value: null, text: 'Please select an user' }],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Staging Area / Create Staging',
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
  },
  methods: {
     async setPlace(p) {
      let place = await p;
      let position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.position = position;
      this.geoLat = this.position.lat
      this.geoLong = this.position.lng
      
    },
     async userdata() {
       try {
      
      const result = await users()
      var data = result.data.response.Users
      console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      data.map(e=>{
      this.item.push(e.userName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
     },
    async create() {
      try {
        const payload = {
                stagingAreaName:this.areaname,
                staging_type: this.stagingtype,
                supervisor: this.supervisor,
                working_hrs:this.workinghours,
                geoLat: this.geoLat,
                geoLong: this.geoLong,
                "isDeleted": true,
                "status": 300,
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
                area: this.area
            }
        let result = await createstaging(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Staging Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Setup/StagingArea'})
            
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
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
      <b-card
        header="Create Stagingarea"
        header-bg-variant="info"
        border-variant="info"
        header-text-variant="white"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
          <!-- Card -->
          <div class="card mx-xl-5">
            <!-- Card body -->
            <div class="card-body">
              <!-- Default form subscription -->
              <form>
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Staging Area Name</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="areaname"
                    />

                   <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Staging Type</label
                    >
                    <b-form-select
                      v-model="stagingtype"
                      :options="option"
                      class="form-control"
                      id="defaultFormCardEmailEx"
                    ></b-form-select>

                    <br />

                    <!-- Default input email -->
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Address</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="address"
                    />

                    <!-- Default input name -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >State</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="state"
                    />
                  </b-col>
                  <br />
                </b-row>
                  <b-row>
                    
                      <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Supervisor</label
                    >
                    <b-form-select
                  v-model.trim="supervisor"
                  placeholder="Select Supervisor"
                  label="value"
                  :options="item"
                ></b-form-select>
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Working Hours</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="workinghours"
                    />
                  </b-col>
               
                 <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >City</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="city"
                    />

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Country</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="country"
                    />
                  </b-col>
                  
                </b-row>
                <b-row>
                  <b-col md="3">
                     <p class="head">Location</p>
                        <GmapAutocomplete
                          @place_changed="setPlace"
                          :placeholder="'Select Target Location'"
                          class="form-control"
                        ></GmapAutocomplete>
                      </b-col>
                   <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="description"
                    />

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Holiday Message</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="message"
                    />
                  </b-col>
                   <!-- <b-col> -->
                    <!-- Default input email -->
                    <!-- <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Created Date</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="createddate"
                    />

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Modify Date</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="modifydate"
                    />
                  </b-col> -->
                </b-row>
                <b-row>
                   
                  
                  
                </b-row>
                <b-row>
                <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Zip</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="zip"
                    />

                  
                  </b-col>
                  <b-col>
                      <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Area</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="area"
                    />
                  </b-col>
                  
                </b-row>
                <br />
                <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-info float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Create</b-button
                >
              </form>
              <!-- Default form subscription -->
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
<style lang="scss">
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
}
</style>
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
