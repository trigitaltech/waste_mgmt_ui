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
import { editarea, users ,address,lgus,statebylgu} from '../../../../services/auth'

export default {
  page: {
    title: 'Edit Baranggay',
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
     
      code:this.$route.params.code,
      description: this.$route.params.description,
      supervisor: this.$route.params.supervisor,
      city: this.$route.params.city,
      areaname: this.$route.params.areaName,
      areaid: '',
      areasqkm: this.$route.params.areaSqKm,
      countrys: this.$route.params.country,
      state: this.$route.params.state,
      zip: this.$route.params.zip,
      message: '',
      areatype: this.$route.params.areaType,
      createdby: this.$route.params.createdBy,
      createddate: this.$route.params.createdDate,
      modifydate: new Date(),
      modifyby: '',
      item: [],
      ite: [],
      option: [
        { value: 'urban', text: 'Urban' },
        { value: 'rural', text: 'Rural' },
      ],
       distopt:[],
       dist:this.$route.params.districtId,
       addres:[],
           classes: [
        { value: 'MAINROAD', text: 'MAINROAD' },
        { value: 'SPECIAL TRIP', text: 'SPECIAL TRIP' },
        { value: 'BARANGGAY', text: 'BARANGGAY' },
      ],
      classtype:this.$route.params.classType,
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
          text: 'Edit Baranggay',
          active: true,
        },
      ],
       lgus:[],
      lgudata:[],
      lguid:"",
      lgu:this.$route.params.lguId,
      district:this.$route.params.districtName
    }
  },
  computed: {
    getUserDetails() {
      return this.$store.getters['auth/loggedInDetails']
    },
  },
  mounted() {
    console.log(this.$route.params)

    this.modifyby = this.getUserDetails.user.username
    // this.getClientDetails()
    // this.getplans()
    this.userdata()
    // this.getaddresss()
    this.getlgus()
    // this.getlgus()
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
      async getlgudata() {
      this.distopt = []
      this.districtList = []
      this.lgumaster.map(async e => {
        if(this.lgu == e.lguName) {
           this.lguName=this.lguName
          this.state = e.state
          this.lguid = e.id
          this.countrys = e.country
          const result = await address()
          const data = result.data.response.result
          data.map(e => {
            if(e.stateCode.stateName == this.state){
              this.districtList.push(e)
              this.distopt.push(e.districtName)
            }
          })

        }
      })
    },
    //   async getlgus() {
    //    try {
        
    //     const result = await  lgus()
    //     this.lgumaster  = result.data.response.result
    //     console.log(this.lgumaster)
    //     this.lgumaster.map(e=>{
    //       // debugger
    //       this.lgus.push(e.lguName)
    //       console.log(this.lgus)
    //     })
       
    //   } catch (error) {}
    // },
  async getcity() {
      // console.log('ahahahahha')
      for (var i = 0; i < this.addres.length; i++) {
        if (this.district === this.addres[i].districtName) {
          // this.districtcode = e.districtCode
          this.state = this.addres[i].stateCode.stateName
          this.countrys = this.addres[i].stateCode.countryCode.countryName

          const result = await statebylgu(this.state)
          // this.lgus = []
          // this.lgudata = result.data.response.result
          // console.log(this.lgudata)
          //  this.lgudata.map( e => {

          // this.lgus.push(this.lgudata.lguName)
          // })
        }
      }
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
          id: this.$route.params.id,
          lguId: this.lguid,
          code: this.code,
          areaName: this.areaname,
          classType: this.classtype,
          dayType: "",
          areaType:this.areatype,
          supervisor: this.supervisor,
          areaSqKm: this.areasqkm,
          country: this.countrys,
          state: this.state,
          zip: this.zip,
          districtName: this.district,
          description:this.description,
          isDeleted: false,
          createdDate: this.createddate,
          createdBy: this.createdby,
          modifiedDate:this.modifyby,
          modifiedBy: this.modifydate,
        }
        let result = await editarea(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `You Edited Area Successfully`,
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
      <b-card header="Edit Baranggay" class="mt-10 ml-10 mr-10 mx-auto">
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
                  >LGU</label
                >
                <!-- <input
                  id="defaultFormCardtextEx"
                  v-model="lgus"
                  placeholder="Enter Lgu"
                  type="text"
                  disabled
                  class="form-control"
                /> -->
                <b-form-select
                  v-model.trim="lgu"
                  placeholder="Select LGU"
                  @change="getlgudata"
               
                  :options="lgus"
                  oninvalid="this.setCustomValidity('lgu is required ')"
                  oninput="setCustomValidity('')"
                  class="form-control"
                  required
                ></b-form-select>
              </b-col>
                <b-col>
                <!-- Default input text -->
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
