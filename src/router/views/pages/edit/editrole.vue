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
          text: 'Roles / Edit Role',
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
        header="Edit Role"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              <form>
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                   <input
                      type="text"
                      disabled
                      id="defaultFormCardNameEx"
                      class="form-control"
                      placeholder="Role Name"
                    />
                  </b-col>
                  <b-col style="margin-left:50px">
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="name"
                    />

                  </b-col>
                  <b-col>
                     <b-button
                  class="btn btn-custome float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Save</b-button
                >
                  </b-col>
                </b-row>
                <br />
               
              </form>
              <!-- Default form subscription -->
        </div>
      </b-card>
    </div>
    <!-- end row -->
  </Layout>
</template>
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
