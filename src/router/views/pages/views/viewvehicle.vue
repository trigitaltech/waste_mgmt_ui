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
import {routemaster,Areamasters,employees,editvehicle}from '../../../../services/auth'

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
     vehicleno:this.$route.params.vehicleNo,
     vehicletype:this.$route.params.vehicleType.truckType,
     plateno:this.$route.params.plateNo,
     equipmentid:this.$route.params.equipmentId,
     ownername:this.$route.params.ownerName,
     ownerid:this.$route.params.ownerId,
     description:this.$route.params.description,
     servingarea:this.$route.params.servingArea,
     servingroute:this.$route.params.servingRoute,
     manufacturedate:this.$route.params.haulerId,
     totalkmsserved:this.$route.params.totalKmServed,
     totalhoursserved:this.$route.params.totalHourServed,
      createdby:this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
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
          text: 'Haulers',
          href: '/',
        },
         {
          text: 'HaulerVehicles',
          href: '#/Hauler/Vehicle',
        },
        
        {
          text: 'View Vehicle',
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
    console.log(this.$route.params)
    // this.areadata()
    // this.employeedata()
    // this.routedata()
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
            id:this.$route.params.id,
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
        let result = await editvehicle(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited Vehicle Successfully`,
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
        header="View Vehicle"

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
                     Vehicle No</label
                    >
                    <input
                    id="defaultFormCardNameEx"
                      v-model="vehicleno"
                      disabled
                      type="text"
                      class="form-control"
                    />

                   <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Vehicle Type</label
                    >
                    <input
                    id="defaultFormCardNameEx"
                      v-model="vehicletype"
                      disabled
                      type="text"
                      class="form-control"
                    />

                    <br />

                    <!-- Default input text -->
                  </b-col>
                 <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Plate NO</label
                    >
                    <input
                    id="defaultFormCardtextEx"
                      v-model="plateno"
                      disabled
                      type="text"
                      class="form-control"
                    />
                     
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Hauler Name</label
                    >
                    <input
                    id="defaultFormCardtextEx"
                      v-model="manufacturedate"
                      disabled
                      type="text"
                      class="form-control"
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
                      >Total Kms Served</label
                    >
                    <input
                    id="defaultFormCardtextEx"
                      v-model="totalkmsserved"
                      disabled
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
                      disabled
                      type="text"
                      class="form-control"
                    />
                  </b-col>
                  
                </b-row>
                <b-row>
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
                      disabled
                      type="text"
                      class="form-control"
                    />
                     </b-col>
                   
                </b-row>
                <br />
                 <b-row>
                  
                     <b-col>
                   
                     </b-col>
                </b-row>
                <!-- <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-custome float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Create</b-button
                > -->
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
