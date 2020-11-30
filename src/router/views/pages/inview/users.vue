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
 users,deleteuser
} from '../../../../services/auth'

export default {
  page: {
    title: 'Users',
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
      item: { },

      permissionColumns: [
        {
          key: 'id',

          label: 'ID',
        },
        {
          key: 'userName',
          label: 'userName',
        },
         {
          key: 'firstName',
          label: 'firstName',
        },
         {
          key: 'email',
          label: 'email',
        },
        {
          key: 'phone',
          label: 'Phone',
        },
         {
          key: 'addressLine1',
          label: 'addressLine1',
        },
         {
          key: 'city',
          label: 'city',
        },
         {
          key: 'state',
          label: 'state',
        },
         {
          key: 'country',
          label: 'country',
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
          text: 'Users',
          active: true,
        },
      ],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
      item: {},
      
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
  this.userdata()
  },
  methods: {
    async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deleteuser(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted User Successfully`,
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
     async userdata() {
       try {
        NProgress.start()
      const result = await users()
      this.item = result.data.response.Users
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
        header="Users"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
      <b-row>
        <b-col md="6">
           
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2"
                    ></b-form-input>
           
        </b-col>
        <b-col md="6">
          <b-button
            class="btn float-right mr-2 mb-1 btn-custm"
            text="Create Tenant"
            @click="$router.push({ path: '/CreateUser' })"
            >Create User</b-button
          >
        </b-col>
      </b-row>
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
            :small="small"
            :fixed="fixed"
            :fields="permissionColumns"
            :items="item"
            class="mt-3"
            ref="roles"
             
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
          >
              <template v-slot:cell(actions)="data">
             <router-link :to="{ name: 'Viewuser', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary">
                 <i class="fa fa-eye"></i>
                </b-button>
              </router-link>
             <router-link :to="{ name: 'Edituser', params: data.item }">
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
.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  // background-image: linear-gradient(
  //   109.6deg,
  //   rgba(48, 207, 208, 1) 11.2%,
  //   rgba(51, 8, 103, 1) 92.5%
  // );
  // border-color: #5369f8;
}
.btn-custm {
  background-image: linear-gradient(19deg, #0008ff 0%, #c242ff 100%);
  opacity: 0.8;
  border: none;
  position: relative;
}
.btn-custm::before {
  content: ' ';
  -webkit-filter: blur(20px);
  filter: blur(20px);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: linear-gradient(19deg, #0008ff 0%, #c242ff 100%);
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
