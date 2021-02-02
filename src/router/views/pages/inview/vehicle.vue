<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import NProgress from 'nprogress/nprogress'
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 vehicle,deletevehicle,haulers
} from '../../../../services/auth'

export default {
  page: {
    title: 'Vehicle',
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

      permissionColumns: [
        {
          key: 'id',

          label: 'Id',
        },
        //  {
        //   key: 'code',
        //   label: 'code',
        // },
         {
          key: 'vehicleNo',
          label: 'vehicleNo',
        },
         {
          key: 'haulerId',

          label: 'Hauler Name',
        },
         {
          key: 'totalHourServed',

          label: 'totalHourServed',
        },
          {
          key: 'totalKmServed',

          label: 'totalKmServed',
        },
       
        
         {
          key: 'plateNo',

          label: 'plateNo',
        },
         {
          key: 'vehicleType.truckType',

          label: 'vehicleType',
        },
       

        {
          key: 'actions',
          sortable: true,
        },
      ],
      lgudata:[],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Hauler / Vehicles',
          active: true,
        },
      ],
    
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
  //  this.getemployees()
    this.getvehicles()
  },
  methods: {
    async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deletevehicle(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Vehicle Successfully`,
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
    async getemployees() {
       try {
        NProgress.start()
     
       NProgress.done()
      } catch (error) {}
   
    },
    
   async getvehicles() {
       try {
        NProgress.start()
      const result = await vehicle()
      this.item = result.data.response.vehicles
       const result1 = await haulers()
      this.lgudata = result1.data.response.HaulerMaster
     
         for (var i = 0; i < this.item.length; i++) {
  for (var j = 0; j < this.lgudata.length; j++) {
if(this.lgudata[j].id === this.item[i].haulerId ){
  this.item[i].haulerId = this.lgudata[j].haulerName
  break
}
  }
         }

       NProgress.done()
      } catch (error) {}
   
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
        header="Vehicle"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
       <b-row>
        <b-col md="3">
           
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2"
                    ></b-form-input>
           
        </b-col>
        <b-col md="9">
          <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({ path: '/Createvehicle' })"
            >Create Vehicle</b-button
          >
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
            :fields="permissionColumns"
            :items="item"
            class="mt-3"
          >
            <template v-slot:cell(actions)="data">
             <router-link :to="{ name: 'Viewvehicle', params: data.item }">
                <span class="mr-2" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
             <router-link :to="{ name: 'Editvehicle', params: data.item }">
                <span class="mr-2">
                  <i class="fas fa-pencil-alt edit"></i>
                </span>
              </router-link>
            <span @click="deleteReq(data)">
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