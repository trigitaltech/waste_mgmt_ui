<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Multiselect from 'vue-multiselect'
import { ModelSelect } from 'vue-search-select'
 import { VueTreeList,  Tree,TreeNode } from 'vue-tree-list'
  // import Tree from 'vuejs-tree'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import {
  countries,
  countrys,
  cities,area
} from '../../../../services/auth'

export default {
  page: {
    title: 'Treeview',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    // Tree,
    VueTreeList,
    Layout,
    PageHeader,
    Multiselect,
    ValidationProvider,
    ValidationObserver,
    ModelSelect,
  },
  data() {
    return {
       newTree: {},
        data1: [],
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
      data:[],
      CountryColumns: [
        {
          key: 'resource',

          label: 'Resource',
        },
        {
          key: 'name',
          label: 'Country',
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
          text: 'TreeView',
          active: true,
        },
      ],
       treeDisplayData: [],
      finalModel: {},
      selected: null,
      clientId: '',
      options: ['DAF'],
      // item: {
      //   value: '',
      //   text: '',
      // },
     
    }
  },
  computed: {
  myCustomStyles() {
    return {
      tree: {
        height: 'auto',
        maxHeight: '300px',
        overflowY: 'visible',
        display: 'inline-block'
      },
      row: {
        width: '500px',
        cursor: 'pointer',
        child: {
          height: '35px'
        }
      },
      addNode: {
        class: 'custom_class',
        style: {
          color: '#007AD5'
        }
      },
      editNode: {
        class: 'custom_class',
        style: {
          color: '#007AD5'
        }
      },
      deleteNode: {
        class: 'custom_class',
        style: {
          color: '#EE5F5B'
        }
      },
      selectIcon: {
        class: 'custom_class',
        style: {
          color: '#007AD5'
        },
        active: {
          class: 'custom_class',
          style: {
            color: '#2ECC71'
          }
        }
      },
      text: {
        style: {},
        active: {
          style: {
            'font-weight': 'bold',
            color: '#2ECC71'
          }
        }
      }
    };
  },
  myCustomOptions() {
    return {
      treeEvents: {
        expanded: {
          state: true,
          fn: null,
        },
        collapsed: {
          state: true,
          fn: null,
        },
        selected: {
          state: true,
          fn: null
        },
        checked: {
          state: true,
          fn: this.myCheckedFunction,
        }
      },
      events: {
        expanded: {
          state: true,
          fn: null,
        },
        selected: {
          state: true,
          fn: this.getcities,
        },
        checked: {
          state: false,
          fn: null,
        },
        editableName: {
          state: true,
          fn: null,
          calledEvent: null,
        }
      },
      // addNode: { state: true, fn: null, appearOnHover: true },
      // editNode: { state: true, fn: null, appearOnHover: true },
      // deleteNode: { state: true, fn: null, appearOnHover: true },
      showTags: true,
    };
  }
},
  mounted() {
  this.getcountrys()
  // this.getcities()
  this.getareas()
  },
  methods: {
     async getcities() {
       try {
      // debugger
      const result = await  cities("PHP")
      var cityData = result.data.response.result
      // debugger
      this.treeDisplayData.map(e=>{
        // debugger
        if(e.code === "PHP"){
          cityData.map(e1=>{
            // debugger
        e.nodes.push({text:e1.cityName})
      })
          
        } 
      })
      
      
      } catch (error) {}
   
    },
     async getareas() {
       try {
      // debugger
      const result = await  area("You")
      var coun = result.data.response.result
      coun.map(e=>{
      })
      
      } catch (error) {}
   
    },
     async getcountrys() {
       try {
         this.treeDisplayData = []
      debugger
      const result = await  countries()
      var coun = result.data.response.result
      var i =0;
      coun.map(e=>{
        
        this.treeDisplayData.push({name:e.name, id: i, pid: 0,
            dragDisabled: true,
            addTreeNodeDisabled: true,
            addLeafNodeDisabled: true,
            editNodeDisabled: true,
            delNodeDisabled: true,
            children:[]})
        i = i+1
      })
      
      this.data1 = new Tree([]);
      this.data1.children = [];
      this.treeDisplayData.map(e=>{
          this.data1.children.push(e)
      })
      debugger
      console.log(this.data1)
      } catch (error) {}
   
    },
   onDel(node) {
        console.log(node)
        node.remove()
      },
 
      onChangeName(params) {
        console.log(params)
      },
 
      onAddNode(params) {
        console.log(params)
      },
 
      onClick(params) {
        console.log(params)
      },
 
      addNode() {
        var node = new TreeNode({ name: 'new node', isLeaf: false })
        if (!this.data.children) this.data.children = []
        this.data.addChildren(node)
      },
 
      getNewTree() {
        var vm = this
        function _dfs(oldNode) {
          var newNode = {}
 
          for (var k in oldNode) {
            if (k !== 'children' && k !== 'parent') {
              newNode[k] = oldNode[k]
            }
          }
 
          if (oldNode.children && oldNode.children.length > 0) {
            newNode.children = []
            for (var i = 0, len = oldNode.children.length; i < len; i++) {
              newNode.children.push(_dfs(oldNode.children[i]))
            }
          }
          return newNode
        }
 
        vm.newTree = _dfs(vm.data)
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
        header="Tree View"

        class="mt-10 ml-10 mr-10 mx-auto"
      >
      <div>
    <!-- <button @click="addNode">Add Node</button> -->
   <!-- <Tree id="my-tree-id" ref="my-tree-ref" :custom-options="myCustomOptions" :custom-styles="myCustomStyles" :nodes="treeDisplayData"></Tree> -->
   <div>
    <!-- <button @click="addNode">Add Node</button> -->
    <vue-tree-list
      @click="onClick"
      @change-name="onChangeName"
      @delete-node="onDel"
      @add-node="onAddNode"
      :model="data1"
      default-tree-node-name="new node"
      default-leaf-node-name="new leaf"
      v-bind:default-expanded="false"
    >
      <template v-slot:leafNameDisplay="slotProps">
        <span>
          {{ slotProps.model.name }} <span class="muted">#{{ slotProps.model.id }}</span>
        </span>
      </template>
      <span class="icon" slot="addTreeNodeIcon">📂</span>
      <span class="icon" slot="addLeafNodeIcon">＋</span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">✂️</span>
      <span class="icon" slot="leafNodeIcon">🍃</span>
      <span class="icon" slot="treeNodeIcon">🌲</span>
    </vue-tree-list>
    <!-- <button @click="getNewTree">Get new tree</button>
    <pre>
      {{newTree}}
    </pre> -->
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
