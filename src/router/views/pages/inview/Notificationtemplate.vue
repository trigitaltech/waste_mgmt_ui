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
  registerTemplete,
  NotificationTemplateTemplete,
  simpleactivation,
  editcustomer,
  plans,
  planprice,
  searchvoucher,
  redeem,
} from '../../../../services/auth'

export default {
  page: {
    title: 'NotificationTemplate',
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

      NotificationTemplateColumns: [
        {
          key: 'resource',

          label: 'Resource',
        },
        {
          key: 'name',
          label: 'NotificationTemplate',
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
          text: 'NotificationTemplates',
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
        NotificationTemplate: '',
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
      NotificationTemplateOpt: [],
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
    this.getClientDetails()
    this.getplans()
  },
  methods: {
    async makeredeem() {
      try {
        const payload = {
          pinNumber: this.vouchernumber,
          clientId: this.clientId,
        }
        let result = await redeem(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Redeemption Done Successfully`,
            duration: 5000,
          })
          this.refresh()
        }
      } catch (e) {
        this.$toasted.error(e.message.errors[0].developerMessage, {
          duration: 7000,
        })
      }
    },
    async myFunction() {
      if (this.vouchernumber.length === 18) {
        const result = await searchvoucher(this.vouchernumber)
        var CId = result.data

        console.log(CId)
        if (CId < 5) {
          this.$notify({
            group: 'alert',
            type: 'error',
            text: `invalid voucher id`,
            duration: 5000,
          })
          this.submitted = true
        } else {
          this.submitted = false
        }
      }
    },
    async getplanprices() {
      console.log('hai', this.amount)
      this.amount = 311
    },

    async getplans() {
      const result = await plans()
      this.plandata = result.data
      this.plandata.map((e) => {
        this.options.push(e.planCode)
      })
      // console.log(this.clientTemplete)
    },
    async getplanprice() {
      if (this.selected !== null) {
        this.amount = '311'
      }
      // console.log("planmdata",this.plandata)
      var id = ''
      if (this.selected !== null) {
        this.plandata.map((e) => {
          if (this.selected === e.planCode) {
            id = e.id
          }
        })
        console.log('id', id)
        const result = await planprice(id)
        // this.amount = result.data.pricingData[0].price

        // console.log("amount",amount)
      }
      //      plan.map((e) => {
      //   this.options.push(e.planCode)
      // })
      // console.log(this.clientTemplete)
    },
    validateStep(name) {
      var refToValidate = this.$refs[name]
      return refToValidate.validate()
    },
    mergePartialModels(model, isValid) {
      if (isValid) {
        // merging each step model into the final model
        this.finalModel = Object.assign({}, this.finalModel, model)
      }
    },
    async getClientDetails() {
      const result = await registerTemplete()
      this.clientTemplete = result.data
      this.NotificationTemplateOpt = this.clientTemplete.addressTemplateData.NotificationTemplateData
      console.log(this.clientTemplete)
    },
    async changeNotificationTemplate(value) {
      console.log(value)
      const result = await NotificationTemplateTemplete(value)
      this.form.state = result.data.state
      this.form.country = result.data.country
    },
    bouquetsChange(value) {
      if (value === 'DAFT') {
        this.form.amount = 1500
      } else {
        this.form.amount = 1500
      }
    },
    async register() {
      this.submitted = true
      // if(this.form.firstName && this.form.lastName && this.form.number && this.form.address){
      try {
        const payload = {
          forename: this.form.firstName,
          surname: this.form.lastName,
          gender: 'male',
          email: this.form.email,
          mobile: this.form.number,
          dob: '12101990',
          officeId: this.getUserDetails.officeId,
          // officeId: 2,
          address: [
            {
              addressNo: this.form.address,
              state: this.form.state,
              country: this.form.country,
              NotificationTemplate: this.form.NotificationTemplate,
              postCode: this.form.postCode,
              countryCode: 'NGA',
              addressType: 'PRIMARY',
            },
            {
              addressNo: this.form.address,
              state: this.form.state,
              country: this.form.country,
              NotificationTemplate: this.form.NotificationTemplate,
              postCode: this.form.postCode,
              countryCode: 'NGA',
              addressType: 'BILLING',
            },
          ],
          devices: [
            {
              deviceId: this.form.stbNumber,
            },
          ],
          plans: [
            {
              planCode: 'STARTER',
            },
            {
              planCode: 'FTA',
            },
          ],
          credentails: {
            username: this.form.stbNumber,
            password: 'paywd@123',
          },
          refId: '12233333',
          IsVerified: 'NO',
          // paymentInfo: {
          //   paymentMethodID: 'VOUCHER',
          //   voucherCodes: {
          //     voucherCode: this.form.voucherNo,
          //   },
          // },
          valid: true,
          salutation: this.form.personalTitle,
          // middlename: this.form.middleName,
        }
        console.log('form', payload)
        // debugger
        const result = await simpleactivation(payload)
        this.clientId = result.data.clientId
        if (result) {
          this.form = {}
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `Your Customer Registeration Done Successfully`,
            duration: 5000,
          })
          this.makeredeem()
        }
        this.submitted = false
      } catch (e) {
        this.$notify({
          group: 'alert',
          type: 'error',
          text: `${e.message.errors[0].defaultUserMessage}`,
          duration: 5000,
        })
      }

      // }
      // else
      // {
      //    this.$notify({
      //   group: "alert",
      //   type: "error",
      //   text: `You fill Data`,
      //   duration: 5000,
      // });
      // }
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
        header="NotificationTemplates"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <b-col md="12">
            <b-button
            class="btn btn-custome float-right btn-secondary mb-3"
            text="Create Tenant"
            @click="$router.push({ path: '/create' })"
          >Create NotificationTemplate</b-button>
        </b-col>
        <div class="mt-3">
          <b-table
            id="my-table"
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
            :fields="NotificationTemplateColumns"
            :items="item"
            class="mt-3"
          >
            <template slot="actions" slot-scope="data">
              <span class="mr-3" @click="editNotificationTemplate(data)">
                  <i class="fas fa-pencil-alt edit"></i>
                </span>
                 <span class="mr-3" @click="deleteNotificationTemplate(data)">
              <i class="fa fa-times edit"></i>
            </span>
              <!-- <b-button size="sm" class="mr-2" variant="html5 icon" @click="deleteNotificationTemplate(data)">
              <i class="fa fa-times"></i>
            </b-button>
            <b-button size="sm" class="mr-2" variant="facebook" @click="editNotificationTemplate(data)">
              <i class="fa fa-pencil"></i>
            </b-button>-->
            </template>
            <template slot="row-details" slot-scope="row">
              <b-card class="role-details">
                <div>
                  <multiselect
                    :id="row.item._id"
                    :value="NotificationTemplateMap[row.item._id]"
                    :options="allNotificationTemplates"
                    label="NotificationTemplate"
                    track-by="NotificationTemplate"
                    :multiple="true"
                    @select="
                      (selectedOption, id) =>
                        addNotificationTemplateToRole(selectedOption, id, row)
                    "
                  ></multiselect>
                </div>
              </b-card>
            </template>
          </b-table>

          <b-modal id="roleModal" v-model="NotificationTemplateModal">
            <div slot="modal-header">{{ header }}</div>
            <div>
              <b-input v-model="NotificationTemplate" />

              <b-input v-model="NotificationTemplate" class="mt-2" />

              <multiselect
                v-model="NotificationTemplate"
                class="perm_input"
                :options="methods"
                placeholder="Select a Method"
                label="value"
                track-by="value"
                :multiple="false"
              ></multiselect>
            </div>
            <div slot="modal-footer">
              <b-button variant="primary" @click="handleEdit">Submit</b-button>

              <b-button class="ml-2" variant="secondary" @click="clearModal"
                >Cancel</b-button
              >
            </div>
          </b-modal>
          <div style="float: right">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="Area"
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
