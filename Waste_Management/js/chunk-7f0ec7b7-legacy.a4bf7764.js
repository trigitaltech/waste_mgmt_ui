(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f0ec7b7"],{"04f5":function(t,e,r){},"9f0b":function(t,e,r){"use strict";var a=r("04f5"),s=r.n(a);s.a},"9fc1":function(t,e,r){},e423:function(t,e,r){"use strict";var a=r("9fc1"),s=r.n(a);s.a},fe9b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("PageHeader",{attrs:{items:t.items}}),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 mx-auto"},[r("b-card",{attrs:{header:"Edit LGU Employee"}},[r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[r("form",{on:{submit:function(e){return e.preventDefault(),a(t.create)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-2"},[r("fieldset",{staticClass:"border p-2"},[r("legend",{staticClass:"w-auto"},[r("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Personal Info")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Personal Title")]),r("multiselect",{attrs:{placeholder:"Select Personal Title",options:t.titles},model:{value:t.form.personalTitle,callback:function(e){t.$set(t.form,"personalTitle",e)},expression:"form.personalTitle"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("LGU Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.lgunames,expression:"form.lgunames",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('Lgu Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LguName",required:""},domProps:{value:t.form.lgunames},on:{input:function(e){e.target.composing||t.$set(t.form,"lgunames",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("User Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.userName,expression:"form.userName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('User Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter UserName",required:""},domProps:{value:t.form.userName},on:{input:function(e){e.target.composing||t.$set(t.form,"userName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"password",oninvalid:"this.setCustomValidity('Password is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.firstName,expression:"form.firstName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('First Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter FirstName",required:""},domProps:{value:t.form.firstName},on:{input:function(e){e.target.composing||t.$set(t.form,"firstName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Middle Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.middleName,expression:"form.middleName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",oninvalid:"this.setCustomValidity('last name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LastName",required:""},domProps:{value:t.form.middleName},on:{input:function(e){e.target.composing||t.$set(t.form,"middleName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.lastName,expression:"form.lastName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",oninvalid:"this.setCustomValidity('last name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LastName",required:""},domProps:{value:t.form.lastName},on:{input:function(e){e.target.composing||t.$set(t.form,"lastName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.email,expression:"form.email",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"email",type:"email",oninvalid:"this.setCustomValidity('Please Use @gmail.com ')",oninput:"setCustomValidity('')",placeholder:"Enter Email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Phone Number")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.number,expression:"form.number",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"number",type:"number",oninvalid:"this.setCustomValidity('Phone number is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Phone Number",required:""},domProps:{value:t.form.number},on:{input:function(e){e.target.composing||t.$set(t.form,"number",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Address lane 1")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.address,expression:"form.address",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"address",type:"text",oninvalid:"this.setCustomValidity('Address Lane1 is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Address lane 2")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.address2,expression:"form.address2",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"address",type:"text",oninvalid:"this.setCustomValidity('Address Lane2 is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address"},domProps:{value:t.form.address2},on:{input:function(e){e.target.composing||t.$set(t.form,"address2",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Post Code")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.postCode,expression:"form.postCode",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Poster Code",type:"number"},domProps:{value:t.form.postCode},on:{input:function(e){e.target.composing||t.$set(t.form,"postCode",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("District")]),r("multiselect",{attrs:{placeholder:"Select distict",options:t.distopt},on:{input:t.getcity},model:{value:t.form.district,callback:function(e){t.$set(t.form,"district","string"===typeof e?e.trim():e)},expression:"form.district"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("State")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.state,expression:"form.state",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter State",disabled:""},domProps:{value:t.form.state},on:{input:function(e){e.target.composing||t.$set(t.form,"state",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Country")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.country,expression:"form.country",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Country",disabled:""},domProps:{value:t.form.country},on:{input:function(e){e.target.composing||t.$set(t.form,"country",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Personal ID No")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.personalidno,expression:"form.personalidno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Personal ID",type:"number"},domProps:{value:t.form.personalidno},on:{input:function(e){e.target.composing||t.$set(t.form,"personalidno",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[t._v("Type")]),r("b-form-select",{staticClass:"form-control",attrs:{placeholder:"Select Supervisor",label:"value",options:t.roles},on:{change:t.getroles},model:{value:t.rolename,callback:function(e){t.rolename="string"===typeof e?e.trim():e},expression:"rolename"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("LGU")]),r("b-form-select",{staticClass:"form-control",attrs:{placeholder:"Select LGU",label:"value",options:t.lgus},on:{change:t.getlgu},model:{value:t.lguname,callback:function(e){t.lguname="string"===typeof e?e.trim():e},expression:"lguname"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("ID Proof")]),r("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file...","drop-placeholder":"Drop file here..."},on:{change:t.readAgreement}})],1)])])])])]),r("div",{staticClass:"row mt-2 justify-content-center"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary d-inline-flex align-items-center",attrs:{type:"submit"}},[t._v("Submit")])])])])])]}}])})],1)])],1)])])])],1)},s=[],o=(r("7f7f"),r("96cf"),r("1da1")),i=r("ade3"),n=r("c2a4"),m=r("444f"),l=r("2579"),u=r("8e5f"),d=r.n(u),c=r("b410"),f=r("039f"),p=r("6bf2"),v={page:{title:"Edit Lgu Employee",meta:[{name:"description",content:n.description}]},components:{Layout:m["a"],PageHeader:l["a"],Multiselect:d.a,ValidationProvider:f["ValidationProvider"],ValidationObserver:f["ValidationObserver"],ModelSelect:c["ModelSelect"]},data:function(){var t;return t={areas:[],permissionColumns:[{key:"resource",label:"Resource"},{key:"name",label:"Permission"},{key:"actions",sortable:!0}],items:[{text:"Home",href:"/"},{text:"LGU/ Edit LGU Employee",active:!0}],finalModel:{},selected:null,clientId:"",options:["DAF"],serviceoffice:"",file:"",item:{value:"",text:""},roledata1:[],rolesarray:[],servingAreas:[],baranggayCode:"",form:{lgunames:this.$route.params.lguName,personalidno:this.$route.params.personalIdNo,personalTitle:this.$route.params.salutation,firstName:this.$route.params.firstName,middleName:this.$route.params.middleName,lastName:this.$route.params.lastName,userName:this.$route.params.userName,password:this.$route.params.password,email:this.$route.params.email,number:this.$route.params.phone,address:this.$route.params.addressLine1,city:this.$route.params.city,area:this.$route.params.area,district:this.$route.params.district,address2:this.$route.params.addressLine2,state:this.$route.params.state,country:this.$route.params.country,postCode:this.$route.params.pin,amount:0,voucherNo:""},item2:[],roles:["ENCODER","VOLUME_CHECKER","DISPATCHER"],rolename:this.$route.params.type,titles:["Mr.","Sri.","Mrs"],vouchernumber:"",genderOpt:["Male","Female","Other"],cityOpt:[],createdby:"",createddate:new Date,modifydate:new Date,modifyby:"",lgus:[],lgusnames:[],distopt:[],lgusdata:""},Object(i["a"])(t,"file",""),Object(i["a"])(t,"lguname",""),Object(i["a"])(t,"bouquetsOpt",[{value:null,text:"Please select an option"},"FTA  AND STARTER"]),Object(i["a"])(t,"clientTemplete",{}),Object(i["a"])(t,"lgudata",[]),t},computed:{getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){console.log(this.$route.params),this.createdby=this.getUserDetails.user.username,this.modifyby=this.getUserDetails.user.username,this.roledata(),this.getplans(),this.getareas(),this.getemployees(),this.getaddresss()},methods:{getcity:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.addres.map((function(t){e.form.district===t.districtName&&(e.form.state=t.stateCode.stateName,e.form.country=t.stateCode.countryCode.countryName)}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getaddresss:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["x"])();case 3:e=t.sent,this.addres=e.data.response.result,console.log("address",this.addres),this.addres.map((function(t){r.distopt.push(t.districtName)})),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),getareas:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["a"])();case 3:e=t.sent,this.areas=e.data.response.areaMaster,this.areas.map((function(t){null!=t.areaName&&r.servingAreas.push(t.areaName)})),console.log(this.servingAreas),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:console.log(this.servingAreas);case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),getid:function(){var t=this;this.areas.map((function(e){t.serviceoffice===e.areaName&&(t.sid=e.id)}))},readAgreement:function(t){var e=this,r=new FileReader;r.readAsDataURL(t.target.files[0]),r.onload=function(){e.file=r.result},r.onerror=function(t){console.error("reader : ",t)}},getplans:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["a"])();case 3:e=t.sent,this.areas=e.data.response.areaMaster,this.areas.map((function(t){r.item2.push(t.areaName),console.log("user",t)})),console.log("users",this.item),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),getroles:function(){var t=this;this.roledata1.map((function(e){t.rolename===e.name&&t.rolesarray.push(e)}))},getBaranggayCode:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.areas.map((function(t){t.areaName==e.baranggayCode&&(e.baranggayCode=t.code)}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getlgu:function(){var t=this;this.lgusnames.map((function(e){t.lguname===e.lguName&&(t.lgusdata=e.id)}))},getemployees:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["Fc"])();case 3:e=t.sent,this.lgusnames=e.data.response.result,this.lgusnames.map((function(t){r.lgus.push(t.lguName),r.$route.params.id===t.id&&(r.lguname=t.lguName)})),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),roledata:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["Nc"])();case 3:e=t.sent,this.roledata1=e.data.response.RoleMaster,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),create:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={id:this.$route.params.id,lguName:this.form.lgunames,userName:this.form.userName,password:this.form.password,passwordStatus:1,email:this.form.email,phone:this.form.number,salutation:this.form.personalTitle,firstName:this.form.firstName,middleName:this.form.middleName,lastName:this.form.lastName,addressLine1:this.form.address,addressLine2:this.form.address2,district:this.form.district,state:this.form.state,country:this.form.country,pin:this.form.postCode,isDeleted:!1,status:200,type:this.rolename,personalIdNo:this.form.personalidno,service_OFFICE:this.sid,id_PROOF_DOC_URL:this.file,lguId:this.lgusdata},t.next=4,Object(p["Vb"])(e);case 4:r=t.sent,r&&(this.$swal({group:"alert",type:"success",text:"LGU Employee created Successfully",duration:5e3}),this.$router.push({path:"/LGU/Lguemployee"})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$toasted.error(t.t0.message.error,{duration:7e3});case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),refresh:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},h=v,g=(r("9f0b"),r("e423"),r("2877")),b=Object(g["a"])(h,a,s,!1,null,"59ccdf65",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-7f0ec7b7-legacy.a4bf7764.js.map