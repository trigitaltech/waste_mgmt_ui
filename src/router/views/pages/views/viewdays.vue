<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import DualListBox from 'dual-listbox-vue'
import 'dual-listbox-vue/dist/dual-listbox.css'
import { ModelSelect } from 'vue-search-select'
import addplan from '@components/addplan'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 editdays,classmaster
} from '../../../../services/auth'

export default {
  page: {
    title: 'View Days',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    DualListBox,
    addplan,
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Days',
          href: '#/Setup/DaysMaster',
        },
        {
          text: 'View Days',
          active: true,
        },
      ],
      code:this.$route.params.code,
      triptype:this.$route.params.tripType,
      tripclass:this.$route.params.tripClass,
      day:this.$route.params.day
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    this.getclass()
    // this.getClientDetails()
    // this.getplans()
    this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.permission()
    console.log(this.$route.params)
  },
  methods: {
      async getclass() {
       try {
        // NProgress.start()
      const result = await  classmaster()
    data = result.data.response.TripClass
    data.map(e=>{
      if(this.$route.params.tripClass === e.id){
      this.tripclass = e.name
      }
    })
      //  NProgress.done()
      } catch (error) {}
   
    },
    async create() {
      try {
        const payload = {
            id:this.$route.params.id,
          "code":this.code,
            "tripType":this.triptype,
            "tripClass":this.tripclass,
            "day":this.day,
            "status":1
        }
        const result = await editdays(payload)

        // this.rid = result.data.response.Roles.id
        // console.log(this.rid)

        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Edited Days Successfully`,
            duration: 5000,
          })
           this.$router.push({path:'/Setup/DaysMaster'})
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
      <b-card header="View Days" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form @submit.prevent="create">
            <b-row>
              

              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Trip Type</label
                >
                <input
                  v-model="triptype"
                  type="text"
                  oninvalid="this.setCustomValidity('Trip Type is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Trip Type"
                  class="form-control"
                  required
                  disabled
                />

                <!-- Default input name -->
              </b-col>

              <br />
          
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Day</label
                >
                <input
                  v-model="day"
                  type="text"
                  oninvalid="this.setCustomValidity('Day is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Day"
                  class="form-control"
                  required
                  disabled
                />

                <!-- Default input text -->
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                Trip Class</label
                >
                <input
                  v-model="tripclass"
                  type="text"
                  oninvalid="this.setCustomValidity('Trip Class is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Trip Class"
                  class="form-control"
                  required
                  disabled
                />

                <!-- Default input name -->
              </b-col>
<b-col></b-col>
              <br />
            </b-row>

            <br />
            <!-- <button
              type="submit"
              class="btn btn-custome float-right btn-secondary mb-3"
              >Submit</button
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
<style>
.list-box-wrapper .list-box-item .bulk-action .select-all {
  background: #3757f5;
}
.btn-action {
  background: #3757f5;
}
.list-box-wrapper .list-box-item .bulk-action .deselect-all {
  background-color: #c7c7ca;
  color: black;
}
</style>