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
 getAllDirectTrips,deletedirectrip
} from '../../../../services/auth'

export default {
  page: {
    title: 'Tripdetails',
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
       items: [
        {
          text: 'Trips',
          href: '/',
        },
        {
          text: 'Direct Trips',
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
      item:[],
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
          key: 'tripDate',
          label: 'Trip Date',
        },
        {
          key: 'driverName',
          label: 'driverName',
        },
        {
          key: 'helperName',
          label: 'helperName',
        },
        {
          key: 'plateNo',
          label: 'Truck plateNo',
        },
          {
          key: 'bodyNo',
          label: 'Truck BodyNo',
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
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
     this.totalRows = this.items.length
    // this.getClientDetails()
    this.getTrips()
  },
  methods: {

   
     async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await  deletedirectrip(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted DirectTrip Successfully`,
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
        let result = await getAllDirectTrips();
          this.item = result.data.response.result
        console.log(result);
      }
      catch(e) {
        console.log(e);
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
        header=" Direct Trip"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <b-col >
          <b-button
                      class="btn btn-custome btn-secondary ml-5 mb-2 mr-2 float-right"
                      text="Create Incoming Trip"
                      @click="$router.push({path:'/CreateLandfillTrip'})"
                      >Create Landfill Trip</b-button
                    >
        </b-col>
        <div class="mt-3">
          <b-table
            id="my-table"
            :dark="dark"
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            ref="roles"
            :filter="filter"
            :responsive="true"
            :current-page="currentPage"
            :per-page="perPage"
            thead-class="header"
            :items="item"
            :small="small"
            :fixed="fixed"
            :fields="TripColumns"
           
            class="mt-3"
          >
               <template v-slot:cell(actions)="data">
              <router-link :to="{ name: 'Viewdirecttrip', params: data.item }">
              <b-button size="sm" class="mr-2" variant="primary" >
              <i class="fa fa-eye"></i>
            </b-button>
              </router-link>
            <!-- <router-link :to="{ name: 'EditIncomingTrip', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary"  :hidden="data.item.status === 'APPROVED' || data.item.status === 'REJECTED' ">
                  <i class="fas fa-pencil-alt edit"></i>
                </b-button>
              </router-link> -->
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
              :total-rows="totalRows"
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
