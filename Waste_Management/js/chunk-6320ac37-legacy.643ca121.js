(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6320ac37"],{"109f":function(e,t,a){"use strict";var r=a("96f7"),s=a.n(r);s.a},3343:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{items:e.items}}),a("div",{staticClass:"animated fadeIn"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"View Equipment"}},[a("div",{staticClass:"mt-3"},[a("form",[a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("\n                   Equipment No")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.equipmentno,expression:"equipmentno"}],staticClass:"form-control",attrs:{id:"defaultFormCardNameEx",disabled:"",type:"text"},domProps:{value:e.equipmentno},on:{input:function(t){t.target.composing||(e.equipmentno=t.target.value)}}}),a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Equipment Type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.equipmenttype,expression:"equipmenttype"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",disabled:"",type:"text"},domProps:{value:e.equipmenttype},on:{input:function(t){t.target.composing||(e.equipmenttype=t.target.value)}}}),a("br")]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Owner Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ownername,expression:"ownername"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",disabled:"",type:"text"},domProps:{value:e.ownername},on:{input:function(t){t.target.composing||(e.ownername=t.target.value)}}}),a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Equipment Id")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.equipmentid,expression:"equipmentid"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",disabled:"",type:"text"},domProps:{value:e.equipmentid},on:{input:function(t){t.target.composing||(e.equipmentid=t.target.value)}}})]),a("br")],1),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Serving Area")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.servingarea,expression:"servingarea"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",disabled:"",type:"text"},domProps:{value:e.servingarea},on:{input:function(t){t.target.composing||(e.servingarea=t.target.value)}}}),a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Manufacture Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.manufacturedate,expression:"manufacturedate"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",disabled:"",type:"text"},domProps:{value:e.manufacturedate},on:{input:function(t){t.target.composing||(e.manufacturedate=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Total Kms Served")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.totalkmsserved,expression:"totalkmsserved"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",disabled:"",type:"text"},domProps:{value:e.totalkmsserved},on:{input:function(t){t.target.composing||(e.totalkmsserved=t.target.value)}}}),a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Total Hours Served")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.totalhoursserved,expression:"totalhoursserved"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",disabled:"",type:"text"},domProps:{value:e.totalhoursserved},on:{input:function(t){t.target.composing||(e.totalhoursserved=t.target.value)}}})])],1),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",disabled:"",type:"text"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})])],1),a("br")],1)])])],1)],1)},s=[],i=(a("96cf"),a("1da1")),n=a("c2a4"),o=a("444f"),u=a("2579"),d=a("8e5f"),m=a.n(d),l=a("b410"),c=a("039f"),p=a("6bf2"),f={page:{title:"Create Equipment",meta:[{name:"description",content:n.description}]},components:{Layout:o["a"],PageHeader:u["a"],Multiselect:m.a,ValidationProvider:c["ValidationProvider"],ValidationObserver:c["ValidationObserver"],ModelSelect:l["ModelSelect"]},data:function(){return{equipmentno:this.$route.params.equipmentNo,equipmenttype:this.$route.params.equipmentType,ownername:this.$route.params.ownerName,equipmentid:this.$route.params.equipmentId,ownerid:this.$route.params.ownerId,description:this.$route.params.description,servingarea:this.$route.params.servingArea,manufacturedate:this.$route.params.manufactureDate,totalkmsserved:this.$route.params.totalKmServed,totalhoursserved:this.$route.params.totalHourServed,createdby:this.$route.params.createdBy,createddate:this.$route.params.createdDate,modifydate:new Date,modifyby:"",item:[],option:[{value:null,text:"Please select an option"},{value:"Areastaging",text:"Area Staging"},{value:"Centralstaging",text:"Central Staging"}],item1:[{value:"Truck",text:"Truck"},{value:"Machine",text:"Machine"}],items:[{text:"Haulers",href:"/"},{text:"HaulerEquipment",href:"#/Hauler/Equipment"},{text:"View Equipment",active:!0}],owners:[],emp:[]}},computed:{getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.createdby=this.getUserDetails.user.username,this.modifyby=this.getUserDetails.user.username,console.log(this.$route.params)},methods:{getid:function(){var e=this;console.log("haiiiiii"),this.emp.map((function(t){e.ownername===t.userName&&(e.ownerid=t.id)}))},areadata:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p["a"])();case 3:t=e.sent,a=t.data.response.areaMaster,a.map((function(e){r.item.push(e.areaName),console.log("user",e)})),console.log("users",this.item),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),employeedata:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p["cc"])();case 3:t=e.sent,this.emp=t.data.response.result,this.emp.map((function(e){a.owners.push(e.userName),console.log("user",e)})),console.log("users",this.item),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),create:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={id:this.$route.params.id,equipmentType:this.equipmenttype,equipmentNo:this.equipmentno,ownerName:String(this.ownername),ownerId:this.ownerid,equipmentId:this.equipmentid,servingArea:this.servingarea,manufactureDate:this.manufacturedate,warrantyStatus:"NOT EXPIRED",totalKmServed:this.totalkmsserved,totalHourServed:this.totalhoursserved,description:this.description,isDeleted:!1,status:22,createdDate:this.createddate,createdBy:this.createdby,modifiedDate:this.modifydate,modifiedBy:this.modifyby},e.next=4,Object(p["o"])(t);case 4:a=e.sent,a&&(this.$swal({group:"alert",type:"success",text:"You Edited Equipment Successfully",duration:5e3}),this.$router.push({path:"/Equipment"})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$toasted.error(e.t0.message.error,{duration:7e3});case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},v=f,h=(a("e266"),a("109f"),a("2877")),g=Object(h["a"])(v,r,s,!1,null,"b0d123fa",null);t["default"]=g.exports},"8b67":function(e,t,a){},"96f7":function(e,t,a){},e266:function(e,t,a){"use strict";var r=a("8b67"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-6320ac37-legacy.643ca121.js.map