<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import NProgress from 'nprogress/nprogress'
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
          key: 'employeeId',
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
        header-bg-variant="info"
        border-variant="info"
        header-text-variant="white"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <b-col md="12">
          <b-button
            style="
              background-image: linear-gradient( 109.6deg,rgba(48, 207, 208, 1) 11.2%,rgba(51, 8, 103, 1) 92.5% );margin-bottom:10px"
            class="btn btn-info float-right mr-2"
            text="Create Tenant"
            @click="$router.push({ path: '/Createattendance' })"
            >CheckIN</b-button
          >
        </b-col>
        <div class="mt-3">
          <b-table
            :dark="dark"
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            :filter="filter"
            id="my-table"
            responsive="sm"
            :current-page="currentPage"
            :per-page="perPage"
            thead-class="bg-dark"
            :small="small"
            :fixed="fixed"
            :fields="AttendanceColumns"
            :items="item"
            class="mt-3"
            ref="roles"
          >
           <template v-slot:cell(actions)="data">
              <router-link :to="{ name: 'Viewattendance', params: data.item }">
              <b-button size="sm" class="mr-2" variant="primary" >
              <i class="fa fa-eye"></i>
            </b-button>
              </router-link>
            <router-link :to="{ name: 'Editattendance', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary"  :hidden="data.item.status === 'CHECK_OUT' ">
                  <i class="fas fa-pencil-alt edit"></i>
                </b-button>
              </router-link>
            <b-button size="sm" class="mr-2" variant="danger" @click="deleteReq(data)">
              <i class="fa fa-trash bin"></i>
            </b-button>
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
              prev-text="Prev"
              next-text="Next"
              hide-goto-end-buttons
            ></b-pagination>
          </div>
        </div>
      </b-card>
    </div>
    <!-- end row -->
  </Layout>
</template>
<style lang="scss">
.table thead th {
    outline: none !important;
    color: white;
}
.btn-info {
    color: #fff;
    background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
  border-color: #5369f8;
}
.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
  border-color: #5369f8;
}
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
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
