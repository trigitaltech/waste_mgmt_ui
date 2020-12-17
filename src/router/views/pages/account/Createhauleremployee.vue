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
 createhauleremployee,Areamasters,haulers,address
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Hauler Employee',
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
    
      serviceoffice:"",
      personalidno:"",
      items: [
         {
          text: 'Home',
          href: '/',
        },
        
         {
          text: 'Hauler Employees',
          href: '#/Hauler/HaulerEmployees',
        },
        {
          text: 'Create Hauler Employee',
          active: true,
        },
      ],
      finalModel: {},
      employeetype:"",
      selected: null,
      clientId: '',
      options: ['DAF'],
      roles:[ { value: 'INTERNAL', text: 'INTERNAL' },
        { value: 'DRIVER', text: 'DRIVER' },
          { value: 'CONTRACTOR', text: 'CONTRACTOR' },
          { value: 'HELPER', text: 'HELPER' },
          { value: 'OPERATOR', text: 'OPERATOR' },
          { value: 'PALERO', text: 'PALERO' }],
      file:"",
      item2:[],
      sid:"",
      
     form: {
       code:"",
       district:"",
        personalTitle: '',
        firstName: '',
        middleName: '',
        lastName: '',
        userName:'',
        password:'',
        email: '',
        number: '',
        address: '',
        city: '',
        area:'',
        address2:'',
        state: '',
        country: '',
        postCode: '',
        stbNumber: '',
        bouquets: null,
        amount: 0,
        voucherNo: '',
      },
      areas:[],
      titles: ['Mr.', 'Sri.', 'Mrs'],
      item1:[],
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
      distopt:[],
      hauler:[],
      haulername:"",
      haulerdata:[],
      haulerarray:[],
      rolename:"",
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    // this.getClientDetails()
    this.getaddresss()
    this.getemployees()
    this.getplans()
      this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
  },
  methods: {
     async getcity() {
      // console.log('ahahahahha')
      this.addres.map((e) => {
        if (this.form.district === e.districtName) {
          this.form.state = e.stateCode.stateName
          this.form.country = e.stateCode.countryCode.countryName
        }
      })
    },
    async getaddresss() {
      try {
        const result = await address()
        this.addres = result.data.response.result
        console.log('address', this.addres)
        this.addres.map((e) => {
          // debugger
          this.distopt.push(e.districtName)
        })
      } catch (error) {}
    },
    gethauler(){
        this.haulerdata.map(e=>{
          if(this.haulername === e.haulerName){
             this.haulerarray = e
          }
        })
    },
     async getemployees() {
       try {
      
      const result = await haulers()
      this.haulerdata = result.data.response.HaulerMaster
       this.haulerdata.map(e=>{
         this.hauler.push(e.haulerName)
       })
     
      } catch (error) {}
   
    },
    getid(){
        // console.log("haiiiiii",this.item2)
        this.areas.map(e=>{
            if(this.serviceoffice === e.areaName){
                this.sid = e.id    
                       }
                        //  console.log("haiiiiii",this.sid)
        })
      },
     async getplans() {
       try {
        const result = await Areamasters()
      this.areas = result.data.response.areaMaster
    //   console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      this.areas.map(e=>{
      this.item2.push(e.areaName)
      console.log("user",e)
      })
       console.log("users",this.item)
     
      } catch (error) {}
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
    async create() {
      try {
        const payload =              {
          code:this.form.code,
                userName: this.form.userName,
                password: this.form.password,
                passwordStatus: 1,
                email: this.form.email,
                phone: this.form.number,
                salutation: this.form.personalTitle,
                firstName: this.form.firstName,
                middleName: this.form.middleName,
                lastName: this.form.lastName,
                addressLine1: this.address,
                addressLine2: this.address2,
               distict:this.form.district,
                state: this.form.state,
                country: this.form.country,
                pin: this.form.postCode,
                isDeleted: false,
                status: 200,
              
                personalIdNo: this.personalidno,
                id_PROOF_DOC_URL:this.file,
              
                type:this.rolename,
                haulerId:this.haulerarray
            }
        let result = await createhauleremployee(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Created Hauler Employee Successfully`,
            duration: 5000,
          })
          this.$router.push({path:'/Hauler/HaulerEmployees'})
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
            header="Create Hauler Employee"
            
          >
            <div class="card-body">
              <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(create)">
                    <div class="row">
                      <div class="col-md-12 mb-2">
                        <fieldset class="border p-2">
                          <legend class="w-auto">
                            <h4 class="header-title mt-0 mb-1"
                              >Personal Info</h4
                            >
                          </legend>

                          <div class="row">
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Code</label>

                                <input
                                  v-model.trim="form.code"
                                  placeholder="Code"
                                  class="form-control"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Personal Title</label>
                                <multiselect
                                  v-model="form.personalTitle"
                                  placeholder="Select Personal Title"
                                  :options="titles"
                                ></multiselect>
                              </div>
                            </div>
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
                                  type="text"
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
                                <label for="default">First Name</label>
                                <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="First Name"
                                  rules="required"
                                >-->
                                <input
                                  v-model.trim="form.firstName"
                                  for="firstname"
                                  type="text"
                                  oninvalid="this.setCustomValidity('First Name is required ')"
                                  oninput="setCustomValidity('')"
                                  placeholder="Enter FirstName"
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
                                <label for="default">Middle Name</label>
                                <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="Last Name"
                                  rules="required"
                                >-->
                                <input
                                  v-model.trim="form.middleName"
                                  for="lastname"
                                  type="text"
                                  oninvalid="this.setCustomValidity('last name is required ')"
                                  oninput="setCustomValidity('')"
                                  placeholder="Enter LastName"
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
                                <label for="default">Last Name</label>
                                <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="Last Name"
                                  rules="required"
                                >-->
                                <input
                                  v-model.trim="form.lastName"
                                  for="lastname"
                                  type="text"
                                  oninvalid="this.setCustomValidity('last name is required ')"
                                  oninput="setCustomValidity('')"
                                  placeholder="Enter LastName"
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
                                <label for="default">Address lane 1</label>
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
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Address lane 2</label>
                                <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="Address"
                                  rules="required"
                                >-->
                                <input
                                  v-model.trim="form.address2"
                                  for="address"
                                  type="text"
                                  oninvalid="this.setCustomValidity('Address Lane2 is required ')"
                                  oninput="setCustomValidity('')"
                                  placeholder="Enter Address"
                                  class="form-control"
                                />
                              </div>
                            </div>

                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Post Code</label>
                                <input
                                  v-model.trim="form.postCode"
                                  placeholder="Enter Poster Code"
                                  class="form-control"
                                  type="number"
                                />
                              </div>
                            </div>

                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label
                                  for="defaultFormCardtextEx"
                                  class="grey-text font-weight-dark"
                                  >District</label
                                >
                                <multiselect
                                  v-model.trim="form.district"
                                  placeholder="Select distict"
                                  :options="distopt"
                                  @input="getcity"
                                ></multiselect>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">State</label>
                                <input
                                  v-model.trim="form.state"
                                  class="form-control"
                                  type="text"
                                  placeholder="Enter State"
                                  disabled
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Country</label>
                                <input
                                  v-model.trim="form.country"
                                  class="form-control"
                                  type="text"
                                  placeholder="Enter Country"
                                  disabled
                                />
                              </div>
                            </div>

                           <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Hauler</label>
                                <multiselect
                                  required
                                  v-model="haulername"
                                  placeholder="Select Hauler"
                                  :options="hauler"
                                  @input="gethauler"
                                ></multiselect>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Personal ID No</label>

                                <input
                                  v-model.trim="personalidno"
                                  placeholder="Enter Personal ID"
                                  class="form-control"
                                  type="number"
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label
                                  for="defaultFormCardEmailEx"
                                  class="grey-text font-weight-dark"
                                  >Type</label
                                >
                                <b-form-select
                                  v-model.trim="rolename"
                                  placeholder="Select Supervisor"
                                  label="value"
                                  class="form-control"
                                  :options="roles"
                                  
                                ></b-form-select>
                              </div>
                            </div>
                           
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div class="row mt-2 justify-content-center">
                      <div class="col-md-12">
                        <div class="d-flex justify-content-end">
                          <!-- <button
                            class="btn btn-outline-primary mr-3"
                            style="color: #26a69a"
                            type="reset"
                            >Reset</button
                          > -->
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
