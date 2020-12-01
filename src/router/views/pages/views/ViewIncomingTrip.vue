<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import NProgress from 'nprogress/nprogress'
import moment from "moment";
import {
 Tripdownload,incomingtrips
} from '../../../../services/auth'

export default {
  page: {
    title: 'Trip Incoming Details',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
    }
  },
  mounted() {
  },
  filters: {
    formatdatetime: function(value) {
      if (value) {
        return moment(String(value)).format("hh:mm A DD/MM/YYYY");
      }
    },
    formatdate: function(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    }
  },
  methods: {
    
  }
}
</script>

<template>
  <Layout>
    <PageHeader :items="items" />
   <div class="animated fadeIn">
      <b-card
        header="Incoming Trips"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div class="mt-3">
          <div class="card mx-xl-5">
            <div class="float-right">
                <b-button
                  style="
                    background-image: linear-gradient(109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5%);"
                  class="btn btn-info float-right mr-4 mt-3 mb-2"
                  text="Create Tenant"
                  @click="$router.push({path:'/CreateIncomingTrip'})"
                  >Create Incoming Trip</b-button
                >
              </div>
          </div>
            
         
          
        </div>
      </b-card>
   </div>
  </Layout>
</template>
<style lang="scss">
.table thead th {
    outline: none !important;
    color: white;
}
</style>