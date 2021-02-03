<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import { Datetime } from 'vue-datetime';
import NProgress from 'nprogress/nprogress'
import moment from "moment";
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 Attendance, deleteattendance,employees
} from '../../../../services/auth'

export default {
  page: {
    title: 'Hauling Weekly Expenses',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
    Datetime
  },
 
  data() {
    return {
     
      lgudata:[],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Hauling Weekly Expenses',
          active: true,
        },
      ],
    
    }
  },
  computed: {
    //  rows(){
    //  return this.item.length
    // },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
   
    this.attendancedata()
  },
  methods: {
   
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card
        header="Hauling Weekly Expenses"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
          <!-- Card -->
          <div class="mx-xl-5">
            <!-- Card body -->
            <div class="card-body">
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
                      placeholder="SELECT YEAR"
                    />
                  </b-col>
                  <b-col style="margin-left:50px">
                     <datetime 
                      v-model="date"
                      
                      type="year"
                      placeholder="SELECT YEAR"
                    
                 ></datetime>
                  </b-col>
                     <b-col style="margin-left:50px">
                     <datetime 
                      v-model="date"
                      
                      type="year"
                      placeholder="WEEK RANGE"
                    
                 ></datetime>
                  </b-col>
                  <b-col>
                     <b-button
                  class="btn btn-custome ml-4 btn-secondary mb-3"
                  text="Create Tenant"
                  @click="create"
                  >Submit</b-button
                >
                  </b-col>
                   <b-col>
                     <b-button
                  class="btn btn-custome ml-4 btn-secondary mb-3"
                  text="Create Tenant"
                  @click="create"
                  > Download</b-button
                >
                  </b-col>
                </b-row>
                <br />
               
              </form>
            </div>
              <!-- Default form subscription -->
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
