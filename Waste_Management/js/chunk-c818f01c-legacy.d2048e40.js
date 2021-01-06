(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c818f01c"],{"383d":function(e,t,a){"use strict";var r=a("4eeb"),s=a.n(r);s.a},"39f6":function(e,t,a){},"4eeb":function(e,t,a){},9390:function(e,t,a){"use strict";var r=a("39f6"),s=a.n(r);s.a},9800:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("div",{staticClass:"animated"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Create Outgoing Trip"}},[a("div",{staticClass:"mt-1"},[a("div",{staticClass:"mx-xl-5"},[a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("LGU Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.loginDetails.name,expression:"loginDetails.name"}],staticClass:"form-control",attrs:{readonly:""},domProps:{value:e.loginDetails.name},on:{input:function(t){t.target.composing||e.$set(e.loginDetails,"name",t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("CONTROL NO")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.controlno,expression:"controlno"}],staticClass:"form-control",attrs:{name:"body"},domProps:{value:e.controlno},on:{input:function(t){t.target.composing||(e.controlno=t.target.value)}}})])],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Staging Area")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.stagingAreaNames},on:{change:e.getDumpingLocation},model:{value:e.staging,callback:function(t){e.staging="string"===typeof t?t.trim():t},expression:"staging"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Dumping Location")]),a("b-form-select",{attrs:{options:e.dumpingLocations},model:{value:e.dumping,callback:function(t){e.dumping=t},expression:"dumping"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Trip Date")]),a("datetime",{attrs:{format:{year:"numeric",month:"numeric",day:"numeric"},type:"date",placeholder:"SELECT Date"},model:{value:e.tripDate,callback:function(t){e.tripDate=t},expression:"tripDate"}})],1),a("b-col",{staticClass:"ml-3"},[a("label",{staticClass:"grey-text font-weight-dark mr-2",attrs:{for:"defaultFormCardtextEx"}},[e._v("Loading Time")]),a("datetime",{attrs:{format:{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit"},type:"datetime",placeholder:"SELECT Time"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Volume Checker")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.checkerListNames},model:{value:e.checker,callback:function(t){e.checker=t},expression:"checker"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Control Checker")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.controlListNames},model:{value:e.control,callback:function(t){e.control="string"===typeof t?t.trim():t},expression:"control"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Hauler")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.haulerListNames},on:{change:e.getVehiclesDriversHelpers},model:{value:e.hauler,callback:function(t){e.hauler=t},expression:"hauler"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Plate No")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.plates},on:{change:e.getTruckType},model:{value:e.plate,callback:function(t){e.plate=t},expression:"plate"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Body")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.body,expression:"body"}],staticClass:"form-control",attrs:{name:"body"},domProps:{value:e.body},on:{input:function(t){t.target.composing||(e.body=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Truck Type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.trucktype,expression:"trucktype"}],staticClass:"form-control",attrs:{name:"trucktype",readonly:""},domProps:{value:e.trucktype},on:{input:function(t){t.target.composing||(e.trucktype=t.target.value)}}})])],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Driver Name")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.driverNames},model:{value:e.driver,callback:function(t){e.driver="string"===typeof t?t.trim():t},expression:"driver"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Helper")]),a("b-form-select",{staticClass:"form-control",attrs:{options:e.helperNames},model:{value:e.helper,callback:function(t){e.helper="string"===typeof t?t.trim():t},expression:"helper"}})],1)],1),a("button",{staticClass:"btn btn-custome float-right btn-secondary mt-3 mr-2"},[e._v("Submit")])],1)])])])])],1)])},s=[],n=(a("7f7f"),a("96cf"),a("1da1")),i=a("ade3"),o=a("2b0e"),c=a("c2a4"),l=a("444f"),u=a("2579"),m=(a("323e"),a("fea2")),p=a("859b"),d=a("8e5f"),g=a.n(d),h=a("6bf2");o["default"].component("multiselect",g.a);var f={page:{title:"Trip Incoming Details",meta:[{name:"description",content:c.description}]},data:function(){var e;return e={controlno:"",area:"",route:"",driver:"",contractor:"",collector:null,lgu:"",plate:"",plates:[],body:"",tripDate:"",trucktype:"",startTime:"",drivers:[],driverNames:[],helperNames:[],helpers:[],vehicles:[],servingAreas:[]},Object(i["a"])(e,"route",""),Object(i["a"])(e,"driver",""),Object(i["a"])(e,"helper",null),Object(i["a"])(e,"servingRoutes",[]),Object(i["a"])(e,"driverList",[]),Object(i["a"])(e,"contractorList",[]),Object(i["a"])(e,"garbage",null),Object(i["a"])(e,"lgu",null),Object(i["a"])(e,"loginDetails",{name:""}),Object(i["a"])(e,"loginlguid",null),Object(i["a"])(e,"staging",""),Object(i["a"])(e,"stagingAreas",[]),Object(i["a"])(e,"stagingAreaNames",[]),Object(i["a"])(e,"dumping",""),Object(i["a"])(e,"dumpings",[]),Object(i["a"])(e,"dumpingLocations",[]),Object(i["a"])(e,"lguEmployees",[]),Object(i["a"])(e,"checker",""),Object(i["a"])(e,"checkerList",[]),Object(i["a"])(e,"checkerListNames",[]),Object(i["a"])(e,"control",""),Object(i["a"])(e,"controlList",[]),Object(i["a"])(e,"controlListNames",[]),Object(i["a"])(e,"hauler",""),Object(i["a"])(e,"haulerList",[]),Object(i["a"])(e,"haulerListNames",[]),Object(i["a"])(e,"haulerId",""),Object(i["a"])(e,"driverId",""),Object(i["a"])(e,"helperId",""),Object(i["a"])(e,"stagingAreaId",""),Object(i["a"])(e,"volumeCheckerId",""),Object(i["a"])(e,"contractorDispatcherId",""),Object(i["a"])(e,"controlCheckerId",""),Object(i["a"])(e,"dumpingLocationId",""),Object(i["a"])(e,"contractorDispatcherName",""),Object(i["a"])(e,"contractorDispatcherId",""),e},components:{Layout:l["a"],PageHeader:u["a"],VueTimepicker:m["a"],Multiselect:g.a,datetime:p["Datetime"]},mounted:function(){this.getLgu(),this.getStagingArea(),this.getLguEmployee(),this.getHaulers()},methods:{getLgu:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("auth.currentUser")),this.loginlguid=t.lguemployee.lguId,this.contractorDispatcherId=t.lguemployee.id,this.contractorDispatcherName=t.lguemployee.userName,e.next=6,Object(h["lc"])(this.loginlguid);case 6:a=e.sent,this.loginDetails.name=a.data.response.result.lguName;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getStagingArea:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h["Tc"])();case 3:t=e.sent,this.stagingAreas=t.data.response.stagingArea,console.log(this.stagingAreas),this.stagingAreas.map((function(e){console.log(a.loginlguid+" "+e.lguName.id),a.loginlguid==e.lguName.id&&a.stagingAreaNames.push(e.stagingAreaName)})),console.log(this.loginDetails.name),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}(),getLguEmployee:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h["Ec"])();case 3:t=e.sent,this.lguEmployees=t.data.response.result,this.lguEmployees.map((function(e){console.log(e.lguId+" "+a.loginlguid),console.log(e.type),"VOLUME_CHECKER"==e.type&&e.lguId==a.loginlguid&&(a.checkerList.push(e),a.checkerListNames.push(e.userName)),"CONTROL_CHECKER"==e.type&&e.lguId==a.loginlguid&&(a.controlList.push(e),a.controlListNames.push(e.userName))})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),getHaulers:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h["Bc"])();case 3:t=e.sent,this.haulerList=t.data.response.HaulerMaster,this.haulerList.map((function(e){a.haulerListNames.push(e.userName)})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),getVehiclesDriversHelpers:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.haulerList.map((function(e){e.userName==s.hauler&&(s.haulerId=e.id)})),e.next=4,Object(h["pc"])(this.haulerId);case 4:return t=e.sent,this.vehicles=t.data.response.result,this.vehicles.map((function(e){s.plates.push(e.plateNo)})),e.next=9,Object(h["zc"])();case 9:a=e.sent,r=a.data.response.HaulerEmployees,r.map((function(e){"DRIVER"==e.type&&e.haulerId==s.haulerId&&(s.drivers.push(e),s.driverNames.push(e.userName)),"HELPER"==e.type&&e.haulerId==s.haulerId&&(s.helpers.push(e),s.helperNames.push(e.userName))})),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}(),getTruckType:function(){var e=this;this.vehicles.map((function(t){e.plate==t.plateNo&&(e.trucktype=t.vehicleType.truckType,e.body=t.vehicleNo)}))},getDumpingLocation:function(){var e=this;this.stagingAreas.map((function(t){t.stagingAreaName==e.staging&&(e.dumpings.push(t),e.dumpingLocations.push(t.dumpingArea.dumpingAreaName),e.dumping=t.dumpingArea.dumpingAreaName)}))},create:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.dumpings.map((function(e){r.dumping==e.dumpingArea.dumpingAreaName&&(r.dumpingLocationId=e.id)})),this.drivers.map((function(e){r.driver==e.userName&&(r.driverId=e.id)})),this.helpers.map((function(e){r.helper==e.userName&&(r.helperId=e.id)})),this.stagingAreas.map((function(e){r.staging==e.stagingAreaName&&(r.stagingAreaId=e.id)})),this.checkerList.map((function(e){r.checker==e.userName&&(r.volumeCheckerId=e.id)})),this.controlList.map((function(e){r.control==e.userName&&(r.controlCheckerId=e.id)})),t={controlNo:this.controlno,tripDate:this.tripDate,bodyNo:this.body,plateNo:this.plate,typeOfUnit:this.trucktype,lguId:this.loginlguid,haulerId:this.haulerId,loadingStartTime:this.startTime,driverId:this.driverId,driverName:this.driver,helperName:this.helper,helperId:this.helperId,stagingAreaName:this.staging,stagingAreaId:this.stagingAreaId,volumeCheckerName:this.checker,volumeCheckerId:this.volumeCheckerId,contractorDispatcherName:this.contractorDispatcherName,contractorDispatcherId:this.contractorDispatcherId,contractorDispatcherVerified:1,controlCheckerName:this.control,controlCheckerId:this.controlCheckerId,dumpingLocationId:this.dumpingLocationId,dumpingLocationName:this.dumping},e.next=10,Object(h["g"])(t);case 10:a=e.sent,a&&(this.$swal({group:"alert",type:"success",text:"Trip Created Successfully",duration:5e3}),this.$router.push({path:"/Encoder"})),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}()}},b=f,v=(a("60bc"),a("383d"),a("9390"),a("2877")),y=Object(v["a"])(b,r,s,!1,null,"1308017b",null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-c818f01c-legacy.d2048e40.js.map