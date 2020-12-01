<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { Datetime } from 'vue-datetime';
import moment from 'moment'
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 checkout,users,employees
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
     emp:[],
     owners:[],
     status:"",
     empname:"",
     description:this.$route.params.description,
     empid:this.$route.params.employeeId,
     taskref:this.$route.params.task_ref_no,
     recordDate:this.$route.params.recordDate,
      timein:this.$route.params.time_in,
      timeout:"",
      createdby:this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
      modifydate: new Date(),
      modifyby:"",
      item:[ 
      { value: 'CHECK_OUT', text: 'Check OUT' },
      { value: 'APPROVED', text: 'APPROVED' },
      { value: 'REJECTED', text: 'REJECTED' }],
      ite:[],
       option: [
        { value: null, text: 'Please select an option' },
        { value: 'urban', text: 'Urban' },
        { value: 'rural', text: 'Rural' },
        
      ],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Attendance / CHECK OUT',
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
this.employeedata() 

  },
  methods: {
    async create() {
      try {
        const payload =  {
          
                 id:this.$route.params.id,
                recordDate: this.recordDate,
                employeeId: this.empid,
                time_in: this.timein,
                time_out: this.timeout,
                task_ref_no: this.taskref,
                description: this.description,
                isDeleted: true,
                status: this.status,
                createdDate: this.createddate,
                createdBy: this.createdby,
                modifiedDate: this.modifydate,
                modifiedBy:this.modifyby
            
        

        }
        let result = await checkout(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Checked Out Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Employee/Attendance'})
            
        }
      } catch (e) {
        this.$toasted.error(e.message.error, {
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
        header="CHECK OUT"

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
                     Time Out</label
                    >
                   <datetime 
                      v-model="timeout"
                     
                      placeholder="SELECT TIME OUT"
                      name="startdate"
                 ></datetime>

                

                  
                    <!-- Default input text -->
                  </b-col>
                  
                  <b-col md="9">
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                   <input
                      v-model="description"
                      class="form-control"
                      placeholder="Enter Description"
                      name="startdate"
                    />

                    <!-- Default input name -->
                  
                  </b-col>
              
                  <br />
                
                
                  
               
                </b-row>
                 <br/>
                  <b-row>
                    
                      <b-col>
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
                  <b-col>
                     <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Task Ref No</label
                    >
                    <input
                      v-model="taskref"
                    
                      type="text"
                      
                                placeholder="Enter Task ref no "
                                class="form-control"
                             
                    />
                  </b-col>

                <br/>
                
                 <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Record Date</label
                    >
                    <flat-pickr
                      v-model="recordDate"
                      class="form-control"
                      placeholder="SELECT RECORD DATE"
                      name="startdate"
                    ></flat-pickr>
                  </b-col>
                  <b-col>
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
