<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
// import JsonExcel from 'vue-json-excel'

// Vue.component('downloadExcel', JsonExcel)
import {
  // eslint-disable-next-line no-unused-vars
 Tripdownload
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
          text: 'Reports',
          href: '/',
        },
        {
          text: 'Trip Incoming Detail',
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: 'age',
      sortDesc: false,
      exportFields: [
        { key: 'saleReqNo', sortable: true },
        { key: 'id', sortable: true },
        { key: 'requestDate', label: 'Date', sortable: true },

        { key: 'quantity', sortable: true },
        // { key: 'requestBy', sortable: true },

        { key: 'status', sortable: true },
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
  created() {
    this.voucherId = this.$route.params.id
    console.log(this.voucherId)
    let query = this.$route.query.name
    if (query) {
      this.tabIndex = 1
    } else {
      this.tabIndex = 0
    }
  },
  mounted() {
    this.getVoucherDetails()
    this.getExportVoucherDetails()
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    onProgress(progress) {
      if (progress > 99) {
        NProgress.done()
        // var doc = document.getElementsByClassName("vue-html2pdf").innerHTML;
        // var originalContents = document.body.innerHTML;
        // document.body.innerHTML = doc;
        // window.print();
        // document.body.innerHTML = originalContents;
      }
      console.log(`PDF generation progress: ${progress}%`)
    },
    hasStartedDownload() {
      console.log(`PDF has started generation`)
    },
    hasDownloaded() {
      console.log(`PDF has downloaded yehey`)
    },
    domRendered() {
      console.log('Dom Has Rendered')
    },
    async getVoucherDetails() {
      try {
        const res = await voucherView(this.voucherId)
        this.vouchers = res.data
      } catch (e) {
        this.$toasted.error(e.message.defaultUserMessage, {
          duration: 7000,
        })
      }
    },
    async getExportVoucherDetails() {
      try {
        // eslint-disable-next-line camelcase
        const office_id = this.$store.state.auth.currentUser.officeId
        const id = this.voucherId
        const result = await exportVoucherView(office_id, id)
        this.exportVoucherData = result.data
      } catch (e) {
        this.$toasted.error(e.message.defaultUserMessage, {
          duration: 7000,
        })
      }
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    async makeExportVoucher() {
      try {
        const payload = {
          quantity: this.Qty,
          locale: "en",
        }
        await exportVoucher(this.voucherId, payload)
        this.getExportVoucherDetails()
        this.exportVouchers = false
        this.$swal({
          title: 'Congratulation',
          type: 'success',
          text: `You Export Voucher Successfully`,
          duration: 5000,
        })
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },
    demoFun() {
      console.log('heee')
      var divContents = document.getElementById('pdf-voucher').innerHTML
      console.log("divcontents",divContents)
      var a = window.open('', '', 'height=500, width=500')
      a.document.write('<html>')
      a.document.write('<body >')
      a.document.write('<div>')
      a.document.write(divContents)
      a.document.write('</div></body></html>')
      a.document.close()
      a.print()
    },
    exports(value) {
      this.exportVouchers = true
      console.log('log')
    },
    async create(pay) {
      try {
        NProgress.start()
        const result = await Tripdownload(this.id)
        const { data } = result
        this.printPdf = data.response.Incomingtrip
        console.log("haii",this.printPdf)

        setTimeout(() => {
         
          this.demoFun()
        }, 2000)
      } catch (e) {
        NProgress.done()
        console.log(e)

        this.$toasted.error(e.message.defaultUserMessage, {
          duration: 7000,
        })
      }
    },
    async download(pay) {
      console.log('download')
      try {
        NProgress.start()
        const result = await vouchersDownload(pay.id)
        console.log('Result', result)

        this.json_data = result.data.voucherData
      } catch (e) {
        NProgress.done()
        console.log(e)

        this.$toasted.error(e.message.defaultUserMessage, {
          duration: 7000,
        })
      }
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
   <div class="animated fadeIn">
      <b-card
        header="Trip Incoming Details"
        header-bg-variant="info"
        border-variant="info"
        header-text-variant="white"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
          <!-- Card -->
          <div class="card mx-xl-5">
            <!-- Card body -->
            <div class="card-body">
              <!-- Default form subscription -->
              <form>
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                   <input
                      type="text"
                      disabled
                      id="defaultFormCardNameEx"
                      class="form-control"
                      placeholder="Trip ID"
                    />
                  </b-col>
                  <b-col style="margin-left:50px">
                    <input
                      type="text"
                      placeholder="Enter Trip Id"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="id"
                    />

                  </b-col>
                  <b-col>
                     <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-info float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Generate</b-button
                >
                  </b-col>
                </b-row>
                <br />
               
              </form>
              <!-- Default form subscription -->
            </div>
            <!-- Card body -->
          </div>
          <!-- Card -->
        </div>
      </b-card>
   </div>
   
                
                   
                    
             <div
                  id="pdf-voucher"
                  class="mt-4 pdf-voucher"
                  style="font-family: sans-serif;display:none"
                >
                  <section
                    class="pdf-content row justify-content-center"
                   >
              
              <h2 class="h1-responsive font-weight-bold text-center my-4" style="text-decoration: underline;margin-left: 150px"
                >Route Trip Ticket</h2
              >
              <div style="margin-left: 290px">
                <h6 
                  >CONTROL NO :
                  <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.controllNo}}</span
                ></h6>

                <h6
                  >DATE :
                 <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.tripDate}}</span
                ></h6>
              </div>
              <!--Section description-->
              <p class="h1-responsive font-weight-bold text-center my-4" style="color:black"
                >INT'L  SWIMS  INC.  &  DOMINUS  CONSTRUCTION  (JOINT VENTURE)</p
              >
              <p class="text-center w-responsive mx-auto mb-5"
                >LOT 1 QUIRINO HIGHWAY ST. DOMINIQUE DR.SUBD.BAESA QUEZON
                CITY</p
              >

              <!--Grid row-->
              
                <b-row>
                  <b-col>
                   
                      <h6
                        >LGU :
                        <span
                          style="color: black; font-size: 15px; margin-right:10px; text-decoration: underline"
                        >{{printPdf.lgu}}</span
                        >
                        TOTAL DISTANCE(KM) :
                        <span
                         style="color: black; font-size: 15px; text-decoration: underline"
                        >{{printPdf.totalKmServed}}</span
                      ></h6>

                      <h6
                        >PLATE NO :
                        <span
                          style="color: black; font-size: 15px; margin-right:90px; text-decoration: underline"
                        >{{printPdf.plateNo}}</span
                      >
                      BODY NO :
                        <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.bodyNo}}</span
                      >
                      </h6>
                      <h6>
                      <label style="margin-left: 213px;"> TYPE:</label>
                        <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.truckType}}</span>
                     
                      </h6>
                  
                  </b-col>
                  <b-col>
                  
                   

                    
                   
                  </b-col>
                </b-row>
                <!--Grid column-->
                <div >
                  <div class="md-form">
                    <h5 for="message">COLLECTION HOURS (TIME)</h5>
                  </div>
                  <b-row>
                    <b-col>
                      <div>
                        <h6
                          >FROM:
                        <span
                          style="color: black; margin-left: 10px; margin-right: 50px;font-size: 10px; text-decoration: underline"
                        >{{printPdf.collectionStartTime}} AM/PM</span
                        >   TO :
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.collectionEndTime}} AM/PM</span
                        ></h6>
                        <h6
                          >DRIVER :
                         <span
                          style="color: black; margin-left: 10px; margin-right: 50px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.driverName}}</span
                        > ITEM DISPATCHED :
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.contractor_DISPATCHER_NAME}}</span
                        ></h6>
                      </div>
                    </b-col>
                  </b-row>
                  
                  <b-row>
                    <b-col>
                      <div>
                        <h6
                          >GARBAGECOLLECTIONS :
                          <span
                            style="
                              color: black;
                              margin-left: 30px;
                               margin-right: 30px;
                              font-size: 20px;
                            "
                          ></span
                        > GUIDE:
                          <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.guide}}</span
                        ></h6>
                        <h6
                          ><label style="margin-left: 213px;"> ROUTE/AREA OF COLLECTIONS: </label>
                          <span
                            style="
                              color: red;
                              margin-left: 10px;
                              font-size: 20px;
                            "
                          >{{printPdf.servingArea}}  {{printPdf.servingRoute}}</span
                        ></h6>
                      </div>
                    </b-col>
                    <b-col>
                      <div>
                        <h6
                          ></h6>
                      </div>
                      
                    </b-col>
                  </b-row>
                </div>
              

             
                <!--Grid column-->

                <!--Grid column-->

                <div class="col-md-5 text-center">
                  <ul class="list-unstyled mb-0" style="border: 5px soliblack">
                    <p class="text-center w-responsive mx-auto mb-1 mt-5"
                      >VOLUME OF GARBAGE FOR FINAL DISPOSAL</p
                    >
                    <b-row>
                      <div>
                        <h6
                          >CONTRACTOR.DISPATCHER:
                           <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.contractor_DISPATCHER_NAME}}</span
                        ></h6>
                      </div>

                      <div>
                        <h6
                          >LGU CHECKER :
                          <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.lgu_CHECKER_NAME}}</span
                        ></h6>
                      </div>
                    </b-row>
                  </ul>
            
                </div>
                  
                </section>
                
             </div>
  </Layout>
</template>
<style lang="scss" scoped media="print">
.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #26a69a;
  border-color: #5369f8;
}
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
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
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
.text-muted {
    color: black!important;
}
.page-break {
  display: block;
  page-break-before: always;
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