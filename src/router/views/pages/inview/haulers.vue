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
 haulers,deleteemployee
} from '../../../../services/auth'

export default {
  page: {
    title: 'Haulers',
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
       item: {},
        
        
      permissionColumns: [
        {
          key: 'id',

          label: 'Personal ID NO',
        },
         {
          key: 'userName',
          label: 'userName',
        },
         {
          key: 'phone',

          label: 'phone',
        },
         {
          key: 'email',

          label: 'email',
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
          text: 'Home',
          href: '/',
        },
        {
          text: 'Hauler / Haulers',
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
  
    this.getemployees()
  },
  methods: {
    async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deleteemployee(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Employee Successfully`,
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
      const result = await haulers()
      this.item = result.data.response.HaulerMaster

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
       
        header="Haulers"

          class="mt-10 ml-10 mr-10 mx-auto"
      >
         <b-col md="12">
          <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({ path: '/Createhauler' })"
          >Create Haulers</b-button>
        </b-col>
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
             <router-link :to="{ name: 'Viewemployee', params: data.item }">
                <span class="mr-2" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
             <router-link :to="{ name: 'Editemployee', params: data.item }">
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
<style scoped>
.table thead th {
    outline: none !important;
    color: black;
}

</style>
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
