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
 editrole
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Role',
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
       item:this.$route.params.permissions,
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
          key: 'operation',
          label: 'Operation',
          sortable: true,
        },
         {
          key: 'url',
          label: 'Url',
          sortable: true,
        },
        
      ],
     
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
    
      items: [
         {
          text: 'Setup',
          href: '/',
        },
         {
          text: 'Roles',
          href: '#/Setup/Roles',
        },
        {
          text: 'View Role',
          active: true,
        },
      ],
        option: [
        { value: null, text: 'Please select an option' },
        { value: 'POST', text: 'POST' },
        { value: 'GET', text: 'GET' },
        { value: 'PUT', text: 'PUT' },
        { value: 'DELETE', text: 'DELETE' },
      ],
        name:this.$route.params.name,
      Operation: null,
      createdby:this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
      url: '',
      title: 'Register',
      modifydate: new Date(),
      modifyby:"",
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
    console.log(this.$route.params)
    // this.getClientDetails()
    // this.getplans()
      this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
  },
  methods: {
    async create() {
      try {
        const payload = {
          id:this.$route.params.id,
          name: this.name,
          status: 200,
          isDeleted: false,
          createdDate: this.createddate,
          createdBy: this.createdby,
          modifiedDate: this.modifydate,
          modifiedBy: this.modifyby,
}
        let result = await editrole(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Edited Role Successfully`,
            duration: 5000,
          })
        
           this.$router.push({path:'/Setup/Roles'})
        }
      } catch (e) {
         this.$toasted.error(e.message.error, {
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
        header="View Role"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              <form>
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                   <input
                      id="defaultFormCardNameEx"
                      type="text"
                      disabled
                      class="form-control"
                      placeholder="Role Name"
                    />
                  </b-col>
                  <b-col style="margin-left:50px">
                    <input
                    id="defaultFormCardNameEx"
                      v-model="name"
                      disabled
                      type="text"
                      class="form-control"
                    />

                  </b-col>
                  <b-col>
                     <!-- <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-custome float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Save</b-button
                > -->
                  </b-col>
                </b-row>
                <br />
               
              </form>
              <!-- Default form subscription -->
        </div>
      </b-card>
       <div class="animated fadeIn" v-if="this.$route.params.permissions.length > 0">
      <b-row >
      <b-col md="12">
          <b-card
            class="card-wrap"
            header="List Of Permissions"
          > <b-row>
        <b-col md="3">
           
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2"
                    ></b-form-input>
           
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
         
          >    </b-table>

        
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
      </b-col>
      </b-row>
                 </div>
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
