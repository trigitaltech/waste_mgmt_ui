<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import moment from "moment";
import {
 Tripdownload,incomingtrips,deletetripincoming
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      json_fields: {
        'Pin Value': 'pinValue',
        serialNo: 'serialNo',
        'Expiry Date': 'expiryDate',
        'Pin Type': 'pinType',
        Status: 'status',
      },
      json_data: [],
      striped: false,
      bordered: true,
      small: false,
      id:"",
      dark: false,
      fixed: false,
      printPdf: [],
      tableData: [],
      title: 'Trip Incoming Details',
      items: [
        {
          text: 'Trips',
          href: '/',
        },
        {
          text: 'Incoming Trips',
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      item: {  },
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: 'age',
      sortDesc: false,
      tabIndex: 0,
      striped: false,
      bordered: true,
      filter: '',
      perPage: 10,
      hover: true,
      currentPage: 1,
      small: false,
      dark: false,
      fixed: false,
      TripColumns: [
        {
          key: 'id',
          label: 'Id'
        },
        {
          key: 'tripDate',
          label: 'Trip Date',
        },
        {
          key: 'plateNo',
          label: 'Plate No',
        },
        {
          key: 'truckType',
          label: 'Truck Type',
        },
        {
          key: 'bodyNO',
          label: 'Body No',
        },
        {
          key: 'status',
          label: 'Status',
        },
        {
          key: 'actions',
          sortable: true,
        },
      ],
      loginUserType:null
    }
  },
  computed: {
    rows() {
      return this.exportVoucherData.length
    },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  created() {
    var loginDetails = localStorage.getItem("auth.currentUser")
    loginDetails = JSON.parse(loginDetails)
    this.loginUserType = loginDetails.roles[0].code;
    console.log(loginDetails)
    let query = this.$route.query.name
    if (query) {
      this.tabIndex = 1
    } else {
      this.tabIndex = 0
    }
  },
  mounted() {
    this.getTrips()
    this.totalRows = this.items.length
  },
  filters: {
    formatdatetime: function(value) {
      if (value) {
        return moment(String(value)).format("hh:mm A DD/MM/YYYY");
      }
    },
    formatdate: function(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    }
  },
  methods: {
      async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deletetripincoming(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Tripincoming Successfully`,
            duration: 5000,
          })
         this.refresh()
        }
      } catch (e) {
         this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
     
    },
    async getTrips() {
      try{
        let result = await incomingtrips();
        this.item = result.data.response.Incomingtrip;
        console.log(result);
      }
      catch(e) {
        console.log(e);
      }
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader  />
   <div class="animated fadeIn">
      <b-card
        header="Incoming Trips"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
          <div class="card mx-xl-5">
            <div class="float-right">
                <b-button
                  class="btn btn-custome float-right btn-secondary mt-3 mr-2"
                  text="Create Tenant"
                  @click="$router.push({path:'/CreateIncomingTrip'})"
                  >Create Incoming Trip</b-button
                >
              </div>
            <div class="card-body">
              <div class="mt-3">
          <b-table
            :dark="dark"
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            :filter="filter"
            id="my-table"
            responsive="sm"
            :current-page="currentPage"
            :per-page="perPage"
          
            :small="small"
            :fixed="fixed"
            :fields="TripColumns"
            class="mt-3"
            ref="roles"
          >
            <template v-slot:cell(time_in)="data">
              <div>{{ data.item.tripDate | formatdatetime }}</div>
            </template>
            <template v-slot:cell(actions)="data">
              <router-link :to="{ name: 'Viewincomingtrip', params: data.item }">
              <b-button size="sm" class="mr-2" variant="primary" >
              <i class="fa fa-eye"></i>
            </b-button>
              </router-link>
            <router-link :to="{ name: 'EditIncomingTrip', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary"  :hidden="data.item.status === 'APPROVED' || data.item.status === 'REJECTED' ">
                  <i class="fas fa-pencil-alt edit"></i>
                </b-button>
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
              aria-controls="my-table"
              prev-text="Prev"
              next-text="Next"
              hide-goto-end-buttons
            ></b-pagination>
          </div>
        </div>
        
            </div>
          </div>
        </div>
      </b-card>
   </div>
  </Layout>
</template>
<style lang="scss">
.table thead th {
    outline: none !important;
    color:black;
}
</style>