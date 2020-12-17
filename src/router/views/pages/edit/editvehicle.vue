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
import {routemaster,Areamasters,employees,editvehicle ,vehicleTypes,haulers}from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Vehicle',
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
        haulers:[],
      haulerdata:[],
      haulernames:[],
     vehicleno:this.$route.params.vehicleNo,
     vehicletype:this.$route.params.vehicleType.code,
     plateno:this.$route.params.plateNo,
     equipmentid:this.$route.params.equipmentId,
     ownername:this.$route.params.ownerName,
     ownerid:this.$route.params.ownerId,
     description:this.$route.params.description,
     servingarea:this.$route.params.servingArea,
     servingroute:this.$route.params.servingRoute,
     manufacturedate:this.$route.params.manufactureDate,
     totalkmsserved:this.$route.params.totalKmServed,
     totalhoursserved:this.$route.params.totalHourServed,
      createdby:this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
      warrantystatus:this.$route.params.warrantyStatus,
      code:this.$route.params.code,
      modifydate: new Date(),
      modifyby:"",
       option: [
        { value: null, text: 'Please select an option' },
        { value: 'Areastaging', text: 'Area Staging' },
        { value: 'Centralstaging', text: 'Central Staging' },
      ],
      item:[ ],
      vehicletype:[],
vehiclecapacity:"",
      items: [
        {
          text: 'Haulers',
          href: '/',
        },
         {
          text: 'HaulerVehicles',
          href: '#/Hauler/Vehicle',
        },
        {
          text: 'Edit Vehicle',
          active: true,
        },
      ],
      haulername:"",
   owners:[],
   vehicleTypesNames:[],
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
    console.log(this.$route.params)
    this.areadata()
    this.employeedata()
    this.routedata()
    this.getVehicleTypes()
      this.getemployees()
  },
  methods: {
    async getemployees() {
       try {
       
      const result = await haulers()
      this.haulerdata  = result.data.response.HaulerMaster
      this.haulerdata.map(e=>{
        this.haulernames.push(e.haulerName)
      })

      
      } catch (error) {}
   
    },
    gethauler(){
this.haulerdata.map(e=>{
  if(this.haulername === e.haulerName){
    this.haulers =  e
  }
})


    },
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
      async getVehicleTypes() {
      var result = await vehicleTypes()
      this.vehicleTypes = result.data.response.VehiclesUpdated
      this.vehicleTypes.map( e => {
        this.vehicleTypesNames.push(e.truckType)
      })
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
       var vehicletype = [];
      this.vehicleTypes.map( e => {
        if(e.truckType == this.vehicletype)
          vehicletype.push(e)
      })
      try {
        const payload = {
           "vehicleType": {
            "id":vehicletype[0].id,
            "code":vehicletype[0].code,
            "createdBy":vehicletype[0].createdBy,
            "modifiedBy":vehicletype[0].modifiedBy,
            "createdDate":vehicletype[0].createdDate,
            "modifiedDate":vehicletype[0].modifiedDate,
            "isDeleted":null,
            "truckType":vehicletype[0].truckType
          },
            id:this.$route.params.id,
             volumeCapacity:this.vehiclecapacity,
            vehicleNo: this.vehicleno,
            plateNo: this.plateno,
            code:this.code,
            ownerName: this.ownername,
            ownerId: this.ownerid,
            equipmentId: this.equipmentid,
            servingArea: this.servingarea,
            servingRoute: this.servingroute,
            manufactureDate: this.manufacturedate,
            warrantyStatus:this.warrantystatus,
            totalKmServed: this.totalkmsserved,
            totalHourServed:this.totalhoursserved,
            description:this.description,
              hauler:this.haulers,
            isDeleted: false,
            status: 22,
            createdDate: this.createddate,
            createdBy: this.createdby,
            modifiedDate: this.modifydate,
            modifiedBy: this.modifyby
        }
        let result = await editvehicle(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited Vehicle Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Hauler/Vehicle'})
            
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
        header="Edit Vehicle"

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
                     Vehicle No</label
                    >
                    <input
                      id="defaultFormCardNameEx"
                      v-model="vehicleno"
                      type="text"
                      class="form-control"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Vehicle Type</label
                    >
                    <b-form-select
                      v-model.trim="vehicletype"
                      placeholder="Select Vehicle Type"
                      label="value"
                      class="form-control"
                      :options="vehicleTypesNames"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Code</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      v-model="code"
                      type="text"
                      class="form-control"
                    />
                     <!--<b-form-select
                  v-model.trim="ownername"
                  placeholder="Select Supervisor"
                  label="value"
                  class="form-control"
                :options="owners"
                  @change="getid"
                ></b-form-select>-->

                    <!-- Default input name --> 
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Plate NO</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      v-model="plateno"
                      type="text"
                      class="form-control"
                    />
                  </b-col>
                </b-row>
                  <!--<b-row class="mb-3">
                    
                      <b-col>
                    <!- Default input text 
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
                  </b-row>-->
               <b-row class="mb-3">
                 <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Total Kms Served</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      v-model="totalkmsserved"
                      type="text"
                      class="form-control"
                    />
                  </b-col>
                  <b-col>
                     <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Total Hours Served</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      v-model="totalhoursserved"
                      type="text"
                      class="form-control"
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
                    />
                     </b-col>
                 <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >WarrantyStatus</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      v-model="warrantystatus"
                      type="text"
                      class="form-control"
                    />

                 </b-col>
                 
                     <!-- </b-col> -->
                </b-row>
                   <b-row class="mb-3">
                  <b-col md="6">
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Hauler</label
                    >
                    <multiselect
                                v-model="haulername"
                                placeholder="Select Hauler"
                                :options="haulernames"
                                @input="gethauler"
                              ></multiselect>
                     </b-col>
                 <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Vehicle Capacity</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      v-model="vehiclecapacity"
                       placeholder="Enter Vehicle Capacity"
                      type="text"
                      class="form-control"
                    />
                 </b-col>
                 
                     <!-- </b-col> -->
                </b-row>
                <button
                          type="submit"
                         class="btn btn-custome float-right btn-secondary mb-3"
                          >Create</button>
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
