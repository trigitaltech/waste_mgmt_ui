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
import {
  payrollhelper,deletepayrollhelper,lgus,type
  
} from '../../../../services/auth'
import NProgress from 'nprogress/nprogress'
import Createstaging from '../account/Createstaging.vue'
export default {
  page: {
    title: 'Payroll Helper',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
    Createstaging,
  },
  data() {
    return {
        filter: '',
      filterOn: [],
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
      item: [],

      RootmasterColumns: [
          {
          key: 'lguId',
          label: 'Lgu ID',
        },
           {
          key: 'tripType',
          label: 'Trip Type',
        },
        {
          key: 'truckType',
          label: 'Truck Type',
        },
        //  {
        //   key: 'areaName.areaName',

        //   label: 'Area Name',
        // },
       
        
        //  {
        //   key: 'routeType',
        //   label: 'Route Type',
        // },

         {
          key: 'rate',
          label: 'Rate',
        },
        //  {
        //   key: 'effectiveStartDate',
        //   label: 'Start Date',
        // },
        //  {
        //   key: 'effectiveEndDate',
        //   label: 'End Date',
        // },
      
      
        
        {
          key: 'actions',
          sortable: true,
        },
      ],
      items: [
        {
          text: 'Payroll',
          href: '/',
        },
        {
          text: 'Payroll Helper',
          active: true,
        },
      ],
    lgudata:[],
    typemaster:[]
    }
  },
  computed: {
     rows(){
     return this.item.length
    },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    // this.getClientDetails()
    this.getroutes()
    this.gettypes()
  },
  methods: {
 async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deletepayrollhelper(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Payroll Helper Successfully`,
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
async gettypes() {
       try {
        
      const result = await  type()
      this.typemaster = result.data.response.TripType
    // debugger
         for (var i = 0; i < this.item.length; i++) {
          
  for (var j = 0; j < this.typemaster.length; j++) {
    // debugger
if(this.typemaster[j].id.toString() === this.item[i].tripType ){
  this.item[i].tripType = this.typemaster[j].tripType
  
  break
}

  }
         }
      } catch (error) {}
   
    },
    async getroutes() {
       try {
        NProgress.start()
      const result = await  payrollhelper()
      this.item = result.data.response.result
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
       NProgress.done()
      } catch (error) {
        this.$toasted.error(error.error, {
          duration: 7000,
        })
      }
   
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
      <b-card
        header="Payroll Helper"

        class="mt-10 ml-10 mr-10 mx-auto"
      ><b-row>
         <b-col md="3">
           
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2"
                    ></b-form-input>
           
        </b-col>
        <b-col >
        
            <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({ path: '/CreatePayrollHelper' })"
          >Create Payroll Helper</b-button>
        </b-col>
        </b-row>
        <div class="mt-3">
          <b-table
            id="my-table"
            :dark="dark"
            :hover="hover"
            :striped="striped"
            ref="roles"
            :bordered="bordered"
            :filter="filter"
            :responsive="true"
            :current-page="currentPage"
            :per-page="perPage"
            :small="small"
            :fixed="fixed"
            :fields="RootmasterColumns"
            :items="item"
            class="mt-3"
             
          >
           <template v-slot:cell(actions)="data">
            <router-link :to="{ name: 'Viewpayrollhelper', params: data.item }">
                <span class="mr-3" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
           <router-link :to="{ name: 'Editpayrollhelper', params: data.item }">
               <span class="mr-3">
                  <i class="fas fa-pencil-alt edit"></i>
                </span>
              </router-link>
             <span class="mr-3" @click="deleteReq(data)">
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