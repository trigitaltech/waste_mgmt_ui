<script>
import Vue from 'vue'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import { Datetime } from 'vue-datetime'
import Multiselect from 'vue-multiselect'
import moment from 'moment'
Vue.component('multiselect', Multiselect)
import {
  assignequipsrequipment,
  Tripdownload,
  Areamasters,
  routemaster,
  CreateIncomingTrip,
  employees,
  vehicle,
  getRoutesByBaranggayId,
  equipmentby,
  updatesrtruck,
  assignequipsrtruck,
  getvolumebyId
} from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Servicerequest Equipment',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return {
      inputs: [
        {
          name: '',
        },
      ],
      items: [
        {
          text: 'Servicerequests',
          href: '/',
        },
        {
          text: 'Servicerequest Equipment',
          href: '#/Servicerequest/Equipment',
        },
        {
          text: 'Edit SR Equipment',
          active: true,
        },
      ],
      areadata: [],
      areaarray: '',
      routedate: [],
      routearray: [],
      emp: [],
      controlno: '',
      area: '',
      route: '',
      driver: '',
      contractor: '',
      collector: null,
      lgu: '',
      plate: '',
      plates: [],
      body: '',
      tripDate: '',
      trucktype: '',
      driverid: '',
      startTime: '',
      drivers: [],
      helpers: [],
      vehicles: [],
      servingAreas: [],
      route: '',
      driver: '',
      helper: null,
      servingRoutes: [],
      driverList: [],
       checkerListNames:[],
      hauler: '',
      haulerList: [],
      contractorList: [],
      paleroList: [],
      garbage: null,
      lgu: null,
      equip: [],
      equipments: [],
      equipmentused: '',
      drivertimein: '',
      distancekms: '',
      equipmentarray: [],
      verifiedby:"",
      dispatchedby:"",
      inputs: [
        {
          timeIn: '',
          timeOut: '',
          duration: '',
          bucketLoaded: '',
        },
      ],
      loginlguid:"",
      checkerList:[],
      dispatcherListNames:[],
      dispatcherlist:[],
      dispatchId:"",
      checkerId:"",
    }
  },
  components: {
    Layout,
    PageHeader,
    VueTimepicker,
    Multiselect,
    datetime: Datetime,
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.tripDate = moment(new Date()).format('DD-MM-YYYY')
     this.drivertimein = new Date()
    console.log(this.tripDate + ' ' + this.startTime)
    this.getLgu()
    this.getequipments()
    this.getvolume()
  
  this.getvolume1()
  },
  methods: {
     async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))
      this.loginlguid = result.lguemployee.lguId
     this.dispatcherid = result.lguemployee.id
     this.dispatchername = result.lguemployee.firstName
    },
     async getvolume() {
      try {
        var id3 = "VOLUME_CHECKER"
        const result = await getvolumebyId(this.loginlguid,id3)
       this.checkerList = result.data.response.result
        
              this.checkerList.map(g => {
             
                      this.checkerListNames.push(g.userName)
      })
      } catch(e) {
        console.log(e)
      }
    },
     async getvolume1() {
      try {
        var id1 = "ENCODER"
        const result = await getvolumebyId(this.loginlguid,id1)
       this.dispatcherlist = result.data.response.result
        
              this.dispatcherlist.map(g => {
             
                      this.dispatcherListNames.push(g.userName)
      })
      } catch(e) {
        console.log(e)
      }
    },
    add() {
      this.inputs.push({
        timeIn: '',
        timeOut: '',
        duration: '',
        bucketLoaded: '',
      })
      console.log(this.inputs)
    },

    remove(index) {
      this.inputs.splice(index, 1)
    },
    
    async getequipments() {
      const result = await equipmentby()
      this.equipments = result.data.response.equipment
      this.equipments.map((e) => {
        this.equip.push(e.equipmentNo)
      })
      // console.log(this.plates)
    },
 getequipCode() {
      console.log("hai",this.equipmentused)
      this.equipmentarray=[]
       for(var i = 0 ; i<this.equipmentused.length ;i++){
        //  debugger
         this.equipments.map(e=>{
        if(this.equipmentused[i] === e.equipmentNo){
             
          this.equipmentarray.push({equipment:e.id})
          console.log("routedata",this.equipmentarray)
       
        }
         })
      
       }
    },
   getCheckerId() {
        this.checkerList.map(e => {
          if(this.verifiedby == e.userName){
            this.checkerId = e.id
          }
        })
      },
       getdispatchid() {
        this.dispatcherlist.map(e => {
          if(this.dispatchedby == e.userName){
            this.dispatchId = e.id
          }
        })
      },
  
    // async firstFunction() {
    //   console.log('firsyt')
    //   try {
    //     let payload = {
       
    //     }
    //     const result = await updatesrtruck(payload)
    //     if (result) {
    //       this.$swal({
    //         group: 'alert',
    //         type: 'success',
    //         text: `Updated Service request Truck`,
    //         duration: 5000,
    //       })
    //       this.$router.push({ path: '/Servicerequest/Truck' })
    //     }
    //   } catch (e) {}
    // },
    async update() {
      console.log('second')
      try {
        let payload = {
        
                
                  serviceTicketEquipementReport:this.inputs,
                  "totaldistance":this.distancekms,
                  "driverTimeIn":this.drivertimein,
                  "dispatcherBy":this.dispatchId,
                  "verifiedBY":this.checkerId
                  }

        const result = await assignequipsrequipment(this.$route.params.id,payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Updated Service request Equipment`,
            duration: 5000,
          })
          this.$router.push({ path: '/Servicerequest/Truck' })
        }
      } catch (e) {}
    },
    getTruckType() {
      this.vehicles.map((e) => {
        if (e.plateNo == this.plate) {
          this.trucktype = e.vehicleType.code
          this.body = e.vehicleNo
        }
      })
    },
    add(index) {
      if (this.inputs.length <= 4) this.inputs.push({ name: '' })
    },
    remove(index) {
      this.inputs.splice(index, 1)
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />
    <div class="animated">
      <b-card
        header="Edit Servicerequest Equipment"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-1">
          <div class="mx-xl-5">
            <div class="card-body">
              <form @submit.prevent="update()">
                <!-- <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Driver Time IN</label
                    >
                    <input
                      v-model="drivertimein"
                      class="form-control"
                      name="body"
                      placeholder="Enter Driver Time In"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >DISTANCE (KMS)</label
                    >
                    <input
                      type="text"
                      v-model="distancekms"
                      class="form-control"
                      placeholder="Enter distancekms"
                    />
                  </b-col>
                </b-row>
                -->

                <br />
                <b-row v-for="(input, k) in inputs" :key="k">
                 
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                      Time In</label
                    >
                      <datetime 
                      v-model="input.timeIn"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      }"
                      type="datetime"
                      placeholder="SELECT Time"
                 ></datetime>
                
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                      Time Out</label
                    >
                      <datetime 
                      v-model="input.timeOut"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      }"
                      type="datetime"
                      placeholder="SELECT Time"
                 ></datetime>
                 
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                      Duration</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      type="text"
                      class="form-control"
                      v-model="input.duration"
                      placeholder="Enter duration"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                      Buckets Loaded</label
                    >
                    <input
                      id="defaultFormCardtextEx"
                      type="text"
                      class="form-control"
                      v-model="input.bucketLoaded"
                      placeholder="Enter bucketsloaded"
                    />
                  </b-col>
                  <b-col>
                    <span>
                      <i
                        class="fas fa-minus-circle"
                        @click="remove(k)"
                        v-show="k || (!k && inputs.length > 1)"
                      ></i>
                      <br />
                      <i
                        style="width: 50px"
                        class="fas fa-plus-circle"
                        @click="add(k)"
                        v-show="k == inputs.length - 1"
                      ></i>
                    </span>
                  </b-col>
                </b-row>

                <br/>
                 <b-row>
                   <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Verified BY</label
                    >
                     <b-form-select
                      v-model.trim="verifiedby"
                      class="form-control"        
                      :options="checkerListNames"
                      @change="getCheckerId" 
                    >
                    </b-form-select>
                  </b-col>
                  <b-col> </b-col>
                </b-row>
                 <b-row>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Dispatched BY</label
                    >
                    <multiselect
                      v-model="dispatchedby"
                      :multiple="true"
                      :options="dispatcherListNames"
                      @input="getdispatchid"
                    >
                    </multiselect>
                  </b-col>
                  <b-col> </b-col>
                </b-row>
                <br />
                <button
                  type="submit"
                  class="btn btn-custome float-right btn-secondary mb-3"
                 
                  >Submit</button
                >
              </form>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </Layout>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped media="print">
.cardheader.title {
  color: black;
}
</style>
<style lang="stylus" scoped>
body {
  font-family: Arial;
}

.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}
</style>