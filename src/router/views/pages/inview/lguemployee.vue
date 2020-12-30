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
 deletelguemployee, lguemployee,lgus
} from '../../../../services/auth'

export default {
  page: {
    title: 'Lgu Employees',
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
      lgudata:[],
       item: [],
        
        
      permissionColumns: [
        
         {
          key: 'salutation',
          label: 'Salutation',
        },
         {
          key: 'firstName',

          label: 'First Name',
        },
        {
          key: 'lguId',
          label: 'Lgu Name',
          sortable: true
        },
         {
          key: 'email',

          label: 'Email',
        },
         {
          key: 'type',

          label: 'Type',
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
          text: 'LGU',
          active: true,
        },
      ],
    }
  },
  computed: {
     rows(){
     return this.item.length
    },
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
  
    this.getemployees()
    this.getemploye()
  },
  methods: {
     async getemploye() {
       try {
       
      
        // data.map( e => {
        //   if(e.type!="ENCODER" && e.type!="VOLUME_CHECKER" && e.type!="DISPATCHER")
        //     this.item.push(e)
        // })
        console.log(this.item)
       
      } catch (error) {}
    },
    async deleteReq(data) {
     try{
        
        const result = await deletelguemployee(data.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted lGU Employee Successfully`,
            duration: 5000,
          })
         this.getemployees()
        }
      } catch  (e) {
         this.$toasted.error(e.message.error, {
          duration: 7000,
        })
      }
     
    },
    async getemployees() {
       try {
        NProgress.start()
        // debugger
        const result = await  lguemployee()
        this.item = result.data.response.result
       const result1 = await  lgus()
        this.lgudata = result1.data.response.result

         for (var i = 0; i < this.item.length; i++) {
          
  for (var j = 0; j < this.lgudata.length; j++) {
if(this.lgudata[j].id === this.item[i].lguId ){
  this.item[i].lguId = this.lgudata[j].lguName
  
  break
}

  }
         }
          console.log(this.item)
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
       
        header="LGU Employee"

          class="mt-10 ml-10 mr-10 mx-auto"
      >
        <b-row>
        <b-col md="3">
           
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control ml-2"
                    ></b-form-input>
           
        </b-col>
         <b-col md="9">
          <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({ path: '/Createlguemployee' })"
          >Create LGU Employee</b-button> 
        </b-col>
        </b-row>
        <div class="mt-3">
          <b-table
            id="my-table"
            :dark="dark"
            :hover="hover"
            :striped="striped"
            ref="roles"
            :bordered="bordered"
            :filter="filter"
            :responsive="true"
            :current-page="currentPage"
            :per-page="perPage"
            :small="small"
            :fixed="fixed"
            :fields="permissionColumns"
            :items="item"
            class="mt-3"
          >
            <template v-slot:cell(actions)="data">
             <router-link :to="{ name: 'Viewlguemployee', params: data.item }">
                <span class="mr-2" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
             <router-link :to="{ name: 'Editlguemployee', params: data.item }">
                <span class="mr-2">
                  <i class="fas fa-pencil-alt edit"></i>
                </span>
              </router-link>
            <button @click="deleteReq(data.item)" class="btn">
              <i class="fa fa-times edit"></i>
            </button>
            </template>
          </b-table>
          <div style="float: right">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="rows"
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
<style scoped>
.table thead th {
    outline: none !important;
    color: black;
}

</style>
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
