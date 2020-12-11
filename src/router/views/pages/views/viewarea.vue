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
import {
 Edituser,users
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create AreaMaster',
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
        classtype:this.$route.params.classType,
      code:this.$route.params.code,
       description:this.$route.params.description,
      supervisor: this.$route.params.supervisor,
      city: this.$route.params.city,
    areaname:this.$route.params.areaName,
    areaid:"",
    areasqkm: this.$route.params.areaSqKm,
    country: this.$route.params.country,
    state: this.$route.params.state,
    zip: this.$route.params.zip,
      message:"",
      areatype:this.$route.params.areaType,
      createdby: this.$route.params.createdBy,
      createddate:  this.$route.params.createdDate,
      modifydate: new Date(),
      modifyby:"",
      item:[ ],
      ite:[],
       option: [
  
        { value: 'urban', text: 'Urban' },
        { value: 'rural', text: 'Rural' },
        
      ],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Areas / View Areas',
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
    console.log(this.$route.params.supervisor)
   
    this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    // this.getplans()
// this.userdata() 

  },
  methods: {
    async create() {
      try {
        const payload =  {
               
            id : this.$route.params.id,
            areaName: this.areaname,
            areaType: this.areatype,
            supervisor: this.supervisor,
            areaSqKm: this.areasqkm,
            isDeleted: false,
            createdDate: this.createddate,
            createdBy: this.createdby,
            modifiedDate: this.modifydate,
            modifiedBy: this.modifyby,
            state: this.state,
            country: this.country,
            description: this.description,
            city: this.city,
            zip: this.zip
      

        

        }
        let result = await Edituser(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited Area Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Setup/AreaMaster'})
            
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
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
        header="View Areas"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              <form>
                <b-row>
                   <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Code</label
                >
                <input
                  v-model="code"
                  type="text"
               
                  placeholder="Enter Code"
                  class="form-control"
               disabled
                />
              </b-col>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Area Name</label
                    >
                    <input
                    id="defaultFormCardNameEx"
                      v-model="areaname"
                      disabled
                      type="text"
                      class="form-control"
                    />

                

                  
                    <!-- Default input email -->
                  </b-col>
                  
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Area Type</label
                    >
                    
                  <input
                    id="defaultFormCardNameEx"
                      v-model="areatype"
                      disabled
                      type="text"
                      class="form-control"
                    />

                    <!-- Default input name -->
                  
                  </b-col>
                <br />
                     
                </b-row>
                 <br/>
                  <b-row>
                    
                      <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Supervisor</label
                    >

                  <input
                    id="defaultFormCardEmailEx"
                      v-model="supervisor"
                      disabled
                      type="email"
                      class="form-control"
                    />
                      </b-col>
                      <b-col>
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Area SqKm</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="areasqkm"
                      disabled
                      type="email"
                      class="form-control"
                    />
                  </b-col>
   <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Class Type</label
                >
                <input
                  v-model="classtype"
                  type="text"
               
                  placeholder="Enter Code"
                  class="form-control"
               disabled
                />
              </b-col>
                  </b-row>
                <br/>
               <b-row>
                 <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="description"
                      disabled
                      type="email"
                      class="form-control"
                    />
                 </b-col>
                 <b-col>
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >District</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="city"
                      disabled
                      type="email"
                      class="form-control"
                    />
                  </b-col>
                  
                </b-row>
                 <br/>

  <b-row>
                  
                  
                   <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >State</label
                    >
                    <input
                   id="defaultFormCardEmailEx"
                      v-model="state"
                      disabled
                      type="email"
                      class="form-control"
                    />
 <br/>
                
                  </b-col>

                  <br/>

                   <b-col>
                    <!-- Default input email -->
                  
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Country</label
                    >
                    <input
                  id="defaultFormCardEmailEx"
                      v-model="country"
                      disabled
                      type="email"
                      class="form-control"
                    />
                  </b-col>
                
                     <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Zip</label
                    >
                    <input
                   id="defaultFormCardEmailEx"
                      v-model="zip"
                      disabled
                      type="email"
                      class="form-control"
                    />
                     </b-col>
                </b-row>
<br/>
                
                <b-row>
                  
                  
                   <!-- <b-col> -->
                    <!-- Default input email -->
                    <!-- <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Created Date</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="createddate"
                    />
 <br/>
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Modify Date</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="modifydate"
                    />
                  </b-col> -->

                  <!-- <br/>

                   <b-col> -->
                    <!-- Default input email -->
                    <!-- <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Created By</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="createdby"
                    />
 <br/>
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Modify By</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="modifyby"
                    />
                  </b-col> -->
                </b-row>
              
              
                <br />
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
