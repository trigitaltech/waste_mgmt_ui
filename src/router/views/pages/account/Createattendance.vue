<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import moment from 'moment'
import { Datetime } from 'vue-datetime';
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 createattendance,users,employees
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create AreaMaster',
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
      taskref:"",
     emp:[],
     owners:[],
     status:"",
     empname:"",
     empid:"",
     description:this.$route.params.description,
     recordDate:"",
      timein:"",
        timeout:"",
      createdby: "",
      createddate: new Date(),
      modifydate: new Date(),
      modifyby:"",
      item:[ { value: 'CHECK_IN', text: 'Check IN' }],
      ite:[],
       option: [
        { value: null, text: 'Please select an option' },
        { value: 'urban', text: 'Urban' },
        { value: 'rural', text: 'Rural' },
        
      ],
      items: [
       
         {
          text: 'Home',
          href: '/',
        },
        
         {
          text: 'Attendances',
          href: ' #/Employee/Attendance',
        },
       
        {
          text: 'CHECK IN',
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
this.employeedata() 

  },
  methods: {
    async create() {
      try {
        const payload =  {
          
                recordDate:this.recordDate,
                employeeId: this.empid,
                time_in: this.timein,
                isDeleted: false,
                createdDate: this.createddate,
                createdBy: this.createdby,
                modifiedDate: this.modifydate,
                modifiedBy: this.modifyby
        }
        let result = await createattendance(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You CheckedIN Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Employee/Attendance'})
            
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },
     getid(){
        console.log("haiiiiii",)
        this.emp.map(e=>{
            if(this.empname === e.userName){
                this.empid = e.id    
                  }
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
        header="CHECK IN"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
             <form @submit.prevent="create">
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Time In</label
                    >
                      <datetime 
                      v-model="timein"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        second: '2-digit',
                        milisecond: '2-digit'
                      }"
                      type="datetime"
                      placeholder="SELECT TIME IN"
                      name="startdate"
                 ></datetime>

                  </b-col>
                  <b-col md="9">
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Employee</label
                    >

                   <b-form-select
                  v-model.trim="empname"
               
                                placeholder="Select Employee"
                                class="form-control"
                              
                  :options="owners"
                  @change="getid"
                  
                ></b-form-select>
                  </b-col>

                     <!-- <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                   <input
                      v-model="description"
                      class="form-control"
                      placeholder="Enter Description"
                      name="startdate"
                    /> -->
                  
                    <!-- Default input text -->
                  <!-- </b-col>
                  
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Time Out</label
                    >
                     <flat-pickr
                      v-model="timeout"
                      class="form-control"
                      placeholder="SELECT TIME OUT"
                      name="startdate"
                    ></flat-pickr> -->

                    <!-- Default input name -->
                  
             
              
                  <br />
                
                
                  
               
                </b-row>
                 <br/>
                  <b-row>
                    
                      
             
                    <!-- <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Task Ref No</label
                    >
                    <input
                      type="text"
                    
                      v-model="taskref"
                      
                                placeholder="Enter Task ref no "
                                class="form-control"
                             
                    /> -->
               

                <br/>
                
                 <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Record Date</label
                    >
                      <datetime 
                      v-model="recordDate"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                    
                      }"
                      type="datetime"
                      placeholder="SELECT RECORD DATE"
                      name="startdate"
                 ></datetime>

                    <!-- <flat-pickr
                      v-model="recordDate"
                      class="form-control"
                      placeholder="SELECT RECORD DATE"
                      name="startdate"
                    ></flat-pickr> -->
                 </b-col>
                 <b-col md="9">
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Status</label
                    >
                    <b-form-select
                  v-model.trim="status"
                
                                placeholder="Select Employee"
                                class="form-control"
                             
                  :options="item"
                  
                ></b-form-select>
                  </b-col>
                  
                </b-row>
                 <br/>

<br/>
                
                <b-row>
                  
                  
                   <!-- <b-col> -->
                    <!-- Default input text -->
                    <!-- <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Created Date</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="createddate"
                    />
 <br/>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Modify Date</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="modifydate"
                    />
                  </b-col> -->

                  <!-- <br/>

                   <b-col> -->
                    <!-- Default input text -->
                    <!-- <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Created By</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="createdby"
                    />
 <br/>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Modify By</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="modifyby"
                    />
                  </b-col> -->
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
<style lang="scss">
</style>
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
