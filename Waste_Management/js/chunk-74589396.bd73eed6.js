(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74589396"],{"5dd7":function(e,t,a){},"607c":function(e,t,a){"use strict";var r=a("a91a"),s=a.n(r);s.a},"644e":function(e,t,a){"use strict";var r=a("5dd7"),s=a.n(r);s.a},a25f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{items:e.items}}),a("div",{staticClass:"animated fadeIn"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"View Baranggay"}},[a("div",{staticClass:"mt-3"},[a("form",[a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("\n                     Area Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.areaname,expression:"areaname"}],staticClass:"form-control",attrs:{id:"defaultFormCardNameEx",disabled:"",type:"text"},domProps:{value:e.areaname},on:{input:function(t){t.target.composing||(e.areaname=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Area Type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.areatype,expression:"areatype"}],staticClass:"form-control",attrs:{id:"defaultFormCardNameEx",disabled:"",type:"text"},domProps:{value:e.areatype},on:{input:function(t){t.target.composing||(e.areatype=t.target.value)}}})]),a("br")],1),a("br"),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[e._v("Area SqKm")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.areasqkm,expression:"areasqkm"}],staticClass:"form-control",attrs:{id:"defaultFormCardEmailEx",disabled:"",type:"email"},domProps:{value:e.areasqkm},on:{input:function(t){t.target.composing||(e.areasqkm=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Class Type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.classtype,expression:"classtype"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Code",disabled:""},domProps:{value:e.classtype},on:{input:function(t){t.target.composing||(e.classtype=t.target.value)}}})])],1),a("br"),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[e._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{id:"defaultFormCardEmailEx",disabled:"",type:"email"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[e._v("District")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.district,expression:"district"}],staticClass:"form-control",attrs:{id:"defaultFormCardEmailEx",disabled:"",type:"email"},domProps:{value:e.district},on:{input:function(t){t.target.composing||(e.district=t.target.value)}}})])],1),a("br"),a("b-row",[a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[e._v("State")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"form-control",attrs:{id:"defaultFormCardEmailEx",disabled:"",type:"email"},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}}),a("br")]),a("br"),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[e._v("Country")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],staticClass:"form-control",attrs:{id:"defaultFormCardEmailEx",disabled:"",type:"email"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value)}}})]),a("b-col",[a("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardEmailEx"}},[e._v("Zip")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.zip,expression:"zip"}],staticClass:"form-control",attrs:{id:"defaultFormCardEmailEx",disabled:"",type:"email"},domProps:{value:e.zip},on:{input:function(t){t.target.composing||(e.zip=t.target.value)}}})])],1),a("br"),a("b-row"),a("br")],1)])])],1)],1)},s=[],o=a("1da1"),i=a("c2a4"),l=a("444f"),d=a("2579"),n=a("8e5f"),m=a.n(n),c=a("b410"),u=a("039f"),p=a("6bf2"),f={page:{title:"View Baranggay",meta:[{name:"description",content:i.description}]},components:{Layout:l["a"],PageHeader:d["a"],Multiselect:m.a,ValidationProvider:u["ValidationProvider"],ValidationObserver:u["ValidationObserver"],ModelSelect:c["ModelSelect"]},data(){return{classtype:this.$route.params.classType,code:this.$route.params.code,description:this.$route.params.description,supervisor:this.$route.params.supervisor,city:this.$route.params.city,areaname:this.$route.params.areaName,areaid:"",areasqkm:this.$route.params.areaSqKm,country:this.$route.params.country,state:this.$route.params.state,zip:this.$route.params.zip,message:"",areatype:this.$route.params.areaType,createdby:this.$route.params.createdBy,createddate:this.$route.params.createdDate,modifydate:new Date,modifyby:"",item:[],ite:[],option:[{value:"urban",text:"Urban"},{value:"rural",text:"Rural"}],items:[{text:"Setup",href:"/"},{text:"Baranggay",href:"#/Setup/AreaMaster"},{text:"View Baranggay",active:!0}],district:this.$route.params.districtName}},computed:{getUserDetails(){return this.$store.getters["auth/loggedInDetails"]}},mounted(){console.log(this.$route.params.supervisor),this.modifyby=this.getUserDetails.user.username},methods:{create(){var e=this;return Object(o["a"])((function*(){try{const t={id:e.$route.params.id,areaName:e.areaname,areaType:e.areatype,supervisor:e.supervisor,areaSqKm:e.areasqkm,isDeleted:!1,createdDate:e.createddate,createdBy:e.createdby,modifiedDate:e.modifydate,modifiedBy:e.modifyby,state:e.state,country:e.country,description:e.description,city:e.city,zip:e.zip};let a=yield Object(p["r"])(t);a&&(e.$swal({group:"alert",type:"success",text:"You Edited Area Successfully",duration:5e3}),e.$router.push({path:"/Setup/AreaMaster"}))}catch(t){e.$toasted.error(t.message.errors[0].developerMessage,{duration:7e3})}}))()},userdata(){var e=this;return Object(o["a"])((function*(){try{const a=yield Object(p["Wc"])();var t=a.data.response.Users;console.log("users",t[0].userName),t.map(t=>{e.item.push(t.userName),console.log("user",t)}),console.log("users",e.item)}catch(a){}}))()},refresh(){return Object(o["a"])((function*(){setTimeout((function(){location.reload()}),200)}))()}}},v=f,y=(a("644e"),a("607c"),a("2877")),g=Object(y["a"])(v,r,s,!1,null,"c064f9b6",null);t["default"]=g.exports},a91a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-74589396.bd73eed6.js.map