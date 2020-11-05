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
        },
        {
          key: 'name',
          label: 'NAME',
        },
         {
          key: 'createdBy',
          label: 'createdBy',
        },
         {
          key: 'createdDate',
          label: 'createdDate',
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
        header-bg-variant="info"
        border-variant="info"
        header-text-variant="white"
          class="mt-10 ml-10 mr-10 mx-auto"
      >
         <b-col md="12">
          <b-button   style="
  background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% )"
            class="btn btn-info float-right mr-2"
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
            responsive="sm"
            :current-page="currentPage"
            :per-page="perPage"
            thead-class="header"
            :small="small"
            :fixed="fixed"
            :fields="permissionColumns"
            :items="item"
            class="mt-3"
            ref="roles"
          >
             <template v-slot:cell(actions)="data">
              <b-button size="sm" class="mr-2" variant="primary" @click="viewReq(data)">
              <i class="fa fa-eye"></i>
            </b-button>
            <b-button size="sm" class="mr-2" variant="primary" @click="editReq(data)">
              <i class="fas fa-pencil-alt edit"></i>
            </b-button>
            <b-button size="sm" class="mr-2" variant="danger" @click="deleteReq(data)">
              <i class="fa fa-trash bin"></i>
            </b-button>
           </template>
          
          </b-table>

        
          <div style="float: right">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="permissions"
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
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-image: linear-gradient( 109.6deg, rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
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
