<template>
  <div
    id="pdf-voucher"
    class="mt-4 pdf-voucher"
    style="font-family: sans-serif;display:none"
  >
  <section
    class="pdf-content row justify-content-center"
  >
    <h2 class="h1-responsive font-weight-bold text-center my-4" style="text-decoration: underline;margin-left: 150px"
    >Route Trip Ticket</h2>
      <div style="margin-left: 290px">
        <h6>CONTROL NO :
          <span
            style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
            >{{printPdf.controlNo}}</span
        ></h6>
        <h6>DATE :
          <span
            style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
            >{{printPdf.tripDate}}</span
        ></h6>
      </div>
      <p class="h1-responsive font-weight-bold text-center my-4" style="color:black"
      >INT'L  SWIMS  INC.  &  DOMINUS  CONSTRUCTION  (JOINT VENTURE)</p
      >
      <p class="text-center w-responsive mx-auto mb-5"
      >LOT 1 QUIRINO HIGHWAY ST. DOMINIQUE DR.SUBD.BAESA QUEZON CITY</p>
      <b-row>
        <b-col>
          <h6>LGU :
            <span
              style="color: black; font-size: 15px; margin-right:10px; text-decoration: underline"
            >{{printPdf.lgu}}</span>
              TOTAL DISTANCE(KM) :
            <span
              style="color: black; font-size: 15px; text-decoration: underline"
            >{{printPdf.totalKmServed}}</span
          ></h6>
          <h6>PLATE NO :
            <span
              style="color: black; font-size: 15px; margin-right:90px; text-decoration: underline"
              >{{printPdf.truckplateNo}}</span
            >
            BODY NO :
            <span
              style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
            >{{printPdf.truckBodyNo}}</span>
          </h6>
          <h6>
            <label style="margin-left: 213px;"> TYPE:</label>
            <span
              style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline">{{printPdf.truckType}}</span>
          </h6>
        </b-col>
        <b-col></b-col>
      </b-row>
      <div>
        <div class="md-form">
          <h5 for="message">COLLECTION HOURS (TIME)</h5>
        </div>
        <b-row>
          <b-col>
            <div>
              <h6>FROM:
                <span
                  style="color: black; margin-left: 10px; margin-right: 50px;font-size: 10px; text-decoration: underline"
                >{{printPdf.collectionStartTime}} AM/PM</span>   TO :
                <span
                  style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                >{{printPdf.collectionEndTime}} AM/PM</span
              ></h6>
              <h6>DRIVER :
                <span
                  style="color: black; margin-left: 10px; margin-right: 50px; font-size: 10px; text-decoration: underline"
                >{{printPdf.driverName}}</span> ITEM DISPATCHED :
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
              <h6>GARBAGECOLLECTIONS :
                <span
                  style="color: black;margin-left: 30px;margin-right: 30px;font-size: 20px;"
                ></span> GUIDE:
                <span
                  style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                >{{printPdf.guide}}</span
              ></h6>
              <h6
                ><label style="margin-left: 213px;"> ROUTE/AREA OF COLLECTIONS: </label>
                <span
                  style="color: red;margin-left: 10px;font-size: 20px;"
                >{{printPdf.servingArea}}  {{printPdf.servingRoute}}</span
              ></h6>
            </div>
          </b-col>
          <b-col>
            <div>
              <h6></h6>
            </div>  
          </b-col>
        </b-row>
      </div>
      <div class="col-md-5 text-center">
        <ul class="list-unstyled mb-0" style="border: 5px soliblack">
          <p class="text-center w-responsive mx-auto mb-1 mt-5"
            >VOLUME OF GARBAGE FOR FINAL DISPOSAL</p
          >
          <b-row>
            <div>
              <h6>CONTRACTOR.DISPATCHER:
                <span
                  style="color: black; margin-left: 10px; font-size: 10px; text-decoration: underline"
                >{{printPdf.contractor_DISPATCHER_NAME}}</span
              ></h6>
            </div>
            <div>
              <h6>LGU CHECKER :
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
</template>

<script>
export default {
  data() {
    return{
      printPdf:[]
    }
  },
  props:['data']
  mounted(){
    this.printPdf = this.data
  },
  methods:{

  }
}
</script>