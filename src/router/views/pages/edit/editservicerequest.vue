<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import VueTimepicker from 'vue2-timepicker'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 dumpinglocation,users,editservicerequest,equipment,employees
} from '../../../../services/auth'
import { Datetime } from 'vue-datetime';
export default {
  page: {
    title: 'Edit Servicerequest',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    VueTimepicker,
      datetime: Datetime,
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
      operators:[],
      employe:[],
      users:[],
      status:this.$route.params.status,
      type:[],
      tripdate:this.$route.params.tripDate,
      time:this.$route.params.jobStartTime,
      requesttype:this.$route.params.requestType,
      equipmentno:"",
      equipmentid:"",
      equipmentperformance:"",
      equipmentusage:"",
      equipmenttype:"",
      operatorname:this.$route.params.operatorName,
      operator:"",
      dumparea:this.$route.params.dumpingArea,
      drivername:this.$route.params.driverName,
      driverid:"",
      controlcheckerid:"",
      controlcheckername:this.$route.params.controlChekerName,
      operatorid:"",
     
      dump:[],
      createdby: "",
      createddate: new Date(),
      modifydate: new Date(),
      modifyby:"",
       option: [
       
        { value: 'SOILTRUCK', text: 'SOIL TRUCK' },
        { value: 'EQUIPMENT', text: 'EQUIPMENT' },
      ],
      title: 'Register',
     item:[{ value: null, text: 'Please select an user' }],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'ServiceRequests / Edit Servicerequest',
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
    this.getdumping()
    this.getequipment()
    this.userdata()
    this.getemployees()
  },
  methods: {
    async getuid(){
       this.users.map(e=>{
         if(this.controlcheckername === e.userName){ 
        this.controlcheckerid === e.id
         }
      })
           
    },
     async userdata() {
       try {
    
      const result = await users()
      var item = result.data.response.Users
      item.map(e=>{
        this.users.push(e.userName)
      })
     
      } catch (error) {}
     },
    async getdumping() {
       try {
      
      const result = await  dumpinglocation()
      var data = result.data.response.dumpingLocation
      
    

      data.map(e=>{
      this.dump.push(e.dumpingAreaName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
     },
       async getemployees() {
       try {
       
      const result = await  employees()
      this.employe = result.data.response.result
    this.employe.map(e=>{
this.operators.push(e.type)
    })


      } catch (error) {}
   
    },
    async create() {
      console.log("hai")
      try {
        const payload = {
             
                id: this.$route.params.id,
              "tripDate": "2020-11-26T10:00:44.000+00:00" ,
                "equipmentNo": "635GH",
                "equipmentId": "DS513",
                "equipmentType": "Compactt",
                "jobStartTime": "2020-11-26T10:00:44.000+00:00",
                "jobEndTime": "2020-11-26T10:00:44.000+00:00",
                "requestType": "soil Truck",
                "dumpingArea": "kukatpally",
                "driverName": "cindy",
                "driverId": 321,
                "operatorId": 41321,
                "controlCheckerid": 421,
                "controlChekerName": "Candy",
                "totalKmServed": 11,
                "isDeleted": "false",
                "status": "ASSIGNED",
                "createdBy": "encoder",
                "modifiedBy": "Admin",
                "equipment_PERFORMANCE": 36,
                "equipment_USAGE": 33,
                "lgu": "Admin",
                "operatorName": "Mindy"
           
            }
            console.log("hello")
        let result = await editservicerequest(payload)
        console.log("hi",result)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited Service Request Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Servicerequestdetails'})
            
        }
      } catch (e) {
        console.log("hi")
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
      async getequipment() {
       try {
      
      const result = await  equipment()
      var item = result.data.response.equipment
       item.map(e=>{
      this.type.push(e.equipmentType)
      console.log("user",e)
      })
      } catch (error) {}
   
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
        header="Edit Servicerequest"
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
              <form >
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Dumping Area </label
                    >
                    <b-form-select
                        v-model="dumparea"
                      :options="dump"
                    
                    ></b-form-select>


                   <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Request Type</label
                    >
                    <b-form-select
                      v-model="requesttype"
                      :options="option"
                    
                    ></b-form-select>

                    <br />

                    <!-- Default input text -->
                  </b-col>
                  <b-col >
                      <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Date</label
                    >
            <datetime type="datetime" v-model="tripdate" input-class="form-control"></datetime>

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Start Time</label
                    >
                    <b-col >
                <vue-timepicker v-model="time" format="hh:mm A" input-class="form-control"></vue-timepicker>
                    </b-col>
                    <!-- Default input name -->
                  </b-col>
                  <br />               
                </b-row>
                  <b-row v-if="this.requesttype === 'soil Truck'">
                    
                      <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Plate</label
                    >
                <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="plate"
                        placeholder="Enter Plate"
                    />

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Body</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="body"
                        placeholder="Enter BODY"
                    
                    />
                  </b-col>
               
                 <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Driver Name</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="drivername"
                       placeholder="Enter Driver Name"
                    />

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Truck Type</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="trucktype"
                        placeholder="Enter Truck Type"
                    
                    />
                  </b-col>
                  
                </b-row>
                  <b-row v-if="this.requesttype === 'EQUIPMENT'">
                    
                      <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >EQUIPMENT NO</label
                    >
                <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="equipmentno"
                        placeholder="Enter Equipment No"
                    />

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >EQUIPMENT ID</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="equipmentid"
                        placeholder="Enter Equipment ID"
                    
                    />
                  </b-col>
               
                 <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >EQUIPMENT TYPE</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="equipmenttype"
                       placeholder="Enter Equipment Type"
                    />

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >EQUIPMENT USAGE</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="equipmentusage"
                        placeholder="Enter Equipment Usage"
                    
                    />
                  </b-col>
                  
                </b-row>
             <b-row>
                    <!-- Default input text -->
                    <b-col v-if="this.requesttype === 'EQUIPMENT'">
                          <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >EQUIPMENT PERFORMANCE</label>
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="equipmentperformance"
                        placeholder="Enter Equipment Performance"
                    
                    />
                    </b-col>
                    <b-col>
                   
                  
                    
                    </b-col>
                
                </b-row>
                <b-row>
                  <b-col>
                     <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Operator</label>
                   <b-form-select
                      v-model="operatorname"
                      :options="operators"
                    
                    ></b-form-select>
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Control Checker</label>
                   <b-form-select
                      v-model="controlcheckername"
                      :options="users"
                    @change="getuid()"
                    ></b-form-select>
                  
                    
                    </b-col>
                </b-row>
                <br />
               <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-info float-right mr-2"
                  text="Create Tenant"
                  @click="create()"
                  >Edit</b-button
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

 .vue__time-picker input.display-time {
    
    display: block;
    width: 380%;
    height: calc( 1.5em + 1rem + 2px );
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #4b4b5a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e2e7f1;
    border-radius: 0.3rem;
}
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
