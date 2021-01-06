(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-869fcd58"],{"0a42":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{items:e.items}}),a("div",{staticClass:"animated fadeIn"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Edit Vehicle"}},[a("div",{staticClass:"mt-3"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[a("b-row",{staticClass:"mb-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("\n                   Vehicle No")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleno,expression:"vehicleno"}],staticClass:"form-control",attrs:{id:"defaultFormCardNameEx",type:"text"},domProps:{value:e.vehicleno},on:{input:function(t){t.target.composing||(e.vehicleno=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Vehicle Type")]),a("b-form-select",{staticClass:"form-control",attrs:{placeholder:"Select Vehicle Type",label:"value",options:e.vehicleTypesNames},model:{value:e.vehicletype,callback:function(t){e.vehicletype="string"===typeof t?t.trim():t},expression:"vehicletype"}})],1)],1),a("b-row",{staticClass:"mb-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Code")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Plate NO")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.plateno,expression:"plateno"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text"},domProps:{value:e.plateno},on:{input:function(t){t.target.composing||(e.plateno=t.target.value)}}})])],1),a("b-row",{staticClass:"mb-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Total Kms Served")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.totalkmsserved,expression:"totalkmsserved"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text"},domProps:{value:e.totalkmsserved},on:{input:function(t){t.target.composing||(e.totalkmsserved=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Total Hours Served")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.totalhoursserved,expression:"totalhoursserved"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text"},domProps:{value:e.totalhoursserved},on:{input:function(t){t.target.composing||(e.totalhoursserved=t.target.value)}}})])],1),a("b-row",{staticClass:"mb-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("WarrantyStatus")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.warrantystatus,expression:"warrantystatus"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text"},domProps:{value:e.warrantystatus},on:{input:function(t){t.target.composing||(e.warrantystatus=t.target.value)}}})])],1),a("b-row",{staticClass:"mb-3"},[a("b-col",{attrs:{md:"6"}},[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Hauler")]),a("multiselect",{attrs:{placeholder:"Select Hauler",options:e.haulernames},on:{input:e.gethauler},model:{value:e.haulername,callback:function(t){e.haulername=t},expression:"haulername"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Volume Capacity")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.volumecapacity,expression:"volumecapacity"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",placeholder:"Enter Volume Capacity",type:"text"},domProps:{value:e.volumecapacity},on:{input:function(t){t.target.composing||(e.volumecapacity=t.target.value)}}})])],1),a("button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{type:"submit"}},[e._v("Create")])],1)])])],1)],1)},s=[],o=(a("96cf"),a("1da1")),i=a("ade3"),n=a("c2a4"),c=a("444f"),u=a("2579"),l=a("8e5f"),d=a.n(l),m=a("b410"),p=a("039f"),h=a("6bf2"),v={page:{title:"Edit Vehicle",meta:[{name:"description",content:n.description}]},components:{Layout:c["a"],PageHeader:u["a"],Multiselect:d.a,ValidationProvider:p["ValidationProvider"],ValidationObserver:p["ValidationObserver"],ModelSelect:m["ModelSelect"]},data:function(){var e;return e={haulers:[],haulerdata:[],haulernames:[],vehicleno:this.$route.params.vehicleNo,vehicletype:this.$route.params.vehicleType.code,plateno:this.$route.params.plateNo,equipmentid:this.$route.params.equipmentId,ownername:this.$route.params.ownerName,ownerid:this.$route.params.ownerId,description:this.$route.params.description,servingarea:this.$route.params.servingArea,servingroute:this.$route.params.servingRoute,manufacturedate:this.$route.params.manufactureDate,totalkmsserved:this.$route.params.totalKmServed,totalhoursserved:this.$route.params.totalHourServed,createdby:this.$route.params.createdBy,createddate:this.$route.params.createdDate,warrantystatus:this.$route.params.warrantyStatus,code:this.$route.params.code,modifydate:new Date,modifyby:"",option:[{value:null,text:"Please select an option"},{value:"Areastaging",text:"Area Staging"},{value:"Centralstaging",text:"Central Staging"}],item:[]},Object(i["a"])(e,"vehicletype",[]),Object(i["a"])(e,"volumecapacity",this.$route.params.volumeCapacity),Object(i["a"])(e,"items",[{text:"Haulers",href:"/"},{text:"HaulerVehicles",href:"#/Hauler/Vehicle"},{text:"Edit Vehicle",active:!0}]),Object(i["a"])(e,"haulername",""),Object(i["a"])(e,"owners",[]),Object(i["a"])(e,"vehicleTypesNames",[]),Object(i["a"])(e,"emp",[]),Object(i["a"])(e,"routes",[]),e},computed:{getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.createdby=this.getUserDetails.user.username,this.modifyby=this.getUserDetails.user.username,console.log(this.$route.params),this.areadata(),this.employeedata(),this.routedata(),this.getVehicleTypes(),this.getemployees()},methods:{getemployees:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h["Bc"])();case 3:t=e.sent,this.haulerdata=t.data.response.HaulerMaster,this.haulerdata.map((function(e){a.haulernames.push(e.haulerName)})),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),gethauler:function(){var e=this;this.haulerdata.map((function(t){e.haulername===t.haulerName&&(e.haulers=t)}))},getid:function(){var e=this;console.log("haiiiiii"),this.emp.map((function(t){e.ownername===t.userName&&(e.ownerid=t.id)}))},routedata:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h["Oc"])();case 3:t=e.sent,a=t.data.response.RouteMaster,a.map((function(e){r.routes.push(e.routeName),console.log("user",e)})),console.log("users",this.item),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),areadata:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h["a"])();case 3:t=e.sent,a=t.data.response.areaMaster,a.map((function(e){r.item.push(e.areaName),console.log("user",e)})),console.log("users",this.item),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),getVehicleTypes:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["Yc"])();case 2:t=e.sent,this.vehicleTypes=t.data.response.VehiclesUpdated,this.vehicleTypes.map((function(e){a.vehicleTypesNames.push(e.truckType)}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),employeedata:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h["cc"])();case 3:t=e.sent,this.emp=t.data.response.result,this.emp.map((function(e){a.owners.push(e.userName),console.log("user",e)})),console.log("users",this.item),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),create:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],this.vehicleTypes.map((function(e){e.truckType==s.vehicletype&&t.push(e)})),e.prev=2,a={vehicleType:{id:t[0].id,code:t[0].code,createdBy:t[0].createdBy,modifiedBy:t[0].modifiedBy,createdDate:t[0].createdDate,modifiedDate:t[0].modifiedDate,isDeleted:null,truckType:t[0].truckType},id:this.$route.params.id,volumeCapacity:this.volumecapacity,vehicleNo:this.vehicleno,plateNo:this.plateno,code:this.code,ownerName:this.ownername,ownerId:this.ownerid,equipmentId:this.equipmentid,servingArea:this.servingarea,servingRoute:this.servingroute,manufactureDate:this.manufacturedate,warrantyStatus:this.warrantystatus,totalKmServed:this.totalkmsserved,totalHourServed:this.totalhoursserved,description:this.description,hauler:this.haulers,isDeleted:!1,status:22,createdDate:this.createddate,createdBy:this.createdby,modifiedDate:this.modifydate,modifiedBy:this.modifyby},e.next=6,Object(h["ac"])(a);case 6:r=e.sent,r&&(this.$swal({group:"alert",type:"success",text:"You Edited Vehicle Successfully",duration:5e3}),this.$router.push({path:"/Hauler/Vehicle"})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),this.$toasted.error(e.t0.message.errors[0].developerMessage,{duration:7e3});case 13:case"end":return e.stop()}}),e,this,[[2,10]])})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},f=v,g=(a("a2ee"),a("5b9e"),a("2877")),y=Object(g["a"])(f,r,s,!1,null,"0297bcf0",null);t["default"]=y.exports},"0d3c":function(e,t,a){},"5b9e":function(e,t,a){"use strict";var r=a("64e2"),s=a.n(r);s.a},"64e2":function(e,t,a){},a2ee:function(e,t,a){"use strict";var r=a("0d3c"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-869fcd58-legacy.832b18b1.js.map