(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-733967c3"],{"0921":function(e,t,r){"use strict";var a=r("8fe7"),s=r.n(a);s.a},"8fe7":function(e,t,r){},"968f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("PageHeader",{attrs:{items:e.items}}),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 mx-auto"},[r("b-card",{attrs:{header:"Create LGU Employee"}},[r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),a(e.create)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-2"},[r("fieldset",{staticClass:"border p-2"},[r("legend",{staticClass:"w-auto"},[r("h4",{staticClass:"header-title mt-0 mb-1"},[e._v("Personal Info")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Personal Title")]),r("multiselect",{attrs:{placeholder:"Select Personal Title",options:e.titles},model:{value:e.form.personalTitle,callback:function(t){e.$set(e.form,"personalTitle",t)},expression:"form.personalTitle"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("User Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.userName,expression:"form.userName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('User Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter UserName",required:""},domProps:{value:e.form.userName},on:{input:function(t){t.target.composing||e.$set(e.form,"userName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('Password is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Password",required:""},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.firstName,expression:"form.firstName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('First Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter FirstName",required:""},domProps:{value:e.form.firstName},on:{input:function(t){t.target.composing||e.$set(e.form,"firstName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Middle Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.middleName,expression:"form.middleName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",oninvalid:"this.setCustomValidity('last name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LastName",required:""},domProps:{value:e.form.middleName},on:{input:function(t){t.target.composing||e.$set(e.form,"middleName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.lastName,expression:"form.lastName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",oninvalid:"this.setCustomValidity('last name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LastName",required:""},domProps:{value:e.form.lastName},on:{input:function(t){t.target.composing||e.$set(e.form,"lastName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.email,expression:"form.email",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"email",type:"email",oninvalid:"this.setCustomValidity('Please Use @gmail.com ')",oninput:"setCustomValidity('')",placeholder:"Enter Email",required:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Phone Number")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.number,expression:"form.number",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"number",type:"number",oninvalid:"this.setCustomValidity('Phone number is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Phone Number",required:""},domProps:{value:e.form.number},on:{input:function(t){t.target.composing||e.$set(e.form,"number",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Address lane 1")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.address,expression:"form.address",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"address",type:"text",oninvalid:"this.setCustomValidity('Address Lane1 is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Address lane 2")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.address2,expression:"form.address2",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"address",type:"text",oninvalid:"this.setCustomValidity('Address Lane2 is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address"},domProps:{value:e.form.address2},on:{input:function(t){t.target.composing||e.$set(e.form,"address2",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Post Code")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.postCode,expression:"form.postCode",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Poster Code",type:"number"},domProps:{value:e.form.postCode},on:{input:function(t){t.target.composing||e.$set(e.form,"postCode",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("District")]),r("multiselect",{attrs:{placeholder:"Select distict",options:e.distopt},on:{input:e.getcity},model:{value:e.form.district,callback:function(t){e.$set(e.form,"district","string"===typeof t?t.trim():t)},expression:"form.district"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("State")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.state,expression:"form.state",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter State",disabled:""},domProps:{value:e.form.state},on:{input:function(t){t.target.composing||e.$set(e.form,"state",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Country")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.country,expression:"form.country",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Country",disabled:""},domProps:{value:e.form.country},on:{input:function(t){t.target.composing||e.$set(e.form,"country",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Personal ID No")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.personalidno,expression:"form.personalidno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Personal ID",type:"number"},domProps:{value:e.form.personalidno},on:{input:function(t){t.target.composing||e.$set(e.form,"personalidno",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[e._v("Type")]),r("b-form-select",{staticClass:"form-control",attrs:{placeholder:"Select Supervisor",label:"value",options:e.roles},on:{change:e.getroles},model:{value:e.rolename,callback:function(t){e.rolename="string"===typeof t?t.trim():t},expression:"rolename"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("LGU")]),r("b-form-select",{attrs:{required:"",placeholder:"Select LGU",options:e.lgus},on:{change:e.getlgu},model:{value:e.lguname,callback:function(t){e.lguname=t},expression:"lguname"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("ID Proof")]),r("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Choose a file...","drop-placeholder":"Drop file here..."},on:{change:e.readAgreement}})],1)])])])])]),r("div",{staticClass:"row mt-2 justify-content-center"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary d-inline-flex align-items-center",attrs:{type:"submit"}},[e._v("Submit")])])])])])]}}])})],1)])],1)])])])],1)},s=[],o=(r("7f7f"),r("96cf"),r("1da1")),i=r("c2a4"),n=r("444f"),l=r("2579"),m=r("8e5f"),u=r.n(m),d=r("b410"),c=r("039f"),f=r("6bf2"),p={page:{title:"Create Lgu Employee",meta:[{name:"description",content:i.description}]},components:{Layout:n["a"],PageHeader:l["a"],Multiselect:u.a,ValidationProvider:c["ValidationProvider"],ValidationObserver:c["ValidationObserver"],ModelSelect:d["ModelSelect"]},data:function(){return{areas:[],permissionColumns:[{key:"resource",label:"Resource"},{key:"name",label:"Permission"},{key:"actions",sortable:!0}],items:[{text:"Home",href:"/"},{text:"LGU/ Create LGU Employee",active:!0}],finalModel:{},selected:null,clientId:"",options:["DAF"],serviceoffice:"",file:"",item:{value:"",text:""},roledata1:[],rolesarray:[],servingAreas:[],baranggayCode:"",form:{district:"",lguName:"",lguCode:"",personalidno:"",personalTitle:"",firstName:"",middleName:"",lastName:"",userName:"",password:"",email:"",number:"",address:"",city:"",area:"",address2:"",state:"",country:"",postCode:"",stbNumber:"",bouquets:null,amount:0,voucherNo:""},item2:[],roles:["ENCODER","VOLUME_CHECKER","CONTROL_CHECKER"],rolename:"",titles:["Mr.","Sri.","Mrs"],vouchernumber:"",genderOpt:["Male","Female","Other"],cityOpt:[],createdby:"",createddate:new Date,modifydate:new Date,modifyby:"",lgus:[],lgusnames:[],distopt:[],lgusdata:"",lguname:"",bouquetsOpt:[{value:null,text:"Please select an option"},"FTA  AND STARTER"],clientTemplete:{}}},computed:{getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.createdby=this.getUserDetails.user.username,this.modifyby=this.getUserDetails.user.username,this.roledata(),this.getplans(),this.getareas(),this.getemployees(),this.getaddresss()},methods:{getcity:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.addres.map((function(e){t.form.district===e.districtName&&(t.form.state=e.stateCode.stateName,t.form.country=e.stateCode.countryCode.countryName)}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getaddresss:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["x"])();case 3:t=e.sent,this.addres=t.data.response.result,console.log("address",this.addres),this.addres.map((function(e){r.distopt.push(e.districtName)})),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),getareas:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["a"])();case 3:t=e.sent,this.areas=t.data.response.areaMaster,this.areas.map((function(e){null!=e.areaName&&r.servingAreas.push(e.areaName)})),console.log(this.servingAreas),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:console.log(this.servingAreas);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),getid:function(){var e=this;this.areas.map((function(t){e.serviceoffice===t.areaName&&(e.sid=t.id)}))},readAgreement:function(e){var t=this,r=new FileReader;r.readAsDataURL(e.target.files[0]),r.onload=function(){t.file=r.result},r.onerror=function(e){console.error("reader : ",e)}},getplans:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["a"])();case 3:t=e.sent,this.areas=t.data.response.areaMaster,this.areas.map((function(e){r.item2.push(e.areaName),console.log("user",e)})),console.log("users",this.item),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),getroles:function(){var e=this;this.roledata1.map((function(t){e.rolename===t.name&&e.rolesarray.push(t)}))},getBaranggayCode:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.areas.map((function(e){e.areaName==t.baranggayCode&&(t.baranggayCode=e.code)}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getlgu:function(){var e=this;this.lgusnames.map((function(t){e.lguname===t.lguName&&(e.lgusdata=t.id)}))},getemployees:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["Fc"])();case 3:t=e.sent,this.lgusnames=t.data.response.result,this.lgusnames.map((function(e){r.lgus.push(e.lguName)})),console.log(this.item),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),roledata:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["Nc"])();case 3:t=e.sent,this.roledata1=t.data.response.RoleMaster,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),create:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log(this.form.lguCode),t={code:this.form.lguCode,lguName:this.form.userName,userName:this.form.userName,password:this.form.password,passwordStatus:1,email:this.form.email,phone:this.form.number,salutation:this.form.personalTitle,firstName:this.form.firstName,middleName:this.form.middleName,lastName:this.form.lastName,addressLine1:this.form.address,addressLine2:this.form.address2,district:this.form.district,state:this.form.state,country:this.form.country,pin:this.form.postCode,isDeleted:!1,type:this.rolename,personalIdNo:this.form.personalidno,id_PROOF_DOC_URL:this.file,lguId:this.lgusdata},e.next=5,Object(f["T"])(t);case 5:r=e.sent,r&&(this.$swal({group:"alert",type:"success",text:"LGU Employee created Successfully",duration:5e3}),this.$router.push({path:"/LGU/LguEmployee"})),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.$toasted.error(e.t0.message.error,{duration:7e3});case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},v=p,g=(r("c5d6"),r("0921"),r("2877")),h=Object(g["a"])(v,a,s,!1,null,"7a2954b4",null);t["default"]=h.exports},c5d6:function(e,t,r){"use strict";var a=r("c6f5"),s=r.n(a);s.a},c6f5:function(e,t,r){}}]);
//# sourceMappingURL=chunk-733967c3-legacy.314dee4b.js.map