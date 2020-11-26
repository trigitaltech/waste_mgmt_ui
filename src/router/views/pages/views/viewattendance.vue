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
     status:this.$route.params.status,
     empname:"",
     description:this.$route.params.description,
     empid:this.$route.params.employeeId,
     taskref:this.$route.params.task_ref_no,
     recordDate:this.$route.params.recordDate,
      timein:this.$route.params.time_in,
      timeout:this.$route.params.time_out,
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
      ownername:"",
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
    // console.log(this.$route.params)
this.employeedata() 
console.log(this.$route.params)

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
debugger
      this.emp.map(e=>{
          if(this.$route.params.employeeId === e.id)
             this.ownername=e.userName
      console.log("user",this.emp)
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
        header="View Attendance"
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
             <form @submit.prevent="create">
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Time IN</label
                    >
                    <input
                      v-model="timein"
                      class="form-control"
                     disabled
                      name="startdate"
                    />

                

                  
                    <!-- Default input text -->
                  </b-col>
                  
                  <b-col >
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Time OUT</label
                    >
                   <input
                      v-model="timeout"
                      class="form-control"
                     disabled
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

                    <input
                      type="text"
                    
                      v-model="ownername"
                      disabled
                             
                 class="form-control"
                             
                    />
             
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Task Ref No</label
                    >
                    <input
                      type="text"
                    
                      v-model="taskref"
                      disabled
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
                   <input
                      v-model="recordDate"
                      class="form-control"
                     disabled
                      name="startdate"
                    />

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Status</label
                    >
                    <input
                      v-model="status"
                      class="form-control"
                     disabled
                      name="startdate"
                    />
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
               <!-- <button
                         
                          style="
                            background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                          type="submit"
                         class="btn btn-info float-right mr-2"
                          >Submit</button
                        > -->
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
