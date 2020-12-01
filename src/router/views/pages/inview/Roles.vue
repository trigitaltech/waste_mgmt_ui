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
  roles,deleterole
} from '../../../../services/auth'

export default {
  page: {
    title: 'Roles',
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
          label: 'Id',
          sortable: true,
        },
        {
          key: 'name',
          label: 'NAME',
          sortable: true,
        },
         {
          key: 'createdBy',
          label: 'createdBy',
          sortable: true,
        },
         {
          key: 'createdDate',
          label: 'createdDate',
          sortable: true,
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
          text: 'Roles',
          active: true,
        },
      ],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
     
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.role()
  },
  methods: {
     async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deleterole(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Role Successfully`,
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
    async role() {
       try {
        NProgress.start()
      const result = await roles()
      this.item = result.data.response.RoleMaster
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
        header="Roles"
          class="mt-10 ml-10 mr-10 mx-auto"
      >
         <b-col md="12">
          <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({path:'/CreateRole'})"
          >Create Role</b-button>
        </b-col>
        <div class="mt-3">
          <b-table
            :dark="dark"
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            :filter="filter"
            id="my-table"
            :responsive="true"
            :current-page="currentPage"
            :per-page="perPage"
            :small="small"
            :fixed="fixed"
            :fields="permissionColumns"
            :items="item"
            class="mt-3"
            ref="roles"
          >
   
             <template v-slot:cell(actions)="data">
              <router-link :to="{ name: 'Viewrole', params: data.item }">
                <span class="mr-3" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
            
         
             <router-link :to="{ name: 'Editrole', params: data.item }">
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
              :total-rows="permissions"
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
.form-div label
  margin-top: 8px
</style>
<style lang="sass" scoped>
.card-wrap
  box-shadow: 0 0 10px #ccc
  .role-details
    margin: 10px
</style>
