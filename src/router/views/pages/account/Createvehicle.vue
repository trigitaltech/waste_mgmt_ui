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
import {routemaster,Areamasters,employees,createvehicle}from '../../../../services/auth'

export default {
  page: {
    title: 'Create Equipment',
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
     vehicleno:"",
     vehicletype:"",
     plateno:"",
     equipmentid:"",
     ownerid:"",
     description:"",
     servingarea:"",
     servingroute:"",
     manufacturedate:"",
     totalkmsserved:"",
     totalhoursserved:"",
      createdby: "",
      createddate: new Date(),
      modifydate: new Date(),
      modifyby:"",
       option: [
        { value: null, text: 'Please select an option' },
        { value: 'Areastaging', text: 'Area Staging' },
        { value: 'Centralstaging', text: 'Central Staging' },
      ],
      item:[ ],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Vehicle / Create Vehicle',
          active: true,
        },
      ],
   owners:[],
   emp:[],
   routes:[],
    
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
    this.areadata()
    this.employeedata()
    this.routedata()
  },
  methods: {
       getid(){
        console.log("haiiiiii",)
        this.emp.map(e=>{
            if(this.ownername === e.userName){
                this.ownerid = e.id    
                       }
        })
      },
       async routedata() {
       try {
      
      const result = await routemaster()
      var data = result.data.response.RouteMaster
    //   console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      data.map(e=>{
      this.routes.push(e.routeName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
     },
     async areadata() {
       try {
      
      const result = await Areamasters()
      var data = result.data.response.areaMaster
    //   console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      data.map(e=>{
      this.item.push(e.areaName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
     },
      async employeedata() {
       try {
      
      const result = await employees()
      this.emp = result.data.response.result
    //   console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      this.emp.map(e=>{
      this.owners.push(e.userName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
     },
    async create() {
      try {
        const payload = {
            vehicleType: this.vehicletype,
            vehicleNo: this.vehicleno,
            plateNo: this.plateno,
            ownerName: this.ownername,
            ownerId: this.ownerid,
            equipmentId: this.equipmentid,
            servingArea: this.servingarea,
            servingRoute: this.servingroute,
            manufactureDate: this.manufacturedate,
            warrantyStatus: "NOT EXPIRED",
            totalKmServed: this.totalkmsserved,
            totalHourServed:this.totalhoursserved,
            description:this.description,
            isDeleted: false,
            status: 22,
            createdDate: this.createddate,
            createdBy: this.createdby,
            modifiedDate: this.modifydate,
            modifiedBy: this.modifyby
        }
        let result = await createvehicle(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Vehicle Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Vehicle'})
            
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
        header="Create Vehicle"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              <form>
                <b-row class="mb-3">
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Vehicle No</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="vehicleno"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Vehicle Type</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="vehicletype"
                    />
                  </b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Owner Name</label
                    >
                     <b-form-select
                  v-model.trim="ownername"
                  placeholder="Select Supervisor"
                  label="value"
                  class="form-control"
                @change="getid()"
                  :options="owners"
                ></b-form-select>

                    <!-- Default input name --> 
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Plate NO</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="plateno"
                    />
                  </b-col>
                </b-row>
                  <b-row class="mb-3">
                    
                      <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Serving Area</label
                    >
                    <b-form-select
                  v-model.trim="servingarea"
                  placeholder="Select Supervisor"
                  label="value"
                  class="form-control"
                  :options="item"
                ></b-form-select>
                  </b-col>
               <b-col>
                 <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Serving Route</label
                    >
                    <b-form-select
                  v-model.trim="servingroute"
                  placeholder="Select Supervisor"
                  label="value"
                  class="form-control"
                  :options="routes"
                ></b-form-select>
               </b-col>
                  </b-row>
               <b-row class="mb-3">
                 <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Total Kms Served</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="totalkmsserved"
                    />
                  </b-col>
                  <b-col>
                     <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Total Hours Served</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="totalhoursserved"
                    />
                  </b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >ManufactureDate</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="manufacturedate"
                    />
                     </b-col>
                     <b-col>
                     <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Equipment Id</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="equipmentid"
                    />

                     </b-col>
                </b-row>
                 <b-row class="mb-3">
                   <b-col cols="12">
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
                    />
                     </b-col>
                </b-row>
                <b-button
                  class="btn btn-custome float-right btn-secondary mb-3"
                  text="Create Tenant"
                  @click="create"
                  >Create</b-button
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
