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
import { createarea, users ,address,lgus} from '../../../../services/auth'

export default {
  page: {
    title: 'Create Baranggay',
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
      districtcode:"",
        cityOpt: [],
      description: '',
      supervisor: null,
      city: '',
      areaname: '',
      areaid: '',
      areasqkm: '',
      countrys: '',
      state: '',
      zip: '',
      classtype: '',
      daytype: '',
      message: '',
      areatype: null,
      createdby: '',
      createddate: new Date(),
      modifydate: new Date(),
      modifyby: '',
      code: '',
      district:"",
      item: [{ value: null, text: 'Please select an user' }],
      ite: [],
      option: [
        { value: null, text: 'Please select an option' },
        { value: 'urban', text: 'Urban' },
        { value: 'rural', text: 'Rural' },
      ],
      classes: [
        { value: 'MAINROAD', text: 'MAINROAD' },
        { value: 'SPECIAL TRIP', text: 'SPECIAL TRIP' },
        { value: 'BARANGGAY', text: 'BARANGGAY' },
      ],
      days: [
        { value: 'SUNDAY', text: 'SUNDAY' },
        { value: 'MONDAY', text: 'MONDAY' },
        { value: 'TUESDAY', text: 'TUESDAY' },
        { value: 'WEDNESDAY', text: 'WEDNESDAY' },
        { value: 'THURSDAY', text: 'THURSDAY' },
        { value: 'FRIDAY', text: 'FRIDAY' },
        { value: 'SATURDAY', text: 'SATURDAY' },
      ],
      distopt:[],
      items: [
        {
          text: 'Setup',
          href: '/',
        },
         {
          text: 'Baranggay',
          href: '#/Setup/AreaMaster',
        },
        {
          text: 'Create Baranggay',
          active: true,
        },
      ],
      addres:[],
      lgus:[],
      lgumaster:[],
      lguid:"",
      lgu:"",
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
    console.log("hiiiii",this.distopt)
    this.userdata()
    this.getaddresss()
    this.getlgus()
  },
  methods: {
      async getlgus() {
       try {
        
        const result = await  lgus()
        this.lgumaster  = result.data.response.result
        console.log(this.lgumaster)
        this.lgumaster.map(e=>{
          // debugger
          this.lgus.push(e.lguName)
          console.log(this.lgus)
        })
       
      } catch (error) {}
    },

   async getcity(){
// console.log('ahahahahha')
this.addres.map(e=>{
  if(this.district === e.districtName){
    this.districtcode = e.districtCode
    this.state = e.stateCode.stateName
    this.countrys = e.stateCode.countryCode.countryName
  }
})
    },
     async getaddresss() {
       try {
      
      const result = await  address()
      this.addres = result.data.response.result
      console.log("address",this.addres)
    this.addres.map(e=>{
      // debugger
      this.distopt.push(e.districtName)
    })
      
      } catch (error) {}
   
    },
    async create() {
      try {
        const payload = {
          code:this.code,
          areaName: this.areaname,
          areaType: this.areatype,
          classType: this.classtype,
          dayType:"",
          supervisor: this.supervisor,
          areaSqKm: this.areasqkm,
          isDeleted: false,
          state: this.state,
          country: this.countrys,
          description: this.description,
          city: "",
          zip:this.zip,
          districtCode: this.districtcode,
          lguId: this.lguid
        }
        let result = await createarea(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Created Area Successfully`,
            duration: 5000,
          })

          this.$router.push({ path: '/Setup/AreaMaster' })
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },
     getlgudata(){
       this.lgumaster.map(e=>{
         if(this.lgu === e.lguName ){
          // debugger
          this.lguid = e.id
          // console.log(this.lgus)
         }
        })
    
    },
    async userdata() {
      try {
        const result = await users()
        var data = result.data.response.Users
        console.log('users', data[0].userName)
        // JSON.parse(JSON.stringify(result))
        // for(i=0;i<data.length;i++){
        //   this.item[i]=data[i].userName
        // }

        data.map((e) => {
          this.item.push(e.userName)
          console.log('user', e)
        })
        console.log('users', this.item)
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
      <b-card header="Create Baranggay" class="mt-10 ml-10 mr-10 mx-auto">
        <div class="mt-3">
          <!-- Default form subscription -->
          <form @submit.prevent="create">
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Code</label
                >
                <input
                  v-model="code"
                  type="text"
                  oninvalid="this.setCustomValidity('Code is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Code"
                  class="form-control"
                  required
                />
              </b-col>
              <b-col>
                <!-- Default input name -->
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                >
                  Baranggay Name</label
                >
                <input
                  v-model="areaname"
                  type="text"
                  oninvalid="this.setCustomValidity('Area Name is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Area Name"
                  class="form-control"
                  required
                />

                <!-- Default input text -->
              </b-col>

              

              <br />
            </b-row>
            <br />
            <b-row>
              <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                  >Class Type</label
                >
                <b-form-select
                  v-model="classtype"
                  :options="classes"
                  oninvalid="this.setCustomValidity('Area Type is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Select Class Type"
                  class="form-control"
                  required
                ></b-form-select>

                <!-- Default input name -->
              </b-col>
            <b-col>
                <label
                  for="defaultFormCardNameEx"
                  class="grey-text font-weight-dark"
                  >Baranggay Type</label
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
            </b-row>
            <br />

            <b-row>
             
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Baranggay SqKm</label
                >
                <input
                  v-model="areasqkm"
                  type="text"
                  oninvalid="this.setCustomValidity('Area Sqkm is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Area Sqkm"
                  class="form-control"
                  required
                />
              </b-col>
               <b-col>
                <!-- Default input text -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Description</label
                >
                <input
                  v-model="description"
                  type="text"
                  oninvalid="this.setCustomValidity('Description is required ')"
                  oninput="setCustomValidity('')"
                  placeholder="Enter Description"
                  class="form-control"
                  required
                />
              </b-col>
            </b-row>
            <br />
            <b-row>
             
              <b-col>
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >District</label
                >
                 <multiselect
               
                  v-model.trim="district"
                   placeholder="Select distict"
                   :options="distopt"
                   @input ="getcity"
                   ></multiselect>
              </b-col>
                <b-col>
                <!-- Default input text -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >State</label
                >
                <input
                  id="defaultFormCardtextEx"
                  v-model="state"
                  type="text"
                  class="form-control"
                  placeholder="Enter state"
                  disabled
                />
                <br />
              </b-col>
            </b-row>
            <br />

            <b-row>
            

              <br />

              <b-col>
                <!-- Default input text -->

                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >Country</label
                >
                <input
                disabled
                  id="defaultFormCardtextEx"
                  v-model="countrys"
                  placeholder="Enter country"
                  type="text"
                  class="form-control"
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
                  id="defaultFormCardtextEx"
                  v-model="zip"
                  placeholder="Enter Zip"
                  type="text"
                  class="form-control"
                />
              </b-col>
            </b-row>
            <br />

            <b-row>
                <b-col>
                <!-- Default input text -->
                <label
                  for="defaultFormCardtextEx"
                  class="grey-text font-weight-dark"
                  >LGU</label
                >
                <b-form-select
                  v-model.trim="lgu"
                  placeholder="Select LGU"
                  @change="getlgudata"
                  label="value"
                  :options="lgus"
                  oninvalid="this.setCustomValidity('lgu is required ')"
                  oninput="setCustomValidity('')"
                  class="form-control"
                  required
                ></b-form-select>
              </b-col>
              <b-col>
             </b-col>
            </b-row>
            

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
