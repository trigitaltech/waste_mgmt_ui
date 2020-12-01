<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import NProgress from 'nprogress/nprogress'
import moment from "moment";
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 Attendance, deleteattendance
} from '../../../../services/auth'

export default {
  page: {
    title: 'Attendance',
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
  data() {
    return {
      plandata: '',
      striped: false,
      bordered: true,
      filter: '',
      perPage: 10,
      hover: true,
      currentPage: 1,
      small: false,
      dark: false,
      fixed: false,
      amount: '',
      submitted: false,
      title: 'Register',
      item: {  },

      AttendanceColumns: [
       
        {
          key: 'employeeId.id',
          label: 'Emp Id',
        },
        {
          key: 'task_ref_no',
          label: 'Task RefNo',
        },
          {
          key: 'description',
          label: 'Description',
        },
        {
          key: 'createdBy',
          label: 'Created By',
        },
          {
          key: 'time_in',
          label: 'Time in ',
        },
         {
          key: 'time_out',
          label: 'Time Out ',
        },
         {
          key: 'recordDate',
          label: 'Record Date',
        },
        
         {
          key: 'status',

          label: 'Status',
        },


        {
          key: 'actions',
          sortable: true,
        },
      ],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Attendance',
          active: true,
        },
      ],
    
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
   
    this.attendancedata()
  },
  methods: {
      async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deleteattendance(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Employee Attendance Successfully`,
            duration: 5000,
          })
         this.refresh()
        }
      } catch (e) {
         this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
     
    },
  async attendancedata() {
       try {
        NProgress.start()
      const result = await  Attendance()
      this.item = result.data.response.attendence
       NProgress.done()
      } catch (error) {}
   
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
        header="Attendance"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <b-col md="12">
          <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({ path: '/Createattendance' })"
            >CheckIN</b-button
          >
        </b-col>
        <div class="mt-3">
          <b-table
            show-empty
            :dark="dark"
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            :filter="filter"
            id="my-table"
            :responsive="true"
            :current-page="currentPage"
            :per-page="perPage"
            :small="small"
            :fixed="fixed"
            :fields="AttendanceColumns"
            :items="item"
            class="mt-3"
            ref="roles"
          >
            <template v-slot:cell(time_in)="data">
              <div>{{ data.item.time_in | formatdatetime }}</div>
            </template>
            <template v-slot:cell(time_out)="data">
              <div>{{ data.item.time_out | formatdatetime }}</div>
            </template>
            <template v-slot:cell(recordDate)="data">
              <div>{{ data.item.recordDate | formatdate }}</div>
            </template>
           <template v-slot:cell(actions)="data">
              <router-link :to="{ name: 'Viewattendance', params: data.item }">
              <span class="mr-2" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
            <router-link :to="{ name: data.item.status=='CHECK_IN'?'Editattendance':'Reviewattendance', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary"  :hidden="data.item.status === 'APPROVED' || data.item.status === 'REJECTED' ">
                  <i class="fas fa-pencil-alt edit"></i>
                </b-button>
              </router-link>
            <span @click="deleteReq(data)">
              <i class="fa fa-times edit"></i>
            </span>
           </template>
            <!-- <template slot="row-details" slot-scope="row">
              <b-card class="role-details">
                <div> -->
                  <!-- <multiselect
                    :id="row.item._id"
                    :value="AttendanceMap[row.item._id]"
                    :options="allAttendance"
                    label="Attendance"
                    track-by="Attendance"
                    :multiple="true"
                    @select="
                      (selectedOption, id) =>
                        addAttendanceToRole(selectedOption, id, row)
                    "
                  ></multiselect> -->
                <!-- </div>
              </b-card>
            </template> -->
          </b-table>

          <!-- <b-modal v-model="AttendanceModal" id="roleModal">
            <div slot="modal-header">{{ header }}</div>
            <div>
              <b-input v-model="Attendance" />

              <b-input class="mt-2" v-model="Attendance" />

              <multiselect
                class="perm_input"
                :options="methods"
                placeholder="Select a Method"
                label="value"
                track-by="value"
                :multiple="false"
                v-model="Attendance"
              ></multiselect>
            </div>
            <div slot="modal-footer">
              <b-button @click="handleEdit" variant="primary">Submit</b-button>

              <b-button @click="clearModal" class="ml-2" variant="secondary"
                >Cancel</b-button
              >
            </div>
          </b-modal> -->
          <div style="float: right">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="Attendance"
              aria-controls="my-table"
              hide-goto-end-buttons
            ></b-pagination>
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
