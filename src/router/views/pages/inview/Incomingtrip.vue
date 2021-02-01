<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import moment from "moment";
import IncomingTripTicket from '../tickets/incomingtripticket';
import {
 Tripdownload,incomingtrips,deletetripincoming,lgus, routemaster
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader , IncomingTripTicket },
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
          key: 'truckBodyNo',
          label: 'Truck BodyNo',
        },
        {
          key: 'truckType',
          label: 'Truck Type',
        },
        {
          key: 'truckplateNo',
          label: 'Truck plateNo',
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
      areas:[],
      printData: []
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
    
  },
  methods: {
    formatdate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
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
    async printTicket(data) {
      this.areas = []
      const result = await routemaster();
      const data1 = result.data.response.RouteMaster;
      console.log(data1);
      for(var i = 0; i < data.item.tripIncomingAreaRoute.length;i++) {
        data1.map(e => {
          if(data.item.tripIncomingAreaRoute[i].routeId == e.id ){
            this.areas.push(e.routeName)
          }
        })
      }
      console.log(this.areas);
        this.printData = data;
        this.ticket = true;
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader  />
    <IncomingTripTicket 
      v-if="ticket==true" 
      :data="printData" 
      :ticket="ticket" 
      :areas="areas"
      @change="ticket = $event"
    />
   <div class="animated fadeIn">
      <b-card
        header="Incoming Trips"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div>
          <div class="mx-xl-5">
            
         <b-row>
           <b-col>
              
           
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2 w-50"
                    ></b-form-input>
           </b-col>
           <!--<b-col>
        
                <b-button
                  class="btn btn-custome float-right btn-secondary mb-4 mr-2"
                  text="Create Tenant"
                  @click="$router.push({path:'/CreateIncomingTrip'})"
                  >Create Incoming Trip</b-button
                >
           </b-col>-->
         </b-row>
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
              <router-link :to="{ name: 'Viewtripincoming', params: data.item }">
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
              :total-rows="rows"
              aria-controls="my-table"
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