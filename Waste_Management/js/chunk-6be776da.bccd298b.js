(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6be776da"],{"011c":function(t,e,a){"use strict";var r=a("f4bd"),i=a.n(r);i.a},a0ea:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{items:t.items}}),a("div",{staticClass:"animated fadeIn"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"DumpingLocations"}},[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("b-form-input",{staticClass:"form-control ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),a("b-col",{attrs:{md:"9"}},[a("b-button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{text:"Create Tenant"},on:{click:function(e){return t.$router.push({path:"/CreateDumpinglocation"})}}},[t._v("Create Dumping Location")])],1)],1),a("div",{staticClass:"mt-3"},[a("b-table",{ref:"roles",staticClass:"mt-3",attrs:{id:"my-table",dark:t.dark,hover:t.hover,striped:t.striped,bordered:t.bordered,filter:t.filter,responsive:!0,"current-page":t.currentPage,"per-page":t.perPage,small:t.small,fixed:t.fixed,fields:t.DumpingLocationColumns,items:t.item},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[a("router-link",{attrs:{to:{name:"Viewdumping",params:e.item}}},[a("span",{staticClass:"mr-3"},[a("i",{staticClass:"fa fa-eye edit"})])]),a("router-link",{attrs:{to:{name:"Editdumping",params:e.item}}},[a("span",{staticClass:"mr-3"},[a("i",{staticClass:"fas fa-pencil-alt edit"})])]),a("span",{staticClass:"mr-3",on:{click:function(a){return t.deleteReq(e)}}},[a("i",{staticClass:"fa fa-times edit"})])]}}])}),a("div",{staticStyle:{float:"right"}},[a("b-pagination",{attrs:{"per-page":t.perPage,"total-rows":t.rows,"aria-controls":"my-table","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},i=[],n=a("1da1"),s=a("c2a4"),o=a("444f"),l=a("2579"),c=a("8e5f"),d=a.n(c),u=a("b410"),m=a("323e"),p=a.n(m),f=a("039f"),b=a("6bf2"),g={page:{title:"DumpingLocation",meta:[{name:"description",content:s.description}]},components:{Layout:o["a"],PageHeader:l["a"],Multiselect:d.a,ValidationProvider:f["ValidationProvider"],ValidationObserver:f["ValidationObserver"],ModelSelect:u["ModelSelect"]},data(){return{plandata:"",striped:!1,bordered:!0,filter:"",perPage:10,hover:!0,currentPage:1,small:!1,dark:!1,fixed:!1,amount:"",submitted:!1,title:"Register",item:{},DumpingLocationColumns:[{key:"id",label:"Id"},{key:"dumpingAreaName",label:"DumpingArea"},{key:"dumpingType",label:"DumpingType"},{key:"address",label:"Address"},{key:"state",label:"State"},{key:"country",label:"Country"},{key:"actions",sortable:!0}],items:[{text:"Setup",href:"/"},{text:"DumpingLocations",active:!0}]}},computed:{rows(){return this.item.length},getUserDetails(){return this.$store.getters["auth/loggedInDetails"]}},mounted(){this.getdumping()},methods:{deleteReq(t){var e=this;return Object(n["a"])((function*(){console.log("data",t.item.id);t.item.id;try{const a=yield Object(b["ub"])(t.item.id);a&&(e.$swal({group:"alert",type:"success",text:"You Deleted Dumping Successfully",duration:5e3}),e.refresh())}catch(a){e.$toasted.error(a.message.error,{duration:7e3})}}))()},getdumping(){var t=this;return Object(n["a"])((function*(){try{p.a.start();const e=yield Object(b["Mb"])();t.item=e.data.response.dumpingLocation,p.a.done()}catch(e){}}))()},refresh(){return Object(n["a"])((function*(){setTimeout((function(){location.reload()}),200)}))()}}},h=g,y=(a("011c"),a("e295"),a("d5d1"),a("2877")),v=Object(y["a"])(h,r,i,!1,null,"664b943c",null);e["default"]=v.exports},d315:function(t,e,a){},d5d1:function(t,e,a){"use strict";var r=a("d315"),i=a.n(r);i.a},e295:function(t,e,a){"use strict";var r=a("e3d5"),i=a.n(r);i.a},e3d5:function(t,e,a){},f4bd:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6be776da.bccd298b.js.map