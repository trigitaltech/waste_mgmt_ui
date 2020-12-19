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
 createcountry,users
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Address',
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
       description:"",
      supervisor:null,
      city:"",
    areaname:"",
    areaid:"",
    areasqkm:"",
    country:"",
    state:"",
    zip:"",
      message:"",
      areatype:null,
      createdby: "",
      createddate: new Date(),
      modifydate: new Date(),
      modifyby:"",
      item:[ { value: null, text: 'Please select an user' }],
      ite:[],
       option: [
        { value: null, text: 'Please select an option' },
        { value: 'urban', text: 'Urban' },
        { value: 'rural', text: 'Rural' },
        
      ],
      country:"",
      countrycode:"",
      items: [
        {
          text: 'Setup',
          href: '/',
        },
         {
          text: 'Address',
          href: '#/Setup/AddressMaster',
        },
        {
          text: 'Create Address',
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
     this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    // this.getplans()
 

  },
  methods: {
    async create() {
      try {
        const payload =   {
            countryName: this.country,
            countryCode: this.countrycode
       }
        let result = await createcountry(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Country Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Setup/AddressMaster'})
            
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
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
      <b-card
        header="Create country"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
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
                     Create Country</label
                    >
                    <input
                      v-model="country"
                    
                      type="text"
                       oninvalid="this.setCustomValidity('Area Name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Country"
                                class="form-control"
                                required
                    />

                

                  
                    <!-- Default input text -->
                  </b-col>
                  
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Country Code</label
                    >
                   <input
                      v-model="countrycode"
                    
                      type="text"
                       oninvalid="this.setCustomValidity('Area Name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter country code"
                                class="form-control"
                                required
                    />

                    <!-- Default input name -->
                  
                  </b-col>
              
                  <br />
                
                
                  
               
                </b-row>
                 <br/>
                 
              
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
<style lang="scss">
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
