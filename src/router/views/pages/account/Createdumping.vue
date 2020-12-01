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
 createdumping,users
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Dumping',
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
      
      dumpname:"",
      dumptype:"",
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
        { value: 'solidwaste', text: 'Solidwaste' },
        { value: 'organicewaste', text: 'Organicwaste)' },
      ],
      title: 'Register',
     item:[{ value: null, text: 'Please select an user' }],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Dumping Location / Create Dumping',
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
    // this.getClientDetails()
    // this.getplans()
       this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    this.userdata()
  },
  methods: {
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
            dumpingAreaName: this.dumpname,
            dumpingType: this.dumptype,
             supervisor: this.supervisor,
                working_hrs:this.workinghours,
                geoLat: this.geoLat,
                geoLong: this.geoLong,
            "isDeleted": true,
            "status": 404,
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
        let result = await createdumping(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Dumping Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Setup/DumpingLocation'})
            
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },
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
        header="Create Dumping"

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
                     Dumping Area Name</label
                    >
                    <input
                      v-model="dumpname"
                    
                      type="text"
                       oninvalid="this.setCustomValidity('Dumping Area Name is required ')"
                                oninput="setCustomValidity('')"
                               placeholder="Enter Dumping area name"
                                class="form-control"
                                required
                    />
                  </b-col>
                    <b-col>
                      <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Dumping Type</label
                    >
                    <b-form-select
                      v-model="dumptype"
                      :options="option"
                      oninvalid="this.setCustomValidity('Dumping Type is required ')"
                                oninput="setCustomValidity('')"
                               
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
                      class="form-control"
                       oninvalid="this.setCustomValidity('Address is required ')"
                                oninput="setCustomValidity('')"
                               
                              placeholder="Enter Address"
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
                   oninvalid="this.setCustomValidity('Supervisor is required ')"
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
                       oninvalid="this.setCustomValidity('Working Hours is required ')"
                                oninput="setCustomValidity('')"
                               placeholder="Enter working hours"
                                required
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
                      placeholder="Enter holidaymessage"
                    />
                  </b-col>
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
                    <!-- Default input text -->
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
