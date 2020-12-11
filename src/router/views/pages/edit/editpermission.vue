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
          text: ' EditPermission',
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
        header="Edit Permission"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
              <!-- Default form subscription -->
              
              <form @submit.prevent="create">
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
                    v-model.trim="name"
                                for="name"
                     type="text"
                                oninvalid="this.setCustomValidity('name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Name"
                                class="form-control"
                                required
                     
                    />

                 

                    <!-- Default input text -->
                  </b-col>
                  <b-col>
                       <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                    >
                      Url</label
                    >
                    <input
                       v-model.trim="url"
                                for="name"
                     type="text"
                                oninvalid="this.setCustomValidity('Url is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Url"
                                class="form-control"
                                required
                    />

                    <br />
                  </b-col>
                    <!-- <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Created Date</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
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
                      id="defaultFormCardtextEx"
                      v-model="operation"
                      :options="option"
                      class="form-control"
                       oninvalid="this.setCustomValidity('Operation is required ')"
                                oninput="setCustomValidity('')"
                                required
                    ></b-form-select>
                  </b-col>
                 

                  <!-- Default input name -->
                  <!-- <label for="defaultFormCardNameEx" class="grey-text font-weight-dark">Address</label>
            <input type="text" id="defaultFormCardNameEx" class="form-control">

            <br> -->

                  <!-- Default input text -->
                  <!-- <label for="defaultFormCardtextEx" class="grey-text font-weight-dark">State</label>
            <input type="text" id="defaultFormCardtextEx" class="form-control">

           
                </b-col> -->
                </b-row>
               
                <button
                          type="submit"
                         class="btn btn-custome float-right btn-secondary mb-3"
                          >Submit</button
                        >
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
