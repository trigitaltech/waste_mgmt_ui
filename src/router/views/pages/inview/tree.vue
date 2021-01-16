<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import { countries,states,districts,createcity,createarea1 } from '../../../../services/auth'

export default {
  page: {
    title: 'Treeview',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      addressData:[],
      newTree: {},
      data1: [],
      treeDisplayData:[],
      showLine: true,
      showIcon: false,
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      treeData:[],
      visible:false,
      stateForm:false,
      districtForm:false,
      hideFooter:true,
      hideHeader:true,
      stateName:null,
      stateCode:null,
      districtName:null,
      districtCode:null,
      selectedCountry:null,
      selectedState:null,
      node:null,
      cities:null,
      districts:null,
      toggle:null
    }
  },
  mounted() {
    this.getaddresss();
  },
  watch: {
    checkedKeys(val) {
      console.log('onCheck', val);
    },
  },
  methods: {
    async addState() {
      try {
        const payload = {
          stateName: this.stateName,
          stateCode: this.stateCode,
          countryCode : {
            id: this.node.id,
            name: this.selectedCountry,
            countryCode: this.node.code
          }
        };
        console.log(payload)
        let result = await createcity(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `state Added`,
            duration: 5000,
          })
          this.treeData = [];
          this.getaddresss()
          this.stateForm = false
        }
      }
      catch(e) {
        console.log(e);
      }
    },
    async addDistrict() {
      try {
        const payload = {
          districtName: this.districtName,
          districtCode: this.districtCode,
          stateCode: {
            id: this.node.id,
            stateName: this.node.title,
            stateCode: this.node.code,
            countryCode: {
              id: this.node.cid,
              name: this.node.cname,
              countryCode: this.node.ccode
            }
          }
        };
        console.log(payload)
        let result = await createarea1(payload)
        if (result) {
          this.$swal({
            group: 'alert',
            type: 'success',
            text: `District Added`,
            duration: 5000,
          })
          this.treeData = [];
          this.getaddresss()
          this.districtForm = false
        }
      }
      catch(e) {
        console.log(e);
      }
    },
    rightClick({event,node}) {
      console.log(node)
      if(node.dataRef.pid == 0) {
        this.node = node.dataRef
        this.selectedCountry = node.dataRef.title
        this.visible = true
        this.toggle = 0
      }
      if(node.dataRef.pid == 1) {
        this.node = node.dataRef
        this.selectedState = node.dataRef.title
        this.visible = true
        this.toggle = 1
      }
      console.log(this.toggle+''+this.visible)
    },
    hide() {
      console.log(111);
      this.visible = false;
    },
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      this.selectedKeys = selectedKeys;
    },
    getNodes(object,pid) {
      if(pid == 0) {
        const node = {
          pid:pid,
          title:object.countryName,
          code:object.countryCode,
          id:object.id,
          children:[]
        };
        return node;
      }
      if(pid == 1) {
        const node = {
          pid:pid,
          title:object.stateName,
          code:object.stateCode,
          id:object.id,
          cid:object.countryCode.id,
          cname:object.countryCode.name,
          ccode:object.countryCode.countryCode,
          children:[]
        };
        return node;
      }
      if(pid == 2) {
        const node = {
          pid:pid,
          title:object.districtName,
          id:object.id
        };
        return node;
      }
    },
    async getcities(code) {
      var data = await states(code)
      this.cities = data.data.response.result
      console.log(this.cities)
      return this.cities
    },
    async getdistricts(code) {
      var data = await districts(code)
      this.districts = data.data.response.result
      return this.districts
    },
    async getaddresss() {
      try {
        const result = await countries()
        var data =  result.data.response.result
        console.log(data)
        data.map(async (e,i) => {
          this.treeData.push(this.getNodes(e,0))
          const result1 = await this.getcities(e.countryCode)
          result1.map(async (d,j) => {
            this.treeData[i].children.push(this.getNodes(d,1))
            const result2 = await this.getdistricts(d.stateCode)
            result2.map(async (c,k) => {
              this.treeData[i].children[j].children.push(this.getNodes(c,2))
            })
          })
        })
        console.log(this.treeData)
      } catch (error) {
        console.log(error)
      }
    },
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    openAddStateModal() {
      this.visible = false
      this.stateForm = true
    },
    openAddDistrictModal() {
      this.visible = false
      this.districtForm = true
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader />
    <div class="animated fadeIn">
      <b-card
        header="Tree View"
        class="mt-10 ml-10 mr-10 mx-auto"
      >
        <div>
          <a-tree
            :show-line="showLine"
            :show-icon="showIcon"
            v-model="checkedKeys"
            :expanded-keys="expandedKeys"
            :auto-expand-parent="autoExpandParent"
            :selected-keys="selectedKeys"
            :tree-data="treeData"
            @expand="onExpand"
            @select="onSelect"
            @rightClick="rightClick"
          >
          </a-tree>
          <b-modal v-model="visible" v-if="toggle==0" size="sm" :hide-header="hideHeader" :hide-footer="hideFooter">
            <b-list-group>
              <b-list-group-item button variant="light" @click="openAddStateModal">Add State</b-list-group-item>
            </b-list-group>
          </b-modal>
          <b-modal v-model="visible" v-if="toggle==1" size="sm" :hide-header="hideHeader" :hide-footer="hideFooter">
            <b-list-group>
              <b-list-group-item button variant="light" @click="openAddDistrictModal">Add District</b-list-group-item>
            </b-list-group>
          </b-modal>
          <b-modal v-model="stateForm" title="Add State" size="md" :hide-header="hideHeader" :hide-footer="hideFooter">
            <h2 class="text-center">Add State</h2>
            <form @submit.prevent="addState">
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >State Name</label>
              <input
                v-model="stateName"
                type="text"
                placeholder="Enter State Name"
                class="form-control"
                required
              />
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >State Code</label>
              <input
                v-model="stateCode"
                type="text"
                placeholder="Enter State Code"
                class="form-control"
                required
              />
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >Country</label>
              <input
                v-model="selectedCountry"
                type="text"
                class="form-control"
                readonly
              />
              <button
                type="submit"
                class="btn text-center btn-secondary"
              >Submit</button>
            </form>
          </b-modal>
          <b-modal v-model="districtForm" title="Add District" size="md" :hide-header="hideHeader" :hide-footer="hideFooter">
            <h2 class="text-center">Add District</h2>
            <form @submit.prevent="addDistrict">
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >District Name</label>
              <input
                v-model="districtName"
                type="text"
                placeholder="Enter District Name"
                class="form-control"
                required
              />
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >District Code</label>
              <input
                v-model="districtCode"
                type="text"
                placeholder="Enter District Code"
                class="form-control"
                required
              />
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >state</label>
              <input
                v-model="selectedState"
                type="text"
                class="form-control"
                readonly
              />
              <button
                type="submit"
                class="btn text-center btn-secondary"
              >Submit</button>
            </form>
          </b-modal>
        </div>
      </b-card>
    </div>
  </Layout>
</template>
