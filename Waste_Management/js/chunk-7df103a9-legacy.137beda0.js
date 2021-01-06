(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7df103a9"],{"14d4":function(t,e,r){"use strict";var a=r("489c"),i=r.n(a);i.a},2579:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row page-title"},[r("div",{staticClass:"col-md-12"},[r("b-breadcrumb",{staticClass:"mt-1",attrs:{items:t.items}}),r("h4",{staticClass:"mb-1 mt-0"},[t._v(t._s(t.title))])],1)])},i=[],s={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},n=s,o=r("2877"),l=Object(o["a"])(n,a,i,!1,null,null,null);e["a"]=l.exports},"489c":function(t,e,r){},b065:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("PageHeader"),r("div",{staticClass:"animated fadeIn"},[r("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Outgoing Trips"}},[r("div",[r("div",{staticClass:"mx-xl-5"},[r("div",{staticClass:"float-right"},[r("b-button",{staticClass:"btn btn-custome float-right btn-secondary mb-4 mr-2",attrs:{text:"Create Tenant"},on:{click:function(e){return t.$router.push({path:"/CreateOutgoingTrip"})}}},[t._v("Create Outgoing Trip")])],1),r("div",{staticClass:"card-body"},[r("div",{staticClass:"mt-3"},[r("b-table",{ref:"roles",staticClass:"mt-3",attrs:{dark:t.dark,hover:t.hover,striped:t.striped,bordered:t.bordered,filter:t.filter,id:"my-table",responsive:"sm","current-page":t.currentPage,"per-page":t.perPage,items:t.item,small:t.small,fixed:t.fixed,fields:t.TripColumns},scopedSlots:t._u([{key:"cell(time_in)",fn:function(e){return[r("div",[t._v(t._s(t._f("formatdatetime")(e.item.tripDate)))])]}},{key:"cell(actions)",fn:function(e){return[r("router-link",{attrs:{to:{name:"Viewtripoutgoing",params:e.item}}},[r("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"}},[r("i",{staticClass:"fa fa-eye"})])],1),r("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"danger"}},[r("span",{on:{click:function(r){return t.deleteReq(e)}}},[r("i",{staticClass:"fa fa-times edit"})])])]}}])}),r("div",{staticStyle:{float:"right"}},[r("b-pagination",{attrs:{"per-page":t.perPage,"aria-controls":"my-table","prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)])])])])],1)],1)},i=[],s=(r("96cf"),r("1da1")),n=(r("7f7f"),r("ade3")),o=r("c2a4"),l=r("444f"),c=r("2579"),u=(r("323e"),r("c1df")),d=r.n(u),p=r("6bf2"),m={page:{title:"Trip Incoming Details",meta:[{name:"description",content:o.description}]},components:{Layout:l["a"],PageHeader:c["a"]},data:function(){var t;return t={json_fields:{"Pin Value":"pinValue",serialNo:"serialNo","Expiry Date":"expiryDate","Pin Type":"pinType",Status:"status"},json_data:[],striped:!1,bordered:!0,small:!1,id:"",dark:!1,fixed:!1,printPdf:[],tableData:[],title:"Trip Incoming Details",items:[{text:"Trips",href:"/"},{text:"Incoming Trips",active:!0}],totalRows:1,currentPage:1,perPage:10,item:[],pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,tabIndex:0},Object(n["a"])(t,"striped",!1),Object(n["a"])(t,"bordered",!0),Object(n["a"])(t,"filter",""),Object(n["a"])(t,"perPage",10),Object(n["a"])(t,"hover",!0),Object(n["a"])(t,"currentPage",1),Object(n["a"])(t,"small",!1),Object(n["a"])(t,"dark",!1),Object(n["a"])(t,"fixed",!1),Object(n["a"])(t,"TripColumns",[{key:"id",label:"Id",sortable:!0},{key:"controlNo",label:"controlNo",sortable:!0},{key:"tripDate",label:"Trip Date"},{key:"driverName",label:"driverName"},{key:"helperName",label:"helperName"},{key:"plateNo",label:"Truck plateNo"},{key:"bodyNo",label:"Truck BodyNo"},{key:"status",label:"Status"},{key:"actions",sortable:!0}]),Object(n["a"])(t,"loginUserType",null),t},computed:{rows:function(){return this.exportVoucherData.length},getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},created:function(){var t=localStorage.getItem("auth.currentUser");t=JSON.parse(t),this.loginUserType=t.roles[0].code,console.log(t);var e=this.$route.query.name;this.tabIndex=e?1:0},mounted:function(){this.getTrips(),this.totalRows=this.items.length},filters:{formatdatetime:function(t){if(t)return d()(String(t)).format("hh:mm A DD/MM/YYYY")},formatdate:function(t){if(t)return d()(String(t)).format("DD/MM/YYYY")}},methods:{deleteReq:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("data",e.item.id),e.item.id,t.prev=2,t.next=5,Object(p["Hb"])(e.item.id);case 5:r=t.sent,r&&(this.$swal({group:"alert",type:"success",text:"You Deleted Tripoutgoing Successfully",duration:5e3}),this.refresh()),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),this.$toasted.error(t.t0.message.error,{duration:7e3});case 12:case"end":return t.stop()}}),t,this,[[2,9]])})));function e(e){return t.apply(this,arguments)}return e}(),getTrips:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["gc"])();case 3:e=t.sent,this.item=e.data.response.OutgoingTrips,console.log(e),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},f=m,g=(r("14d4"),r("2877")),b=Object(g["a"])(f,a,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-7df103a9-legacy.137beda0.js.map