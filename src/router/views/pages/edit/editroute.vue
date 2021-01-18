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
 editroute,users,Areamasters, getBrgysByRoute, deleteRoad, editRoads
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
       permissionColumns:[
        {
          key:'id'

        },
        {
          key:'code'

        },
        {
          key:'baranggayId',
          label:'Baranggay'
        },
         {
          key:'routeName'
        },
         {
          key:'roadName' 
        },
        {
          key: 'action'
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
    days: [],
    bId:null,
      Days: ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'],
      roads:this.$route.params.routeRoads,
      areaname:[],
      code:this.$route.params.code,
      areaid:this.$route.params.areaId,
      supervisor:this.$route.params.supervisor,
     routename:this.$route.params.routeName,
     routetype:this.$route.params.routeType,
     routedistance:this.$route.params.routeDistance,
     description:this.$route.params.description,
     city:this.$route.params.city,
      createdby:this.$route.params.createdBy,
      createddate:this.$route.params.createdDate,
      modifydate: new Date(),
      modifyby:"",
      title: 'Register',
    // roads:this.$route.params.routeRoads,
       inputs: [
        {
          baranggayId:'',
          code: '',
          roadName:'',
        routeName:this.routename,
        },
      ],
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
          text: 'Edit RouteMaster',
          active: true,
        },
      ],
   areas:[],
   selectedDays:[],
   selectedBaranggays:[],
   selectedRoads:[],
   data2:[],
   item2:[],
     areasid: [],
      baranggays:[],
      hideHeader: false,
      hideFooter: true,
      showModal: false,
      editId: '',
      editCode: '',
      editRouteName: '',
      editRoadName: '',
      editBaranggay: ''
    }
  },
  computed: {
    rows(){
       return this.$route.params.routeRoads.length
    },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.modifyby = this.getUserDetails.user.username
    console.log("roads",this.$route.params)
    this.selectedRoads = this.$route.params.routeRoads
    this.$route.params.days.map(e => {
      this.days.push(e.day)
    })
    for(var i=0;i<this.days.length;i++){
      this.Days.map((e,j) => {
        if(e == this.days[i]){
          this.selectedDays.push({
            id: j+1,
            day: e
          })
        }
      })
    }
    this.inputs[0].routeName = this.routename
    console.log(this.$route.params.days)
    this.userdata()
    this.getplans()
    this.getBaranggaysByRouteId()
  },
  methods: {
    openModal(data) {
      this.editId = data.item.id
      this.editCode = data.item.code
      this.editRoadName = data.item.roadName
      this.editRouteName = data.item.routeName
      this.editBaranggay = data.item.baranggayId
      this.showModal = true
    },
    async getBaranggaysByRouteId() {
      try {
        console.log('1')
        const result1 = await getBrgysByRoute(this.$route.params.id)
        const data1 = result1.data.response.result
        const result2 = await Areamasters()
        this.data2 = result2.data.response.areaMaster
        data1.map(e => {
          this.data2.map(f => {
            if(e == f.id){
              this.areaname.push(f.areaName)
              this.selectedBaranggays.push(f)
            }
          })
        })
        console.log(this.selectedBaranggays)
      } catch(error){
        console.log(error)
      }
    },
    getid() {
      this.selectedBaranggays = []
      for(var i=0;i<this.areaname.length;i++){
        this.data2.map(e => {
          if(e.areaName == this.areaname[i]){
            this.selectedBaranggays.push(e)
          }
        })
      }
    },
    async getplans() {
       try {
        const result = await Areamasters()
      this.areas = result.data.response.areaMaster
      console.log(this.areas)
      this.areas.map(e=>{
      this.item2.push(e.areaName)
    })
      //  console.log("users",this.item)
     
      } catch (error) {}
     },
     async userdata() {
       try {
      
      const result = await users()
      var data = result.data.response.Users
      data.map(e=>{
      this.item.push(e.userName)
      // console.log("user",e)
      })
      //  console.log("users",this.item)
     
      } catch (error) {}
     },
      add() {
      this.inputs.push({
        baranggayId:'',
        code: '',
        roadName:'',
        routeName: this.routename,
      
      })
      console.log(this.inputs)
    },

    remove(index) {
      this.inputs.splice(index, 1)
    },
    async create() {
      try {
        this.inputs.map(e => {
          if(e.roadName != "")
            this.selectedRoads.push(e)
        })
        const payload = {
          id:this.$route.params.id,
          code: this.code,
          routeName: this.routename,
          routeDistance: this.routedistance,
          description: this.description,
          baranggay: this.selectedBaranggays,
          routeRoads: this.selectedRoads,
           days: this.selectedDays
        }
        console.log('1')
        let result = await editroute(payload)
        console.log('2')
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
    getdaysdata(){
      this.selectedDays = []
      for(var i=0;i<this.days.length;i++){
        this.Days.map((e,j) => {
          if(e == this.days[i]) {
            this.selectedDays.push({
              id: j+1,
              day: e
            })
          }
        })
      }
      console.log(this.selectedDays)
    },
    async deleteRoads(data) {
      try {
        const result = await deleteRoad(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Road Deleted Successfully`,
            duration: 5000
          })
        }
        this.$router.push('/Setup/RouteMaster')
      } catch(error) {
        console.log(error)
      }
    },
    async editRoad() {
      try {
        this.selectedBaranggays.map(e => {
          if(this.editBaranggay == e.areaName){
            this.bId = e.id
          }
        })
        console.log(this.bId)
        const payload = {
          "id": this.editId,
          "code": this.editCode,
          "baranggayId": this.bId,
          "routeName": this.editRouteName,
          "roadName": this.editRoadName,
          "isDeleted": false,
          "status": null,
          "createdDate": "2021-01-07T08:47:26.000+00:00",
          "createdBy": null,
          "modifiedDate": "2021-01-07T08:47:26.000+00:00",
          "modifiedBy": null
        }
        const res = await editRoads(payload)
        if(res) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Road updated Successfully`,
            duration: 5000
          })
        }
        this.$router.push('/Setup/RouteMaster')
      } catch(error) {
        console.log(error)
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
    <b-modal v-model="showModal" title="Edit Road" size="md" :hide-header="hideHeader" :hide-footer="hideFooter">
      <form @submit.prevent="editRoad">
        <label
          for="defaultFormCardNameEx"
          class="grey-text font-weight-dark"
        >Code</label>
        <input
          v-model="editCode"
          type="text"
          class="form-control"
          required
        />
        <label
          for="defaultFormCardNameEx"
          class="grey-text font-weight-dark mt-2"
        >Road Name</label>
        <input
          v-model="editRoadName"
          type="text"
          class="form-control"
          required
        />
        <label
          for="defaultFormCardNameEx"
          class="grey-text font-weight-dark mt-2"
        >Route Name</label>
        <input
          v-model="editRouteName"
          type="text"
          class="form-control"
          required
        />
        <label
          for="defaultFormCardNameEx"
          class="grey-text font-weight-dark mt-2"
        >Baranggay</label>
        <b-form-select
          v-model="editBaranggay"
          :options="areaname"
          class="form-control"
        >
        </b-form-select>
        <button
          type="submit"
          class="btn text-center btn-secondary mt-4"
        >Submit</button>
      </form>
    </b-modal>

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
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Baranggay</label
                >
                 <multiselect
                  v-model="areaname"
                  :multiple="true"
                  :options="item2"
                  @input="getid"
                >
                </multiselect>
                <!-- Default input name -->
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
                  type="text"
                  oninvalid="this.setCustomValidity('Route Name is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Routename"
                  class="form-control"
                  required
                />

                <!-- Default input text -->
              </b-col>

              <br />
            </b-row>
            <br />
            <b-row>
               <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Days</label
                >
                <multiselect
                  v-model="days"
                  :options="Days"
                  :multiple="true"
                  @input="getdaysdata"
                ></multiselect>

                <!-- Default input name -->
              </b-col>
              <!-- <b-col> -->
                <!-- <label
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
                ></b-form-select> -->

                <!-- Default input name -->
              <!-- </b-col> -->

              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Code</label
                >
                <input
                  id="defaultFormCardNameEx"
                  v-model="code"
                  type="text"
                  oninvalid="this.setCustomValidity('code is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter code"
                  class="form-control"
                  required
                />
              </b-col>
              <br />
            </b-row>
            <br />
            <b-row>
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
                  placeholder="Enter Description"
                />
              </b-col>
              <!-- <b-col> -->
                <!-- Default input text -->
                <!-- <label
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
                ></b-form-select> -->
              <!-- </b-col> -->
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Route Distance</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="routedistance"
                  type="text"
                  oninvalid="this.setCustomValidity('Route distance is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Route Distance"
                  class="form-control"
                  required
                />
              </b-col>
            </b-row>
            <br />
            <b-row>
             
              <b-col>
                <!-- <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >City</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="city"
                  type="text"
                  class="form-control"
                  placeholder="Enter city"
                /> -->
              </b-col>
            </b-row>

            <br />

            <b-row>
         
            </b-row>
            <!-- <b-row>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Road Name</label
                >
                <multiselect
                  :multiple="true"
                  :close-on-select="true"
                  v-model.trim="roads"
                  placeholder="Select Roads"
                  :options="option"
                  @input="getcity"
                ></multiselect>
              </b-col>
            </b-row> -->

            <br />

            <b-row v-for="(input, k) in inputs" :key="k">
                 <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Baranggay Name</label
                >
                <b-form-select
                  v-model="input.baranggayId"
                
                  :options="areaname"
                 class="form-control"
                >
                </b-form-select>

                <!-- Default input name -->
              </b-col>
              <b-col >
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Code</label
                >

                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="input.code"
                  placeholder="Enter code"
                />
              </b-col>
              <b-col >
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Road Name</label
                >
                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="input.roadName"
                  placeholder="Enter roadname"
                />
              </b-col>
              <b-col >
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Route Name</label
                >
                <input
                  id="defaultFormCardtextEx"
                  type="text"
                  class="form-control"
                  v-model="input.routeName"
                  placeholder="Enter routename"
                />
              </b-col>
              <b-col>
                <span>
                  <i
                    class="fas fa-minus-circle"
                    @click="remove(k)"
                    v-show="k || (!k && inputs.length > 1)"
                    >Remove</i
                  >
                  <i
                    class="fas fa-plus-circle"
                    @click="add(k)"
                    v-show="k == inputs.length - 1"
                    >Add Roads</i
                  >
                </span>
              </b-col>
            </b-row>

            <button
              type="submit"
              class="btn btn-custome float-right btn-secondary mb-3"
              >Submit</button
            >
          </form>
              <!-- Default form subscription -->
        </div>
      </b-card>
        <div class="animated fadeIn" >
      <b-row >
      <b-col md="12">
          <b-card
            class="card-wrap"
            header="List Of Roads For Route"
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
         
          >    
          <template v-slot:cell(action)="data">
            <span class="mr-3" @click="openModal(data)">
              <i class="fas fa-pencil-alt edit"></i>
            </span>
            <span class="mr-3" @click="deleteRoads(data)">
              <i class="fa fa-times edit"></i>
            </span>
          </template>
        </b-table>
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
