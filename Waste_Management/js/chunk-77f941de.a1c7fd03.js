(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77f941de"],{"7a6f":function(e,t,r){},"7ff8":function(e,t,r){},b060:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("PageHeader",{attrs:{items:e.items}}),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12  mx-auto"},[r("b-card",{attrs:{header:"Create Hauler"}},[r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),a(e.create)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-2"},[r("fieldset",{staticClass:"border p-2"},[r("legend",{staticClass:"w-auto"},[r("h4",{staticClass:"header-title mt-0 mb-1"},[e._v("Personal Info")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Code")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.code,expression:"form.code",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",placeholder:"Enter Code",required:"",disabled:""},domProps:{value:e.form.code},on:{input:function(t){t.target.composing||e.$set(e.form,"code",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Personal Title")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.personalTitle,expression:"form.personalTitle",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",placeholder:"Enter Code",required:"",disabled:""},domProps:{value:e.form.personalTitle},on:{input:function(t){t.target.composing||e.$set(e.form,"personalTitle",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("User Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.userName,expression:"form.userName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('User Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter UserName",required:"",disabled:""},domProps:{value:e.form.userName},on:{input:function(t){t.target.composing||e.$set(e.form,"userName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"password",oninvalid:"this.setCustomValidity('Password is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Password",required:"",disabled:""},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.firstName,expression:"form.firstName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"firstname",type:"text",oninvalid:"this.setCustomValidity('First Name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter FirstName",required:"",disabled:""},domProps:{value:e.form.firstName},on:{input:function(t){t.target.composing||e.$set(e.form,"firstName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Middle Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.middleName,expression:"form.middleName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",oninvalid:"this.setCustomValidity('last name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LastName",required:"",disabled:""},domProps:{value:e.form.middleName},on:{input:function(t){t.target.composing||e.$set(e.form,"middleName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.lastName,expression:"form.lastName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"lastname",type:"text",oninvalid:"this.setCustomValidity('last name is required ')",oninput:"setCustomValidity('')",placeholder:"Enter LastName",required:"",disabled:""},domProps:{value:e.form.lastName},on:{input:function(t){t.target.composing||e.$set(e.form,"lastName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.email,expression:"form.email",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"email",type:"email",oninvalid:"this.setCustomValidity('Please Use @gmail.com ')",oninput:"setCustomValidity('')",placeholder:"Enter Email",required:"",disabled:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Phone Number")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.number,expression:"form.number",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"number",type:"number",oninvalid:"this.setCustomValidity('Phone number is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Phone Number",required:"",disabled:""},domProps:{value:e.form.number},on:{input:function(t){t.target.composing||e.$set(e.form,"number",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Address lane 1")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.address,expression:"form.address",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"address",type:"text",oninvalid:"this.setCustomValidity('Address Lane1 is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address",required:"",disabled:""},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Address lane 2")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.address2,expression:"form.address2",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{for:"address",type:"text",oninvalid:"this.setCustomValidity('Address Lane2 is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Address",required:"",disabled:""},domProps:{value:e.form.address2},on:{input:function(t){t.target.composing||e.$set(e.form,"address2",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Post Code")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.postCode,expression:"form.postCode",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Poster Code",type:"number",disabled:""},domProps:{value:e.form.postCode},on:{input:function(t){t.target.composing||e.$set(e.form,"postCode",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("State")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.state,expression:"form.state",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter State",disabled:""},domProps:{value:e.form.state},on:{input:function(t){t.target.composing||e.$set(e.form,"state",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Country")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.country,expression:"form.country",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Country",disabled:""},domProps:{value:e.form.country},on:{input:function(t){t.target.composing||e.$set(e.form,"country",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"form-group mt-3 mt-sm-0"},[r("label",{attrs:{for:"default"}},[e._v("Personal ID No")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.personalidno,expression:"personalidno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Personal ID",type:"number",disabled:""},domProps:{value:e.personalidno},on:{input:function(t){t.target.composing||(e.personalidno=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])])])])]),r("div",{staticClass:"row mt-2 justify-content-center"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"d-flex justify-content-end"})])])])]}}])})],1)])],1)])])])],1)},s=[],o=r("1da1"),i=r("c2a4"),m=r("444f"),l=r("2579"),d=r("8e5f"),n=r.n(d),u=r("b410"),c=r("039f"),f=r("6bf2"),p={page:{title:"View Hauler",meta:[{name:"description",content:i.description}]},components:{Layout:m["a"],PageHeader:l["a"],Multiselect:n.a,ValidationProvider:c["ValidationProvider"],ValidationObserver:c["ValidationObserver"],ModelSelect:u["ModelSelect"]},data(){return{plandata:"",striped:!1,bordered:!0,filter:"",perPage:10,hover:!0,currentPage:1,small:!1,dark:!1,fixed:!1,amount:"",submitted:!1,title:"Register",item:{key:"resource",value:"Frozen Yogurt",name:"159"},permissionColumns:[{key:"resource",label:"Resource"},{key:"name",label:"Permission"},{key:"actions",sortable:!0}],serviceoffice:"",personalidno:this.$route.params.personalIdNo,items:[{text:"Home",href:"/"},{text:"Haulers",href:"#/Hauler/Haulers"},{text:"View Hauler",active:!0}],finalModel:{},employeetype:"",selected:null,clientId:"",options:["DAF"],item:[{value:"HAULER",text:"HAULER"}],file:"",item2:[],sid:"",form:{code:this.$route.params.code,personalTitle:this.$route.params.contactSalutation,firstName:this.$route.params.contactFirstName,middleName:this.$route.params.contactMiddleName,lastName:this.$route.params.contactLastName,userName:this.$route.params.userName,password:this.$route.params.password,email:this.$route.params.email,number:this.$route.params.phone,address:this.$route.params.addressLine1,city:this.$route.params.city,area:this.$route.params.area,address2:this.$route.params.addressLine2,state:this.$route.params.state,country:this.$route.params.country,postCode:this.$route.params.pin,stbNumber:"",bouquets:null,amount:0,voucherNo:""},areas:[],titles:["Mr.","Sri.","Mrs"],item1:[],vouchernumber:"",genderOpt:["Male","Female","Other"],cityOpt:[],createdby:"",createddate:new Date,modifydate:new Date,modifyby:"",bouquetsOpt:[{value:null,text:"Please select an option"},"FTA  AND STARTER"],clientTemplete:{}}},computed:{getUserDetails(){return this.$store.getters["auth/loggedInDetails"]}},mounted(){this.createdby=this.getUserDetails.user.username,this.modifyby=this.getUserDetails.user.username},methods:{getid(){this.areas.map(e=>{this.serviceoffice===e.areaName&&(this.sid=e.id)})},getplans(){var e=this;return Object(o["a"])((function*(){try{const t=yield Object(f["a"])();e.areas=t.data.response.areaMaster,e.areas.map(t=>{e.item2.push(t.areaName),console.log("user",t)}),console.log("users",e.item)}catch(t){}}))()},readAgreement(e){const t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=()=>{this.file=t.result},t.onerror=e=>{console.error("reader : ",e)}},create(){var e=this;return Object(o["a"])((function*(){try{const t={code:e.form.code,haulerName:e.form.userName,userName:e.form.userName,password:e.form.password,passwordStatus:1,email:e.form.email,phone:e.form.number,contactSalutation:e.form.personalTitle,contactfirstName:e.form.firstName,contactmiddleName:e.form.middleName,contactlastName:e.form.lastName,addressLine1:e.address,addressLine2:e.address2,city:e.form.city,state:e.form.state,country:e.form.country,pin:e.form.postCode,isDeleted:!1,status:200,personal_ID_NO:e.personalidno};let r=yield Object(f["R"])(t);r&&(e.$swal({group:"alert",type:"success",text:"You Created Hauler Successfully",duration:5e3}),e.$router.push({path:"/Hauler/Haulers"}))}catch(t){e.$toasted.error(t.message.error,{duration:7e3})}}))()},refresh(){return Object(o["a"])((function*(){setTimeout((function(){location.reload()}),200)}))()}}},v=p,b=(r("b3b4"),r("e4aee"),r("2877")),C=Object(b["a"])(v,a,s,!1,null,"5d2e0520",null);t["default"]=C.exports},b3b4:function(e,t,r){"use strict";var a=r("7ff8"),s=r.n(a);s.a},e4aee:function(e,t,r){"use strict";var a=r("7a6f"),s=r.n(a);s.a}}]);
//# sourceMappingURL=chunk-77f941de.a1c7fd03.js.map