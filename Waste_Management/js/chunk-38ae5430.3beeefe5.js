(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38ae5430"],{5664:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("PageHeader"),e("div",{staticClass:"animated"},[e("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Edit Landfill Trip"}},[e("div",{staticClass:"mt-1"},[e("div",{staticClass:"mx-xl-5"},[e("div",{staticClass:"card-body"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.create(a)}}},[e("b-row",[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("LGU")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lguName,expression:"lguName"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.lguName},on:{input:function(a){a.target.composing||(t.lguName=a.target.value)}}})]),e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Baranggay")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.baranggayName,expression:"baranggayName"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.baranggayName},on:{input:function(a){a.target.composing||(t.baranggayName=a.target.value)}}})])],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Serving Route")]),e("multiselect",{attrs:{multiple:!0,options:t.servingRoutes},on:{change:t.getRouteCode},model:{value:t.route,callback:function(a){t.route=a},expression:"route"}})],1),e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[t._v("CONTROL NO")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.controlNo,expression:"tripData.controlNo"}],staticClass:"form-control",attrs:{name:"body"},domProps:{value:t.tripData.controlNo},on:{input:function(a){a.target.composing||t.$set(t.tripData,"controlNo",a.target.value)}}})])],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Trip Date")]),e("datetime",{attrs:{format:{year:"numeric",month:"numeric",day:"numeric"},type:"date",placeholder:"SELECT Date"},model:{value:t.tripDate,callback:function(a){t.tripDate=a},expression:"tripDate"}})],1),e("b-col",{staticClass:"ml-3"},[e("label",{staticClass:"grey-text font-weight-dark mr-2",attrs:{for:"defaultFormCardtextEx"}},[t._v("Trip Start Time")]),e("datetime",{attrs:{format:{hour:"numeric",minute:"2-digit"},type:"datetime",placeholder:"SELECT Time"},model:{value:t.startTime,callback:function(a){t.startTime=a},expression:"startTime"}})],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[t._v("Hauler")]),e("b-form-select",{staticClass:"form-control",attrs:{options:t.haulerListNames},on:{change:t.getVehiclesDriversHelpers},model:{value:t.hauler,callback:function(a){t.hauler=a},expression:"hauler"}})],1),e("b-col")],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Plate No")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.plateNo,expression:"tripData.plateNo"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.tripData.plateNo},on:{input:function(a){a.target.composing||t.$set(t.tripData,"plateNo",a.target.value)}}})]),e("b-col",{staticClass:"ml-4"},[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[t._v("Truck Type")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.truckType,expression:"tripData.truckType"}],staticClass:"form-control",attrs:{name:"trucktype",readonly:""},domProps:{value:t.tripData.truckType},on:{input:function(a){a.target.composing||t.$set(t.tripData,"truckType",a.target.value)}}})])],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[t._v("Body")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.bodyNo,expression:"tripData.bodyNo"}],staticClass:"form-control",attrs:{name:"body",readonly:""},domProps:{value:t.tripData.bodyNo},on:{input:function(a){a.target.composing||t.$set(t.tripData,"bodyNo",a.target.value)}}})]),e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Driver Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.driverName,expression:"tripData.driverName"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.tripData.driverName},on:{input:function(a){a.target.composing||t.$set(t.tripData,"driverName",a.target.value)}}})])],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Helper")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.helperName,expression:"tripData.helperName"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.tripData.helperName},on:{input:function(a){a.target.composing||t.$set(t.tripData,"helperName",a.target.value)}}})]),e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Garbage Collectors")]),e("multiselect",{attrs:{multiple:!0,options:t.collectorListNames},model:{value:t.collector,callback:function(a){t.collector=a},expression:"collector"}})],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Volume Checker")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.volumeCheckerName,expression:"tripData.volumeCheckerName"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.tripData.volumeCheckerName},on:{input:function(a){a.target.composing||t.$set(t.tripData,"volumeCheckerName",a.target.value)}}})]),e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Control Checker")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.controlCheckerName,expression:"tripData.controlCheckerName"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.tripData.controlCheckerName},on:{input:function(a){a.target.composing||t.$set(t.tripData,"controlCheckerName",a.target.value)}}})])],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Staging Area")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.stagingAreaName,expression:"tripData.stagingAreaName"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.tripData.stagingAreaName},on:{input:function(a){a.target.composing||t.$set(t.tripData,"stagingAreaName",a.target.value)}}})]),e("b-col",[e("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Dumping Location")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tripData.dumpingLocationName,expression:"tripData.dumpingLocationName"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.tripData.dumpingLocationName},on:{input:function(a){a.target.composing||t.$set(t.tripData,"dumpingLocationName",a.target.value)}}})])],1),e("button",{staticClass:"btn float-right btn-secondary mt-3 mr-2",attrs:{type:"submit"}},[t._v("Submit")])],1)])])])])],1)],1)},o=[],l=e("1da1"),s=e("2b0e"),i=e("c2a4"),n=e("444f"),c=e("2579"),m=(e("323e"),e("fea2")),u=e("859b"),d=e("8e5f"),p=e.n(d),g=(e("c1df"),e("6bf2"));s["default"].component("multiselect",p.a);var v={page:{title:"Trip Incoming Details",meta:[{name:"description",content:i.description}]},data(){return{inputs:[{name:""}],areadata:[],areaarray:"",routedate:[],routearray:[],emp:[],code:null,controlno:"",area:"",route:"",driver:"",contractor:"",collector:"",lgu:"lgu1",plate:"",plates:[],body:"",tripDate:"",trucktype:"",driverid:"",helperid:"",haulerId:"",checkerId:"",startTime:"",drivers:[],helpers:[],vehicles:[],servingAreas:[],route:"",driver:"",helper:null,servingRoutes:[],driverList:[],checkerList:[],checkerListNames:[],checker:"",control:"",controlListNames:[],hauler:"",haulerCode:"",haulerList:[],haulerListNames:[],collectorList:[],collectorListNames:[],stagingAreas:[],stagingAreaNames:[],staging:"",dumping:"",dumpingLocations:[],dumpingLocationNames:[],paleroList:[],garbage:null,areaId:null,routeId:null,garbageCollectors:[],brgy:{},routeCodes:[],loginDetails:{},baranggayId:null,totalCapacity:null,stagingAreaId:null,dumpingLocationId:null,controlCheckerId:null,controlCheckerName:"",lguName:"",baranggayName:"",stagingAreaName:"",dumpingLocationName:"",tripData:[]}},components:{Layout:n["a"],PageHeader:c["a"],VueTimepicker:m["a"],Multiselect:p.a,datetime:u["Datetime"]},mounted(){this.getLgu(),this.tripData=this.$route.params,this.getBaraggay(),console.log(this.tripData)},methods:{getLgu(){var t=this;return Object(l["a"])((function*(){const a=JSON.parse(localStorage.getItem("auth.currentUser"));t.loginlguid=a.lguemployee.lguId;const e=yield Object(g["lc"])(t.loginlguid);t.lguName=e.data.response.result.lguName}))()},getBaraggay(){var t=this;return Object(l["a"])((function*(){try{const a=yield Object(g["hc"])(t.loginlguid),e=a.data.response.result;e.map(a=>{console.log(a.id+" "+t.tripData.baranggayId),a.id==t.tripData.baranggayId&&(t.baranggayName=a.areaName)})}catch(a){console.log(a)}}))()},getStagingArea(){var t=this;return Object(l["a"])((function*(){try{const a=yield Object(g["Tc"])(),e=a.data.response.stagingArea;e.map(a=>{t.tripData.stagingAreaId==a.id&&console.log(a)})}catch(a){console.log(a)}}))()}}},f=v,b=(e("60bc"),e("b42c"),e("6d98"),e("2877")),C=Object(b["a"])(f,r,o,!1,null,"c292abca",null);a["default"]=C.exports},"6d98":function(t,a,e){"use strict";var r=e("f333"),o=e.n(r);o.a},b42c:function(t,a,e){"use strict";var r=e("be4c"),o=e.n(r);o.a},be4c:function(t,a,e){},f333:function(t,a,e){}}]);
//# sourceMappingURL=chunk-38ae5430.3beeefe5.js.map