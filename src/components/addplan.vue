<template>
  <div>
    <div class="animated fadeIn">
      <b-row >
      <b-col md="8">
          <b-card
            class="card-wrap"
            header="Add Permission To Role"
            border-variant="info"
            header-text-variant="white"
            style="width:1250px"
          >
           
            <div>
              <b-row style="margin-top:50px">
               <DualListBox
                  :source="source"
                  :destination="destination"
                  label="name"
                  @onChangeList="onChangeList"
                />
              </b-row>
            </div>
            <div class="row mt-1 justify-content-center">
            
              <div class="col-md-11" style="margin-top:50px">
           
                  <button
                    class="btn btn-primary d-inline-flex align-items-center"
                    style="background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );"
                    type="submit"
                @click="add()"
                  >Add Permission To Role</button>
                </div>
            </div>
        
          </b-card>
      </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import DualListBox from 'dual-listbox-vue'
import 'dual-listbox-vue/dist/dual-listbox.css'
import {
 permissions,addpermissiontorole
} from '../services/auth'
import moment from 'moment'
// import {
//   ValidationProvider,
//   ValidationObserver,
// } from 'vee-validate/dist/vee-validate.full'
import {
  // editcustomer,
  // cityTemplete,
  // registerTemplete,
  plandetails,
  plandata,
  planlist,
  addplan,
} from '../services/auth'
export default {
  name: 'Editcustomer',
  components: {
    Multiselect,
    DualListBox,
    moment,
  },
  // props: {
  //   itemObj: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
      list: [{ value: null, text: 'Please select an option' }],
      contractPeriodid: [],
      plan: null,
      // date: this.getFormattedDate(),
      // cid: this.itemObj.clientId,
      // csid: this.itemObj.clientServiceId,
      planList: [],
      item:[],
      payloadData: [],
       source: [
                
               
            ],
            destination: [
               
            ],
      // source: [],
      amount:0,
      // destination: [],
    }
  },
  async mounted() {
      // this.$router.push({path:'/Setup/Roles'})
    // console.log('hai', this.contractPeriodid)

    // this.getdetails()
    // this.getcatalog()
    // this.getplanlist()
    // console.log('liiisi', this.itemObj)
    this.permission()
  },
  methods: {
     async permission() {
       try {
      
      const result = await permissions()
      // this.item = result.data.response.PermissionMaster
      this.source = result.data.response.PermissionMaster.map(function (x) {
          return {
            id: x.id,
            label:x.name,
           isDeleted: x.isDeleted,
        url: x.url,
        status: x.status,
        operation: x.operation,
          }
        })
     
      } catch (error) {}
     },
      // onChangeList: function ({ source, destination }) {
      //       this.source = source;
      //       this.destination = destination;
      //   }
    onChangeList: function ({ source, destination }) {
      this.source = source
      this.destination = destination
      console.log("destination",this.destination)
      this.planList = this.destination.map(function (x) {
        return {
         id: x.id,
        name: x.name,
        isDeleted: x.isDeleted,
        url: x.url,
        status: x.status,
        operation: x.operation,
        }
      })
      // this.amount = 0;
      // this.destination.map(e=>{
      //   this.amount = this.amount + e.price
      // });
// console.log("amount:",amount)
        console.log('plan', this.planList)
    
      this.payloadData = this.planList.map(function (e) {
        return {
           id: e.id,
        name: e.name,
        isDeleted: e.isDeleted,
        url: e.url,
        status: e.status,
        operation: e.operation,
        }
      })
        // console.log('destination', this.planList[0].label)
    },
    // async getdetails() {
    //   const result = await plandetails()
    //   this.clientTemplete = result.data

    //   console.log('contract', this.clientTemplete)
    // },
    // async getcatalog() {
    //   const result = await planlist()
    //   var plan = result.data.allPlanDatas
    //   console.log('plan', plan)
    //   plan.map((e) => {
    //     this.list.push(e.name)
    //   })
    //   console.log('plans', this.list)
    // },
    // async getplanlist() {
      //  debugger
    //   console.log('plam', this.plan, this.plans)
    //   if (this.plan !== '') {
    //     const result1 = await planlist()
    //     var lists = result1.data.allPlanDatas

    //     console.log('lists', lists)
    //     lists.map((e) => {
    //       if (e.name === this.plan) {
    //         this.id = e.id
    //       }
    //     })
    //     const result = await plandata(
    //       this.id,
    //       this.itemObj.clientId,
    //       this.itemObj.clientServiceId
    //     )

    //     this.contractPeriodid = result.data.subscriptiondata[0].id
    //     console.log('contractid', this.contractPeriodid)
    //     this.source = result.data.planData.map(function (x) {
    //       return {
    //         id: x.id,
    //         label:
    //           x.planDescription +
    //           '            ' +
    //           '           ' +
    //           x.price +
    //           '-Naira',
    //         price: x.price,
    //         chargecode: x.chargeCycle,
    //         dealPoId: x.dealPoId,
    //         planPoId: x.planPoId,
    //       }
    //     })
    //   }
    //   console.log('destination', this.source)
    // },
    async add() {
      // console.log('id', this.ids)
      // if(this.form.firstName && this.form.lastName && this.form.number && this.form.address){
      try {
        const payload = this.payloadData 
        console.log('form', payload)
        const result = await addpermissiontorole(this.cid, payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You added plan successfully`,
            duration: 5000,
          })
        }
      } catch (e) {
        this.$notify({
          group: 'alert',
          type: 'error',
          text: `${e.message.error}`,
          duration: 5000,
        })
      }
      // this.$emit('plan', {})
      // }
      // else
      // {
      //    this.$notify({
      //   group: "alert",
      //   type: "error",
      //   text: `You fill Data`,
      //   duration: 5000,
      // });
      // }
    },
    getFormattedDate() {
      return moment(new Date()).format('DD MMMM YYYY')
    },
  },
}
</script>
<style>
.list-box-wrapper .list-box-item .bulk-action .select-all {
 background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
}
.btn-action {
 background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
}
.list-box-wrapper .list-box-item .bulk-action .deselect-all {
  background-color: #c7c7ca;
  color: black;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>