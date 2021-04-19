<script>
import Vue from 'vue'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import { Datetime } from 'vue-datetime';
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
import {
  // eslint-disable-next-line no-unused-vars
 stagingarea, outgoingTripApprove,directTripApprove,dumpinglocation
} from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Direct Trip Billing',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return{
      loginDetails:{
        name:''
      },
      data:{},
      loadingEndTime:'',
      volume:'',
      tripStartTime:'',
      stagingArea:"",
      dumpingarea:""
    };
  },
  components: { Layout, PageHeader,VueTimepicker, Multiselect ,datetime: Datetime, },
  mounted() {
    this.data = this.$route.params
    this.getLgu()
    this.getStagingArea()
    console.log("hai",this.data)
    this.getdumping()
  },
  methods:{
       async getdumping() {
       try {
      
      const result = await  dumpinglocation()
      var data = result.data.response.dumpingLocation
     data.map(e => {
            if(this.data.dumpinglocationId === e.id){
                this.dumpingarea = e.dumpingAreaName
            }
      
        })
      } catch (error) {}
   
    },
    async tripApproved() {
      try {
        const payload = {
          id: this.data.id
        }
        const result = await directTripApprove(payload)
        if(result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Trip Approved Successfully`,
            duration: 5000,
          })
          this.$router.push({path:'/Billingperson'})
        }
      } catch(error) {
        console.log(error)
      }
    },
    async getLgu() {
      const result = JSON.parse(localStorage.getItem('auth.currentUser'))
      this.loginlguid = result.lguemployee.lguId
      this.contractorDispatcherId = result.lguemployee.id
      this.contractorDispatcherName = result.lguemployee.userName
    },
    async getStagingArea() {
      try {
        const result = await stagingarea()
        this.stagingAreas = result.data.response.stagingArea
        console.log(this.stagingAreas)
        this.stagingAreas.map(e => {
            if(this.data.stagingAreaId === e.id){
                this.stagingArea = e.stagingAreaName
            }
        //   console.log(this.loginlguid+' '+e.lguName.id)
          if(this.loginlguid == e.lguName.id){
            this.loginDetails.name = e.lguName.userName
            this.stagingAreaNames.push(e.stagingAreaName)
          }
        })
        // console.log(this.loginDetails.name)
      } catch(e) {
        // console.log(e)
      }
    },
  }
}
</script>

<template>
  <Layout>
    <div class="animated">
      <b-card
        header="Edit Direct Trip Billing"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-1">
          <div class="mx-xl-5">
            <div class="card-body">
                <b-row class="mt-3">
                  <b-col>
                    <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >Trip #</label
                      >
                      <input
                       class="form-control"
                       v-model="data.id"
                       
                      />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Staging Area</label
                    >
                    <input
                      v-model.trim="stagingArea"
                      class="form-control"
                              
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col>
                      <label
                        for="defaultFormCardtextEx"
                        class="grey-text font-weight-dark"
                        >Dumping Location</label
                      >
                      <input
                        v-model.trim="dumpingarea"
                        class="form-control"
                                
                      />
                    </b-col>
                  <!-- </b-col> -->
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >CONTROL NO</label
                    >
                    <input
                      v-model="data.controlNo"
                      class="form-control"
                      name="body"
                      
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Date</label
                    >
                   <datetime 
                      v-model="data.tripDate"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                      }"
                      type="date"
                      placeholder="SELECT Date"
                 ></datetime>
                  </b-col>
                  <b-col class="ml-3">
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark mr-2"
                      >Dumping Start Time</label
                    >
                    <datetime 
                      v-model="data.dumpingStartTime"
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
                <!-- </b-row>
                <b-row class="mt-3"> -->
                  <!-- <b-col></b-col> -->
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark mr-2"
                      >Dumping End Time</label
                    >
                    <datetime 
                      v-model="data.dumpingEndTime"
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
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Plate No</label
                    >
                     <input
                      v-model="data.plateNo"
                      class="form-control"
                      name="body"
                      
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Body</label
                    >
                    <input
                      v-model="data.bodyNo"
                      class="form-control"
                      name="body"
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Truck Type</label
                    >
                   <input
                      v-model="data.truckType"
                      class="form-control"
                      name="trucktype"
                      
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Driver Name</label
                    >
                     <input
                      v-model="data.driverName"
                      class="form-control"
                      name="body"
                      
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Helper</label
                    >
                     <input
                      v-model="data.helperName"
                      class="form-control"
                      name="body"
                      
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Control Checker</label
                    >
                     <input
                      v-model="data.controlCheckerName"
                      class="form-control"
                      name="body"
                      
                    />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Volume</label
                    >
                     <input
                      v-model="data.volumeCheckerMeasuredVolume"
                      class="form-control"
                      name="body"
                    />
                  </b-col>
                  <b-col>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Volume Checker</label
                    >
                     <input
                      v-model="data.volumeCheckerName"
                      class="form-control"
                      name="body"
                    />
                    <!--<label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Trip Start Time</label
                    >
                     <datetime 
                      v-model="tripStartTime"
                      :format="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      }"
                      type="datetime"
                      placeholder="SELECT Time"
                 ></datetime>-->
                  </b-col>
                </b-row>
                <!-- <button
                   class="btn btn-custome float-right btn-secondary mt-3 mr-2"
                  >Update</button> -->
                <button @click="tripApproved"
                   class="btn btn-custome float-right btn-secondary mt-3 mr-2"
                  >Approve</button>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </Layout>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped media="print">
.cardheader.title{
  color:black
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