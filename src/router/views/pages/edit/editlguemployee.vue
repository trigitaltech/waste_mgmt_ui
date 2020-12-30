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
  editlguemployee,
  roles,
  Areamasters,
  lgus,
  address,
} from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Lgu Employee',
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
      areas: [],
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
          text: 'LGU/ Edit LGU Employee',
          active: true,
        },
      ],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
      serviceoffice: '',
      file: '',

      item: {
        value: '',
        text: '',
      },
      roledata1: [],
      rolesarray: [],
      servingAreas: [],
      baranggayCode: '',

      form: {
            lgunames: this.$route.params.lguName,
       
        personalidno: this.$route.params.personalIdNo,
        personalTitle:this.$route.params.salutation,
        firstName:this.$route.params.firstName,
        middleName: this.$route.params.middleName,
        lastName:this.$route.params.lastName,
        userName:this.$route.params.userName,
        password:this.$route.params.password,
        email:this.$route.params.email,
        number:this.$route.params.phone,
        address: this.$route.params.addressLine1,
        city: this.$route.params.city,
        area:this.$route.params.area,
        district:this.$route.params.district,
        address2:this.$route.params.addressLine2,
        state: this.$route.params.state,
        country: this.$route.params.country,
        postCode: this.$route.params.pin,
        amount: 0,
        voucherNo: '',
      },
      item2: [],
      roles: ['ENCODER', 'VOLUME_CHECKER', 'DISPATCHER'],
      rolename: this.$route.params.type,
      titles: ['Mr.', 'Sri.', 'Mrs'],
      vouchernumber: '',
      genderOpt: ['Male', 'Female', 'Other'],
      cityOpt: [],
      createdby: '',
      createddate: new Date(),
      modifydate: new Date(),
      modifyby: '',
      lgus: [],
      lgusnames: [],
      distopt:[],
      lgusdata: "",
    
      file:"",
      lguname: "",
      bouquetsOpt: [
        { value: null, text: 'Please select an option' },
        'FTA  AND STARTER',
      ],
      clientTemplete: {},
      lgudata:[],
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    // this.getClientDetails()
    // this.getplans()
    console.log(this.$route.params)
    this.createdby = this.getUserDetails.user.username
    this.modifyby = this.getUserDetails.user.username
    this.roledata()
    this.getplans()
    this.getareas()
    this.getemployees()
    this.getaddresss()
    
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
    async getareas() {
      try {
        const result = await Areamasters()
        this.areas = result.data.response.areaMaster
        this.areas.map((e) => {
          if (e.areaName != null) this.servingAreas.push(e.areaName)
        })
        console.log(this.servingAreas)
      } catch (error) {
        console.log(error)
      }
      console.log(this.servingAreas)
    },
    getid() {
      // console.log("haiiiiii",this.item2)
      this.areas.map((e) => {
        if (this.serviceoffice === e.areaName) {
          this.sid = e.id
        }
        //  console.log("haiiiiii",this.sid)
      })
    },
    readAgreement(e) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        this.file = reader.result
      }
      reader.onerror = (err) => {
        console.error('reader : ', err)
      }
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

        this.areas.map((e) => {
          this.item2.push(e.areaName)
          console.log('user', e)
        })
        console.log('users', this.item)
      } catch (error) {}
    },
    getroles() {
      this.roledata1.map((e) => {
        if (this.rolename === e.name) {
          this.rolesarray.push(e)
        }
      })
    },
    async getBaranggayCode() {
      this.areas.map((e) => {
        if (e.areaName == this.baranggayCode) this.baranggayCode = e.code
      })
    },
    getlgu() {
      this.lgusnames.map(e => {
       
        if (this.lguname === e.lguName) {
          this.lgusdata = e.id
        }
      })
    },
    async getemployees() {
      try {
        const result = await lgus()
        this.lgusnames = result.data.response.result
        this.lgusnames.map((e) => {
          this.lgus.push(e.lguName)
             
            if(this.$route.params.id === e.id){
              this.lguname = e.lguName
            }
        })
        // data.map( e => {
        //   if(e.type!="ENCODER" && e.type!="VOLUME_CHECKER" && e.type!="DISPATCHER")
        //     this.item.push(e)
        // })
        // console.log(this.item)
      } catch (error) {}
    },
    async roledata() {
      try {
        const result = await roles()
        this.roledata1 = result.data.response.RoleMaster
        // console.log("users",data[0].userName)
        // JSON.parse(JSON.stringify(result))
        // for(i=0;i<data.length;i++){
        //   this.item[i]=data[i].userName
        // }

        // this.roledata1.map(e=>{
        // this.roles.push(e.name)
        // console.log("user",e)
        // })
        //  console.log("users",this.item)
      } catch (error) {}
    },
    async create() {
      try {
      
        const payload = {
         id:this.$route.params.id,
          lguName: this.form.lgunames,
          userName: this.form.userName,
          password: this.form.password,
          passwordStatus: 1,
          email: this.form.email,
          phone: this.form.number,
          salutation: this.form.personalTitle,
          firstName: this.form.firstName,
          middleName: this.form.middleName,
          lastName: this.form.lastName,
          addressLine1: this.form.address,
          addressLine2: this.form.address2,
          district: this.form.district,
          state: this.form.state,
          country: this.form.country,
          pin: this.form.postCode,
          isDeleted: false,
          status: 200,
          type: this.rolename,
          personalIdNo: this.form.personalidno,
          service_OFFICE: this.sid,
          id_PROOF_DOC_URL: this.file,
          lguId: this.lgusdata,

          //baranggayCode: this.baranggayCode
        }
        let result = await editlguemployee(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `LGU Employee created Successfully`,
            duration: 5000,
          })
          this.$router.push({ path: '/LGU/Lguemployee' })
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
          <div class="col-xl-12 mx-auto">
            <b-card header="Edit LGU Employee">
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
                                <label for="default">LGU Name</label>
                                <!-- <ValidationProvider
                                  v-slot="{ errors }"
                                  name="First Name"
                                  rules="required"
                                >-->
                                <input
                                  v-model.trim="form.lgunames"
                                  for="firstname"
                                  type="text"
                                  oninvalid="this.setCustomValidity('Lgu Name is required ')"
                                  oninput="setCustomValidity('')"
                                  placeholder="Enter LguName"
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

                            <!-- <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Service office</label>

                                <b-form-select
                                  v-model.trim="serviceoffice"
                                  :options="item2"
                                  class="form-control"
                                  @change="getid"
                                ></b-form-select>
                              </div>
                            </div> -->
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">Personal ID No</label>

                                <input
                                  v-model.trim="form.personalidno"
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
                                  @change="getroles"
                                ></b-form-select>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group mt-3 mt-sm-0">
                                <label for="default">LGU</label>
                                  <b-form-select
                                  v-model.trim="lguname"
                                      placeholder="Select LGU"
                                  label="value"
                                  class="form-control"
                                  :options="lgus"
                                  @change="getlgu"
                                ></b-form-select>
                              
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
