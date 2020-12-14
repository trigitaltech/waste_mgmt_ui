<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import moment from 'moment'
// import JsonExcel from 'vue-json-excel'

// Vue.component('downloadExcel', JsonExcel)
import {
getincomingtrip,getoutgoingtrip
} from '../../../../services/auth'

export default {
  page: {
    title: 'Control Checker',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader,moment },
  data() {
    return {
        startDate:"",
        endDate:"",
      json_fields: {'Pin Value':'pinValue','serialNo':'serialNo','Expiry Date':'expiryDate','Pin Type':'pinType','Status':'status'},
      json_data: [],
      striped: false,
      bordered: true,
      small: false,
      dark: false,
      	submitted:false,
      fixed: false,
      printPdf: [],
      tableData: [],
      title: 'Control Checker',
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Control Checker',
          active: true,
        },
      ],
      oid:1,
      iid:1,

      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: 'age',
      sortDesc: false,
      status:null,
       statuses: [
          { value: null, text: 'Select Status' },
       ],
      exportFields: [
        { key: 'Tripdate', sortable: true },
        { key: 'Trip No', sortable: true },
        { key: 'Barrangay',  sortable: true },
        { key: 'Route Name',  sortable: true },
      

        { key: 'status', sortable: true },
        // { key: 'requestBy', sortable: true },

        // { key: 'status', sortable: true },
        { key: 'action' },
      ],
      voucherId: null,
      vouchers: {},
      exportVouchers: false,
      Qty: null,
      exportVoucherData: [],
      tabIndex: 0,
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
//   created() {
//     this.voucherId = this.$route.params.id
//     console.log(this.voucherId)
//     let query = this.$route.query.name
//     if (query) {
//       this.tabIndex = 1
//     } else {
//       this.tabIndex = 0
//     }
//   },
  mounted() {
    // this.getVoucherDetails()
    // this.getExportVoucherDetails()
    // Set the initial number of items
    this.totalRows = this.items.length
    this.getTripincoming
  },
  methods: {
    //    goFilter() {
    //   this.getTripincoming(this.startDate, this.endDate)
    // },
    async getTripincoming() {
    //   console.log(startTime)
  
      try {
    
        const  payload = {
                startDate: this.startDate,
                endDate: this.endDate
                }
               
                console.log("payload",payload)
        let result = await getincomingtrip(this.iid,payload)
       
      
        //   let response = await getincomingtrip(payload)
        //   this.tableData = response.data.pageItems
      
         
      } catch (e) {
        this.tableData = []
        this.$toasted.error(e.message.defaultUserMessage,{
          duration: 7000
        });
      }
    },
      async getOUTgoing() {
    //   console.log(startTime)
  
      try {
    
        const  payload = {
                startDate: this.startDate,
                endDate: this.endDate
                }
             
                console.log("payload",payload)
        let result = await getoutgoingtrip(this.oid,payload)
       
      
        //   let response = await getincomingtrip(payload)
        //   this.tableData = response.data.pageItems
      
         
      } catch (e) {
        this.tableData = []
        this.$toasted.error(e.message.defaultUserMessage,{
          duration: 7000
        });
      }
    },
     getFormattedDate(timeStamp) {
      //  console.log(timeStamp)
      let date
      if (timeStamp !== undefined)
        date = timeStamp[0] + '-' + timeStamp[1] + '-' + timeStamp[2]
      return moment(date).format('MMM Do YYYY') +"  "+ timeStamp[3] + ":" + timeStamp[4] + ":" + timeStamp[5]
    },
  
    
   
    
   
  },
}
</script>

