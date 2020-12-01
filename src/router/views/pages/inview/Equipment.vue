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
  deleteequipment,
 equipment
} from '../../../../services/auth'

export default {
  page: {
    title: 'Equipment',
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
       item: {},
        
      
      permissionColumns: [
        {
          key: 'equipmentId',

          label: 'EquipmentId',
        },
         {
          key: 'equipmentNo',
          label: 'EquipmentNo',
        },
         {
          key: 'equipmentType',

          label: 'EquipmentType',
        },
         {
          key: 'ownerId',

          label: 'OwnerId',
        },
        {
          key: 'ownerName',

          label: 'OwnerName',
        },
         {
          key: 'servingArea',

          label: 'ServingArea',
        },
         {
          key: 'status',

          label: 'Status',
        },
        
         {
          key: 'totalHourServed',

          label: 'TotalHourServed',
        },
         {
          key: 'totalKmServed',

          label: 'TotalKmServed',
        },
         {
          key: 'warrantyStatus',

          label: 'WarrantyStatus',
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
          text: 'Equipment',
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
  
    this.getequipment()
  },
  methods: {
   async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deleteequipment(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Equipment Successfully`,
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
    async getequipment() {
       try {
        NProgress.start()
      const result = await  equipment()
      this.item = result.data.response.equipment
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
       
        header="Equipments"

          class="mt-10 ml-10 mr-10 mx-auto"
      >
         <b-col md="12">
          <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({path:'/Createequipment'})"
          >Create Equipment</b-button>
        </b-col>
        <div class="mt-3">
          <b-table
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
            :fields="permissionColumns"
            :items="item"
            class="mt-3"
            ref="roles"
          >
            <template v-slot:cell(actions)="data">
              <router-link :to="{ name: 'Viewequipment', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary">
                 <i class="fa fa-eye"></i>
                </b-button>
              </router-link>
             <router-link :to="{ name: 'Editequipment', params: data.item }">
                <b-button size="sm" class="mr-2" variant="primary">
                  <i class="fas fa-pencil-alt edit"></i>
                </b-button>
              </router-link>
            <b-button size="sm" class="mr-2" variant="danger" @click="deleteReq(data)">
              <i class="fa fa-times bin"></i>
            </b-button>
            </template>
          </b-table>
          <div style="float: right">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="permissions"
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
