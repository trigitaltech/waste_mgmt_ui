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
 editdumping,users
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
      address:this.$route.params.address,
      dumpname:this.$route.params.dumpingAreaName,
      dumptype:this.$route.params.dumpingType,
      description:this.$route.params.description,
      supervisor:this.$route.params.supervisor,
      city:this.$route.params.city,
      state:this.$route.params.state,
      country:this.$route.params.country,
      zip:this.$route.params.zip,
       geoLat:this.$route.params.geoLat,
      geoLong:this.$route.params.geoLong,
      area:this.$route.params.area,
      workinghours:this.$route.params.working_hrs,
      message:this.$route.params.holiday_message,
      stagingtype:null,
      createdby:this.$route.params.createdBy,
      createddate:this.$route.params.createdDate,
      modifydate: new Date(),
      modifyby:"",
       option: [
      
        { value: 'solidwaste', text: 'Solidwaste' },
        { value: 'organicewaste', text: 'Organicwaste' },
      ],
      title: 'Register',
     item:[],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Dumping Location / View Dumping',
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
    console.log(this.$route.params)
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
           id: this.$route.params.id,
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
        let result = await editdumping(payload)
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
        header="View Dumping"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              <form>
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
                    id="defaultFormCardNameEx"
                      v-model="dumpname"
                      disabled
                      type="text"
                      class="form-control"
                    />

                   <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Dumping Type</label
                    >
                  <input
                    id="defaultFormCardEmailEx"
                      v-model="dumptype"
                      disabled
                      type="email"
                      class="form-control"
                    />

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
                    id="defaultFormCardEmailEx"
                      v-model="address"
                      disabled
                      type="email"
                      class="form-control"
                    />

                    <!-- Default input name -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >State</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="state"
                      disabled
                      type="email"
                      class="form-control"
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
                 <input
                    id="defaultFormCardEmailEx"
                      v-model="supervisor"
                      disabled
                      type="email"
                      class="form-control"
                    />

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Working Hours</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="workinghours"
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
                      >City</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="city"
                      disabled
                      type="email"
                      class="form-control"
                    />

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Country</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="country"
                      disabled
                      type="email"
                      class="form-control"
                    />
                  </b-col>
                  
                </b-row>
                <b-row>
                    
                     <!-- <b-col md="3">
                     <p class="head">Location</p>
                        <GmapAutocomplete
                          @place_changed="setPlace"
                          :placeholder="'Select Target Location'"
                          class="form-control"
                        ></GmapAutocomplete>
                      </b-col> -->
                  
                  
<b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="description"
                      disabled
                      type="email"
                      class="form-control"
                    />

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Holiday Message</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="message"
                      disabled
                      type="email"
                      class="form-control"
                    />
                  </b-col>
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
                    id="defaultFormCardEmailEx"
                      v-model="zip"
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
                      >Area</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="area"
                      disabled
                      type="email"
                      class="form-control"
                    />
                  </b-col>
                </b-row>
                <br />
                <!-- <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-custome float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Edit</b-button -->
                <!-- > -->
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
