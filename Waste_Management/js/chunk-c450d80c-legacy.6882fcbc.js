(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c450d80c"],{"2d9a":function(e,t,a){"use strict";var r=a("f5de"),n=a.n(r);n.a},"35a9":function(e,t,a){},"7c0e":function(e,t,a){},"95c1":function(e,t,a){"use strict";var r=a("35a9"),n=a.n(r);n.a},b8f9:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{items:e.items}}),a("div",{staticClass:"animated fadeIn"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Haulers"}},[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("b-form-input",{staticClass:"form-control ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),a("b-col",{attrs:{md:"9"}},[a("b-button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{text:"Create Tenant"},on:{click:function(t){return e.$router.push({path:"/Createhauler"})}}},[e._v("Create Haulers")])],1)],1),a("div",{staticClass:"mt-3"},[a("b-table",{ref:"roles",staticClass:"mt-3",attrs:{id:"my-table",dark:e.dark,hover:e.hover,striped:e.striped,bordered:e.bordered,filter:e.filter,responsive:!0,"current-page":e.currentPage,"per-page":e.perPage,small:e.small,fixed:e.fixed,fields:e.permissionColumns,items:e.item},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("router-link",{attrs:{to:{name:"Viewhauler",params:t.item}}},[a("span",{staticClass:"mr-2"},[a("i",{staticClass:"fa fa-eye edit"})])]),a("router-link",{attrs:{to:{name:"Edithauler",params:t.item}}},[a("span",{staticClass:"mr-2"},[a("i",{staticClass:"fas fa-pencil-alt edit"})])]),a("span",{on:{click:function(a){return e.deleteReq(t)}}},[a("i",{staticClass:"fa fa-times edit"})])]}}])}),a("div",{staticStyle:{float:"right"}},[a("b-pagination",{attrs:{"per-page":e.perPage,"total-rows":e.rows,"aria-controls":"my-table","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),i=a("c2a4"),o=a("444f"),c=a("2579"),l=a("8e5f"),u=a.n(l),d=a("b410"),m=a("323e"),f=a.n(m),p=a("039f"),h=a("6bf2"),b={page:{title:"Haulers",meta:[{name:"description",content:i.description}]},components:{Layout:o["a"],PageHeader:c["a"],Multiselect:u.a,ValidationProvider:p["ValidationProvider"],ValidationObserver:p["ValidationObserver"],ModelSelect:d["ModelSelect"]},data:function(){return{plandata:"",striped:!1,bordered:!0,filter:"",perPage:10,hover:!0,currentPage:1,small:!1,dark:!1,fixed:!1,amount:"",submitted:!1,title:"Register",item:[],permissionColumns:[{key:"contactSalutation",label:"Salutation"},{key:"haulerName",label:"haulerName"},{key:"contactFirstName",label:"First Name"},{key:"phone",label:"phone"},{key:"email",label:"Email"},{key:"actions",sortable:!0}],items:[{text:"Home",href:"/"},{text:"Hauler / Haulers",active:!0}]}},computed:{rows:function(){return this.item.length},getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.getemployees()},methods:{deleteReq:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("data",t.item.id),t.item.id,e.prev=2,e.next=5,Object(h["xb"])(t.item.id);case 5:a=e.sent,a&&(this.$swal({group:"alert",type:"success",text:"You Deleted Hauler Successfully",duration:5e3}),this.refresh()),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),this.$toasted.error(e.t0.message.error,{duration:7e3});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));function t(t){return e.apply(this,arguments)}return t}(),getemployees:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,f.a.start(),e.next=4,Object(h["Bc"])();case 4:t=e.sent,this.item=t.data.response.HaulerMaster,f.a.done(),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},g=b,v=(a("95c1"),a("d702"),a("2d9a"),a("2877")),k=Object(v["a"])(g,r,n,!1,null,"f503495e",null);t["default"]=k.exports},d702:function(e,t,a){"use strict";var r=a("7c0e"),n=a.n(r);n.a},f5de:function(e,t,a){}}]);
//# sourceMappingURL=chunk-c450d80c-legacy.6882fcbc.js.map