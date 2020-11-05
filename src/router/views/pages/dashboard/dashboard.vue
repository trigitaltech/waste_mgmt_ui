<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import { getCardData } from '../../../../services/dashboard'
import StatChart from '@components/widget-stat-chart'
import Overview from '@components/overview'
import Member from '@components/member'
import Task from '@components/task'
import Chat from '@components/chat'

import {
  revenueAreaChart,
  targetsBarChart,
  salesDonutChart,
  salesDonutChartstb,
  ordersData,
} from './data'

/**
 * Dashboard-1 Component
 */
export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    VuePerfectScrollbar,
    Layout,
    StatChart,
    Overview,
    Member,
    Task,
    Chat,
  },
  data() {
    return {
      revenueAreaChart: revenueAreaChart,
      targetsBarChart: targetsBarChart,
      salesDonutChart: salesDonutChart,
      salesDonutChartstb :salesDonutChartstb ,
      ordersData: ordersData,

      maxHeight: '328px',
      overviewData: [
        {
          class: 'border-bottom py-4',
          icon: 'users',
          value: '121,000',
          title: 'Total Visitors',
        },
        {
          class: 'border-bottom py-4',
          icon: 'image',
          value: '21,000',
          title: 'Total Product Views',
        },
        {
          class: 'py-4',
          icon: 'shopping-bag',
          value: '$21.5',
          title: 'Revenue Per Visitor',
        },
      ],
      membersData: [
        {
          image: require('@assets/images/users/avatar-7.jpg'),
          text: 'Senior Sales Guy',
          name: 'Shreyu N',
        },
        {
          image: require('@assets/images/users/avatar-9.jpg'),
          text: 'Social Media Campaign',
          name: 'Greeva Y',
        },
        {
          image: require('@assets/images/users/avatar-4.jpg'),
          text: 'Inventory Manager',
          name: 'Nik G',
        },
        {
          image: require('@assets/images/users/avatar-1.jpg'),
          text: 'Sales Persons',
          name: 'Hardik G',
        },
        {
          image: require('@assets/images/users/avatar-2.jpg'),
          text: 'Sales Persons',
          name: 'Stive K',
        },
      ],
      tasksData: [
        {
          title: 'Draft the new contract document for sales team',
          text: 'Due on 24 Aug, 2019',
          id: 1,
        },
        {
          title: 'iOS App home page',
          text: 'Due on 23 Aug, 2019',
          id: 2,
        },
        {
          title: 'Write a release note for Shreyu',
          text: 'Due on 22 Aug, 2019',
          id: 3,
        },
        {
          title: 'Invite Greeva to a project shreyu admin',
          text: 'Due on 21 Aug, 2019',
          id: 4,
        },
        {
          title: 'Enable analytics tracking for main website',
          text: 'Due on 20 Aug, 2019',
          id: 5,
        },
        {
          title: 'Invite user to a project',
          text: 'Due on 28 Aug, 2019',
          id: 6,
        },
        {
          title: 'Write a release note',
          text: 'Due on 14 Aug, 2019',
          id: 7,
        },
      ],
      statChart: [],
      chatMessages: [
        {
          id: 1,
          image: require('@assets/images/users/avatar-9.jpg'),
          name: 'Greeva',
          message: 'Hello!',
          time: '10:00',
        },
        {
          id: 2,
          image: require('@assets/images/users/avatar-7.jpg'),
          name: 'Shreyu',
          message: 'Hi, How are you? What about our next meeting?',
          time: '10:01',
        },
        {
          id: 3,
          image: require('@assets/images/users/avatar-9.jpg'),
          name: 'Greeva',
          message: 'Yeah everything is fine',
          time: '10:01',
        },
        {
          id: 4,
          image: require('@assets/images/users/avatar-7.jpg'),
          name: 'Shreyu',
          message: 'Awesome! let me know if we can talk in 20 min',
          time: '10:02',
        },
      ],
      dateConfig: {
        mode: 'range',
      },
      selectedDate: [new Date().setDate(new Date().getDate() - 7), new Date()],
      topCard: {},
    }
  },
  mounted() {
    this.getDashboard()
  },
  methods: {
    async getDashboard() {
      const result = await getCardData()
      this.topCard = result.data
      console.log(this.topCard)

      this.statChart = [
        {
          mainTitle: 'Active',
          value: this.topCard.c_active,
          icon: 'check',
        },
        {
          mainTitle: 'Allocation',
          value: this.topCard.c_allocated,
          icon: 'x-circle',
        },
        {
          mainTitle: 'In Active',
          value: this.topCard.c_inactive,
          icon: 'plus',
        },
        {
          mainTitle: 'In Stock',
          value: this.topCard.c_instock,
          icon: 'download',
        },
      ]
    },
  },
}
</script>

<template>
  <Layout>
    <div class="row page-title align-items-center">
      <div class="col-sm-4 col-xl-6">
        <h4 class="mb-1 mt-0">Dashboard</h4>
      </div>
<div class="container my-5">


  
  <!-- Section: Block Content -->
  <section>
    
    <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">Admin</h6>
    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Statistic Data</h3>
    <hr class="w-header my-4">
    <!-- <p class="lead text-center text-muted pt-2 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit ex facere quas possimus.</p> -->

    <div class="row white-text">

      <!-- Grid column -->
      <div class="col-xl-3 col-md-6 mb-4">

        <!-- Card Primary -->
        <div class="card classic-admin-card primary-color">
          <div class="card-body py-3">
            <i class="far fa-money-bill-alt"></i>
            <p class="small">SALES</p>
            <h4>2000$</h4>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar grey darken-3" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="card-body pt-2 pb-3">
            <p class="small mb-0">Better than last week (25%)</p>
          </div>
        </div>
        <!-- Card Primary -->

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-xl-3 col-md-6 mb-4">

        <!-- Card Yellow -->
        <div class="card classic-admin-card warning-color">
          <div class="card-body py-3">
            <i class="fas fa-chart-line"></i>
            <p class="small">SUBSCRIPTIONS</p>
            <h4>200</h4>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar bg grey darken-3" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="card-body pt-2 pb-3">
            <p class="small mb-0">Worse than last week (25%)</p>
          </div>
        </div>
        <!-- Card Yellow -->

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-xl-3 col-md-6 mb-4">

        <!-- Card Blue -->
        <div class="card classic-admin-card light-blue lighten-1">
          <div class="card-body py-3">
            <i class="fas fa-chart-pie"></i>
            <p class="small">TRAFFIC</p>
            <h4>20000</h4>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar grey darken-3" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="card-body pt-2 pb-3">
            <p class="small mb-0">Better than last week (75%)</p>
          </div>
        </div>
        <!-- Card Blue -->

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-xl-3 col-md-6 mb-4">

        <!-- Card Red -->
        <div class="card classic-admin-card red accent-2">
          <div class="card-body py-3">
            <i class="fas fa-chart-bar"></i>
            <p class="small">ORGANIC TRAFFIC</p>
            <h4>2000</h4>
          </div>
          <div class="progress md-progress">
            <div class="progress-bar grey darken-3" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="card-body pt-2 pb-3">
            <p class="small mb-0">Better than last week (25%)</p>
          </div>
        </div>
        <!-- Card Red -->

      </div>
      <!-- Grid column -->

    </div>

  </section>
  <!-- Section: Block Content -->
  

</div>
</div>


  </Layout>
</template>
<style scoped>
.text-muted {
    color: black!important;
}
</style>