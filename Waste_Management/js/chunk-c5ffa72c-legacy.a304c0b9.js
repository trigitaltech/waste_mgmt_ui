(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5ffa72c"],{7367:function(t,e,a){},7463:function(t,e,a){},"7f87":function(t,e,a){"use strict";var r=a("7463"),s=a.n(r);s.a},be1d:function(t,e,a){"use strict";var r=a("7367"),s=a.n(r);s.a},f10d:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{items:t.items}}),a("div",{staticClass:"animated fadeIn"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Create Dumping"}},[a("div",{staticClass:"mt-3"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.create(e)}}},[a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[t._v("\n                   Dumping Area Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dumpname,expression:"dumpname"}],staticClass:"form-control",attrs:{type:"text",oninvalid:"this.setCustomValidity('Dumping Area Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Dumping area name",required:""},domProps:{value:t.dumpname},on:{input:function(e){e.target.composing||(t.dumpname=e.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[t._v("Dumping Type")]),a("b-form-select",{staticClass:"form-control",attrs:{options:t.option,oninvalid:"this.setCustomValidity('Dumping Type is required ')",oninput:"setCustomValidity('')",required:""},model:{value:t.dumptype,callback:function(e){t.dumptype=e},expression:"dumptype"}})],1)],1),a("b-row",{staticClass:"mb-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Baranggay")]),a("multiselect",{attrs:{required:"",placeholder:"Select Baranggay",options:t.servingAreas},on:{input:t.getdistricts},model:{value:t.baranggay,callback:function(e){t.baranggay=e},expression:"baranggay"}})],1),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])],1),a("b-row",{staticClass:"mb-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",oninvalid:"this.setCustomValidity('Address is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Zip")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.zip,expression:"zip"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter zip"},domProps:{value:t.zip},on:{input:function(e){e.target.composing||(t.zip=e.target.value)}}})])],1),a("b-row",{staticClass:"mb-3"},[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("District")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.district,expression:"district"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter district",disabled:""},domProps:{value:t.district},on:{input:function(e){e.target.composing||(t.district=e.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("State")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter state",disabled:""},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Country")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter country",disabled:""},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}})])],1),a("b-row",{staticClass:"mb-3"}),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Working Hours")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.workinghours,expression:"workinghours"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",oninvalid:"this.setCustomValidity('Working Hours is required ')",oninput:"setCustomValidity('')",placeholder:"Enter working hours",required:""},domProps:{value:t.workinghours},on:{input:function(e){e.target.composing||(t.workinghours=e.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("Holiday Message")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter holidaymessage"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])],1),a("br"),t._l(t.inputs,(function(e,r){return a("b-row",{key:r},[a("b-col",{attrs:{md:"6"}},[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[t._v("\n                    Dumping Point Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dumpingPointName,expression:"input.dumpingPointName"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter Dumping Point Name"},domProps:{value:e.dumpingPointName},on:{input:function(a){a.target.composing||t.$set(e,"dumpingPointName",a.target.value)}}})]),a("b-col",[a("span",[a("i",{directives:[{name:"show",rawName:"v-show",value:r||!r&&t.inputs.length>1,expression:"k || (!k && inputs.length > 1)"}],staticClass:"fas fa-minus-circle",on:{click:function(e){return t.remove(r)}}},[t._v("Remove")]),a("i",{directives:[{name:"show",rawName:"v-show",value:r==t.inputs.length-1,expression:"k == inputs.length - 1"}],staticClass:"fas fa-plus-circle",on:{click:function(e){return t.add(r)}}},[t._v("Add Dumping Point")])])])],1)})),a("br"),a("button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{type:"submit"}},[t._v("Submit")])],2)])])],1)],1)},s=[],i=(a("96cf"),a("1da1")),n=a("c2a4"),o=a("444f"),u=a("2579"),l=a("8e5f"),c=a.n(l),d=a("b410"),m=a("039f"),p=a("6bf2"),g={page:{title:"Create Dumping",meta:[{name:"description",content:n.description}]},components:{Layout:o["a"],PageHeader:u["a"],Multiselect:c.a,ValidationProvider:m["ValidationProvider"],ValidationObserver:m["ValidationObserver"],ModelSelect:d["ModelSelect"]},data:function(){return{dumpname:"",dumptype:"",description:"",supervisor:null,city:"",state:"",country:"",zip:"",geoLat:"",geoLong:"",area:"",workinghours:"",message:"",stagingtype:null,code:"",areas:[],servingAreas:[],createdby:"",createddate:new Date,modifydate:new Date,baranggay:"",district:"",modifyby:"",option:[{value:"default",text:"Default"},{value:"solidwaste",text:"Solidwaste"},{value:"organicewaste",text:"Organicwaste"}],title:"Register",item:[{value:null,text:"Please select an user"}],items:[{text:"Setup",href:"/"},{text:"Dumping Location",href:"#/Setup/DumpingLocation"},{text:"Create Dumping",active:!0}],inputs:[{dumpingPointName:""}]}},computed:{getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.createdby=this.getUserDetails.user.username,this.modifyby=this.getUserDetails.user.username,this.userdata(),this.getareas()},methods:{add:function(){this.inputs.push({dumpingPointName:""}),console.log(this.inputs)},remove:function(t){this.inputs.splice(t,1)},getareas:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["a"])();case 3:e=t.sent,this.areas=e.data.response.areaMaster,this.areas.map((function(t){null!=t.areaName&&a.servingAreas.push(t.areaName)})),console.log(this.servingAreas),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:console.log(this.servingAreas);case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),userdata:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["Wc"])();case 3:e=t.sent,a=e.data.response.Users,console.log("users",a[0].userName),a.map((function(t){r.item.push(t.userName),console.log("user",t)})),console.log("users",this.item),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}(),getdistricts:function(){var t=this;this.areas.map((function(e){e.areaName==t.baranggay&&(t.baranggayCode=e.code,console.log("haii",e.districtId),t.district=e.districtName,t.state=e.state,t.country=e.country)}))},create:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={code:this.code,dumpingAreaName:this.dumpname,dumpingType:this.dumptype,supervisor:this.supervisor,working_hrs:this.workinghours,geoLat:this.geoLat,geoLong:this.geoLong,isDeleted:!1,createdDate:this.createddate,createdBy:this.createdby,modifiedDate:this.modifydate,modifiedBy:this.modifyby,address:this.address,state:this.state,country:this.country,description:this.description,holiday_message:this.message,zip:this.zip,city:this.city,area:this.baranggay,dumpingPoint:this.inputs},t.next=4,Object(p["O"])(e);case 4:a=t.sent,a&&(this.$swal({group:"alert",type:"success",text:"You Created Dumping Successfully",duration:5e3}),this.$router.push({path:"/Setup/DumpingLocation"})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$toasted.error(t.t0.message.errors[0].developerMessage,{duration:7e3});case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),setPlace:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e;case 2:a=t.sent,r={lat:a.geometry.location.lat(),lng:a.geometry.location.lng()},this.position=r,this.geoLat=this.position.lat,this.geoLong=this.position.lng;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),refresh:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},f=g,h=(a("be1d"),a("7f87"),a("2877")),v=Object(h["a"])(f,r,s,!1,null,"a8a8db8e",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-c5ffa72c-legacy.a304c0b9.js.map