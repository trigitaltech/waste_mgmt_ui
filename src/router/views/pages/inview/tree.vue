<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import { countries,cities,area,createcity,createarea1 } from '../../../../services/auth'

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
      cityForm:false,
      areaForm:false,
      hideFooter:true,
      hideHeader:true,
      cityName:null,
      cityCode:null,
      areaName:null,
      areaCode:null,
      selectedCountry:null,
      selectedCity:null,
      node:null,
      cities:null,
      areas:null,
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
    async addCity() {
      try {
        const payload = {
          cityName: this.cityName,
          cityCode: this.cityCode,
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
            text: `City Added`,
            duration: 5000,
          })
          this.treeData = [];
          this.getaddresss()
          this.cityForm = false
        }
      }
      catch(e) {
        console.log(e);
      }
    },
    async addArea() {
      try {
        const payload = {
          areaName: this.areaName,
          areaCode: this.areaCode,
          cityCode: {
            id: this.node.id,
            cityName: this.node.title,
            cityCode: this.node.code,
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
            text: `Area Added`,
            duration: 5000,
          })
          this.treeData = [];
          this.getaddresss()
          this.areaForm = false
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
        this.selectedCity = node.dataRef.title
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
          title:object.name,
          code:object.countryCode,
          id:object.id,
          children:[]
        };
        return node;
      }
      if(pid == 1) {
        const node = {
          pid:pid,
          title:object.cityName,
          code:object.cityCode,
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
          title:object.areaName,
          id:object.id
        };
        return node;
      }
    },
    async getcities(code) {
      var data = await cities(code)
      this.cities = data.data.response.result
      console.log(this.cities)
      return this.cities
    },
    async getareas(code) {
      var data = await area(code)
      this.areas = data.data.response.result
      return this.areas
    },
    async getaddresss() {
      try {
        const result = await countries()
        var data =  result.data.response.result
        data.map(async (e,i) => {
          this.treeData.push(this.getNodes(e,0))
          const result1 = await this.getcities(e.countryCode)
          result1.map(async (d,j) => {
            this.treeData[i].children.push(this.getNodes(d,1))
            const result2 = await this.getareas(d.cityCode)
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
    openAddCityModal() {
      this.visible = false
      this.cityForm = true
    },
    openAddAreaModal() {
      this.visible = false
      this.areaForm = true
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
              <b-list-group-item button variant="light" @click="openAddCityModal">Add City</b-list-group-item>
            </b-list-group>
          </b-modal>
          <b-modal v-model="visible" v-if="toggle==1" size="sm" :hide-header="hideHeader" :hide-footer="hideFooter">
            <b-list-group>
              <b-list-group-item button variant="light" @click="openAddAreaModal">Add Area</b-list-group-item>
            </b-list-group>
          </b-modal>
          <b-modal v-model="cityForm" title="Add State" size="md" :hide-header="hideHeader" :hide-footer="hideFooter">
            <h2 class="text-center">Add City</h2>
            <form @submit.prevent="addCity">
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >City Name</label>
              <input
                v-model="cityName"
                type="text"
                placeholder="Enter City Name"
                class="form-control"
                required
              />
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >City Code</label>
              <input
                v-model="cityCode"
                type="text"
                placeholder="Enter City Code"
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
          <b-modal v-model="areaForm" title="Add Area" size="md" :hide-header="hideHeader" :hide-footer="hideFooter">
            <h2 class="text-center">Add Area</h2>
            <form @submit.prevent="addArea">
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >Area Name</label>
              <input
                v-model="areaName"
                type="text"
                placeholder="Enter Area Name"
                class="form-control"
                required
              />
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >Area Code</label>
              <input
                v-model="areaCode"
                type="text"
                placeholder="Enter Area Code"
                class="form-control"
                required
              />
              <label
                for="defaultFormCardNameEx"
                class="grey-text font-weight-dark"
              >City</label>
              <input
                v-model="selectedCity"
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
