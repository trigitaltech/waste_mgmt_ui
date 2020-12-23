<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import { Edituser, users } from '../../../../services/auth'

export default {
  page: {
    title: 'View Baranggay',
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
         printPdf: [],
    data:this.$route.params,
      baranggayid: this.$route.params.baranggayId,
      contractorDispatcherId:this.$route.params.contractorDispatcherId,
      contractorDispatcherName: this.$route.params.contractorDispatcherName,
      contractorDispatcherVerified: this.$route.params.contractorDispatcherVerified,
      controlNo: this.$route.params.controlNo,
      createdBy: this.$route.params.createdBy,
      createdDate: this.$route.params.createdDate,
      driverId: this.$route.params.driverId,
      driverName: this.$route.params.driverName,
      garbageCollector: this.$route.params.garbageCollector[0].garbageCollectorName,
      haulerId: this.$route.params.haulerId,
      helperId: this.$route.params.helperId,
      helperName: this.$route.params.helperName,
      id: this.$route.params.id,
      isDeleted: this.$route.params,
      lguId: this.$route.params.lguId,
      modifiedBy: this.$route.params.modifiedBy,
      modifiedDate: this.$route.params.modifiedDate,
      status: this.$route.params.status,
      tripDate: this.$route.params.tripDate,
      tripEndTime: this.$route.params.tripEndTime,
      tripIncomingAreaRoute: this.$route.params.tripIncomingAreaRoute,
      tripStartTime: this.$route.params.tripStartTime,
      truckBodyNo: this.$route.params.truckBodyNo,
      truckType: this.$route.params.truckType,
      truckplateNo: this.$route.params.truckplateNo,
      volumeCheckerId: this.$route.params.volumeCheckerId,
      volumeCheckerMeasuredVolume: this.$route.params.volumeCheckerMeasuredVolume,
      volumeCheckerName:this.$route.params.volumeCheckerName,
      volumeCheckerTotalKmServed: this.$route.params.volumeCheckerTotalKmServed,
      volumeCheckerVerified: this.$route.params.volumeCheckerVerified,
      items: [
        {
          text: 'home',
          href: '/',
        },
        {
          text: 'Trip Incoming',
          href: '#/Trips/IncomingTrips',
        },
        {
          text: 'View Trip Incoming',
          active: true,
        },
      ],
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    console.log(this.$route.params)
    // this.$route.params.data.response.result = this.$route.params.data.response.result
    // this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    // this.getplans()
    // this.userdata()
  },
  methods: {
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

       create(pay) {
     
        this.printPdf = this.$route.params
        console.log("haii",this.printPdf)

        setTimeout(() => {
         
          this.demoFun()
        }, 2000)
      
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card header="View Trip Coming" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form>
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Baranggay</label
                >
                <input
                  v-model="baranggayid"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
                <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >LGU ID</label
                >
                <input
                  v-model="lguId"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Trip Date</label
                >
                <input
                  id="defaultFormCardNameEx"
                  v-model="tripDate"
                  disabled
                  type="text"
                  class="form-control"
                />

                <!-- Default input email -->
              </b-col>

              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                  >Trip Start Time</label
                >

                <input
                  id="defaultFormCardNameEx"
                  v-model="tripStartTime"
                  disabled
                  type="text"
                  class="form-control"
                />

                <!-- Default input name -->
              </b-col>
              <br />
            </b-row>
            <br />
            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Control NO</label
                >

                <input
                  id="defaultFormCardEmailEx"
                  v-model="controlNo"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Driver Name</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="driverName"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Helper Name</label
                >
                <input
                  v-model="helperName"
                  type="text"
                  placeholder="Enter Code"
                  class="form-control"
                  disabled
                />
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Dispatcher Name</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="contractorDispatcherName"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
              <b-col>
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Garbage Collector</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="garbageCollector"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
            </b-row>
            <br />

            <b-row>
              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Truck Plate No</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckplateNo"
                  disabled
                  type="email"
                  class="form-control"
                />
                <br />
              </b-col>

              <br />

              <b-col>
                <!-- Default input email -->

                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >Truck BodyNo</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckBodyNo"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>

              <b-col>
                <!-- Default input email -->
                <label
                  for="defaultFormCardEmailEx"
                  class="grey-text font-weight-dark"
                  >TruckType</label
                >
                <input
                  id="defaultFormCardEmailEx"
                  v-model="truckType"
                  disabled
                  type="email"
                  class="form-control"
                />
              </b-col>
            </b-row>
            <br />

            <b-row>
              <b-col>
                     <b-button
                  class="btn btn-custome ml-4 btn-secondary mb-3 float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >PRINT</b-button
                >
                  </b-col>
            </b-row>

            <br />
            <!-- <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-custome float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Create</b-button
                > -->
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
                >Route Trip Ticket</h2
              >
              <div style="margin-left: 290px">
                <h6 
                  >CONTROL NO :
                  <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.controlNo}}</span
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
                        >{{printPdf.truckplateNo}}</span
                      >
                      BODY NO :
                        <span
                          style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                        >{{printPdf.truckBodyNo}}</span
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
