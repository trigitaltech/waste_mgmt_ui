<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import DualListBox from 'dual-listbox-vue'
import 'dual-listbox-vue/dist/dual-listbox.css'
import { ModelSelect } from 'vue-search-select'
import addplan from '@components/addplan'
import { Datetime } from 'vue-datetime';
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
  Createpayrolldriver,
  classmaster,
  lgus,
  editpayrollpalero
  , vehicleTypes,
  type
} from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Payroll Palero',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
       datetime: Datetime,
    DualListBox,
    addplan,
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
      items: [
          {
          text: 'Payroll',
          href: '/',
        },
        {
          text: 'Payroll Palero',
          href: '#/Payroll/Ratecard/PayrollPalero',
        },
        {
          text: 'Edit PayrollPalero',
          active: true,
        },
      ],
      days: [
       
      ],
      code: '',
      triptype: this.$route.params.tripType,
      tripclass: '',
      day: '',
      TripClass: [],
      lgusnames: [],
      lgus: [],
      lgusdata: "",
      lguname: this.$route.params.lguId,
      rate:this.$route.params.rate,
      startDate:this.$route.params.effectiveStartDate,
      endDate:this.$route.params.effectiveEndDate,
      trucktype:this.$route.params.truckType,
         vehicleTypes:[],
      vehicleTypesNames:[],
      typemaster:[],
      tripid:""
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
      console.log(this.$route.params)
    this.getclass()
    // this.getClientDetails()
    // this.getplans()
    this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.permission()
    this.getemployees()
     this.gettypes()
    this.getVehicleTypes()
  },
  methods: {
      async gettypes() {
       try {
        
      const result = await  type()
      this.typemaster = result.data.response.TripType
     this.typemaster.map(e=>{
       this.days.push(e.tripType)
     })
      } catch (error) {}
   
    },
     async getVehicleTypes() {
      var result = await vehicleTypes()
      this.vehicleTypes = result.data.response.result
      this.vehicleTypes.map( e => {
        this.vehicleTypesNames.push(e.truckType)
      })
    },
    getlgu() {
      this.lgusnames.map((e) => {
        if (this.lguname === e.lguName) {
          this.lgusdata = e.id

          // this.form.district === e.districtName
        }
      })
    },
       getids(){
 this.typemaster.map((e) => {
        if (this.triptype === e.tripType) {
          this.tripid = e.id

          // this.form.district === e.districtName
        }
      })
    },
    async getemployees() {
      try {
        const result = await lgus()
        this.lgusnames = result.data.response.result
        this.lgusnames.map((e) => {
          this.lgus.push(e.lguName)
           if(this.$route.params.lguId === e.lguName){
           this.lgusdata = e.id
            }
        })
        // data.map( e => {
        //   if(e.type!="ENCODER" && e.type!="VOLUME_CHECKER" && e.type!="DISPATCHER")
        //     this.item.push(e)
        // })
        console.log(this.item)
      } catch (error) {}
    },
    async create() {
      try {
        const payload = {
            id:this.$route.params.id,
          truckType: this.trucktype,
          lguId: this.lgusdata,
          tripType: this.tripid,
          rate: this.rate,
          effectiveStartDate:this.startDate,
          effectiveEndDate: this.endDate,
          status: 1,
        }
        const result = await editpayrollpalero(payload)

        // this.rid = result.data.response.Roles.id
        // console.log(this.rid)

        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Edited Payroll Palero  Successfully`,
            duration: 5000,
          })
             this.$router.push({path:'/Payroll/Ratecard/PayrollPalero'})
        }
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async getclass() {
      try {
        const result = await classmaster()
        var data = result.data.response.TripClass
        data.map((e) => {
          this.TripClass.push(e.name)
        })
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
      <b-card header="Edit Payroll Palero" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form @submit.prevent="create">
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Truck Type</label
                >
                   <b-form-select
                      v-model.trim="trucktype"
                      placeholder="Select Vehicle Type"
                      label="value"
                      class="form-control"
                      :options="vehicleTypesNames"
                    ></b-form-select>
                <!-- Default input name -->
              </b-col>

              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Rate</label
                >
                <input
                  v-model="rate"
                  type="text"
                  oninvalid="this.setCustomValidity('Rate is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Rate"
                  class="form-control"
                  required
                />

                <!-- Default input text -->
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Trip Type</label
                >
               <b-form-select
                  v-model="triptype"
                  type="text"
                  oninvalid="this.setCustomValidity('Trip Type is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Trip Type"
                  :options="days"
                    @change="getids"
                  class="form-control"
                  required
                />
                <!-- Default input name -->
              </b-col>
              <b-col>
                <label for="default">LGU</label>
                <b-form-select
                  required
                  v-model="lguname"
                  placeholder="Select LGU"
                  :options="lgus"
                  @change="getlgu"
                ></b-form-select>
              </b-col>
              <br />
            </b-row>
            <!-- <b-row>
              <b-col>
               
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Start Date</label
                >
                <datetime
                  v-model="startDate"
                  :format="{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  }"
                  type="datetime"
                  placeholder="SELECT START DATE"
                  name="startdate"
                ></datetime>
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >End Date</label
                >
                <datetime
                  v-model="endDate"
                  :format="{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  }"
                  type="datetime"
                  placeholder="SELECT END DATE"
                  name="startdate"
                ></datetime>
              </b-col>
            </b-row> -->
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
<style>
.list-box-wrapper .list-box-item .bulk-action .select-all {
  background: #3757f5;
}
.btn-action {
  background: #3757f5;
}
.list-box-wrapper .list-box-item .bulk-action .deselect-all {
  background-color: #c7c7ca;
  color: black;
}
</style>