(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15d3b95a"],{"0ca4":function(t,e,r){"use strict";var a=r("916f"),i=r.n(a);i.a},"5bcf":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("PageHeader",{attrs:{items:t.items}}),r("div",{staticClass:"animated fadeIn"},[r("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Edit Type"}},[r("div",{staticClass:"mt-3"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.create(e)}}},[r("b-row",[r("b-col",[r("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[t._v("\n                  Trip Type")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.triptype,expression:"triptype"}],staticClass:"form-control",attrs:{type:"text",oninvalid:"this.setCustomValidity('TripType is required ')",oninput:"setCustomValidity('')",placeholder:"Enter Triptype",required:""},domProps:{value:t.triptype},on:{input:function(e){e.target.composing||(t.triptype=e.target.value)}}})]),r("b-col"),r("br")],1),r("br"),r("br"),r("button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{type:"submit"}},[t._v("Submit")])],1)])])],1)],1)},i=[],n=(r("96cf"),r("1da1")),s=r("c2a4"),o=r("444f"),u=r("2579"),c=r("8e5f"),p=r.n(c),d=r("7eac"),l=r.n(d),f=(r("a968"),r("b410")),m=r("f8f2"),b=r("039f"),h=r("6bf2"),y={page:{title:"Edit Type",meta:[{name:"description",content:s.description}]},components:{DualListBox:l.a,addplan:m["a"],Layout:o["a"],PageHeader:u["a"],Multiselect:p.a,ValidationProvider:b["ValidationProvider"],ValidationObserver:b["ValidationObserver"],ModelSelect:f["ModelSelect"]},data:function(){return{items:[{text:"Setup",href:"/"},{text:"Type",href:"#/Setup/ClassMaster"},{text:"Edit Type",active:!0}],code:this.$route.params.code,triptype:this.$route.params.tripType,tripclass:"",mainroad:"",day:""}},computed:{getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.createdby=this.getUserDetails.user.username,this.modifyby=this.getUserDetails.user.username},methods:{create:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={code:this.code,tripType:this.triptype},t.next=4,Object(h["Zb"])(e);case 4:r=t.sent,r&&(this.$swal({group:"alert",type:"success",text:"Your Edited Type Successfully",duration:5e3}),this.$router.push({path:"/Setup/TypeMaster"})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$toasted.error(t.t0.message.error,{duration:7e3});case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),refresh:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},v=y,g=(r("af95"),r("e047"),r("0ca4"),r("2877")),w=Object(g["a"])(v,a,i,!1,null,"14ba7112",null);e["default"]=w.exports},"916f":function(t,e,r){},af95:function(t,e,r){"use strict";var a=r("b407"),i=r.n(a);i.a},b407:function(t,e,r){},e047:function(t,e,r){"use strict";var a=r("f33d"),i=r.n(a);i.a},f33d:function(t,e,r){}}]);
//# sourceMappingURL=chunk-15d3b95a-legacy.2497b21b.js.map