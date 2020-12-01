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
 editroute,users,Areamasters
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
          text: 'RouteMaster / Edit RouteMaster',
          active: true,
        },
      ],
   areas:[],
   item2:[],
    
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
    this.userdata()
     this.getplans()
  },
  methods: {
    async getplans() {
       try {
        const result = await Areamasters()
      this.areas = result.data.response.areaMaster
    //   console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      this.areas.map(e=>{
      this.item2.push(e.areaName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
     },
     getid(){
        // console.log("haiiiiii",this.item2)
        this.areas.map(e=>{
            if(this.areaname === e.areaName){
                this.areaid = e.id    
                       }
                        //  console.log("haiiiiii",this.sid)
        })
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
        header="Edit Route"

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
                     Route Name</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                     
                      v-model="routename"
                         oninvalid="this.setCustomValidity('Route Name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Select Routename"
                                class="form-control"
                                required
                  
                    />

                

                  
                    <!-- Default input text -->
                  </b-col>
                  
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Route Type</label
                    >
                    <b-form-select
                      v-model="routetype"
                      :options="option"
                        oninvalid="this.setCustomValidity('Route Type is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Select Route Type"
                                class="form-control"
                                required
                
                    ></b-form-select>

                    <!-- Default input name -->
                  
                  </b-col>
              
                  <br />
                
                
                  
               
                </b-row>
                 <br/>
                  <b-row>
                 
                  
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Area Name</label
                    >
                      <b-form-select
                      v-model="areaname"
                      :options="item2"
                        oninvalid="this.setCustomValidity('Area Name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Select Area Name"
                                class="form-control"
                                required
              
                       @change="getid()"
                    ></b-form-select>
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
                      >Supervisor</label
                    >
                   <b-form-select
                  v-model.trim="supervisor"
                  placeholder="Select Supervisor"
                  label="value"
                  :options="item"
                     oninvalid="this.setCustomValidity('Supervisor is required ')"
                                oninput="setCustomValidity('')"
                             
                                class="form-control"
                                required
              
                ></b-form-select>

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Route Distance</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                   
                      v-model="routedistance"
                         oninvalid="this.setCustomValidity('Route distance is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Select Route Distance"
                                class="form-control"
                                required
              
                    />
                  </b-col>
                <br/>
                 <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="description"
                    />

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >City</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="city"
                    />
                  </b-col>
                  
                </b-row>
                
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
