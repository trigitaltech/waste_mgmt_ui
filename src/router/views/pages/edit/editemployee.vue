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
 Editemployee,Areamasters,address
} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Employee',
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
       item: 
           {key:'resource',value
           :'Frozen Yogurt', name: '159'},
        
        
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
      serviceoffice:this.$route.params.service_OFFICE,
      personalidno:this.$route.params.personal_ID_NO,
      items: [
         {
          text: 'Home',
          href: '/',
        },
        
         {
          text: 'Employees',
          href: '#/Employee/Employees',
        },
        {
          text: 'Edit Employee',
          active: true,
        },
      ],
      finalModel: {},
      employeetype:this.$route.params.type,
      selected: null,
      clientId: '',
      options: ['DAF'],
      item:[{ value: 'INTERNAL', text: 'INTERNAL' },
      
          { value: 'OFFICE_ENCODER', text: 'OFFICE_ENCODER' },
         
          { value: 'PAYROLL', text: 'PAYROLL' },
          { value: 'PALERO', text: 'PALERO' },
           { value: 'BILLING', text: 'BILLING' }],
      file:"",
      item2:[],
      sid:"",
     form: {
        personalTitle:this.$route.params.salutation,
        firstName:this.$route.params.firstName,
        middleName: this.$route.params.middleName,
        lastName:this.$route.params.lastName,
        userName:this.$route.params.userName,
        password:'',
        email:this.$route.params.email,
        number:this.$route.params.phone,
        address: this.$route.params.addressLine1,
        city: this.$route.params.city,
        area:this.$route.params.area,
        address2:this.$route.params.addressLine2,
        state: this.$route.params.state,
        country: this.$route.params.country,
        postCode: this.$route.params.pin,
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
       createdby: this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
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
    // this.getClientDetails()
    console.log(this.$route.params)
    this.getplans()
      this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
  },
  methods: {
    getid(){
        // console.log("haiiiiii",this.item2)
        this.areas.map(e=>{
            if(this.serviceoffice === e.districtName){
                this.sid = e.id    
                       }
                        //  console.log("haiiiiii",this.sid)
        })
      },
     async getplans() {
       try {
        const result = await  address()
      this.areas = result.data.response.result
    //   console.log("users",data[0].userName)
      // JSON.parse(JSON.stringify(result))
      // for(i=0;i<data.length;i++){
      //   this.item[i]=data[i].userName
      // }

      this.areas.map(e=>{
      this.item2.push(e.districtName)
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
        const payload =        
              {
                  id:this.$route.params.id,
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
                area: this.form.area,
                city: this.form.city,
                state: this.form.state,
                country: this.form.country,
                pin: this.form.postCode,
                isDeleted: false,
                status: 200,
                createdDate: this.createddate,
                modifiedDate: this.modifydate,
                createdBy: this.createdby,
                modifiedBy: this.modifyby,
                personalIdNo: this.personalidno,
                id_PROOF_DOC_URL:this.file,
                service_OFFICE: this.sid,
                type:this.employeetype
            }
        let result = await Editemployee(payload,this.$route.params.id)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Edited Employee Successfully`,
            duration: 5000,
          })
          this.$router.push({path:'/Employee/Employees'})
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
            header="Edit Employee"
            
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
                                type="password"
                              
                                placeholder="Enter Password"
                                class="form-control"
                               
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
                          <!-- <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Area</label>
                                <input
                                  v-model.trim="form.area"
                                  class="form-control"
                                  type="text"
                                  placeholder="Enter Area"
                                
                                />
                              </div>
                            </div> -->
                          <!-- <div class="col-md-4">
                            <div class="form-group mt-3 mt-sm-0">
                              <label for="default">Post Code</label>
                              <input
                                v-model.trim="form.postCode"
                                placeholder="Enter Poster Code"
                                class="form-control"
                                type="number"
                              />
                            </div>
                          </div> -->

                           <!-- <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">City</label>
                               <input
                                v-model.trim="form.city"
                                placeholder="Enter city"
                                class="form-control"
                                type="text"
                              />
                              </div>
                            </div> -->
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">State</label>
                                <input
                                  v-model.trim="form.state"
                                  class="form-control"
                                  type="text"
                                  placeholder="Enter State"
                               
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
                                
                                />
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group mt-3 mt-sm-0">
                                   <label for="default">Employee Type</label>
                                 
                                           <b-form-select
                                           v-model.trim="employeetype"
                                            class="form-control"
                                           :options="item"
                                              
                                           ></b-form-select>
                                    </div>
                            </div>
                            <div class="col-md-4" v-if="employeetype !== 'PALERO' && employeetype !== 'null'">
                              <div class="form-group mt-3 mt-sm-0">
                                   <label for="default">Service office</label>
                                 
                           
                               <b-form-select
                                           v-model.trim="serviceoffice"
                                            :options="item2"
                                           class="form-control"
                                              @change="getid"
                                ></b-form-select>
                                    </div>
                           
                           
                            </div>
                              <div class="col-md-3">
                            
                           
                        
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
                             <div class="col-md-3">
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

                    <!-- <div class="col-md-12">
                        <fieldset class="border p-2">
                          <legend class="w-auto">
                            <h4 class="header-title mt-0 mb-1">Service Info</h4>
                          </legend>
                          <div class="row">
                            <div class="col-md-3">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Box ID</label>
                                <input
                                  v-model.trim="form.stbNumber"
                                  placeholder="Enter Box ID"
                                  class="form-control"
                                  type="text"
                                />
                              </div>
                            </div>  -->

                          <!-- <div class="col-md-3">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Voucher No</label>
                                <input
                                  v-model.trim="form.voucherNo"
                                  class="form-control"
                                  placeholder="Enter Voucher No"
                                  type="number"
                                />
                              </div>
                            </div>-->

                          <!-- <div class="col-md-6">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Plan</label> -->
                          <!-- <b-form-select v-model="selected" :options="options"  v-on:change="getplanprice()"></b-form-select> -->
                          <!-- <model-select :options="options"
                                v-model="item"
                                placeholder="select item">
                                </model-select>-->
                          <!-- <b-form-select
                                    oninvalid="this.setCustomValidity('Plan is required ')"
                                  oninput="setCustomValidity('')"
                                  required
                                  v-model.trim="form.bouquets"
                                  placeholder="Select Bouquets"
                                  :options="bouquetsOpt"
                                  @change="getplanprices()"
                                ></b-form-select>
                              </div>
                            </div>

                            <div class="col-md-3">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Amount</label>
                                <input
                                  v-model.trim="amount"
                                  class="form-control"
                                  type="number"
                                  disabled
                                  placeholder="Amount"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div class="col-md-12">
                        <fieldset class="border p-2">
                          <legend class="w-auto">
                            <h4 class="header-title mt-0 mb-1">Voucher Info</h4>
                          </legend>
                          <div class="row">
                            <div class="col-md-3">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Voucher ID</label>
                                <input
                                  oninvalid="this.setCustomValidity('Voucher Id is required ')"
                                  oninput="setCustomValidity('')"
                                  required
                                  v-model.trim="vouchernumber"
                                  placeholder="Enter Voucher ID"
                                  class="form-control"
                                  type="text"
                                  @input="myFunction"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div> -->
                        <!-- </div>
                      </fieldset> -->
                    <!-- </div> -->
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
                           class="btn btn-custome float-right btn-secondary mb-3"
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
