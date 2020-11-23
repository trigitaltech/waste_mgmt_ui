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
 editroute,users
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Route',
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
      areaid:this.$route.params.areaId,
      supervisor:this.$route.params.supervisor,
     routename:this.$route.params.routeName,
     routetype:this.$route.params.routeType,
     areaname:this.$route.params.areaName,
     routedistance:this.$route.params.route_distance,
     description:this.$route.params.description,
     city:this.$route.params.city,
      createdby:this.$route.params.createdBy,
      createddate:this.$route.params.createdDate,
      modifydate: new Date(),
      modifyby:"",
      title: 'Register',
      option: [
        
        { value: 'mainroad', text: 'Mainroad' },
        { value: 'serviceroad', text: 'Serviceroad' },
          { value: 'internalroad', text: 'Internalroad' },
      ],
      item:[ ],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Routes / View Routes',
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
      //  this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    // this.getplans()
    console.log(this.$route.params)
    // this.userdata()
  },
  methods: {
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
    async create() {
      try {
        const payload = {
           id:this.$route.params.id,
            routeName:this.routename,
            routeType:this.routetype,
            supervisor: this.supervisor,
            route_distance:this.routedistance,
            areaId:this.areaid,
            areaName: this.areaname,
            "isDeleted": false,
         createdDate: this.createddate,
          createdBy: this.createdby,
          modifiedDate: this.modifydate,
          modifiedBy: this.modifyby,
            description:this.description,
            city:this.city
        }
        let result = await editroute(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited Route Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Setup/RouteMaster'})
            
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
        header="View Route"
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
              <form>
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Route Name</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="routename"
                    />

                

                  
                    <!-- Default input email -->
                  </b-col>
                  
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Route Type</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="routetype"
                    />

                    <!-- Default input name -->
                  
                  </b-col>
              
                  <br />
                
                
                  
               
                </b-row>
                 <br/>
                  <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Area ID</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="areaid"
                    />

                

                  
                    <!-- Default input email -->
                  </b-col>
                  
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Area Name</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="areaname"
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
                    disabled
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="supervisor"
                    />

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Route Distance</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="routedistance"
                    />
                  </b-col>
                <br/>
                 <b-col>
                    <!-- Default input email -->
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="description"
                    />

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >City</label
                    >
                    <input
                    disabled
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="city"
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
                  class="btn btn-info float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Create</b-button
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
