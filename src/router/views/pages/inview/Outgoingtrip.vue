<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import OutgoingTripTicket from '../tickets/outgoingtripticket';
import moment from "moment";
import {
 Tripdownload,incomingtrips,deletetripincoming,getAllOutgoingTrip,deletetripoutgoing,lgus
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader ,moment, OutgoingTripTicket},
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
      item: [],
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
          label: 'Id',
          sortable: true,
        },
        
          {
          key: 'controlNo',
          label: 'controlNo',
          sortable: true,
        },
         {
          key: 'lguId',
          label: 'LGU',
        },
        {
          key: 'tripDate',
          label: 'Trip Date',
        },
        {
          key: 'driverName',
          label: 'driverName',
        },
        {
          key: 'helperName',
          label: 'helperName',
        },
        {
          key: 'plateNo',
          label: 'Truck plateNo',
        },
        {
          key: 'bodyNo',
          label: 'Truck BodyNo',
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
      loginUserType:null,
      lgudata:[],
      ticket: false,
      printData: []
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
    async printTicket(data) {
      this.printData = data;
      this.ticket = true;
    },
      formatdate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
      async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deletetripoutgoing(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Tripoutgoing Successfully`,
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
        let result = await getAllOutgoingTrip();
        this.item = result.data.response.OutgoingTrips
           const result1 = await  lgus()
        this.lgudata = result1.data.response.result

         for (var i = 0; i < this.item.length; i++) {
          
  for (var j = 0; j < this.lgudata.length; j++) {
if(this.lgudata[j].id === this.item[i].lguId ){
  this.item[i].lguId = this.lgudata[j].lguName
  
  break
}

  }
         }
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
    <OutgoingTripTicket
      :data="printData"
      :ticket="ticket"
      v-if="ticket == true"
      @change="ticket = $event"
    />
   <div class="animated fadeIn">
      <b-card
        header="Outgoing Trips"
        class="mt-10 ml-10 mr-5 mx-auto"
      >
        <div>
          <div class="mx-xl-5">
            <div class="float-right">
                <b-button
                  class="btn btn-custome float-right btn-secondary mb-4 mr-2"
                  text="Create Tenant"
                  @click="$router.push({path:'/CreateOutgoingTrip'})"
                  >Create Outgoing Trip</b-button
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
          :items="item"
            :small="small"
            :fixed="fixed"
            :fields="TripColumns"
            class="mt-3"
            ref="roles"
          >
           <template v-slot:cell(tripDate)="data"
                      >{{ formatdate(data.item.tripDate) }}</template>
               <template v-slot:cell(actions)="data">
              <router-link :to="{ name: 'Viewtripoutgoing', params: data.item }">
              <b-button size="sm" class="mr-2" variant="primary" >
              <i class="fa fa-eye"></i>
            </b-button>
              </router-link>
            <!-- <router-link :to="{ name: 'EditIncomingTrip', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary"  :hidden="data.item.status === 'APPROVED' || data.item.status === 'REJECTED' ">
                  <i class="fas fa-pencil-alt edit"></i>
                </b-button>
              </router-link> -->
              <b-button size="sm" class="mr-2" variant="primary" >
                  <span @click="printTicket(data)">
                    <i class="fa fa-print"></i>
                  </span>
                </b-button>
               <b-button size="sm" class="mr-2" variant="danger" >
               <span @click="deleteReq(data)">
              <i class="fa fa-times edit"></i>
            </span>
               </b-button>
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