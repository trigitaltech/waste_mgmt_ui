(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c9e2ff"],{"17d8":function(e,t,a){"use strict";var r=a("e45f"),i=a.n(r);i.a},bffd:function(e,t,a){"use strict";var r=a("d4c1"),i=a.n(r);i.a},d4c1:function(e,t,a){},d751:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{items:e.items}}),a("div",{staticClass:"animated"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Create Servicerequest Truck"}},[a("div",{staticClass:"mt-1"},[a("div",{staticClass:"mx-xl-5"},[a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("CONTROL NO")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.controlno,expression:"controlno"}],staticClass:"form-control",attrs:{placeholder:"Enter Contol No",name:"body"},domProps:{value:e.controlno},on:{input:function(t){t.target.composing||(e.controlno=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Trip Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tripDate,expression:"tripDate"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.tripDate},on:{input:function(t){t.target.composing||(e.tripDate=t.target.value)}}})])],1),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Dumping Location")]),a("multiselect",{attrs:{multiple:!0,options:e.dumpings},on:{input:e.getdump},model:{value:e.dumpinglocation,callback:function(t){e.dumpinglocation=t},expression:"dumpinglocation"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Hauler")]),a("multiselect",{attrs:{multiple:!0,options:e.haulers},on:{input:e.vehiclehauler},model:{value:e.hauler,callback:function(t){e.hauler=t},expression:"hauler"}})],1)],1),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Plate No")]),a("multiselect",{attrs:{multiple:!0,options:e.plates},on:{input:e.platedetails},model:{value:e.plateno,callback:function(t){e.plateno=t},expression:"plateno"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Truck Type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.trucktype,expression:"trucktype"}],staticClass:"form-control",attrs:{name:"trucktype",placeholder:"Enter Trucktype",readonly:""},domProps:{value:e.trucktype},on:{input:function(t){t.target.composing||(e.trucktype=t.target.value)}}})])],1),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Vehicle No")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleno,expression:"vehicleno"}],staticClass:"form-control",attrs:{name:"body",readonly:"",placeholder:"Enter Vehicle No"},domProps:{value:e.vehicleno},on:{input:function(t){t.target.composing||(e.vehicleno=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Volume Capacity")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.volumecapacity,expression:"volumecapacity"}],staticClass:"form-control",attrs:{name:"trucktype",readonly:"",placeholder:"Enter Volume Capacity"},domProps:{value:e.volumecapacity},on:{input:function(t){t.target.composing||(e.volumecapacity=t.target.value)}}})])],1),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Driver")]),a("multiselect",{attrs:{multiple:!0,options:e.drivers},on:{input:e.getdriverid},model:{value:e.driver,callback:function(t){e.driver=t},expression:"driver"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Helper")]),a("multiselect",{attrs:{multiple:!0,options:e.helpers},on:{input:e.gethelperid},model:{value:e.helper,callback:function(t){e.helper=t},expression:"helper"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("From Dumping Point")]),a("multiselect",{attrs:{multiple:!0,options:e.fromdumpings},model:{value:e.fromdumpingpoint,callback:function(t){e.fromdumpingpoint=t},expression:"fromdumpingpoint"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("To Dumping Point")]),a("multiselect",{attrs:{multiple:!0,options:e.todumpings},model:{value:e.todumpingpoint,callback:function(t){e.todumpingpoint=t},expression:"todumpingpoint"}})],1)],1),a("br"),a("button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{type:"submit"}},[e._v("Submit")])],1)])])])])],1)],1)},i=[],n=(a("96cf"),a("1da1")),s=a("ade3"),o=a("2b0e"),c=a("c2a4"),u=a("444f"),l=a("2579"),p=(a("323e"),a("fea2")),d=a("859b"),m=a("8e5f"),h=a.n(m),v=a("c1df"),f=a.n(v),g=a("6bf2");o["default"].component("multiselect",h.a);var b={page:{title:"Create Servicerequest Truck",meta:[{name:"description",content:c.description}]},data:function(){var e;return e={inputs:[{name:""}],items:[{text:"Servicerequests",href:"/"},{text:"Servicerequest Trucks",href:"#/Servicerequest/Truck"},{text:"Create SR Truck",active:!0}],areadata:[],areaarray:"",routedate:[],haulerarray:[],routearray:[],emp:[],dumpid:"",dumpinglocation:"",controlno:"",tripDate:"",plateno:"",hauler:"",vehicleno:"",fromdumpingpoint:"",todumpingpoint:"",driver:"",helper:"",volumecapacity:"",trucktype:"",body:"",area:"",route:""},Object(s["a"])(e,"driver",""),Object(s["a"])(e,"contractor",""),Object(s["a"])(e,"collector",null),Object(s["a"])(e,"lgu",""),Object(s["a"])(e,"vehicleno",""),Object(s["a"])(e,"plates",[]),Object(s["a"])(e,"body",""),Object(s["a"])(e,"vehicledata",[]),Object(s["a"])(e,"driverid",""),Object(s["a"])(e,"startTime",""),Object(s["a"])(e,"drivers",[]),Object(s["a"])(e,"helpers",[]),Object(s["a"])(e,"vehicles",[]),Object(s["a"])(e,"servingAreas",[]),Object(s["a"])(e,"route",""),Object(s["a"])(e,"driver",""),Object(s["a"])(e,"helperid",""),Object(s["a"])(e,"helper",null),Object(s["a"])(e,"servingRoutes",[]),Object(s["a"])(e,"haulerid",""),Object(s["a"])(e,"driverList",[]),Object(s["a"])(e,"hauler",""),Object(s["a"])(e,"haulerList",[]),Object(s["a"])(e,"contractorList",[]),Object(s["a"])(e,"vehicledata",[]),Object(s["a"])(e,"paleroList",[]),Object(s["a"])(e,"garbage",null),Object(s["a"])(e,"dumpings",[]),Object(s["a"])(e,"haulers",[]),Object(s["a"])(e,"dumpingdata",[]),Object(s["a"])(e,"plates",[]),Object(s["a"])(e,"haulerdata",[]),Object(s["a"])(e,"fromdumpings",[]),Object(s["a"])(e,"todumpings",[]),Object(s["a"])(e,"lgu",null),Object(s["a"])(e,"dumpingid",""),Object(s["a"])(e,"haulerid",""),Object(s["a"])(e,"dispatcherid",""),e},components:{Layout:u["a"],PageHeader:l["a"],VueTimepicker:p["a"],Multiselect:h.a,datetime:d["Datetime"]},computed:{getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.tripDate=new Date,this.startTime=f()(new Date).format("DD-MM-YYYY hh:mm A"),console.log(this.tripDate+" "+this.startTime),this.getdumping(),this.gethaulers(),this.employeedata(),this.getLgu()},methods:{getLgu:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=JSON.parse(localStorage.getItem("auth.currentUser")),this.dispatcherid=t.user.id,console.log(this.loginDetails);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getdump:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.dumpingdata.length)){e.next=12;break}if(this.dumpinglocation[0]!==this.dumpingdata[t].dumpingAreaName){e.next=9;break}return this.dumpid=this.dumpingdata[t].id,e.next=6,Object(g["rc"])(this.dumpid);case 6:a=e.sent,r=a.data.response.result.dumpingPoint,r.map((function(e){i.fromdumpings.push(e.dumpingPointName),i.todumpings.push(e.dumpingPointName)}));case 9:t++,e.next=1;break;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),platedetails:function(){for(var e=0;e<this.vehicledata.length;e++)this.plateno[0]===this.vehicledata[e].plateNo&&(this.vehicleno=this.vehicledata[e].vehicleNo,this.trucktype=this.vehicledata[e].vehicleType.truckType,this.volumecapacity=this.vehicledata[e].volumeCapacity)},gethaulers:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g["Bc"])();case 3:t=e.sent,this.haulerdata=t.data.response.HaulerMaster,this.haulerdata.map((function(e){a.haulers.push(e.haulerName)})),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),getdumping:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g["Mb"])();case 3:t=e.sent,this.dumpingdata=t.data.response.dumpingLocation,this.dumpingdata.map((function(e){a.dumpings.push(e.dumpingAreaName)})),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),vehiclehauler:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.haulerdata.length)){e.next=12;break}if(this.hauler[0]!==this.haulerdata[t].haulerName){e.next=9;break}return this.haulerid=this.haulerdata[t].id,e.next=6,Object(g["qc"])(this.haulerid);case 6:a=e.sent,this.vehicledata=a.data.response.result,this.vehicledata.map((function(e){r.plates.push(e.plateNo)}));case 9:t++,e.next=1;break;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getroutes:function(){var e=this;this.routedata.map((function(t){e.route===t.routeName&&e.routearray.push(t)}))},getareas:function(){var e=this;this.areadata.map((function(t){e.area===t.areaName&&(e.areaarray=t)}))},employeedata:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g["zc"])();case 3:t=e.sent,this.emp=t.data.response.HaulerEmployees,console.log(this.emp),this.emp.map((function(e){"DRIVER"==e.type&&a.drivers.push(e.userName),"HELPER"==e.type&&a.helpers.push(e.userName)})),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),areas:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g["a"])();case 3:t=e.sent,this.areadata=t.data.response.areaMaster,this.areadata.map((function(e){null!=e.areaName&&a.servingAreas.push(e.areaName)})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:console.log(this.servingAreas);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),routes:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g["Oc"])();case 3:t=e.sent,console.log(t),this.routedata=t.data.response.RouteMaster,this.routedata.map((function(e){null!=e.routeName&&a.servingRoutes.push(e.routeName)})),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),getRouteObject:function(e){this.routedata.map((function(t){if(e==t.routeName)return console.log(t),t}))},getdriverid:function(){var e=this;this.emp.map((function(t){e.driver[0]===t.userName&&(e.driverid=t.id)}))},gethelperid:function(){var e=this;this.emp.map((function(t){e.helper[0]===t.userName&&(e.helperid=t.id)}))},create:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={controlNo:this.controlno,tripDate:this.tripDate,dumpingareaId:this.dumpid,plateNo:this.plateno[0],bodyNo:this.vehicleno[0],truckType:this.trucktype,driverId:this.driverid,driverName:this.driver[0],helperId:this.helperid,helperName:this.helper[0],fromPoint:this.fromdumpingpoint[0],toPoint:this.todumpingpoint[0],volumeCapacity:this.volumecapacity,haulerId:this.haulerid,timeInAM:"",timeOutAM:"",timeInPM:"",timeOutPM:"",aMTrip:"",pMTrip:"",totalTrips:"",driverTimeIn:"",totalDistance:"",dispatchedBy:this.dispatcherid},e.next=4,Object(g["k"])(t);case 4:a=e.sent,a&&(this.$swal({group:"alert",type:"success",text:"Service Request Truck Created",duration:5e3}),this.$router.push({path:"/Servicerequest/Truck"})),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),getTruckType:function(){var e=this;this.vehicles.map((function(t){t.plateNo==e.plate&&(e.trucktype=t.vehicleType.code,e.vehicleno=t.vehicleNo)}))},add:function(e){this.inputs.length<=4&&this.inputs.push({name:""})},remove:function(e){this.inputs.splice(e,1)}}},x=b,y=(a("60bc"),a("17d8"),a("bffd"),a("2877")),k=Object(y["a"])(x,r,i,!1,null,"1332ad83",null);t["default"]=k.exports},e45f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-44c9e2ff-legacy.e60eec2b.js.map