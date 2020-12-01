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

        class="mt-10 ml-10 mr-10 mx-auto"
      >
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
                     Staging Area Name</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                    
                      v-model="areaname"
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
                      type="text"
                      id="defaultFormCardtextEx"
                     
                      v-model="address"
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
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="state"
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
                      >Supervisor</label
                    >
                    <b-form-select
                  v-model.trim="supervisor"
                  placeholder="Select Supervisor"
                  label="value"
                  :options="item"
                   oninvalid="this.setCustomValidity('supervisor is required ')"
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
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="workinghours"
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
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="city"
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
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="country"
                      placeholder="Enter country"
                    />
                  </b-col>
                </b-row>
                <b-row class="mb-3">
                   <b-col >
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      placeholder="Enter description"
                      v-model="description"
                    />
                  </b-col>
                  <b-col>
                     <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Holiday Message</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="message"
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
                     <p class="head">Location</p>
                        <GmapAutocomplete
                          @place_changed="setPlace"
                          :placeholder="'Select Target Location'"
                          class="form-control"
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
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      placeholder="Enter zip"
                      v-model="zip"
                    />

                  
                  </b-col>
                  <b-col>
                      <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Area</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="area"
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
