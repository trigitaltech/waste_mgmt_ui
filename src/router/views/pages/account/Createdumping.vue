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
          <!-- Card -->
          <div class="card mx-xl-5">
            <!-- Card body -->
            <div class="card-body">
              <!-- Default form subscription -->
              <form @submit.prevent="create">
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Dumping Area Name</label
                    >
                    <input
                      type="text"
                    
                      v-model="dumpname"
                       oninvalid="this.setCustomValidity('Dumping Area Name is required ')"
                                oninput="setCustomValidity('')"
                               placeholder="Enter Dumping area name"
                                class="form-control"
                                required
                    />

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

                    <br />

                    <!-- Default input text -->
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Address</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="address"
                       oninvalid="this.setCustomValidity('Address is required ')"
                                oninput="setCustomValidity('')"
                               
                              placeholder="Enter Address"
                                required
                    />

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
                  <b-row>
                    
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
                       oninvalid="this.setCustomValidity('Working Hours is required ')"
                                oninput="setCustomValidity('')"
                               placeholder="Enter working hours"
                               
                                required
                    />
                  </b-col>
               
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
                      v-model="description"
                      placeholder="Enter description"
                    />

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Holiday Message</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      placeholder="Enter holidaymessage"
                      v-model="message"
                    />
                  </b-col>
                </b-row>
               
                <b-row>
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
                      v-model="zip"
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
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      placeholder="Enter area"
                      v-model="area"
                    />
                  </b-col>
                </b-row>
                <br />
               <button
                         
                          style="
                            background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                          type="submit"
                         class="btn btn-info float-right mr-2"
                          >Submit</button
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