<template>
  <Layout>
    <PageHeader  :items="items" />
    <div class="row">
      <div class="col">
         <b-card
        header="Control Checker"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
          <div class="card-body p-0">
            <!-- <h6 class="card-title border-bottom p-3 mb-0 header-title"
              >Project Overview</h6
            >-->
            <div class="row py-1">
              <!-- Widget -->

              <div class="col-xl-4 col-sm-6">
                <!-- stat 1 -->
                <div class="media p-3">
                  <feather type="grid" class="align-self-center icon-dual icon-lg mr-4"></feather>
                  <div class="media-body">
                    <h5 class="mt-0 mb-0">Total No Of IN Trips</h5>
                    <span class="text-muted">{{ vouchers.itemId }}</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-sm-6">
                <!-- stat 1 -->
                <div class="media p-3">
                  <feather type="calendar" class="align-self-center icon-dual icon-lg mr-4"></feather>
                  <div class="media-body">
                    <h5 class="mt-0 mb-0">Total No Of Out Trips</h5>
                    <span class="text-muted">{{ vouchers.purchaseDate }}</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-sm-6">
                <!-- stat 1 -->
                <div class="media p-3">
                  <feather type="check-square" class="align-self-center icon-dual icon-lg mr-4"></feather>
                  <div class="media-body">
                    <h5 class="mt-0 mb-0">Total No Of SR</h5>
                    <span class="text-muted">{{ vouchers.status }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
 </b-card>
        </div>
        
      </div>
   
    <div class="row justify-content-center">
      <div class="col-lg-12">
         <div class="card">
          <div class="card-body">
            <b-tabs v-model="tabIndex" pills justified class="navtab-bg w-100">
                  <b-tab title="Incoming Trips">
                <p class="text-muted font-13 mb-3"></p>
              <div class="row">
              <!-- Search -->
              <div class="col-sm-12 col-md-4">
                <div id="tickets-table_filter" class="dataTables_filter">
                  <label class="d-inline-flex align-items-center">
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
              <div class="col-sm-12 col-md-8">
                <div class="row justify-content-end">
                  <div class="col-md-4 mb-2 col-sm-12">
                    <label for="inputPassword2" class="sr-only">Start Date</label>
                    <flat-pickr
                      v-model="startDate"
                      class="form-control"
                      placeholder="Start Date"
                      name="startdate"
                    ></flat-pickr>
                  </div>
                  <div class="col-md-4 mb-2 col-sm-12">
                    <label for="inputPassword2" class="sr-only">End Date</label>
                    <flat-pickr
                      v-model="endDate"
                      class="form-control"
                      placeholder="End Date"
                      name="enddate"
                    ></flat-pickr>
                  </div>
                  <div class="col-md-2 col-sm-12">
                    <button type="submit" class="btn d-block w-100 btn-primary" @click="getTripincoming">Go</button>
                  </div>
                  <div class="col-md-2 col-sm-12">
              
                <b-form-select
                  v-model="status"
                  :options="statuses"
                 
                  placeholder="Select Status"
                  class="form-control"
                
                ></b-form-select>
                  </div>
                  
                </div>
              </div>
            </div>
                <div class="table-responsive mb-0">
                  <b-table
                    show-empty
                    :dark="dark"
                    :striped="striped"
                    :bordered="bordered"
                    :small="small"
                    :fixed="fixed"
                    :items="exportVoucherData"
                    :fields="exportFields"
                    responsive="sm"
                    thead-class="header"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :filter="filter"
                    :filter-included-fields="filterOn"
                    @filtered="onFiltered"
                  >
                    <template v-slot:cell(requestDate)="data"
                      >{{ getFormattedDate(data.item.requestDate) }}</template>
                    <template v-slot:cell(action)="data">
                      <button
                        class="btn btn-outline-primary btn-sm mr-2 d-inline-flex align-items-center"
                        @click="print(data.item)"
                      >
                        <feather type="printer" class="icon-xs mr-2"></feather>Print
                      </button>
                      <button  @click="download(data.item)" style="border:1px;margin:5px;background-color:white">
                        
                      <download-excel
                        class="btn btn-outline-primary btn-sm mr-2 d-inline-flex align-items-center"
                        :data="json_data"
                        :fields="json_fields"
                        worksheet="My Worksheet"
                        name="vouchers.xls"
                      >
                        <feather type="download" class="icon-xs mr-2"  ></feather>Download
                      </download-excel>
                      </button>
                      <!-- <download-excel :data="json_data">
                  
                        <feather type="download" class="icon-xs mr-2"></feather>Download
                      </download-excel>-->
                    </template>
                  </b-table>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="dataTables_paginate paging_simple_numbers float-right">
                      <ul class="pagination pagination-rounded mb-0">
                        <!-- pagination -->
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  id="pdf-voucher"
                  class="mt-4 pdf-voucher"
                  style="font-family: sans-serif;display:none"
                >
                  <section
                    class="pdf-content row justify-content-center"
                    style="display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -12px; margin-left: -12px;justify-content: center; "
                  >
                    <section
                      v-for="(val, key) in printPdf"
                      :key="key"
                      class="chart-container bg-light m-2"
                      style="-webkit-box-flex: 0;-ms-flex: 0 0 41.6666666667%;flex: 0 0 41.6666666667%;max-width: 41.6666666667%;  padding: 20px;background: #e5e0dd;border: 3px dotted #ddd;"
                    >
                      <div
                        v-if="val.pinType === 'PRODUCT'"
                        style="position: relative; margin-top: 20px;"
                      >
                        <h2
                          style="position: absolute;
                              top: 35%;
                              left: 10%;
                              font-size: 15px;
                              font-weight: 700;
                              color: #000;"
                        >{{val.pinNo.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ')}}</h2>
                        <h4
                          style="position: absolute;
                              top: 58%;
                              left: 30%;
                              font-size: 12px;
                              font-weight: 700;
                              color: #000;"
                        >{{ val.serialNo }}</h4>
                        <!-- <img src="@assets/images/PIN.jpg" width="70%" /> -->
                      </div>
                      <div
                        v-if="val.pinType === 'VALUE'"
                        style="position: relative;margin-top: 15px;"
                      >
                        <h2
                          style="position: absolute;
                              top: 52%;
                              left: 12%;
                              font-size: 13px;
                              font-weight: 700;
                              color:red"
                        >
                          <!-- {{ val.pinNo.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'') }} -->
                          {{val.pinNo.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ')}}
                        </h2>
                        <span
                          style="position: absolute;
                              top: 7%;
                              right: 38%;
                              font-size: 10px;
                              font-weight: 700;
                              color:red"
                        >N{{val.pinValue}}</span>
                        <h4
                          style="position: absolute;
                              bottom: -4%;
                              left: 8%;
                              font-size: 7px;
                              font-weight: 700;
                              color:red;"
                        >{{ val.serialNo }}</h4>
                        <!-- <img src="@assets/images/PVoD1.png" width="70%" /> -->
                      </div>
                      <div class="page-break"></div>
                    </section>
                  </section>
                </div>
                <!-- <div class="container pdf-voucher" id="pdf-voucher">
        <div class="row">
        <div class="col-md-6"  v-for="(val, key) in printPdf"
                      :key="key">
          <div class="relative">
          <h2 class="print-voucher-text">{{val.pinNo}}</h2>
          <img src="@assets/images/PIN.jpg">
        </div>
        </div>
        </div>
                </div>-->
              </b-tab>
              <b-tab title="Out Going Trips">
                <p class="text-muted font-13 mb-3"></p>
                <div class="row">
              <!-- Search -->
              <div class="col-sm-12 col-md-4">
                <div id="tickets-table_filter" class="dataTables_filter">
                  <label class="d-inline-flex align-items-center">
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
              <div class="col-sm-12 col-md-8">
                <div class="row justify-content-end">
                  <div class="col-md-4 mb-2 col-sm-12">
                    <label for="inputPassword2" class="sr-only">Start Date</label>
                    <flat-pickr
                      v-model="startDate"
                      class="form-control"
                      placeholder="Start Date"
                      name="startdate"
                    ></flat-pickr>
                  </div>
                  <div class="col-md-4 mb-2 col-sm-12">
                    <label for="inputPassword2" class="sr-only">End Date</label>
                    <flat-pickr
                      v-model="endDate"
                      class="form-control"
                      placeholder="End Date"
                      name="enddate"
                    ></flat-pickr>
                  </div>
                  <div class="col-md-2 col-sm-12">
                    <button type="submit" class="btn d-block w-100 btn-primary" @click="getTripincoming">Go</button>
                  </div>
                  <div class="col-md-2 col-sm-12">
              
                <b-form-select
                  v-model="status"
                  :options="statuses"
                 
                  placeholder="Select Status"
                  class="form-control"
                
                ></b-form-select>
                  </div>
                  
                </div>
              </div>
            </div>
                <!-- Table -->
                <div class="table-responsive mb-0">
                  <b-table
                    show-empty
                    :dark="dark"
                    :striped="striped"
                    :bordered="bordered"
                    :small="small"
                    :fixed="fixed"
                    :items="exportVoucherData"
                    :fields="exportFields"
                    responsive="sm"
                    thead-class="header"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :filter="filter"
                    :filter-included-fields="filterOn"
                    @filtered="onFiltered"
                  >
                    <template v-slot:cell(requestDate)="data"
                      >{{ getFormattedDate(data.item.requestDate) }}</template>
                    <template v-slot:cell(action)="data">
                      <button
                        class="btn btn-outline-primary btn-sm mr-2 d-inline-flex align-items-center"
                        @click="print(data.item)"
                      >
                        <feather type="printer" class="icon-xs mr-2"></feather>Print
                      </button>
                      <button  @click="download(data.item)" style="border:1px;margin:5px;background-color:white">
                        
                      <download-excel
                        class="btn btn-outline-primary btn-sm mr-2 d-inline-flex align-items-center"
                        :data="json_data"
                        :fields="json_fields"
                        worksheet="My Worksheet"
                        name="vouchers.xls"
                      >
                        <feather type="download" class="icon-xs mr-2"  ></feather>Download
                      </download-excel>
                      </button>
                      <!-- <download-excel :data="json_data">
                  
                        <feather type="download" class="icon-xs mr-2"></feather>Download
                      </download-excel>-->
                    </template>
                  </b-table>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="dataTables_paginate paging_simple_numbers float-right">
                      <ul class="pagination pagination-rounded mb-0">
                        <!-- pagination -->
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  id="pdf-voucher"
                  class="mt-4 pdf-voucher"
                  style="font-family: sans-serif;display:none"
                >
                  <section
                    class="pdf-content row justify-content-center"
                    style="display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -12px; margin-left: -12px;justify-content: center; "
                  >
                    <section
                      v-for="(val, key) in printPdf"
                      :key="key"
                      class="chart-container bg-light m-2"
                      style="-webkit-box-flex: 0;-ms-flex: 0 0 41.6666666667%;flex: 0 0 41.6666666667%;max-width: 41.6666666667%;  padding: 20px;background: #e5e0dd;border: 3px dotted #ddd;"
                    >
                      <div
                        v-if="val.pinType === 'PRODUCT'"
                        style="position: relative; margin-top: 20px;"
                      >
                        <h2
                          style="position: absolute;
                              top: 35%;
                              left: 10%;
                              font-size: 15px;
                              font-weight: 700;
                              color: #000;"
                        >{{val.pinNo.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ')}}</h2>
                        <h4
                          style="position: absolute;
                              top: 58%;
                              left: 30%;
                              font-size: 12px;
                              font-weight: 700;
                              color: #000;"
                        >{{ val.serialNo }}</h4>
                        <!-- <img src="@assets/images/PIN.jpg" width="70%" /> -->
                      </div>
                      <div
                        v-if="val.pinType === 'VALUE'"
                        style="position: relative;margin-top: 15px;"
                      >
                        <h2
                          style="position: absolute;
                              top: 52%;
                              left: 12%;
                              font-size: 13px;
                              font-weight: 700;
                              color:red"
                        >
                          <!-- {{ val.pinNo.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'') }} -->
                          {{val.pinNo.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ')}}
                        </h2>
                        <span
                          style="position: absolute;
                              top: 7%;
                              right: 38%;
                              font-size: 10px;
                              font-weight: 700;
                              color:red"
                        >N{{val.pinValue}}</span>
                        <h4
                          style="position: absolute;
                              bottom: -4%;
                              left: 8%;
                              font-size: 7px;
                              font-weight: 700;
                              color:red;"
                        >{{ val.serialNo }}</h4>
                        <!-- <img src="@assets/images/PVoD1.png" width="70%" /> -->
                      </div>
                      <div class="page-break"></div>
                    </section>
                  </section>
                </div>
                <!-- <div class="container pdf-voucher" id="pdf-voucher">
        <div class="row">
        <div class="col-md-6"  v-for="(val, key) in printPdf"
                      :key="key">
          <div class="relative">
          <h2 class="print-voucher-text">{{val.pinNo}}</h2>
          <img src="@assets/images/PIN.jpg">
        </div>
        </div>
        </div>
                </div>-->
              </b-tab>
              
            </b-tabs>
          </div>
        </div>
      </div>
  </div>

    <!-- end row -->
  </Layout>
</template>
<style lang="scss" scoped media="print">
.pdf-content {
  background: #fff;
  font-family: sans-serif;
  .chart-container {
    padding: 20px;
    background: #e5e0dd;
    border: 3px dotted #ddd;
    pointer-events: none;
    //   .vaucher {
    //     width: 100%;
    //   }
    //   .voucher-value {
    //     position: absolute;
    //   }
  }
  .brack {
    page-break-inside: avoid;
  }
}
.print-voucher-text {
  position: absolute;
  top: 36%;
  left: 14%;
  font-size: 17px;
  font-weight: 700;
  color: #000;
}
@media all {
  .page-break {
    display: none;
  }
}

.page-break {
  display: block;
  page-break-before: always;
}
</style>
