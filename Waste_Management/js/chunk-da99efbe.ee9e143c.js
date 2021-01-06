(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da99efbe"],{"17ab":function(e,t,a){},a02e:function(e,t,a){},b4b5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader"),a("div",{staticClass:"animated"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Create Landfill Trip"}},[a("div",{staticClass:"mt-1"},[a("div",{staticClass:"mx-xl-5"},[a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("LGU")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.loginDetails.name,expression:"loginDetails.name"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:e.loginDetails.name},on:{input:function(t){t.target.composing||e.$set(e.loginDetails,"name",t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Baranggay")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.servingAreas},on:{change:e.getRoutes},model:{value:e.area,callback:function(t){e.area="string"===typeof t?t.trim():t},expression:"area"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Serving Route")]),a("multiselect",{attrs:{multiple:!0,options:e.servingRoutes},on:{change:e.getRouteCode},model:{value:e.route,callback:function(t){e.route=t},expression:"route"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("CONTROL NO")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.controlno,expression:"controlno"}],staticClass:"form-control",attrs:{name:"body"},domProps:{value:e.controlno},on:{input:function(t){t.target.composing||(e.controlno=t.target.value)}}})])],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Trip Date")]),a("datetime",{attrs:{format:{year:"numeric",month:"numeric",day:"numeric"},type:"date",placeholder:"SELECT Date"},model:{value:e.tripDate,callback:function(t){e.tripDate=t},expression:"tripDate"}})],1),a("b-col",{staticClass:"ml-3"},[a("label",{staticClass:"grey-text font-weight-dark mr-2",attrs:{for:"defaultFormCardtextEx"}},[e._v("Trip Start Time")]),a("datetime",{attrs:{format:{hour:"numeric",minute:"2-digit"},type:"datetime",placeholder:"SELECT Time"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Hauler")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.haulerListNames},on:{change:e.getVehiclesDriversHelpers},model:{value:e.hauler,callback:function(t){e.hauler=t},expression:"hauler"}})],1),a("b-col")],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Plate No")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.plates},on:{change:e.getTruckType},model:{value:e.plate,callback:function(t){e.plate=t},expression:"plate"}})],1),a("b-col",{staticClass:"ml-4"},[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Truck Type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.trucktype,expression:"trucktype"}],staticClass:"form-control",attrs:{name:"trucktype",readonly:""},domProps:{value:e.trucktype},on:{input:function(t){t.target.composing||(e.trucktype=t.target.value)}}})])],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Body")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.body,expression:"body"}],staticClass:"form-control",attrs:{name:"body",readonly:""},domProps:{value:e.body},on:{input:function(t){t.target.composing||(e.body=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Driver Name")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.drivers},on:{change:e.getid},model:{value:e.driver,callback:function(t){e.driver="string"===typeof t?t.trim():t},expression:"driver"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Helper")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.helpers},on:{change:e.gethelperid},model:{value:e.helper,callback:function(t){e.helper="string"===typeof t?t.trim():t},expression:"helper"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Garbage Collectors")]),a("multiselect",{attrs:{multiple:!0,options:e.collectorListNames},model:{value:e.collector,callback:function(t){e.collector=t},expression:"collector"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Volume Checker")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.checkerListNames},on:{change:e.getCheckerId},model:{value:e.checker,callback:function(t){e.checker="string"===typeof t?t.trim():t},expression:"checker"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Control Checker")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.controlListNames},on:{change:e.getControlId},model:{value:e.control,callback:function(t){e.control="string"===typeof t?t.trim():t},expression:"control"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Staging Area")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.stagingAreaNames},on:{change:e.getDumpingLocation},model:{value:e.staging,callback:function(t){e.staging="string"===typeof t?t.trim():t},expression:"staging"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Dumping Location")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dumping,expression:"dumping"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:e.dumping},on:{input:function(t){t.target.composing||(e.dumping=t.target.value)}}})])],1),a("button",{staticClass:"btn float-right btn-secondary mt-3 mr-2",attrs:{type:"submit"}},[e._v("Submit")])],1)])])])])],1)],1)},o=[],s=a("1da1"),l=a("2b0e"),i=a("c2a4"),c=a("444f"),n=a("2579"),u=(a("323e"),a("fea2")),d=a("859b"),m=a("8e5f"),g=a.n(m),p=(a("c1df"),a("6bf2"));l["default"].component("multiselect",g.a);var h={page:{title:"Trip Incoming Details",meta:[{name:"description",content:i.description}]},data(){return{inputs:[{name:""}],areadata:[],areaarray:"",routedate:[],routearray:[],emp:[],code:null,controlno:"",area:"",route:"",driver:"",contractor:"",collector:"",lgu:"lgu1",plate:"",plates:[],body:"",tripDate:"",trucktype:"",driverid:"",helperid:"",haulerId:"",checkerId:"",startTime:"",drivers:[],helpers:[],vehicles:[],servingAreas:[],route:"",driver:"",helper:null,servingRoutes:[],driverList:[],checkerList:[],checkerListNames:[],checker:"",control:"",controlListNames:[],hauler:"",haulerCode:"",haulerList:[],haulerListNames:[],collectorList:[],collectorListNames:[],stagingAreas:[],stagingAreaNames:[],staging:"",dumping:"",dumpingLocations:[],dumpingLocationNames:[],paleroList:[],garbage:null,areaId:null,routeId:null,garbageCollectors:[],brgy:{},routeCodes:[],loginDetails:{},baranggayId:null,totalCapacity:null,stagingAreaId:null,dumpingLocationId:null,controlCheckerId:null,controlCheckerName:""}},components:{Layout:c["a"],PageHeader:n["a"],VueTimepicker:u["a"],Multiselect:g.a,datetime:d["Datetime"]},computed:{getUserDetails(){return this.$store.getters["auth/loggedInDetails"]}},mounted(){console.log(this.tripDate+" "+this.startTime),this.getLgu(),this.getBaraggay(),this.getUsers()},methods:{getLgu(){var e=this;return Object(s["a"])((function*(){const t=JSON.parse(localStorage.getItem("auth.currentUser"));e.loginlguid=t.lguemployee.lguId,e.contractorDispatcherId=t.lguemployee.id,e.contractorDispatcherName=t.lguemployee.userName;const a=yield Object(p["lc"])(e.loginlguid);e.loginDetails.name=a.data.response.result.lguName}))()},getBaraggay(){var e=this;return Object(s["a"])((function*(){try{const t=yield Object(p["hc"])(e.loginlguid);e.areadata=t.data.response.result,e.areadata.map(t=>{e.servingAreas.push(t.areaName)})}catch(t){console.log(t)}}))()},getUsers(){var e=this;return Object(s["a"])((function*(){try{const t=yield Object(p["cc"])();e.collectorList=t.data.response.result,console.log(e.collectorList),e.collectorList.map(t=>{"PALERO"==t.type&&e.collectorListNames.push(t.userName)})}catch(t){console.log(t)}}))()},getVehiclesDriversHelpers(){var e=this;return Object(s["a"])((function*(){try{e.haulerList.map(t=>{e.hauler==t.haulerName&&(e.haulerId=t.id,e.haulerCode=t.code)}),e.haulerList.map(function(){var t=Object(s["a"])((function*(t){if(e.hauler==t.haulerName){const t=yield Object(p["Xc"])();e.vehicles=t.data.response.vehicles,e.vehicles.map(t=>{t.haulerId==e.haulerId&&e.plates.push(t.plateNo)})}}));return function(e){return t.apply(this,arguments)}}()),e.employeedata()}catch(t){console.log(t)}}))()},gethaulers(){var e=this;return Object(s["a"])((function*(){try{const t=yield Object(p["Bc"])();console.log(t),e.haulerList=t.data.response.HaulerMaster,e.haulerList.map(t=>{t.baranggayId==e.baranggayId&&e.haulerListNames.push(t.haulerName)})}catch(t){console.log(t)}}))()},getRoutes(){var e=this;return Object(s["a"])((function*(){try{console.log("1"),e.areadata.map(function(){var t=Object(s["a"])((function*(t){if(e.area==t.areaName){e.areaId=t.id;const a=yield Object(p["mc"])(t.id);e.baranggayId=t.id,console.log(e.baranggayId),e.routedata=a.data.response.result.routeMaster,e.routedata.length>0&&e.routedata.map(t=>{null!=t.routeName&&e.servingRoutes.push(t.routeName)});const r=yield Object(p["Ec"])();e.checkerList=r.data.response.result,console.log(e.checkerList),e.checkerList.map(t=>{e.loginlguid==t.lguId&&"VOLUME_CHECKER"==t.type&&e.checkerListNames.push(t.userName),e.loginlguid==t.lguId&&"CONTROL_CHECKER"==t.type&&e.controlListNames.push(t.userName)}),e.gethaulers(),e.getStagingArea()}}));return function(e){return t.apply(this,arguments)}}())}catch(t){console.log(t)}}))()},getvehicles(){var e=this;return Object(s["a"])((function*(){const t=yield Object(p["Xc"])();e.vehicles=t.data.response.vehicles,e.vehicles.map(t=>{e.plates.push(t.plateNo)}),console.log(e.plates)}))()},getareas(){this.areadata.map(e=>{this.area===e.areaName&&(this.areaarray=e)})},getid(){console.log("haiiiiii"),this.emp.map(e=>{this.driver===e.userName&&(this.driverid=e.id)})},gethelperid(){this.emp.map(e=>{this.helper==e.userName&&(console.log(e),this.helperid=e.id)}),console.log(this.helperid)},getGarbageCollectors(){this.collector.map(e=>{this.collectorList.map(t=>{if(e==t.userName){const e={garbageCollectorId:t.id,garbageCollectorName:t.userName};this.garbageCollectors.push(e)}})})},gethaulerid(){this.haulerList.map(e=>{this.hauler==e.userName&&(this.haulerId=e.id)})},getCheckerId(){this.checkerList.map(e=>{this.checker==e.userName&&(this.checkerId=e.id)})},getControlId(){this.checkerList.map(e=>{this.control==e.userName&&(this.controlId=e.id)})},employeedata(){var e=this;return Object(s["a"])((function*(){try{const t=yield Object(p["zc"])();e.emp=t.data.response.HaulerEmployees,console.log(e.emp),e.emp.map(t=>{null!=t.haulerId&&("DRIVER"==t.type&&t.haulerId==e.haulerId&&e.drivers.push(t.userName),"HELPER"==t.type&&t.haulerId==e.haulerId&&e.helpers.push(t.userName))})}catch(t){}}))()},areas(){var e=this;return Object(s["a"])((function*(){try{const t=yield Areamasters();e.areadata=t.data.response.areaMaster,e.areadata.map(t=>{null!=t.areaName&&e.servingAreas.push(t.areaName)})}catch(t){console.log(t)}console.log(e.servingAreas)}))()},getRouteCode(){console.log(this.route)},routes(){var e=this;return Object(s["a"])((function*(){try{const t=yield routemaster();console.log(t),e.routedata=t.data.response.RouteMaster,e.routedata.map(t=>{null!=t.routeName&&e.servingRoutes.push(t.routeName)})}catch(t){}}))()},getRouteObject(e){this.routedata.map(t=>{if(e==t.routeName)return console.log(t),t})},getStagingArea(){var e=this;return Object(s["a"])((function*(){try{const t=yield Object(p["Tc"])();e.stagingAreas=t.data.response.stagingArea,e.stagingAreas.map(t=>{e.loginlguid==t.lguName.id&&e.stagingAreaNames.push(t.stagingAreaName)})}catch(t){console.log(t)}}))()},getDumpingLocation(){this.stagingAreas.map(e=>{e.stagingAreaName==this.staging&&(this.stagingAreaId=e.id,this.dumpingLocationId=e.dumpingArea.id,this.dumpingLocations.push(e),this.dumpingLocationNames.push(e.dumpingArea.dumpingAreaName),this.dumping=e.dumpingArea.dumpingAreaName)})},create(){var e=this;return Object(s["a"])((function*(){try{e.route.map(t=>{e.routedata.map(a=>{if(t==a.routeName){const t={servingRouteId:a.id};e.routeCodes.push(t)}})}),e.getGarbageCollectors();const t={controlNo:e.controlno,tripDate:e.tripDate,lguId:e.loginlguid,lguName:e.loginDetails.name,haulerId:e.haulerId,haulerName:e.hauler,bodyNo:e.body,plateNo:e.plate,truckType:e.trucktype,totalCapacity:e.totalCapacity,tripStartTime:e.startTime,baranggayId:e.areaId,stagingAreaId:e.stagingAreaId,dumpingLocationId:e.dumpingLocationId,helperId:e.helperid,helperName:e.helper,driverId:e.driverid,driverName:e.driver,contractorDispatcherId:e.contractorDispatcherId,contractorDispatcherName:e.contractorDispatcherName,contractorDispatcherVerified:1,volumeCheckerName:e.checker,volumeCheckerId:e.checkerId,controlCheckerId:e.controlId,controlCheckerName:e.control,routes:e.routeCodes,collectors:e.garbageCollectors};console.log(t);const a=yield Object(p["e"])(t);a&&(e.$swal({group:"alert",type:"success",text:"Landfill Trip Created",duration:5e3}),e.$router.push({path:"/Encoder"}))}catch(t){}}))()},getTruckType(){this.vehicles.map(e=>{e.plateNo==this.plate&&(console.log(e),this.trucktype=e.vehicleType.code,this.body=e.vehicleNo,this.totalCapacity=e.volumeCapacity)})},add(e){this.inputs.length<=4&&this.inputs.push({name:""})},remove(e){this.inputs.splice(e,1)}}},f=h,b=(a("60bc"),a("bd73"),a("ffda"),a("2877")),v=Object(b["a"])(f,r,o,!1,null,"5c517624",null);t["default"]=v.exports},bd73:function(e,t,a){"use strict";var r=a("17ab"),o=a.n(r);o.a},ffda:function(e,t,a){"use strict";var r=a("a02e"),o=a.n(r);o.a}}]);
//# sourceMappingURL=chunk-da99efbe.ee9e143c.js.map