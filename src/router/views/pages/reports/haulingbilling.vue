<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import { Datetime } from 'vue-datetime'
import NProgress from 'nprogress/nprogress'
import moment from 'moment'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
  Attendance,
  deleteattendance,
  employees,
  haulers,
  lgus
} from '../../../../services/auth'

export default {
  page: {
    title: 'Hauling Billing Summary',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
    Datetime,
  },

  data() {
    return {
      lgus:[],
      hauler:[],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Hauling Billing Summary',
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
    this.getemployees()
    this.getlgus()
  },
  methods: {
        async getemployees() {
       try {
      
      const result = await haulers()
      var data = result.data.response.HaulerMaster
    data.map(e=>{
         this.hauler.push(e.haulerName)
       })
     
      } catch (error) {}
   
    },
     async getlgus() {
       try {
      
      const result = await lgus()
      var data = result.data.response.result
    data.map(e=>{
         this.lgus.push(e.lguName)
       })
     
      } catch (error) {}
   
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card
        header="Hauling Billing Summary"
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
                    <input
                      id="defaultFormCardNameEx"
                      type="text"
                      disabled
                      class="form-control"
                      placeholder="SELECT HAULER"
                    />
                  </b-col>
                  <b-col>
                    <multiselect
                      v-model="equipment"
                     
                      placeholder="SELECT HAULER"
                      :options="hauler"
                    
                    >
                    </multiselect>
                  </b-col>
                  <b-col>
                    <input
                      id="defaultFormCardNameEx"
                      type="text"
                      disabled
                      class="form-control"
                      placeholder="SELECT LGU"
                    />
                  </b-col>
                  <b-col>
                     <multiselect
                      v-model="equipment"
                     
                      placeholder="SELECT LGU"
                      :options="lgus"
                    
                    >
                    </multiselect>
                  </b-col>
                </b-row>
                <br />
                <b-row>
                  <b-col>
                    <!-- Default input name -->
                    <datetime
                      v-model="date"
                      type="year"
                      placeholder="SELECT START DATE"
                    ></datetime>
                  </b-col>
                  <b-col style="margin-left: 50px">
                    <datetime
                      v-model="date"
                      type="year"
                      placeholder="SELECT END DATE"
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
                    >
                      Download</b-button
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
