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
import {editstaging,users,lguEmployees ,dumpinglocation,Areamasters,getlgubyId}from '../../../../services/auth'
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
         dumparea:"",
      lgumaster:[],
         areas:[],
      servingAreas:[],
    master:[],
      dumpmaster:[],
      code:this.$route.params.code,
      lgu:"",
      dumps:[],
      lgus:[],
      address:this.$route.params.address,
      areaname:this.$route.params.stagingAreaName,
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
      stagingtype:this.$route.params.staging_type,
      createdby: "",
      createddate: new Date(),
      modifydate: new Date(),
      modifyby:"",
       option: [
       
        { value: 'Areastaging', text: 'Area Staging' },
        { value: 'Centralstaging', text: 'Central Staging' },
      ],
      item:[ ],
      lguemployee:[],
        lgus:[],
      lgudata:[],
      lguid:"",
      areas:[],
      servingAreas:[],
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
          text: 'Edit Staging',
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
    console.log(this.$route.params)
    this.userdata()
    //  this.getlgus()
    this.getdumping()
     this.getareas()
  },
  methods: {
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
       async getdistricts(){
        for(var i = 0 ; i<this.areas.length ;i++){
       if(this.baranggay === this.areas[i].areaName){
          this.lguid = this.areas[i].lguId
         
          const result = await getlgubyId(this.lguid)
          this.master = result.data.response.result
         
        
            this.lgus.push(this.master.lguName)
        
         
            this.district = this.areas[i].district[0].districtName
          this.state = this.areas[i].district[0].stateCode.stateName
          this.country = this.areas[i].district[0].stateCode.countryCode.countryName
       }
     }
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
     
         if(this.lgu === this.master.lguName ){
          // debugger
          this.lguemployee = this.master
          // console.log(this.lgus)
         }
     
    
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
                id:this.$route.params.id,
                 code:this.code,
                 lguName: this.lguemployee,
                 dumpingArea:this.dumpingarea ,
                stagingAreaName:this.areaname,
                staging_type:this.stagingtype,
                supervisor: this.supervisor,
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
                state:this.state,
                country: this.country,
                description: this.description,
                holiday_message:this.message,
                zip: this.zip,
                city: this.city,
                area: this.area
            }
        let result = await editstaging(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited Staging Successfully`,
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
        header="Edit Stagingarea"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
                  <form @submit.prevent="create">
           
            <b-row class="mb-3">
              
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
              <br />
            </b-row>
           
            <b-row class="mb-3">
              
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
            </b-row>
              <b-row class="mb-3">
              <!-- <b-col>
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
              </b-col> -->
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
