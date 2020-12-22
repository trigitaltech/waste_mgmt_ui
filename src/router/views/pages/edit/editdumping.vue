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
 editdumping,users,Areamasters
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
      baranggay:this.$route.params.area,
      workinghours:this.$route.params.working_hrs,
      message:this.$route.params.holiday_message,
      stagingtype:null,
      createdby:this.$route.params.createdBy,
      createddate:this.$route.params.createdDate,
      modifydate: new Date(),
      modifyby:"",
        code:this.$route.params.code,
      areas:[],
      servingAreas:[],
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
          text: 'Dumping Location',
          href: '#/Setup/DumpingLocation',
        },
        {
          text: 'Edit Dumping',
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
     this.getareas()
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
       getdistricts(){
      this.areas.map( e => {
        if(e.areaName == this.baranggay){
          this.baranggayCode = e.code
          console.log("haii",e.districtId)
          this.district = e.district[0].districtName
          this.state = e.district[0].stateCode.stateName
          this.country = e.district[0].stateCode.countryCode.countryName
        }
      })
    },
    async getareas() {
      try {
        const result = await Areamasters();
        this.areas = result.data.response.areaMaster
        this.areas.map(e=>{
            if(e.areaName!=null)
              this.servingAreas.push(e.areaName);
        })
        console.log(this.servingAreas)
      } catch (error) { 
        console.log(error);
      }
      console.log(this.servingAreas);
    },
    async create() {
      try {
        const payload = {
           id: this.$route.params.id,
          code:this.code,
        dumpingAreaName: this.dumpname,
   
            dumpingType: this.dumptype,
             supervisor: this.supervisor,
                working_hrs:this.workinghours,
                geoLat: this.geoLat,
                geoLong: this.geoLong,
            "isDeleted": false,
           
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
                area: this.baranggay
        }
        let result = await editdumping(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited Dumping Successfully`,
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
        header="Edit Dumping"

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
                    <!-- Default input text -->
                     <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Baranggay</label
                    >
                   <multiselect
                                required
                                v-model="baranggay"
                                placeholder="Select Baranggay"
                                :options="servingAreas"
                                @input="getdistricts"
                              ></multiselect>
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
                  
                  
                  </b-row>
                  <b-row class="mb-3">
                  <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >District</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      v-model="district"
                      type="text"
                      class="form-control"
                      placeholder="Enter district"
                      disabled
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
                      disabled
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
                      disabled
                    />
                  </b-col>
                </b-row>
               
                <b-row class="mb-3">
                    
                    
                </b-row>
                <b-row>
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
