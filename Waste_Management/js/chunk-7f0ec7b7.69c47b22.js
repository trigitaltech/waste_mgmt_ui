(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f0ec7b7"],{"04f5":function(t,e,r){},"9f0b":function(t,e,r){"use strict";var a=r("04f5"),s=r.n(a);s.a},"9fc1":function(t,e,r){},e423:function(t,e,r){"use strict";var a=r("9fc1"),s=r.n(a);s.a},fe9b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("PageHeader",{attrs:{items:t.items}}),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 mx-auto"},[r("b-card",{attrs:{header:"Edit LGU Employee"}},[r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[r("form",{on:{submit:function(e){return e.preventDefault(),a(t.create)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-2"},[r("fieldset",{staticClass:"border p-2"},[r("legend",{staticClass:"w-auto"},[r("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Personal Info")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Personal Title")]),r("multiselect",{attrs:{placeholder:"Select Personal Title",options:t.titles},model:{value:t.form.personalTitle,callback:function(e){t.$set(t.form,"personalTitle",e)},expression:"form.personalTitle"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("LGU Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.lgunames,expression:"form.lgunames",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('Lgu Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LguName",required:""},domProps:{value:t.form.lgunames},on:{input:function(e){e.target.composing||t.$set(t.form,"lgunames",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("User Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.userName,expression:"form.userName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('User Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter UserName",required:""},domProps:{value:t.form.userName},on:{input:function(e){e.target.composing||t.$set(t.form,"userName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"password",oninvalid:"this.setCustomValidity('Password is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.firstName,expression:"form.firstName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('First Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter FirstName",required:""},domProps:{value:t.form.firstName},on:{input:function(e){e.target.composing||t.$set(t.form,"firstName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Middle Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.middleName,expression:"form.middleName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",oninvalid:"this.setCustomValidity('last name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LastName",required:""},domProps:{value:t.form.middleName},on:{input:function(e){e.target.composing||t.$set(t.form,"middleName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.lastName,expression:"form.lastName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",oninvalid:"this.setCustomValidity('last name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LastName",required:""},domProps:{value:t.form.lastName},on:{input:function(e){e.target.composing||t.$set(t.form,"lastName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.email,expression:"form.email",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"email",type:"email",oninvalid:"this.setCustomValidity('Please Use @gmail.com ')",oninput:"setCustomValidity('')",placeholder:"Enter Email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Phone Number")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.number,expression:"form.number",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"number",type:"number",oninvalid:"this.setCustomValidity('Phone number is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Phone Number",required:""},domProps:{value:t.form.number},on:{input:function(e){e.target.composing||t.$set(t.form,"number",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Address lane 1")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.address,expression:"form.address",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"address",type:"text",oninvalid:"this.setCustomValidity('Address Lane1 is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Address lane 2")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.address2,expression:"form.address2",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"address",type:"text",oninvalid:"this.setCustomValidity('Address Lane2 is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address"},domProps:{value:t.form.address2},on:{input:function(e){e.target.composing||t.$set(t.form,"address2",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Post Code")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.postCode,expression:"form.postCode",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Poster Code",type:"number"},domProps:{value:t.form.postCode},on:{input:function(e){e.target.composing||t.$set(t.form,"postCode",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[t._v("District")]),r("multiselect",{attrs:{placeholder:"Select distict",options:t.distopt},on:{input:t.getcity},model:{value:t.form.district,callback:function(e){t.$set(t.form,"district","string"===typeof e?e.trim():e)},expression:"form.district"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("State")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.state,expression:"form.state",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter State",disabled:""},domProps:{value:t.form.state},on:{input:function(e){e.target.composing||t.$set(t.form,"state",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Country")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.country,expression:"form.country",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Country",disabled:""},domProps:{value:t.form.country},on:{input:function(e){e.target.composing||t.$set(t.form,"country",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("Personal ID No")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.personalidno,expression:"form.personalidno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Personal ID",type:"number"},domProps:{value:t.form.personalidno},on:{input:function(e){e.target.composing||t.$set(t.form,"personalidno",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[t._v("Type")]),r("b-form-select",{staticClass:"form-control",attrs:{placeholder:"Select Supervisor",label:"value",options:t.roles},on:{change:t.getroles},model:{value:t.rolename,callback:function(e){t.rolename="string"===typeof e?e.trim():e},expression:"rolename"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("LGU")]),r("b-form-select",{staticClass:"form-control",attrs:{placeholder:"Select LGU",label:"value",options:t.lgus},on:{change:t.getlgu},model:{value:t.lguname,callback:function(e){t.lguname="string"===typeof e?e.trim():e},expression:"lguname"}})],1)]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[t._v("ID Proof")]),r("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file...","drop-placeholder":"Drop file here..."},on:{change:t.readAgreement}})],1)])])])])]),r("div",{staticClass:"row mt-2 justify-content-center"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary d-inline-flex align-items-center",attrs:{type:"submit"}},[t._v("Submit")])])])])])]}}])})],1)])],1)])])])],1)},s=[],o=r("1da1"),i=r("c2a4"),l=r("444f"),m=r("2579"),n=r("8e5f"),d=r.n(n),u=r("b410"),c=r("039f"),f=r("6bf2"),p={page:{title:"Edit Lgu Employee",meta:[{name:"description",content:i.description}]},components:{Layout:l["a"],PageHeader:m["a"],Multiselect:d.a,ValidationProvider:c["ValidationProvider"],ValidationObserver:c["ValidationObserver"],ModelSelect:u["ModelSelect"]},data(){return{areas:[],permissionColumns:[{key:"resource",label:"Resource"},{key:"name",label:"Permission"},{key:"actions",sortable:!0}],items:[{text:"Home",href:"/"},{text:"LGU/ Edit LGU Employee",active:!0}],finalModel:{},selected:null,clientId:"",options:["DAF"],serviceoffice:"",file:"",item:{value:"",text:""},roledata1:[],rolesarray:[],servingAreas:[],baranggayCode:"",form:{lgunames:this.$route.params.lguName,personalidno:this.$route.params.personalIdNo,personalTitle:this.$route.params.salutation,firstName:this.$route.params.firstName,middleName:this.$route.params.middleName,lastName:this.$route.params.lastName,userName:this.$route.params.userName,password:this.$route.params.password,email:this.$route.params.email,number:this.$route.params.phone,address:this.$route.params.addressLine1,city:this.$route.params.city,area:this.$route.params.area,district:this.$route.params.district,address2:this.$route.params.addressLine2,state:this.$route.params.state,country:this.$route.params.country,postCode:this.$route.params.pin,amount:0,voucherNo:""},item2:[],roles:["ENCODER","VOLUME_CHECKER","DISPATCHER"],rolename:this.$route.params.type,titles:["Mr.","Sri.","Mrs"],vouchernumber:"",genderOpt:["Male","Female","Other"],cityOpt:[],createdby:"",createddate:new Date,modifydate:new Date,modifyby:"",lgus:[],lgusnames:[],distopt:[],lgusdata:"",file:"",lguname:"",bouquetsOpt:[{value:null,text:"Please select an option"},"FTA  AND STARTER"],clientTemplete:{},lgudata:[]}},computed:{getUserDetails(){return this.$store.getters["auth/loggedInDetails"]}},mounted(){console.log(this.$route.params),this.createdby=this.getUserDetails.user.username,this.modifyby=this.getUserDetails.user.username,this.roledata(),this.getplans(),this.getareas(),this.getemployees(),this.getaddresss()},methods:{getcity(){var t=this;return Object(o["a"])((function*(){t.addres.map(e=>{t.form.district===e.districtName&&(t.form.state=e.stateCode.stateName,t.form.country=e.stateCode.countryCode.countryName)})}))()},getaddresss(){var t=this;return Object(o["a"])((function*(){try{const e=yield Object(f["x"])();t.addres=e.data.response.result,console.log("address",t.addres),t.addres.map(e=>{t.distopt.push(e.districtName)})}catch(e){}}))()},getareas(){var t=this;return Object(o["a"])((function*(){try{const e=yield Object(f["a"])();t.areas=e.data.response.areaMaster,t.areas.map(e=>{null!=e.areaName&&t.servingAreas.push(e.areaName)}),console.log(t.servingAreas)}catch(e){console.log(e)}console.log(t.servingAreas)}))()},getid(){this.areas.map(t=>{this.serviceoffice===t.areaName&&(this.sid=t.id)})},readAgreement(t){const e=new FileReader;e.readAsDataURL(t.target.files[0]),e.onload=()=>{this.file=e.result},e.onerror=t=>{console.error("reader : ",t)}},getplans(){var t=this;return Object(o["a"])((function*(){try{const e=yield Object(f["a"])();t.areas=e.data.response.areaMaster,t.areas.map(e=>{t.item2.push(e.areaName),console.log("user",e)}),console.log("users",t.item)}catch(e){}}))()},getroles(){this.roledata1.map(t=>{this.rolename===t.name&&this.rolesarray.push(t)})},getBaranggayCode(){var t=this;return Object(o["a"])((function*(){t.areas.map(e=>{e.areaName==t.baranggayCode&&(t.baranggayCode=e.code)})}))()},getlgu(){this.lgusnames.map(t=>{this.lguname===t.lguName&&(this.lgusdata=t.id)})},getemployees(){var t=this;return Object(o["a"])((function*(){try{const e=yield Object(f["Fc"])();t.lgusnames=e.data.response.result,t.lgusnames.map(e=>{t.lgus.push(e.lguName),t.$route.params.id===e.id&&(t.lguname=e.lguName)})}catch(e){}}))()},roledata(){var t=this;return Object(o["a"])((function*(){try{const e=yield Object(f["Nc"])();t.roledata1=e.data.response.RoleMaster}catch(e){}}))()},create(){var t=this;return Object(o["a"])((function*(){try{const e={id:t.$route.params.id,lguName:t.form.lgunames,userName:t.form.userName,password:t.form.password,passwordStatus:1,email:t.form.email,phone:t.form.number,salutation:t.form.personalTitle,firstName:t.form.firstName,middleName:t.form.middleName,lastName:t.form.lastName,addressLine1:t.form.address,addressLine2:t.form.address2,district:t.form.district,state:t.form.state,country:t.form.country,pin:t.form.postCode,isDeleted:!1,status:200,type:t.rolename,personalIdNo:t.form.personalidno,service_OFFICE:t.sid,id_PROOF_DOC_URL:t.file,lguId:t.lgusdata};let r=yield Object(f["Vb"])(e);r&&(t.$swal({group:"alert",type:"success",text:"LGU Employee created Successfully",duration:5e3}),t.$router.push({path:"/LGU/Lguemployee"}))}catch(e){t.$toasted.error(e.message.error,{duration:7e3})}}))()},refresh(){return Object(o["a"])((function*(){setTimeout((function(){location.reload()}),200)}))()}}},v=p,g=(r("9f0b"),r("e423"),r("2877")),C=Object(g["a"])(v,a,s,!1,null,"59ccdf65",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-7f0ec7b7.69c47b22.js.map