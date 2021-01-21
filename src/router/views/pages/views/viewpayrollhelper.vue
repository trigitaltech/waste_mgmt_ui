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
} from '../../../../services/auth'

export default {
  page: {
    title: 'View Payroll Helper',
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
          text: 'Payroll Helper',
          href: '#/Payroll/Ratecard/PayrollHelper',
        },
        {
          text: 'View PayrollHelper',
          active: true,
        },
      ],
      days: [
        { value: 'BIO', text: 'BIO' },
        { value: 'NON-BIO', text: 'NON-BIO' },
      ],
      code: '',
     triptype: this.$route.params.tripType,
      tripclass: '',
      day: '',
      TripClass: [],
      lgusnames: [],
      lgus:this.$route.params.lguId,
      lgusdata: '',
      lguname: '',
      rate:this.$route.params.rate,
      startDate:this.$route.params.effectiveStartDate,
      endDate:this.$route.params.effectiveEndDate,
      trucktype:this.$route.params.truckType
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.getclass()
    // this.getClientDetails()
    // this.getplans()
    this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.permission()
    this.getemployees()
  },
  methods: {
    getlgu() {
      this.lgusnames.map((e) => {
        if (this.lguname === e.lguName) {
          this.lgusdata = e.id

          // this.form.district === e.districtName
        }
      })
    },
    async getemployees() {
      try {
        const result = await lgus()
        this.lgusnames = result.data.response.result
        this.lgusnames.map((e) => {
            if(this.$route.params.lguId === e.id){
          this.lgus = e.lguName
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
          truckType: this.trucktype,
          lguId: this.lgusdata,
          tripType: this.triptype,
          rate: this.rate,
          effectiveStartDate:this.startDate,
          effectiveEndDate: this.endDate,
          status: 1,
        }
        const result = await Createpayrolldriver(payload)

        // this.rid = result.data.response.Roles.id
        // console.log(this.rid)

        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Created Payroll Driver  Successfully`,
            duration: 5000,
          })
             this.$router.push({path:'/Payroll/Ratecard/PayrollDriver'})
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
      <b-card header="ViewPayrollHelper" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form @submit.prevent="create">
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Trip Type</label
                >
                <input
                  v-model="trucktype"
                  type="text"
                  placeholder="Enter Truck Type"
                  class="form-control"
                  required
                  disabled
                />
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
                  disabled
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
                <input
                  v-model="triptype"
                  type="text"
                  placeholder="Enter Trip Type"
                  class="form-control"
                  required
                  disabled
                />

                <!-- Default input name -->
              </b-col>
              <b-col>
                <label for="default">LGU</label>
                  <input
                  v-model="lgus"
                  disabled
                  type="text"
                 
                  class="form-control"
                  required
                />
                <!-- <b-form-select
                  required
                  v-model="lguname"
                  placeholder="Select LGU"
                  :options="lgus"
                  @change="getlgu"
                ></b-form-select> -->
              </b-col>
              <br />
            </b-row>
            <b-row>
              <b-col>
                <!-- Default input text -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Start Date</label
                >
                <!-- <datetime
                  v-model="startDate"
                  :format="{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  }"
                  type="datetime"
                  placeholder="SELECT START DATE"
                  name="startdate"
                ></datetime> -->
                  <input
                  v-model="startDate"
                  disabled
                  type="text"
                  placeholder="Enter Trip Type"
                  class="form-control"
                  required
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >End Date</label
                >
                 <input
                  v-model="endDate"
                  disabled
                  type="text"
                  placeholder="Enter Trip Type"
                  class="form-control"
                  required
                />
                <!-- <datetime
                  v-model="endDate"
                  :format="{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  }"
                  type="datetime"
                  placeholder="SELECT END DATE"
                  name="startdate"
                ></datetime> -->
              </b-col>
            </b-row>
            <br />
            <!-- <button
              type="submit"
              class="btn btn-custome float-right btn-secondary mb-3"
              >Submit</button
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