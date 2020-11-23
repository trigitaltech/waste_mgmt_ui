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
    title: 'Edit Permission',
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
      name: '',
      Operation: null,
      createdby: "",
      createddate: new Date(),
      url: '',
      title: 'Register',
      modifydate: new Date(),
      modifyby:"",
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Permissions / EditPermission',
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
    console.log(this.getUserDetails.userName)
    this.createdby = this.getUserDetails.userName
    this.modifyby = this.getUserDetails.userName
    // this.getClientDetails()
    // this.getplans()
    console.log(this.$route.params)
  },
  methods: {
    async create() {
      try {
        const payload = {
          name: this.name,
          status: 200,
          isDeleted: false,
          url: this.url,
          operation: this.Operation,
          createdDate: this.createddate,
          createdBy: this.createdby,
          modifiedDate: this.modifydate,
          modifiedBy: this.modifyby,
        }
        let result = await createpermission(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created permission Successfully`,
            duration: 5000,
          })

          this.$router.push({ path: '/Setup/Permissions' })
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
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
        header="Edit Permission"
        header-bg-variant="info"
        border-variant="info"
        header-text-variant="white"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
          <!-- Card -->
          <div class="card mx-xl-5">
            <!-- Card body -->
            <div class="card-body">
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
                      type="text"
                      id="defaultFormCardNameEx"
                      class="form-control"
                      v-model="name"
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
                      type="email"
                      id="defaultFormCardEmailEx"
                      class="form-control"
                      v-model="url"
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
                    <b-form-select
                      v-model="Operation"
                      :options="option"
                      class="form-control"
                      id="defaultFormCardEmailEx"
                    ></b-form-select>
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
               
                <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-info float-right mr-2"
                  text="Create Tenant"
                  @click="create"
                  >Edit</b-button
                >
              </form>
              <!-- Default form subscription -->
            </div>
            <!-- Card body -->
          </div>
          <!-- Card -->
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
  background-image: linear-gradient(109.6deg, rgba(48, 207, 208, 1) 11.2%,  rgba(51, 8, 103, 1) 92.5%);
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
