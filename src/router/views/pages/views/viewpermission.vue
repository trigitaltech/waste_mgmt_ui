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
import { Editpermission } from '../../../../services/auth'
import moment from 'moment'
export default {
  page: {
    title: 'View Permission',
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
   props: {
    itemObj: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name:this.$route.params.name,
      operation: this.$route.params.operation,
      createdby: this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
      url:this.$route.params.url,
      title: 'Register',
      modifydate:new Date(),
      modifyby:"",
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Permissions',
          href: '#/Setup/Permissions',
        },
        {
          text: 'ViewPermission',
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
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    console.log(this.getUserDetails.user.username)
    // this.createdby = this.getUserDetails.userName
    this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    // this.getplans()
    console.log(this.$route.params)
  },
  methods: {
    async create() {
      try {
        const payload = {
              
            id:this.$route.params.id,
            name: this.name,
            status: 200,
            isDeleted:false,
            url:this.url,
            operation: this.operation,
            createdDate: this.createddate,
            createdBy: this.createdby,
            modifiedDate: this.modifydate,
            modifiedBy: this.modifyby

        }
        let result = await Editpermission(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited permission Successfully`,
            duration: 5000,
          })

          this.$router.push({ path: '/Setup/Permissions' })
        }
      } catch (e) {
        this.$toasted.error('something went wrong', {
          duration: 7000,
        })
      }
    },
    getFormattedDate() {
      return moment(new Date()).format('DD MMMM YYYY')
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
        header="View Permission"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              <form>
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                    >
                      name</label
                    >
                    <input
                    id="defaultFormCardNameEx"
                      v-model="name"
                      disabled
                      type="text"
                      class="form-control"
                    />

                 

                    <!-- Default input email -->
                  </b-col>
                  <b-col>
                       <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                    >
                      Url</label
                    >
                    <input
                    id="defaultFormCardEmailEx"
                      v-model="url"
                      disabled
                      type="email"
                      class="form-control"
                    />

                    <br />
                  </b-col>
                    <!-- <label
                      for="defaultFormCardEmailEx"
                      class="grey-text font-weight-dark"
                      >Created Date</label
                    >
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="createddate"
                    /> -->

                    <!-- Default input name -->
                    <b-col>
                    <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Operation</label
                    >
                     <input
                    id="defaultFormCardEmailEx"
                      v-model="operation"
                      disabled
                      type="email"
                      class="form-control"
                    />
                  </b-col>
                 

                  <!-- Default input name -->
                  <!-- <label for="defaultFormCardNameEx" class="grey-text font-weight-dark">Address</label>
            <input type="text" id="defaultFormCardNameEx" class="form-control">

            <br> -->

                  <!-- Default input email -->
                  <!-- <label for="defaultFormCardEmailEx" class="grey-text font-weight-dark">State</label>
            <input type="email" id="defaultFormCardEmailEx" class="form-control">

           
                </b-col> -->
                </b-row>
               
                <!-- <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-custome float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Create</b-button
                > -->
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
