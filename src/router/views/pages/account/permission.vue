<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import NProgress from 'nprogress/nprogress'
import moment from 'moment'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 permissions,deletepermission
} from '../../../../services/auth'
// import { delete } from 'vue/types/umd'

export default {
  page: {
    title: 'Permission',
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
      header:"",
      title: 'Register',
      item: [],

      permissionColumns: [
        {
          key: 'id',
          label: 'Id',
          sortable: true,
        },
        {
          key: 'name',
          label: 'Permission',
          sortable: true,
        },
        {
          key: 'url',
          label: 'Url',
          sortable: true,
        },
         {
          key: 'operation',
          label: 'operation',
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
          text: 'Permissions',
          active: true,
        },
      ],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
       item: [],
    
    }
  },
  computed: {
    permissions(){
      return this.item.length
    },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
  
   this.permission()
  },
  methods: {
      getDate(timeStamp) {
    // debugger
      //  console.log(timeStamp)
      let date
      // if (timeStamp !== undefined){
        // date = timeStamp[0] + '-' + timeStamp[1] + '-' + timeStamp[2]
     return moment(timeStamp).format('DD/MM/YYYY')
      // }
    },
     async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deletepermission(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Permission Successfully`,
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
  async permission() {
       try {
        NProgress.start()
      const result = await permissions()
      this.item = result.data.response.PermissionMaster
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
        header="Permissions"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <b-col md="12">
            <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({ name: 'CreatePermission' })"
          >Create Permission</b-button>
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
          <template v-slot:cell(createdDate)="data">
                            <div class="table-row">{{ getDate(data.item.createdDate) }}</div>
                        </template>
             <template v-slot:cell(actions)="data">
                <router-link :to="{ name: 'Viewpermission', params: data.item }">
                <span class="mr-3" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
             
            <router-link :to="{ name: 'Editpermission', params: data.item }">
                <span class="mr-3">
                  <i class="fas fa-pencil-alt edit"></i>
                </span>
              </router-link>
            <span class="mr-3" @click="deleteReq(data)">
              <i class="fa fa-times edit"></i>
            </span>
           </template>
          </b-table>

          <!-- <b-modal v-model="permissionModal" id="roleModal">
            <div slot="modal-header">{{ header }}</div>
            <div>
              <b-input v-model="permission" />

              <b-input class="mt-2" v-model="permission" />

              <multiselect
                class="perm_input"
                :options="methods"
                placeholder="Select a Method"
                label="value"
                track-by="value"
                :multiple="false"
                v-model="permission"
              ></multiselect>
            </div>
            <div slot="modal-footer">
              <b-button @click="handleEdit" variant="primary">Submit</b-button>

              <b-button @click="clearModal" class="ml-2" variant="secondary"
                >Cancel</b-button
              >
            </div>
          </b-modal> -->
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
