<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
// import JsonExcel from 'vue-json-excel'

// Vue.component('downloadExcel', JsonExcel)
import {
  // eslint-disable-next-line no-unused-vars
 Tripoutgoing
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Outgoing Details',
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
      title: 'Trip Outgoing Details',
      items: [
        {
          text: 'Reports',
          href: '/',
        },
        {
          text: 'Trip Outgoing Detail',
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
        const result = await Tripoutgoing(this.id)
        const { data } = result
        this.printPdf = data.response.Outgoingtrip
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
    <PageHeader :items="items" />
   <div class="animated fadeIn">
      <b-card
        header="Trip Outgoing Details"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              <form>
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                   <input
                      id="defaultFormCardNameEx"
                      type="text"
                      disabled
                      class="form-control"
                      placeholder="Trip ID"
                    />
                  </b-col>
                  <b-col style="margin-left:50px">
                    <input
                      id="defaultFormCardNameEx"
                      v-model="id"
                      type="text"
                      placeholder="Enter Trip Id"
                      class="form-control"
                    />

                  </b-col>
                  <b-col>
                     <b-button
                  class="btn btn-custome ml-4 btn-secondary mb-3"
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
                >INTERNATIONAL SWIMS, INC</h2
              >
              <h2 class="h1-responsive font-weight-bold text-center my-4" style="text-decoration: underline;margin-left: 150px"
                >TRUCK SPECIAL LOAD TRIP TICKET</h2
              >
               <b-row class="text-center">
                    <b-col>
                      <div>
                        <h6
                          >* FOR EQUIPMENT USED IF NECESSARY:
                        <span
                          style="color: black; margin-left: 10px; margin-right: 50px;font-size: 10px; text-decoration: underline"
                        ></span
                        >  CONTROL NO:
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999 </span
                        ></h6>
                        <h6
                          > Summarized from details ::
                         <span
                          style="color: black; margin-left: 10px; margin-right: 50px; font-size: 10px; text-decoration: underline"
                        >099999999999999</span
                        > DATE:
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
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
                <!--Grid column-->
                <div >
                  <div class="md-form">
                    <h5 for="message">COLLECTION HOURS (TIME)</h5>
                  </div>
                  <b-row class="text-center">
                    <b-col>
                      <div>
                        <h6
                          >LOCATION:
                        <span
                          style="color: black; margin-left: 10px; margin-right: 50px;font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
                        >  HAULER:
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999 </span
                        ></h6>
                        <h6
                          >PLATE NO :
                         <span
                          style="color: black; margin-left: 10px; margin-right: 50px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
                        > TRUCK TYPE :
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
                        ></h6>
                         <h6
                          >BODY NO :
                         <span
                          style="color: black; margin-left: 10px; margin-right: 50px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
                        > VOLUME CAPACITY :
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
                        ></h6>
                      </div>
                    </b-col>
                  </b-row>
                  
                  <b-row class="text-center">
                    <b-col>
                      <div>
                        <h6
                          >DRIVER :
                          <span
                            style="
                              color: black;
                              margin-left: 30px;
                               margin-right: 30px;
                              font-size: 20px;
                            "
                          >999999999999999</span
                        > HELPER:
                          <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >9999999999999999999</span
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
                      >LOAD INFORMATION AND DESTINATION</p
                    >
                    <b-row>
                    <b-col>
                      <div>
                        <h6
                          >TYPE OF LOAD :
                        <span
                          style="color: black; margin-left: 10px; margin-right: 50px;font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
                        >  DISTANCE (KM):
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999 </span
                        ></h6>
                        <h6
                          >FROM:
                         <span
                          style="color: black; margin-left: 10px; margin-right: 50px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
                        > TO:
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >099999999999999999999</span
                        ></h6>
                      </div>
                    </b-col>
                    </b-row>
                  </ul>
            
                </div>
                <div class="col-md-5 text-center border border-dark">
                  <ul class="list-unstyled mb-0" style="border: 5px soliblack">
                    <p class="text-center w-responsive mx-auto mb-1 mt-5"
                      >TIME AND NO OF TRIPS MADE</p
                    >
                    <b-row>
                    <b-col>
                      <div>
                        <h6
                          >TIME IN AM:
                        <span
                          style="color: black; margin-left: 10px; margin-right: 50px;font-size: 10px; text-decoration: underline"
                        >0999999999999</span
                        > TIME OUT AM:
                         <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >0999999999999 </span
                        ></h6>
                        <h6
                          >TOTAL TRIPS:
                         <span
                          style="color: black; margin-left: 10px; margin-right: 50px; font-size: 10px; text-decoration: underline"
                        >09999999999999</span
                       
                        ></h6>
                      </div>
                    </b-col>
                    </b-row>
                  </ul>
            
                </div>
                  
                </section>
                
             </div>
  </Layout>
</template>
<style lang="scss" scoped media="print">
.border-dark {
  border-color: #343a40 !important;

  margin-left: 100px;
  margin-right: 100px;
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