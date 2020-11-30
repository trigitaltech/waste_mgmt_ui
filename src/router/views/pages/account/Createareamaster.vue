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
 createarea,users
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create AreaMaster',
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
      items: [
        {
          text: 'Setup',
          href: '/',
        },
        {
          text: 'Areamaster / Create Area',
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
this.userdata() 

  },
  methods: {
    async create() {
      try {
        const payload =  {
          
            areaName : this.areaname,
            areaType: this.areatype,
            supervisor: this.supervisor,
            areaSqKm:this.areasqkm,
            isDeleted: true,
           createdDate: this.createddate,
          createdBy: this.createdby,
          modifiedDate: this.modifydate,
          modifiedBy: this.modifyby,
            state: this.state,
            country: this.country,
            description: this.description,
            city: this.city,
            zip: this.zip
        

        }
        let result = await createarea(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Area Successfully`,
            duration: 5000,
          })
         
           this.$router.push({path:'/Setup/AreaMaster'})
            
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },
  async userdata() {
       try {
      
      const result = await users()
      var data = result.data.response.Users
      console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      data.map(e=>{
      this.item.push(e.userName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
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
        header="Create Area"
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
                     Area Name</label
                    >
                    <input
                      type="text"
                    
                      v-model="areaname"
                       oninvalid="this.setCustomValidity('Area Name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Area Name"
                                class="form-control"
                                required
                    />

                

                  
                    <!-- Default input text -->
                  </b-col>
                  
                  <b-col>
                     <label
                      for="defaultFormCardNameEx"
                      class="grey-text font-weight-dark"
                      >Area Type</label
                    >
                    <b-form-select
                      v-model="areatype"
                      :options="option"
                      oninvalid="this.setCustomValidity('Area Type is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Select Area Type"
                                class="form-control"
                                required
                    ></b-form-select>

                    <!-- Default input name -->
                  
                  </b-col>
              
                  <br />
                
                
                  
               
                </b-row>
                 <br/>
                  <b-row>
                    
                      <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Supervisor</label
                    >

                   <b-form-select
                  v-model.trim="supervisor"
                 oninvalid="this.setCustomValidity('Supervisor is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Select Supervisor"
                                class="form-control"
                                required
                  :options="item"
                  
                ></b-form-select>
             
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Area SqKm</label
                    >
                    <input
                      type="text"
                    
                      v-model="areasqkm"
                       oninvalid="this.setCustomValidity('Area Sqkm is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Area Sqkm"
                                class="form-control"
                                required
                    />
                  </b-col>

                <br/>
                
                 <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Description</label
                    >
                    <input
                      type="text"
                     
                      v-model="description"
                       oninvalid="this.setCustomValidity('Description is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Description"
                                class="form-control"
                                required
                    />

                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >City</label
                    >
                    <input
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="city"
                         placeholder="Enter city"
                    />
                  </b-col>
                  
                </b-row>
                 <br/>

  <b-row>
                  
                  
                   <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >State</label
                    >
                    <input
                   
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      placeholder="Enter state"
                      v-model="state"
                    />
 <br/>
                
                  </b-col>

                  <br/>

                   <b-col>
                    <!-- Default input text -->
                  
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Country</label
                    >
                    <input
                    placeholder="Enter country"
                  
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="country"
                    />
                  </b-col>
                
                     <b-col>
                    <!-- Default input text -->
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Zip</label
                    >
                    <input
                   placeholder="Enter Zip"
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="zip"
                    />
                     </b-col>
                </b-row>
<br/>
                
                <b-row>
                  
                  
                   <!-- <b-col> -->
                    <!-- Default input text -->
                    <!-- <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Created Date</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="createddate"
                    />
 <br/>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Modify Date</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="modifydate"
                    />
                  </b-col> -->

                  <!-- <br/>

                   <b-col> -->
                    <!-- Default input text -->
                    <!-- <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Created By</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="createdby"
                    />
 <br/>
                    <label
                      for="defaultFormCardtextEx"
                      class="grey-text font-weight-dark"
                      >Modify By</label
                    >
                    <input
                    disabled
                      type="text"
                      id="defaultFormCardtextEx"
                      class="form-control"
                      v-model="modifyby"
                    />
                  </b-col> -->
                </b-row>
              
              
                <br />
               <button
                          type="submit"
                         class="btn btn-custome float-right mr-2"
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
