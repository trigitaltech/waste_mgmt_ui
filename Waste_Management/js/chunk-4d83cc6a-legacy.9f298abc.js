(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d83cc6a"],{3029:function(e,t,r){},4010:function(e,t,r){},5797:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("PageHeader",{attrs:{items:e.items}}),r("div",{staticClass:"animated fadeIn"},[r("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"ServiceRequests Truck"}},[r("b-row",[r("b-col",{attrs:{md:"3"}},[r("b-form-input",{staticClass:"form-control ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),r("b-col",{attrs:{md:"9"}},[r("b-button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{text:"Create Tenant"},on:{click:function(t){return e.$router.push({name:"CreateSRTruck"})}}},[e._v("Create SR Truck")])],1)],1),r("div",{staticClass:"mt-3"},[r("b-table",{ref:"roles",staticClass:"mt-3",attrs:{id:"my-table",dark:e.dark,hover:e.hover,striped:e.striped,bordered:e.bordered,filter:e.filter,responsive:!0,"current-page":e.currentPage,"per-page":e.perPage,small:e.small,fixed:e.fixed,fields:e.ServicerequestdetailsColumns,items:e.item,"filter-included-fields":e.filterOn},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(jobStartTime)",fn:function(t){return[r("div",{staticClass:"table-row"},[e._v(e._s(e.getDate(t.item.jobStartTime)))])]}},{key:"cell(tripDate)",fn:function(t){return[r("div",{staticClass:"table-row"},[e._v(e._s(e.getDate(t.item.tripDate)))])]}},{key:"cell(actions)",fn:function(t){return[r("router-link",{attrs:{to:{name:"ViewserviceTruck",params:t.item}}},[r("span",{staticClass:"mr-2"},[r("i",{staticClass:"fa fa-eye edit"})])]),r("router-link",{attrs:{to:{name:"EditSRTruck",params:t.item}}},[r("span",{staticClass:"mr-2"},[r("i",{staticClass:"fas fa-pencil-alt edit"})])]),r("span",{on:{click:function(r){return e.deleteReq(t)}}},[r("i",{staticClass:"fa fa-times edit"})])]}}])}),r("div",{staticStyle:{float:"right"}},[r("b-pagination",{attrs:{"per-page":e.perPage,"total-rows":e.rows,"aria-controls":"my-table","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)],1)},n=[],i=(r("96cf"),r("1da1")),s=r("ade3"),c=r("c2a4"),o=r("444f"),l=r("2579"),u=r("8e5f"),d=r.n(u),m=r("b410"),f=r("c1df"),p=r.n(f),b=r("039f"),v=r("6bf2"),g={page:{title:"Servicerequests Truck",meta:[{name:"description",content:c.description}]},components:{Layout:o["a"],PageHeader:l["a"],Multiselect:d.a,ValidationProvider:b["ValidationProvider"],ValidationObserver:b["ValidationObserver"],ModelSelect:m["ModelSelect"]},data:function(){var e;return e={item:[],plandata:"",striped:!1,bordered:!0,filter:"",perPage:10,hover:!0,currentPage:1,small:!1,dark:!1,fixed:!1,amount:"",submitted:!1,title:"Register"},Object(s["a"])(e,"item",{key:"resource",value:"Frozen Yogurt",name:"159"}),Object(s["a"])(e,"ServicerequestdetailsColumns",[{key:"id",label:"ID"},{key:"dumpingareaId",label:"DumpingArea"},{key:"controlNo",label:"ControlNo"},{key:"truckType",label:"TruckType"},{key:"driverName",label:"driverName"},{key:"tripDate",label:"TripDate"},{key:"status",label:"status"},{key:"actions",label:"actions"}]),Object(s["a"])(e,"items",[{text:"Home",href:"/"},{text:"Servicerequests Truck",active:!0}]),Object(s["a"])(e,"finalModel",{}),Object(s["a"])(e,"selected",null),Object(s["a"])(e,"clientId",""),Object(s["a"])(e,"options",["DAF"]),Object(s["a"])(e,"item",{value:"",text:""}),Object(s["a"])(e,"form",{personalTitle:"",firstName:"",middleName:"",lastName:"",gender:"",email:"",number:"",address:"",Servicerequestdetails:"",state:"",country:"",postCode:"",stbNumber:"",bouquets:null,amount:0,voucherNo:""}),Object(s["a"])(e,"titles",["Mr.","Sri.","Mrs"]),Object(s["a"])(e,"vouchernumber",""),Object(s["a"])(e,"genderOpt",["Male","Female","Other"]),Object(s["a"])(e,"ServicerequestdetailsOpt",[]),Object(s["a"])(e,"bouquetsOpt",[{value:null,text:"Please select an option"},"FTA  AND STARTER"]),Object(s["a"])(e,"clientTemplete",{}),e},computed:{rows:function(){return this.item.length},getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.servicerequest()},methods:{getDate:function(e){return p()(e).format("DD/MM/YYYY")},deleteReq:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("data",t.item.id),t.item.id,e.prev=2,e.next=5,Object(v["Eb"])(t.item.id);case 5:r=e.sent,r&&this.$swal({group:"alert",type:"success",text:"You Deleted Servicerequest Successfully",duration:5e3}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),this.$toasted.error(e.t0.message.error,{duration:7e3});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));function t(t){return e.apply(this,arguments)}return t}(),servicerequest:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v["Rc"])();case 3:t=e.sent,this.item=t.data.response.ServiceTicket,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},h=g,k=(r("a41a"),r("f3a2"),r("ac13"),r("2877")),y=Object(k["a"])(h,a,n,!1,null,"891e94c6",null);t["default"]=y.exports},"9ffb":function(e,t,r){},a41a:function(e,t,r){"use strict";var a=r("3029"),n=r.n(a);n.a},ac13:function(e,t,r){"use strict";var a=r("9ffb"),n=r.n(a);n.a},f3a2:function(e,t,r){"use strict";var a=r("4010"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-4d83cc6a-legacy.9f298abc.js.map