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
  payrollequipment,deletepayrollsoiltruck, deletepayrollequipment,lgus,dumpinglocation
} from '../../../../services/auth'
import NProgress from 'nprogress/nprogress'
import Createstaging from '../account/Createstaging.vue'
export default {
  page: {
    title: 'Payroll Equipment',
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
          key: 'dumpingId',
          label: 'Dumping Name',
        },
           {
          key: 'operatorHourlyRate',
          label: 'operatorHourlyRate',
        },
         {
          key: 'equipmentDailyRate',
          label: 'equipmentDailyRate',
        },
         {
          key: 'equipmentType',
          label: 'equipmentType',
        },
        // {
        //   key: 'truckType',
        //   label: 'Truck Type',
        // },
        //  {
        //   key: 'areaName.areaName',

        //   label: 'Area Name',
        // },
       
        
        //  {
        //   key: 'routeType',
        //   label: 'Route Type',
        // },

        //  {
        //   key: 'rate',
        //   label: 'Rate',
        // },
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
          text: 'Payroll Equipment',
          active: true,
        },
      ],
      lgudata:[],
    
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
  },
  methods: {
    
 async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deletepayrollequipment(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Payroll Equipment  Successfully`,
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

    async getroutes() {
       try {
        NProgress.start()
      const result = await  payrollequipment()
      this.item = result.data.response.result
     const result1 = await  dumpinglocation()
    
        this.lgudata = result1.data.response.dumpingLocation

         for (var i = 0; i < this.item.length; i++) {
          
  for (var j = 0; j < this.lgudata.length; j++) {
if(this.lgudata[j].id === this.item[i].dumpingId ){
  this.item[i].dumpingId = this.lgudata[j].dumpingAreaName
  
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
        header="Payroll Equipment"

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
            @click="$router.push({ path: '/CreatePayrollEquipment' })"
          >Create Payroll Equipment</b-button>
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
            <router-link :to="{ name: 'ViewpayrollEquipment', params: data.item }">
                <span class="mr-3" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
           <router-link :to="{ name: 'EditpayrollEquipment', params: data.item }">
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