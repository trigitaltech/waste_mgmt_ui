<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import moment from 'moment'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
  servicetruck,
  deleteservicerequest,
} from '../../../../services/auth'

export default {
  page: {
    title: 'Servicerequests Truck',
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
      item: [],
      plandata: '',
      striped: false,
      bordered: true,
      filter: '',
      perPage: 10,
      hover: true,
      currentPage: 1,
      small: false,
      dark: false,
      fixed: false,
      amount: '',
      submitted: false,
      title: 'Register',
      item: { key: 'resource', value: 'Frozen Yogurt', name: '159' },

      ServicerequestdetailsColumns: [
        {
          key: 'id',

          label: 'ID',
        },
         {
          key: 'dumpingareaId',
          label: 'DumpingArea',
        },
        {
          key: 'controlNo',
          label: 'ControlNo',
        },

        {
          key: 'truckType',
          label: 'TruckType',
        },

       
        {
          key: 'driverName',
          label: 'driverName',
        },

        {
          key: 'tripDate',
          label: 'TripDate',
        },
        {
          key: 'status',
          label: 'status',
        },
        {
          key: 'actions',
          label: 'actions',
        },
      ],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Servicerequests Truck',
          active: true,
        },
      ],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
      item: {
        value: '',
        text: '',
      },
      form: {
        personalTitle: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        number: '',
        address: '',
        Servicerequestdetails: '',
        state: '',
        country: '',
        postCode: '',
        stbNumber: '',
        bouquets: null,
        amount: 0,
        voucherNo: '',
      },
      titles: ['Mr.', 'Sri.', 'Mrs'],
      vouchernumber: '',
      genderOpt: ['Male', 'Female', 'Other'],
      ServicerequestdetailsOpt: [],
      bouquetsOpt: [
        { value: null, text: 'Please select an option' },
        'FTA  AND STARTER',
      ],
      clientTemplete: {},
    }
  },
  computed: {
    rows() {
      return this.item.length
    },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
      this.servicerequest()
  },
  methods: {
    getDate(timeStamp) {
      // debugger
      //  console.log(timeStamp)
      let date
      // if (timeStamp !== undefined){
      // date = timeStamp[0] + '-' + timeStamp[1] + '-' + timeStamp[2]
      return moment(timeStamp).format('DD/MM/YYYY')
      // }
    },
    async deleteReq(data) {
      console.log('data', data.item.id)
      var id = data.item.id
      try {
        const result = await deleteservicerequest(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Servicerequest Successfully`,
            duration: 5000,
          })
          //  this.refresh()
        }
      } catch (e) {
        this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
    },
    async servicerequest() {
      try {
        const result = await servicetruck()
        this.item = result.data.response.ServiceTicket
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
      <b-card header="ServiceRequests Truck" class="mt-10 ml-10 mr-10 mx-auto">
        <b-row>
          <b-col md="3">
            <b-form-input
              v-model="filter"
              type="search"
              placeholder="Search..."
              class="form-control ml-2"
            ></b-form-input>
          </b-col>
          <b-col md="9">
            <b-button
              class="btn btn-custome float-right btn-secondary mb-3"
              text="Create Tenant"
              @click="$router.push({ name: 'CreateSRTruck' })"
              >Create SR Truck</b-button
            >
          </b-col>
        </b-row>
        <div class="mt-3">
          <b-table
            id="my-table"
            :dark="dark"
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            ref="roles"
            :filter="filter"
            :responsive="true"
            :current-page="currentPage"
            :per-page="perPage"
            :small="small"
            :fixed="fixed"
            :fields="ServicerequestdetailsColumns"
            :items="item"
            class="mt-3"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
            ><template v-slot:cell(jobStartTime)="data">
              <div class="table-row">{{ getDate(data.item.jobStartTime) }}</div>
            </template>
            <template v-slot:cell(tripDate)="data">
              <div class="table-row">{{ getDate(data.item.tripDate) }}</div>
            </template>

            <template v-slot:cell(actions)="data">
              <router-link
                :to="{ name: 'ViewserviceTruck', params: data.item }"
              >
                <span class="mr-2">
                  <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
              <router-link
                :to="{ name: 'EditSRTruck', params: data.item }"
              >
                <span class="mr-2">
                  <i class="fas fa-pencil-alt edit"></i>
                </span>
              </router-link>
              <span @click="deleteReq(data)">
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
<style scoped>
.table thead th {
  outline: none !important;
  color: black;
}
</style>