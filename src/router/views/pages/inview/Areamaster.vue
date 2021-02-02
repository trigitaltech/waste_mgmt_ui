<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import moment from 'moment'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
  Areamasters,deletearea,lgus
} from '../../../../services/auth'
import NProgress from 'nprogress/nprogress'
export default {
  page: {
    title: 'Baranggay',
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
        filter: '',
      filterOn: [],
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
      item: [],

      AreamasterColumns: [
        {
          key: 'id',
          label: 'ID',
          sortable: true
        },
       
         {
          key: 'description',
          label: 'Description',
          sortable: true
        },
        
         {
          key: 'lguId',
          label: 'Lgu Name',
          sortable: true
        },
         {
          key: 'areaName',
          label: 'AreaName',
          sortable: true
        },
        
         {
          key: 'districtName',
          label: 'DistrictName',
          sortable: true
        },
       
        {
          key: 'actions',
          sortable: true
        },
      ],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Baranggay',
          active: true,
        },
      ],
      lgudata:[],
      lguname:[],
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
    this.getplans()
    // this.getemployees()
  },
  methods: {
     async getemployees() {
       try {
       
      
        // data.map( e => {
        //   if(e.type!="ENCODER" && e.type!="VOLUME_CHECKER" && e.type!="DISPATCHER")
        //     this.item.push(e)
        // })
        console.log(this.item)
       
      } catch (error) {}
    },
     getDate(timeStamp) {
    // debugger
      //  console.log(timeStamp)
      let date
      // if (timeStamp !== undefined){
        // date = timeStamp[0] + '-' + timeStamp[1] + '-' + timeStamp[2]
   return moment(timeStamp).format('DD/MM/YYYY')
      // }
    },
   async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await deletearea(data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted Area Successfully`,
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
  

    async getplans() {
       try {
        NProgress.start()
      const result = await  Areamasters()
      this.item = result.data.response.areaMaster
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
        header="Baranggay"

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
        <b-col >
            <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({ path: '/CreateArea' })"
          >Create Baranggay</b-button>
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
            :fields="AreamasterColumns"
            :items="item"
            class="mt-3"
           
          >
             <template v-slot:cell(createdDate)="data">
                            <div class="table-row">{{ getDate(data.item.createdDate) }}</div>
                        </template>
            <template v-slot:cell(actions)="data">
             <router-link :to="{ name: 'Viewarea', params: data.item }">
                <span class="mr-3" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
             <router-link :to="{ name: 'Editarea', params: data.item }">
               <span class="mr-3">
                  <i class="fas fa-pencil-alt edit"></i>
                </span>
              </router-link>
             <span class="mr-3" @click="deleteReq(data)">
              <i class="fa fa-times edit"></i>
            </span>
            <!-- <b-button size="sm" class="mr-2" variant="html5 icon" @click="deleteAreamaster(data)">
              <i class="fa fa-times"></i>
            </b-button>  -->
            <!-- <b-button size="sm" class="mr-2" variant="facebook" @click="editAreamaster(data)">
              <i class="fa fa-pencil"></i>
            </b-button>-->
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
