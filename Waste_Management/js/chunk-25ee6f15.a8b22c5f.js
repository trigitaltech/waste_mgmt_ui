(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25ee6f15"],{"0a94":function(t,e,a){"use strict";var r=a("a7e9"),s=a.n(r);s.a},4258:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{items:t.items}}),a("div",{staticClass:"animated fadeIn"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"StagingAreas"}},[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("b-form-input",{staticClass:"form-control ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),a("b-col",{attrs:{md:"9"}},[a("b-button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{text:"Create Tenant"},on:{click:function(e){return t.$router.push({path:"/CreateStaging"})}}},[t._v("Create Staging Area")])],1)],1),a("div",{staticClass:"mt-3"},[a("b-table",{ref:"roles",staticClass:"mt-3",attrs:{id:"my-table",dark:t.dark,hover:t.hover,striped:t.striped,bordered:t.bordered,filter:t.filter,responsive:!0,"current-page":t.currentPage,"per-page":t.perPage,small:t.small,fixed:t.fixed,fields:t.StagingAreaColumns,items:t.item},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[a("router-link",{attrs:{to:{name:"Viewstaging",params:e.item}}},[a("span",{staticClass:"mr-3"},[a("i",{staticClass:"fa fa-eye edit"})])]),a("router-link",{attrs:{to:{name:"Editstaging",params:e.item}}},[a("span",{staticClass:"mr-3"},[a("i",{staticClass:"fas fa-pencil-alt edit"})])]),a("span",{staticClass:"mr-3",on:{click:function(a){return t.deleteReq(e)}}},[a("i",{staticClass:"fa fa-times edit"})])]}}])}),a("div",{staticStyle:{float:"right"}},[a("b-pagination",{attrs:{"per-page":t.perPage,"total-rows":t.rows,"aria-controls":"my-table","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},s=[],i=a("1da1"),n=a("c2a4"),o=a("444f"),l=a("2579"),c=a("8e5f"),d=a.n(c),u=a("b410"),g=a("039f"),m=a("6bf2"),f=a("323e"),b=a.n(f),p={page:{title:"StagingArea",meta:[{name:"description",content:n.description}]},components:{Layout:o["a"],PageHeader:l["a"],Multiselect:d.a,ValidationProvider:g["ValidationProvider"],ValidationObserver:g["ValidationObserver"],ModelSelect:u["ModelSelect"]},data(){return{plandata:"",striped:!1,bordered:!0,filter:"",perPage:10,hover:!0,currentPage:1,small:!1,dark:!1,fixed:!1,amount:"",submitted:!1,title:"Register",item:[],StagingAreaColumns:[{key:"id",label:"Id"},{key:"stagingAreaName",label:"Staging Area"},{key:"staging_type",label:"Staging Type"},{key:"address",label:"Address"},{key:"state",label:"State"},{key:"country",label:"Country"},{key:"actions",sortable:!0}],items:[{text:"Setup",href:"/"},{text:"StagingAreas",active:!0}]}},computed:{rows(){return this.item.length},getUserDetails(){return this.$store.getters["auth/loggedInDetails"]}},mounted(){this.staging()},methods:{deleteReq(t){var e=this;return Object(i["a"])((function*(){console.log("data",t.item.id);t.item.id;try{const a=yield Object(m["Fb"])(t.item.id);a&&(e.$swal({group:"alert",type:"success",text:"You Deleted Stagingarea Successfully",duration:5e3}),e.refresh())}catch(a){e.$toasted.error(a.message.error,{duration:7e3})}}))()},staging(){var t=this;return Object(i["a"])((function*(){try{b.a.start();const e=yield Object(m["Tc"])();t.item=e.data.response.stagingArea,b.a.done()}catch(e){}}))()},refresh(){return Object(i["a"])((function*(){setTimeout((function(){location.reload()}),200)}))()}}},h=p,y=(a("d447"),a("a7ed"),a("0a94"),a("2877")),v=Object(y["a"])(h,r,s,!1,null,"a4c54d5a",null);e["default"]=v.exports},"584c":function(t,e,a){},a7e9:function(t,e,a){},a7ed:function(t,e,a){"use strict";var r=a("584c"),s=a.n(r);s.a},b86a:function(t,e,a){},d447:function(t,e,a){"use strict";var r=a("b86a"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-25ee6f15.a8b22c5f.js.map