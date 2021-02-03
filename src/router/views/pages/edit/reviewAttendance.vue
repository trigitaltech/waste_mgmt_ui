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
 checkout,users,employees,reviewAttendance
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
     empname:this.$route.params.employeeId,
     description:this.$route.params.description,
     empid:"",
     taskref:this.$route.params.task_ref_no,
     recordDate:this.$route.params.recordDate,
      timein:this.$route.params.time_in,
      timeout:this.$route.params.time_out,
      createdby:this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
      modifydate: new Date(),
      modifyby:"",
      item:[ 
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
     this.createdby = this.getUserDetails.user.username;
    this.modifyby = this.getUserDetails.user.username;
    // this.getClientDetails()
    // this.getplans()
    console.log(this.$route.params)
    this.employeedata() 
    this.recordDate = moment(String(this.recordDate)).format("DD/MM/YYYY");
    this.timein = moment(String(this.timein)).format("hh:mm A DD/MM/YYYY");
    this.timeout = moment(String(this.timeout)).format("hh:mm A DD/MM/YYYY");
  },
  methods: {
    async create() {
      try {
        const payload =  {
          
                 id:this.$route.params.id,
                recordDate: this.$route.params.recordDate,
                employeeId: this.empid,
                time_in: this.$route.params.time_in,
                time_out: this.$route.params.time_out,
                task_ref_no: this.taskref,
                description: this.description,
                isDeleted: true,
                status: this.status,
                createdDate: this.createddate,
                createdBy: this.createdby,
                modifiedDate: this.modifydate,
                modifiedBy:this.modifyby
            
        }
        console.log(payload);
        let result = await reviewAttendance(payload);
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
       if(this.$route.params.employeeId === e.userName){
                this.empid = e.id    
                  }
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
        header="Review Attendance"
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
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Time In:</label
                    >
                   <input
                      v-model="timein"
                      class="form-control"
                      readonly
                      name="startdate"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Time Out:</label
                    >
                   <input
                      v-model="timeout"
                      class="form-control"
                      readonly
                      name="startdate"
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-4">
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Employee Id:</label
                    >
                   <input
                      v-model="empname"
                      class="form-control"
                      readonly
                      name="startdate"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Record Date:</label
                    >
                   <input
                      v-model="recordDate"
                      class="form-control"
                      readonly
                      name="startdate"
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-4">
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Description:</label
                    >
                   <input
                      v-model="description"
                      class="form-control"
                      readonly
                      name="startdate"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Status:</label
                    >
                   <b-form-select
                  v-model.trim="status"
                
                                placeholder="Select Employee"
                                class="form-control"
                             
                  :options="item"
                  
                ></b-form-select>
                  </b-col>
                </b-row>
               <button
                         
                          style="
                            background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                          type="submit"
                         class="btn btn-info mt-3"
                          >Submit</button
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
