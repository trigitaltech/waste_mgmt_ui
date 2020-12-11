<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { Datetime } from 'vue-datetime';
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {createequipment,Areamasters,employees}from '../../../../services/auth'

export default {
  page: {
    title: 'Create Equipment',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
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
     equipmentno:"",
     equipmenttype:"",
     ownername:"",
     equipmentid:"",
     ownerid:"",
     description:"",
     servingarea:"",
     manufacturedate:"",
     totalkmsserved:"",
     totalhoursserved:"",
      createdby: "",
      createddate: new Date(),
      modifydate: new Date(),
      modifyby:"",
      item:[],
       option: [
        { value: null, text: 'Please select an option' },
        { value: 'Areastaging', text: 'Area Staging' },
        { value: 'Centralstaging', text: 'Central Staging' },
      ],
      item1:[{ value: 'Truck', text: 'Truck' },
        { value: 'Machine', text: 'Machine' }],
      items: [
        {
          text: 'Haulers',
          href: '/',
        },
         {
          text: 'HaulerEquipment',
          href: '#/Hauler/Equipment',
        },
        
        
        {
          text: 'Create Equipment',
          active: true,
        },
      ],
   owners:[],
   emp:[],
    
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
            equipmentType:this.equipmenttype,
            equipmentNo:parseInt(this.equipmentno),
            ownerName: String(this.ownername),
            ownerId:this.ownerid,
            equipmentId:parseInt(this.equipmentid),
            manufactureDate: this.manufacturedate,
            warrantyStatus: "NOT EXPIRED",
            totalKmServed: parseInt(this.totalkmsserved),
            totalHourServed: parseInt(this.totalhoursserved),
            description:this.description,
            isDeleted: false,
            status:"WORKING",
            createdBy: this.createdby
        }
        let result = await createequipment(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Equipment Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Hauler/Equipment'})
            
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
        header="Create Equipment"

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
                     Equipment No</label
                    >
                    <input
                      type="number"
                      id="defaultFormCardNameEx"
                      v-model="equipmentno"
                     
                      class="form-control"
                    /> <!-- Default input text -->
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Equipment Type</label
                    >
                    <b-form-select
                      v-model.trim="equipmenttype"
                      placeholder="Select Equipment"
                      label="value"
                      class="form-control"
                      :options="item1"
                ></b-form-select>
                  </b-col>
                </b-row>
                <b-row >
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
                :options="owners"
                  @change="getid"
                ></b-form-select>
               
                     <!-- Default input name -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Equipment Id</label
                    >
                    <input
                      type="number"
                      id="defaultFormCardtextEx"
                      v-model="equipmentid"
                    
                      class="form-control"
                    />
                  </b-col>
                </b-row>
                  <b-row >
                    <b-col>
                    <!-- Default input text -->
                    <!--<label
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
                ></b-form-select>-->
                
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Manufacture Date</label
                    >
                    <datetime 
                      v-model="manufacturedate"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                      }"
                      id="defaultFormCardtextEx"
                 ></datetime>
                  </b-col>
               
                 <b-col >
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Total Kms Served</label
                    >
                    <input
                      type="number"
                      id="defaultFormCardtextEx"
                      v-model="totalkmsserved"
                    
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
                      type="number"
                      id="defaultFormCardtextEx"
                      v-model="totalhoursserved"
                   
                      class="form-control"
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
