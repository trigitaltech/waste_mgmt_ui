(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41a15eaf"],{2418:function(e,t,a){},"3cd4":function(e,t,a){"use strict";var r=a("456c"),n=a.n(r);n.a},"456c":function(e,t,a){},5709:function(e,t,a){"use strict";var r=a("2418"),n=a.n(r);n.a},6889:function(e,t,a){},"72c0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{items:e.items}}),a("div",{staticClass:"animated fadeIn"},[a("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Baranggay"}},[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("b-form-input",{staticClass:"form-control ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),a("b-col",[a("b-button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{text:"Create Tenant"},on:{click:function(t){return e.$router.push({path:"/CreateArea"})}}},[e._v("Create Baranggay")])],1)],1),a("div",{staticClass:"mt-3"},[a("b-table",{ref:"roles",staticClass:"mt-3",attrs:{id:"my-table",dark:e.dark,hover:e.hover,striped:e.striped,bordered:e.bordered,filter:e.filter,responsive:!0,"current-page":e.currentPage,"per-page":e.perPage,small:e.small,fixed:e.fixed,fields:e.AreamasterColumns,items:e.item},scopedSlots:e._u([{key:"cell(createdDate)",fn:function(t){return[a("div",{staticClass:"table-row"},[e._v(e._s(e.getDate(t.item.createdDate)))])]}},{key:"cell(actions)",fn:function(t){return[a("router-link",{attrs:{to:{name:"Viewarea",params:t.item}}},[a("span",{staticClass:"mr-3"},[a("i",{staticClass:"fa fa-eye edit"})])]),a("router-link",{attrs:{to:{name:"Editarea",params:t.item}}},[a("span",{staticClass:"mr-3"},[a("i",{staticClass:"fas fa-pencil-alt edit"})])]),a("span",{staticClass:"mr-3",on:{click:function(a){return e.deleteReq(t)}}},[a("i",{staticClass:"fa fa-times edit"})])]}}])}),a("div",{staticStyle:{float:"right"}},[a("b-pagination",{attrs:{"per-page":e.perPage,"total-rows":e.rows,"aria-controls":"my-table","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),i=a("ade3"),c=a("c2a4"),o=a("444f"),l=a("2579"),u=a("8e5f"),d=a.n(u),m=a("b410"),f=a("c1df"),p=a.n(f),b=a("039f"),g=a("6bf2"),h=a("323e"),v=a.n(h),k={page:{title:"Baranggay",meta:[{name:"description",content:c.description}]},components:{Layout:o["a"],PageHeader:l["a"],Multiselect:d.a,ValidationProvider:b["ValidationProvider"],ValidationObserver:b["ValidationObserver"],ModelSelect:m["ModelSelect"]},data:function(){var e;return e={filter:"",filterOn:[],plandata:"",striped:!1,bordered:!0},Object(i["a"])(e,"filter",""),Object(i["a"])(e,"perPage",10),Object(i["a"])(e,"hover",!0),Object(i["a"])(e,"currentPage",1),Object(i["a"])(e,"small",!1),Object(i["a"])(e,"dark",!1),Object(i["a"])(e,"fixed",!1),Object(i["a"])(e,"amount",""),Object(i["a"])(e,"submitted",!1),Object(i["a"])(e,"title","Register"),Object(i["a"])(e,"item",[]),Object(i["a"])(e,"AreamasterColumns",[{key:"id",label:"ID",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"lguId",label:"Lgu Name",sortable:!0},{key:"areaName",label:"AreaName",sortable:!0},{key:"districtName",label:"DistrictName",sortable:!0},{key:"actions",sortable:!0}]),Object(i["a"])(e,"items",[{text:"Setup",href:"/"},{text:"Baranggay",active:!0}]),Object(i["a"])(e,"lgudata",[]),Object(i["a"])(e,"lguname",[]),e},computed:{rows:function(){return this.item.length},getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]}},mounted:function(){this.getplans(),this.getemployees()},methods:{getemployees:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g["Fc"])();case 3:t=e.sent,this.lgudata=t.data.response.result,a=0;case 6:if(!(a<this.item.length)){e.next=18;break}r=0;case 8:if(!(r<this.lgudata.length)){e.next=15;break}if(this.lgudata[r].id!==this.item[a].lguId){e.next=12;break}return this.item[a].lguId=this.lgudata[r].lguName,e.abrupt("break",15);case 12:r++,e.next=8;break;case 15:a++,e.next=6;break;case 18:console.log(this.item),e.next=23;break;case 21:e.prev=21,e.t0=e["catch"](0);case 23:case"end":return e.stop()}}),e,this,[[0,21]])})));function t(){return e.apply(this,arguments)}return t}(),getDate:function(e){return p()(e).format("DD/MM/YYYY")},deleteReq:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("data",t.item.id),t.item.id,e.prev=2,e.next=5,Object(g["pb"])(t.item.id);case 5:a=e.sent,a&&(this.$swal({group:"alert",type:"success",text:"You Deleted Area Successfully",duration:5e3}),this.refresh()),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),this.$toasted.error(e.t0.message.error,{duration:7e3});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));function t(t){return e.apply(this,arguments)}return t}(),getplans:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,v.a.start(),e.next=4,Object(g["a"])();case 4:t=e.sent,this.item=t.data.response.areaMaster,v.a.done(),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setTimeout((function(){location.reload()}),200);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},y=k,x=(a("3cd4"),a("5709"),a("7b60"),a("2877")),O=Object(x["a"])(y,r,n,!1,null,"3df99565",null);t["default"]=O.exports},"7b60":function(e,t,a){"use strict";var r=a("6889"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-41a15eaf-legacy.752f2a11.js.map