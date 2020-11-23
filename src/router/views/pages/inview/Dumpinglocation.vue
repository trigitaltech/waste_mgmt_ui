<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import NProgress from 'nprogress/nprogress'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
  dumpinglocation,deletedumping
} from '../../../../services/auth'

export default {
  page: {
    title: 'DumpingLocation',
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
      item: { },

      DumpingLocationColumns: [
        {
          key: 'id',

          label: 'Id',
        },
         {
          key: 'createdBy',
          label: 'CreatedBy',
        },
        
        {
          key: 'dumpingAreaName',
          label: 'DumpingArea',
        },
         {
          key: 'dumpingType',
          label: 'DumpingType',
        },

         {
          key: 'address',
          label: 'Address',
        },
       {
          key: 'area',
          label: 'Area',
        },
         {
          key: 'city',
          label: 'City',
        },
         {
          key: 'state',
          label: 'State',
        },
         {
          key: 'country',
          label: 'Country',
        },

        {
          key: 'actions',
          sortable: true,
        },
      ],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'DumpingLocations',
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
   
    this.getdumping()
  },
  methods: {

       async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deletedumping(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Dumping Successfully`,
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
  async getdumping() {
       try {
        NProgress.start()
      const result = await  dumpinglocation()
      this.item = result.data.response.dumpingLocation
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
        header="DumpingLocations"
        header-bg-variant="info"
        border-variant="info"
        header-text-variant="white"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <b-col md="12">
            <b-button  style="
  background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );margin-bottom:10px"
            class="btn btn-info float-right mr-2"
            text="Create Tenant"
            @click="$router.push({path:'/CreateDumpinglocation'})"
          >Create DumpingLocation</b-button>
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
            :fields="DumpingLocationColumns"
            :items="item"
            class="mt-3"
            ref="roles"
          >
             <template v-slot:cell(actions)="data">
             <router-link :to="{ name: 'Viewdumping', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary">
                 <i class="fa fa-eye"></i>
                </b-button>
              </router-link>
          <router-link :to="{ name: 'Editdumping', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary">
                  <i class="fas fa-pencil-alt edit"></i>
                </b-button>
              </router-link>
            <b-button size="sm" class="mr-2" variant="danger" @click="deleteReq(data)">
              <i class="fa fa-trash bin"></i>
            </b-button>
           </template>
          </b-table>
          <div style="float: right">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="Area"
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
.page-item.active .page-link {
    z-index: 1;
    color: #fff;
background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
    border-color: #5369f8;
}
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
}
.table thead th {
    outline: none !important;
    color: white;
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
