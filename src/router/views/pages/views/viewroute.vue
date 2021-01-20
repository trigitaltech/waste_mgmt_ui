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
 editroute,users,getBrgysByRoute,Areamasters
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Route',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    multiselect: Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
      code:this.$route.params.code,
      classtype:this.$route.params.classType,
      roads:this.$route.params.routeRoads,
      areaid:this.$route.params.id,
      days:[],
      supervisor:this.$route.params.supervisor,
     routename:this.$route.params.routeName,
     routetype:this.$route.params.routeType,
     areaname:this.$route.params.areaName,
     routedistance:this.$route.params.routeDistance,
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
          text: 'Route Master',
          href: '#/Setup/RouteMaster',
        },
        {
          text: 'View Routes',
          active: true,
        },
      ],
      permissionColumns:[
        {
          key:'id'

        },
        {
          key:'code'

        },
         {
          key:'baranggayId',
          label:'Baranggay Name'
        },
         {
          key:'routeName'
          
        },
         {
          key:'roadName'
          
        }
      ],
        striped: false,
      bordered: true,
      filter: '',
      perPage: 10,
      hover: true,
      currentPage: 1,
      small: false,
      dark: false,
      fixed: false,
   
    
    }
  },
  computed: {
     rows(){
     return this.roads.length
    },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
      //  this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    // this.getplans()
    this.$route.params.days.map(e => {
      this.days.push(e.day)
    })
    console.log(this.$route.params)
    // this.userdata()
    this.getBaranggaysByRouteId()
  },
  methods: {
     async getBaranggaysByRouteId() {
      try {
        console.log('1')
     
        const result2 = await Areamasters()
        var data2 = result2.data.response.areaMaster
       
         
              
         for (var i = 0; i < this.roads.length; i++) {
  for (var j = 0; j < data2.length; j++) {
if(this.data2[j].id === this.roads[i].baranggayId ){
  this.roads[i].baranggayId = this.data2[j].areaName
  break
}
  }
         }

            // }
        
    
        console.log(this.selectedBaranggays)
      } catch(error){
        console.log(error)
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
                     code</label
                    >
                    <input
                    id="defaultFormCardNameEx"
                      v-model="code"
                      disabled
                      type="text"
                      class="form-control"
                    />

                

                  
                    <!-- Default input email -->
                  </b-col>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                     Route Name</label
                    >
                    <input
                    id="defaultFormCardNameEx"
                      v-model="routename"
                      disabled
                      type="text"
                      class="form-control"
                    />
                  </b-col>
              </b-row>
                <br/>
                  <b-row>
                    
                      <b-col>
                   

                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Route Distance</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="routedistance"
                      disabled
                      type="email"
                      class="form-control"
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
                    id="defaultFormCardEmailEx"
                      v-model="description"
                      disabled
                      type="email"
                      class="form-control"
                    />

                   
                  </b-col>
                  
                </b-row>
                  <br />
                <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Days</label
                    >
                    <multiselect
                      :options="days"
                      v-model="days"
                      readonly
                      :multiple="true"
                      :disabled="true"
                    />
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </form>
              <!-- Default form subscription -->
        </div>
      </b-card>

    <div class="animated fadeIn" >
      <b-row >
      <b-col md="12">
          <b-card
            class="card-wrap"
            header="List Of Roads"
          >
          <b-row>
        <b-col md="3">
           
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2"
                    ></b-form-input>
           
        </b-col>
          </b-row>
           
           <div class="mt-3">
          <b-table
            id="my-table"
            :dark="dark"
            :hover="hover"
            :striped="striped"
            ref="roles"
            :bordered="bordered"
            :filter="filter"
            :responsive="true"
            :current-page="currentPage"
            :per-page="perPage"
            :small="small"
            :fixed="fixed"
            :fields="permissionColumns"
            :items="roads"
            class="mt-3"
         
          >    </b-table>

        
          <div style="float: right">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="rows"
              aria-controls="my-table"
              hide-goto-end-buttons
            ></b-pagination>
          </div>
        </div>
        
          </b-card>
      </b-col>
      </b-row>
                 </div>
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
