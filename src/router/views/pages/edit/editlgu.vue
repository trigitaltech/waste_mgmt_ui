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
 Editlgu,roles,Areamasters,address,statess
} from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Lgu',
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
      areas:[],  
      permissionColumns: [
        {
          key: 'resource',
        
          label: 'Resource',
        },
        {
          key: 'name',
          label: 'Permission',
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
          text: 'Lgus',
         href: '#/LGU/Lgu',
         
        },
        {
          text: 'Edit Lgu',
        
          active: true,
        },
      ],
         servingAreas:[],
      addres:[],
      distopt:[],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
      serviceoffice:"",
      file:"",
     
      item: {
        value: '',
        text: '',
      },
      roledata1:[],
      rolesarray:[],
      servingAreas:[],
      baranggayCode:[],
     form: {
    //  baranggay:this.$route.params.baranggay.areaName,
       district:this.$route.params.district,
       lguName:this.$route.params.lguName,
        lguCode:this.$route.params.code,
        personalidno:this.$route.params.personalIdNo,
        personalTitle: this.$route.params.contactSalutation,
        firstName: this.$route.params.contactFirstName,
        middleName: this.$route.params.contactMiddleName,
        lastName: this.$route.params.contactLastName,
        userName:this.$route.params.userName,
        password:this.$route.params.password,
        email: this.$route.params.email,
        number: this.$route.params.phone,
        address: this.$route.params.addressLine1,
     
        address2:this.$route.params.addressLine2,
        state: this.$route.params.state,
        country:this.$route.params.country,
        postCode: this.$route.params.pin,
        stbNumber: '',
        bouquets: null,
        amount: 0,
        voucherNo: '',
      },
      item2:[],
      file:"",
      roles:[],
      rolename:"",
      titles: ['Mr.', 'Sri.', 'Mrs'],
      vouchernumber: '',
      genderOpt: ['Male', 'Female', 'Other'],
      cityOpt: [],
       createdby: "",
      createddate: new Date(),
      modifydate: new Date(),
      modifyby:"",
      bouquetsOpt: [
        { value: null, text: 'Please select an option' },
        'FTA  AND STARTER',
      ],
      clientTemplete: {},
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    console.log(this.$route.params)
    // this.roles.push("LGU")
     this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    this.roledata()
    this.getplans()
    this.getareas()
    this.getaddresss()
  },
  methods: {
  
    async getareas() {
      try {
        const result = await Areamasters();
        this.areas = result.data.response.areaMaster
        this.areas.map(e=>{
            if(e.areaName!=null)
              this.servingAreas.push(e.areaName);
        })
        console.log(this.servingAreas)
      } catch (error) { 
        console.log(error);
      }
      console.log(this.servingAreas);
    },
    getid(){
        this.areas.map(e=>{
          if(this.serviceoffice === e.areaName){
            this.sid = e.id    
          }
        })
      },
    readAgreement(e) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this.file = reader.result;
      };
      reader.onerror = err => {
        console.error("reader : ", err);
      };
    },
    async getplans() {
       try {
        const result = await Areamasters()
      this.areas = result.data.response.areaMaster
      this.areas.map(e=>{
      this.item2.push(e.areaName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
    },
    getroles(){
        this.roledata1.map(e=>{
          if(this.rolename === e.name){
            this.rolesarray.push(e)
          }
        })
    },
      async getaddresss() {
       try {
      
      const result = await  statess()
      this.addres = result.data.response.result
      console.log("address",this.addres)
    this.addres.map(e=>{
      // debugger
      this.distopt.push(e.stateName)
    })
      
      } catch (error) {}
   
    },
    getdistricts(){
     this.addres.map(e=>{
        if(this.form.state === e.stateName){
   
    // this.form.state = e.stateCode.stateName
    this.form.country = e.countryCode.countryName
   }
     })
    },
    async getBaranggayCode() {
      this.areas.map( e => {
        if(e.areaName == this.baranggayCode)
          this.baranggayCode = e.code
      })
    },
    async roledata() {
       try {
      
      const result = await roles()
      this.roledata1 = result.data.response.RoleMaster
      } catch (error) {}
     },
    async create() {
      try {
        // console.log(this.form.lguCode)
        const payload = {
          id: this.$route.params.id,
          code: this.form.lguCode,
          lguName:this.form.lguName,
          userName: this.form.userName,
          password: this.form.password,
          passwordStatus: 1,
          email: this.form.email,
          phone: this.form.number,     
           contactSalutation:this.form.personalTitle,
          contactFirstName: this.form.firstName,
          contactMiddleName: this.form.middleName,
          contactLastName: this.form.lastName,
          addressLine1: this.form.address,
          addressLine2: this.form.address2,
          district:this.form.district,
          state: this.form.state,
          country: this.form.country,
          pin: this.form.postCode,
          isDeleted: false,
       
          type: null,
          personalIdNo:this.form.personalidno,
        
          id_PROOF_DOC_URL: this.file,
         
         
        }
        let result = await Editlgu(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `LGU Edited Successfully`,
            duration: 5000,
          })
          this.$router.push({path:'/LGU/Lgu'})
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

    <div class="row justify-content-center">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-xl-12  mx-auto">
          <b-card
            header="Edit LGU"
          >
            <div class="card-body">
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(create)">
                  <div class="row">
                    <div class="col-md-12 mb-2">
                      <fieldset class="border p-2">
                        <legend class="w-auto">
                          <h4 class="header-title mt-0 mb-1">Personal Info</h4>
                        </legend>

                        <div class="row">
                          
                            
                        
                          <!-- <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Gender</label>
                                <multiselect
                                  v-model.trim="form.gender"
                                  placeholder="Select Gender"
                                  :options="genderOpt"
                                ></multiselect>
                              </div>
                            </div>-->
                               <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">LGU Name</label>
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="First Name"
                                  rules="required"
                                >-->
                              <input
                                v-model.trim="form.lguName"
                                for="firstname"
                                type="text"
                                oninvalid="this.setCustomValidity('Lgu Name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter LGUName"
                                class="form-control"
                                required
                              />
                              <!-- <input
                                    v-model.trim="form.firstName"
                                    class="form-control"
                                    placeholder="Enter First Name"
                                    type="text"
                                />-->
                              <!-- <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>-->
                            </div>
                          </div>
                             <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">User Name</label>
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="First Name"
                                  rules="required"
                                >-->
                              <input
                                v-model.trim="form.userName"
                                for="firstname"
                                type="text"
                                oninvalid="this.setCustomValidity('User Name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter UserName"
                                class="form-control"
                                required
                              />
                              <!-- <input
                                    v-model.trim="form.firstName"
                                    class="form-control"
                                    placeholder="Enter First Name"
                                    type="text"
                                />-->
                              <!-- <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>-->
                            </div>
                          </div>
                           <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Password</label>
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="First Name"
                                  rules="required"
                                >-->
                              <input
                                v-model.trim="form.password"
                                for="firstname"
                                type="password"
                                oninvalid="this.setCustomValidity('Password is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Password"
                                class="form-control"
                                required
                              />
                              <!-- <input
                                    v-model.trim="form.firstName"
                                    class="form-control"
                                    placeholder="Enter First Name"
                                    type="text"
                                />-->
                              <!-- <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>-->
                            </div>
                          </div>
                            <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Personal Title</label>
                              <multiselect
                                required
                                v-model="form.personalTitle"
                                placeholder="Select Personal Title"
                                :options="titles"
                              ></multiselect>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Contact First Name</label>
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="First Name"
                                  rules="required"
                                >-->
                              <input
                                v-model.trim="form.firstName"
                                for="firstname"
                                type="text"
                                oninvalid="this.setCustomValidity('Contact First Name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Contact FirstName"
                                class="form-control"
                                required
                              />
                              <!-- <input
                                    v-model.trim="form.firstName"
                                    class="form-control"
                                    placeholder="Enter First Name"
                                    type="text"
                                />-->
                              <!-- <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>-->
                            </div>
                          </div>
                          <!-- 
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Middle Name</label>
                                <input
                                  v-model.trim="form.middleName"
                                  class="form-control"
                                  placeholder="Enter Middle Name"
                                  type="text"
                                />
                              </div>
                            </div>-->
                           <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Contact Middle Name</label>
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="Last Name"
                                  rules="required"
                                >-->
                              <input
                                v-model.trim="form.middleName"
                                for="lastname"
                                type="text"
                                oninvalid="this.setCustomValidity('Contact Middle name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Contact Middle Name"
                                class="form-control"
                                required
                              />
                              <!-- <input
                                    v-model.trim="form.lastName"
                                    class="form-control"
                                    placeholder="Enter Last Name"
                                    type="text"
                                  />
                                  <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>-->
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Contact Last Name</label>
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="Last Name"
                                  rules="required"
                                >-->
                              <input
                                v-model.trim="form.lastName"
                                for="lastname"
                                type="text"
                                oninvalid="this.setCustomValidity('Contact last name is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Contact LastName"
                                class="form-control"
                                required
                              />
                              <!-- <input
                                    v-model.trim="form.lastName"
                                    class="form-control"
                                    placeholder="Enter Last Name"
                                    type="text"
                                  />
                                  <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>-->
                            </div>
                          </div>
                          
                          <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Email</label>
                              <input
                                v-model.trim="form.email"
                                for="email"
                                type="email"
                                oninvalid="this.setCustomValidity('Please Use @gmail.com ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Email"
                                class="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Phone Number</label>
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="Phone Number"
                                  rules="required"
                                >-->
                              <input
                                v-model.trim="form.number"
                                for="number"
                                type="number"
                                oninvalid="this.setCustomValidity('Phone number is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Phone Number"
                                class="form-control"
                                required
                              />
                              <!-- <input
                                    v-model.trim="form.number"
                                    placeholder="Enter Phone Number"
                                    class="form-control"
                                    type="number"
                                />-->
                              <!-- <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>-->
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Address</label>
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="Address"
                                  rules="required"
                                >-->
                              <input
                                v-model.trim="form.address"
                                for="address"
                                type="text"
                                oninvalid="this.setCustomValidity('Address Lane1 is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Address"
                                class="form-control"
                                required
                              />
                              <!-- <input
                                    v-model.trim="form.address"
                                    class="form-control"
                                    placeholder="Enter Address"
                                    type="text"
                                />-->
                              <!-- <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>-->
                            </div>
                          </div>
                         <!-- <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Address lane 2</label> -->
                              <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="Address"
                                  rules="required"
                                >-->
                              <!-- <input
                                v-model.trim="form.address2"
                                for="address"
                                type="text"
                                oninvalid="this.setCustomValidity('Address Lane2 is required ')"
                                oninput="setCustomValidity('')"
                                placeholder="Enter Address"
                                class="form-control"
                                required
                              />
                            </div>
                            </div>  -->
                          <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">State</label>
                                <multiselect
                                required
                                v-model="form.state"
                                placeholder="Select State"
                                :options="distopt"
                                @input="getdistricts"
                              ></multiselect>
                              </div>
                            </div>
                          <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Post Code</label>
                              <input
                                v-model.trim="form.postCode"
                                placeholder="Enter Poster Code"
                                class="form-control"
                                type="number" required
                              />
                            </div>
                          </div>

                         
                            <!-- <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">State</label>
                                <input
                                  v-model.trim="form.state"
                                  class="form-control"
                                  type="text"
                                  placeholder="Enter State"
                                  required
                                  disabled
                                />
                              </div>
                            </div> -->
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Country</label>
                                <input
                                  v-model.trim="form.country"
                                  class="form-control"
                                  type="text"
                                  placeholder="Enter Country"
                                  required
                                  disabled
                                />
                              </div>
                            </div>
                              
                          
                              <div class="col-md-4">
                            
                           
                        
                              <div class="form-group mt-3 mt-sm-0">
                                   <label for="default">Personal ID No</label>
                                 
                              <input
                                v-model.trim="form.personalidno"
                                placeholder="Enter Personal ID"
                                class="form-control"
                                type="number"
                                required
                              />
                                    </div>
                           
                           
                            </div>
                             <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                                   <label for="default">ID Proof</label>
                                 
                                <b-form-file
                                :state="Boolean(file)"
                                placeholder="Choose a file..."
                                drop-placeholder="Drop file here..."
                                @change="readAgreement"
                                ></b-form-file>
                                    </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                  </div>
                  <div class="row mt-2 justify-content-center">
                    <div class="col-md-12">
                      <div class="d-flex justify-content-end">
                        <button
                          type="submit"
                          class="btn btn-primary d-inline-flex align-items-center"
                          >Submit</button
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </b-card>
        </div>
      </div>
    </div>
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
