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
 Editclass
} from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Class',
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
          text: 'Class',
          href: '#/Setup/ClassMaster',
        },
        {
          text: 'Edit Class',
          active: true,
        },
      ],
      code:this.$route.params.code,
      triptype:"",
      tripclass:"",
      mainroad:this.$route.params.name,
      day:""
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    // this.getClientDetails()
    // this.getplans()
    this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.permission()
  },
  methods: {
    async create() {
      try {
        const payload = {
            id:this.$route.params.id,
          "code":this.code,
          "name":this.mainroad
        }
        const result = await Editclass(payload)

        // this.rid = result.data.response.Roles.id
        // console.log(this.rid)

        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Edited Class Successfully`,
            duration: 5000,
          })
           this.$router.push({path:'/Setup/ClassMaster'})
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
      <b-card header="Edit Class" class="mt-10 ml-10 mr-10 mx-auto">
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
                  Code</label
                >
                <input
                  v-model="code"
                  type="text"
                  oninvalid="this.setCustomValidity('Code is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Code"
                  class="form-control"
                  required
                />

                <!-- Default input text -->
              </b-col>

              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Name</label
                >
                <input
                  v-model="mainroad"
                  type="text"
                  oninvalid="this.setCustomValidity('Name is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Name"
                  class="form-control"
                  required
                />

                <!-- Default input name -->
              </b-col>

              <br />
            </b-row>

            <br />
            

            <br />
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