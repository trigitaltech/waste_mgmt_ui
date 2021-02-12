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
 Attendance, deleteattendance,employees,pdfgenerate
} from '../../../../services/auth'

export default {
  page: {
    title: 'Hauling Monthly Summary Expenses',
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
          text: 'Hauling Monthly Summary Expenses',
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
  methods :{
   async downloadFile() {
     console.log("test")
         var id = "pdf"
     try{
          
        const result = await pdfgenerate(id)
         let blob = new Blob([result.response.data], { type: 'application/pdf' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'test.pdf'
      link.click()
      } catch (e) {
         this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
 
}
  },
  mounted() {
  
  },
  
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />

    <div class="animated fadeIn">
      <b-card
        header="Hauling Monthly Summary Expenses"

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
                  @click="downloadFile()"
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
