<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
 address,deletedistrict
} from '../../../../services/auth'

export default {
  page: {
    title: 'Address',
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
      item: { key: 'resource', value: 'Frozen Yogurt', name: '159' },

      cityColumns: [
        {
          key: 'stateCode.countryCode.countryName',
          label: 'Country',
        },
        {
          key: 'stateCode.stateName',
          label: 'State',
        },
        {
          key: 'districtName',
          label: 'District',
        },
        {
          key:'actions',

        }
      ],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Address',
          active: true,
        },
      ],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
      item: {
        value: '',
        text: '',
      },
      form: {
        personalTitle: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        number: '',
        address: '',
        city: '',
        state: '',
        country: '',
        postCode: '',
        stbNumber: '',
        bouquets: null,
        amount: 0,
        voucherNo: '',
      },
      titles: ['Mr.', 'Sri.', 'Mrs'],
      vouchernumber: '',
      genderOpt: ['Male', 'Female', 'Other'],
      cityOpt: [],
      bouquetsOpt: [
        { value: null, text: 'Please select an option' },
        'FTA  AND STARTER',
      ],
      item:[],
      clientTemplete: {},
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
    this.getaddresss()
  
  },
  methods: {
  
     async deleteReq(data) {
       console.log("data",data.item.id)
       var id = data.item.id
     try{
          
        const result = await   deletedistrict (data.item.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Deleted District Successfully`,
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
    async getaddresss() {
       try {
      
      const result = await  address()
      this.item = result.data.response.result
      
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
        header="Address"

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
            style="
              background-image: linear-gradient(
                109.6deg,
                rgba(48, 207, 208, 1) 11.2%,
                rgba(51, 8, 103, 1) 92.5%
              );
            "
            class="btn btn-custome float-right btn-secondary"
            text="Create Tenant"
            @click="$router.push({ path: '/Createaddress' })"
            >Create Country</b-button
          >
      
          <b-button
            style="
              background-image: linear-gradient(
                109.6deg,
                rgba(48, 207, 208, 1) 11.2%,
                rgba(51, 8, 103, 1) 92.5%
              );
            "
            class="btn btn-custome float-right btn-secondary mr-3"
            text="Create Tenant"
            @click="$router.push({ path: '/Treeview' })"
            >TreeView</b-button
          >
      
      </b-col>
       </b-row>
        <div>
          <b-table
            id="my-table"
            class="w-75"
            :dark="dark"
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            ref="roles"
            :filter="filter"
            :responsive="true"
            :current-page="currentPage"
            :per-page="perPage"
            thead-class="header"
            :small="small"
            :fixed="fixed"
            :fields="cityColumns"
            :items="item"
          >
           <template v-slot:cell(actions)="data">
             <!-- <router-link :to="{ name: 'Viewarea', params: data.item }">
                <span class="mr-3" >
                 <i class="fa fa-eye edit"></i>
                </span>
              </router-link>
             <router-link :to="{ name: 'Editarea', params: data.item }">
               <span class="mr-3">
                  <i class="fas fa-pencil-alt edit"></i>
                </span>
              </router-link> -->
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
