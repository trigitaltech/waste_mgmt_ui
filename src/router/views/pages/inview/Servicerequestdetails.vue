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
 servicerequests,deleteservicerequest
} from '../../../../services/auth'

export default {
  page: {
    title: 'Servicerequestdetails',
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
      item:[],
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
      item: { key: 'resource', value: 'Frozen Yogurt', name: '159' },

      ServicerequestdetailsColumns: [
        {
          key: 'id',

          label: 'ID',
        },
        {
          key: 'serviceNo',
          label: 'serviceNo',
        },

        {
          key: 'requestType',
           label: 'requestType',
        },
          {
          key: 'jobStartTime',
           label: 'jobStartTime',
        },
          {
          key: 'dumpingArea',
           label: 'dumpingArea',
        },
          {
          key: 'driverName',
           label: 'driverName',
        },
          {
          key: 'equipmentId',
           label: 'equipmentId',
        },
         {
          key: 'controlChekerName',
           label: 'controlChekerName',
        },
          {
          key: 'tripDate',
           label: 'tripDate',
        },
         {
          key: 'status',
           label: 'status',
        },
        {
          key: 'actions',
           label: 'actions',
        },
      ],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Servicerequestdetailss',
          active: true,
        },
      ],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
      item: {
        value: '',
        text: '',
      },
      form: {
        personalTitle: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        number: '',
        address: '',
        Servicerequestdetails: '',
        state: '',
        country: '',
        postCode: '',
        stbNumber: '',
        bouquets: null,
        amount: 0,
        voucherNo: '',
      },
      titles: ['Mr.', 'Sri.', 'Mrs'],
      vouchernumber: '',
      genderOpt: ['Male', 'Female', 'Other'],
      ServicerequestdetailsOpt: [],
      bouquetsOpt: [
        { value: null, text: 'Please select an option' },
        'FTA  AND STARTER',
      ],
      clientTemplete: {},
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
  this.servicerequest()
  },
  methods: {
    async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deleteservicerequest(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Servicerequest Successfully`,
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
     async servicerequest() {
       try {
      
      const result = await  servicerequests()
      this.item = result.data.response.ServiceTicket
  
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
        header="Servicerequestdetailss"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <b-col md="12">
          <b-button
            style="
              background-image: linear-gradient(
                109.6deg,
                rgba(48, 207, 208, 1) 11.2%,
                rgba(51, 8, 103, 1) 92.5%
              );
            "
            class="btn btn-info float-right mr-2"
            text="Create Tenant"
            @click="$router.push({ path: '/Createservicerequest' })"
            >Create Servicerequest</b-button
          >
        </b-col>
        <div class="mt-3">
          <b-table
            :dark="dark"
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            :filter="filter"
            id="my-table"
            responsive="sm"
            :current-page="currentPage"
            :per-page="perPage"
            thead-class="bg-dark"
            :small="small"
            :fixed="fixed"
            :fields="ServicerequestdetailsColumns"
            :items="item"
            class="mt-3"
            ref="roles"
          >
             <template v-slot:cell(actions)="data">
             <router-link :to="{ name: 'Viewservicerequest', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary">
                 <i class="fa fa-eye"></i>
                </b-button>
              </router-link>
             <router-link :to="{ name: 'Editservicerequest', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary">
                  <i class="fas fa-pencil-alt edit"></i>
                </b-button>
              </router-link>
              <div v-if="data.item.status !== 'ASSIGNED'">
            <b-button size="sm" class="mr-2" variant="danger" @click="deleteReq(data)">
              <i class="fa fa-trash bin"></i>
            </b-button>
              </div>
           </template>
          </b-table>
          <div style="float: right">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="item"
              aria-controls="my-table"
              prev-text="Prev"
              next-text="Next"
              hide-goto-end-buttons
            ></b-pagination>
          </div>
        </div>
      </b-card>
    </div>
    <!-- end row -->
  </Layout>
</template>
<style lang="scss">
.table thead th {
    outline: none !important;
    color: white;
}
.card-header{
    background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
}
.btn-info {
    color: #fff;
    background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
  border-color: #5369f8;
}
.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
  border-color: #5369f8;
}
</style>
<style lang="sass" scoped>
.edit
  color: white !important
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
