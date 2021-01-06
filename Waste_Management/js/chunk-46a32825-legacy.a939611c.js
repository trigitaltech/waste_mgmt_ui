(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46a32825"],{"126e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-4"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row  justify-content-center"},[a("div",{staticClass:"col-md-5 mb-2"},[a("multiselect",{attrs:{placeholder:"Select Customer By",label:"value",options:t.customer,selected:t.customerBy},on:{update:t.updateValue},model:{value:t.customerBy,callback:function(e){t.customerBy="string"===typeof e?e.trim():e},expression:"customerBy"}})],1),a("div",{staticClass:"col-md-5 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Search query",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"col-md-1"},[a("button",{staticClass:"btn  btn-primary",attrs:{type:"submit"},on:{click:t.findCustomer}},[t._v("Search")])])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("b-tabs",{staticClass:"navtab-bg w-100",attrs:{pills:"",justified:""}},[a("b-tab",{attrs:{title:"Customer Profile",active:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 mb-2"},[a("fieldset",{staticClass:"border p-2"},[a("legend",{staticClass:"w-auto"},[a("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Personal Info")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("First Name")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter First Name",type:"text",disabled:""},domProps:{value:t.form.title+" "+t.form.firstName}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Last Name")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Last Name",type:"text",disabled:""},domProps:{value:t.form.lastName}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{placeholder:"Enter Email",disabled:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Phone Number")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Phone Number",disabled:""},domProps:{value:t.form.number}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Address Line 1")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Address",disabled:""},domProps:{value:t.form.address}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Post Code")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter PostCode",disabled:""},domProps:{value:t.form.postCode}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("City")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter State",disabled:""},domProps:{value:t.form.city}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("State")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter State",disabled:""},domProps:{value:t.form.state}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Country")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Country",disabled:""},domProps:{value:t.form.country}})])])])])]),a("div",{staticClass:"col-md-12"},[a("fieldset",{staticClass:"border p-2"},[a("legend",{staticClass:"w-auto"},[a("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Service Info")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Account No")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Account No",disabled:""},domProps:{value:t.form.accountNo}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("STB No")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter STB No",disabled:""},domProps:{value:t.form.stbNumber}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Plan Name")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Plan Name",disabled:""},domProps:{value:t.form.planName}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Plan Amount")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Plan Amount",disabled:""},domProps:{value:t.form.planAmount}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Expiry Date")]),a("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.form.expiryDate}})])])])])])]),a("hr"),a("b-tabs",{staticClass:"navtab-bg",attrs:{pills:""}},[a("b-tab",{attrs:{title:"Subscription",active:""}},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table mb-0"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Plan Description")]),a("th",{attrs:{scope:"col"}},[t._v("Status")]),a("th",{attrs:{scope:"col"}},[t._v("Start Date")]),a("th",{attrs:{scope:"col"}},[t._v("Expiry Date")]),a("th",{attrs:{scope:"col"}},[t._v("Active")])])]),a("tbody",t._l(t.customers.orderData,(function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(e.planDescription))]),a("td",[t._v(t._s(e.status))]),a("td",[t._v(t._s(t.getFormattedDate(e.startDate)))]),a("td",[t._v(t._s(t.getFormattedDate(e.endDate)))]),a("td",[a("button",{staticClass:"btn  btn-outline-primary btn-sm mr-2 d-inline-flex align-items-center",on:{click:t.refreshEntitlement}},[a("feather",{staticClass:"icon-xs mr-2",attrs:{type:"refresh-cw"}}),t._v("Refresh")],1),a("button",{staticClass:"btn  btn-outline-primary btn-sm  d-inline-flex align-items-center",on:{click:function(a){return t.topUpModal(e)}}},[a("feather",{staticClass:"icon-xs mr-2",attrs:{type:"zap"}}),t._v("Recharge")],1)])])})),0)])])]),a("b-tab",{attrs:{title:"Movies"}},[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-sm-12 col-md-12 d-flex justify-content-end"},[a("button",{staticClass:"btn  btn-primary  d-inline-flex align-items-center",on:{click:function(e){t.moviePurches=!0}}},[a("feather",{staticClass:"icon-xs mr-2",attrs:{type:"tv"}}),t._v("Movie Purchase")],1)])]),a("div",{staticClass:"row mb-md-2"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                            Show \n                            "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries\n                          ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[a("b-form-input",{staticClass:"form-control  ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),a("div",{staticClass:"table-responsive mb-0"},[a("b-table",{attrs:{"show-empty":"",items:t.movieTableData,fields:t.movieFields,responsive:!0,"per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(bookedDate)",fn:function(e){return[a("td",[t._v(t._s(t.getFormattedDate(e.item.bookedDate)))])]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])],1)],1),a("b-tab",{attrs:{title:"Transactions"}},[a("div",{staticClass:"row mb-md-2"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                        Show \n                        "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries\n                      ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[a("b-form-input",{staticClass:"form-control  ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),a("div",{staticClass:"table-responsive mb-0"},[a("b-table",{attrs:{"show-empty":"",items:t.tableData,fields:t.fields,responsive:!0,"per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(transDate)",fn:function(e){return[a("td",[t._v(t._s(t.getFormattedDate(e.item.transDate)))])]}},{key:"cell(referenceNO)",fn:function(e){return[a("td",[t._v(t._s(e.item.transactionId))])]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])],1)],1)])])])]),a("b-modal",{attrs:{title:"TopUp","title-class":"font-18"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("b-button",{attrs:{variant:"light"},on:{click:function(e){t.topUp=!1}}},[t._v("Close")]),"Online"!==t.paymentTypeSelected.value?a("b-button",{attrs:{variant:"primary"},on:{click:t.makeTopUp}},[t._v("\n        Make TopUp")]):a("b-button",{attrs:{variant:"primary"},on:{click:t.makePaymentTopUp}},[t._v("Make Payment")])]},proxy:!0}]),model:{value:t.topUp,callback:function(e){t.topUp=e},expression:"topUp"}},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Price")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Voucher Code",type:"text",disabled:""},domProps:{value:t.topUpModalItem.price}})]),a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Payment Type")]),a("multiselect",{attrs:{placeholder:"Select Movie List",options:t.paymentType,label:"value"},model:{value:t.paymentTypeSelected,callback:function(e){t.paymentTypeSelected="string"===typeof e?e.trim():e},expression:"paymentTypeSelected"}})],1),"Online"!==t.paymentTypeSelected.value?a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Voucher Code")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.voucherCode,expression:"form.voucherCode",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Voucher Code",type:"text"},domProps:{value:t.form.voucherCode},on:{input:function(e){e.target.composing||t.$set(t.form,"voucherCode",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]):t._e()]),a("b-modal",{attrs:{title:"Movie Purchase","title-class":"font-18"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("b-button",{attrs:{variant:"light"},on:{click:function(e){t.moviePurches=!1}}},[t._v("Close")]),"Online"!==t.paymentTypeSelected.value?a("b-button",{attrs:{variant:"primary",disabled:!t.selectedMovieItem},on:{click:t.makeMoviePurchase}},[t._v("Make Movie Purchase")]):a("b-button",{attrs:{variant:"primary",disabled:!t.selectedMovieItem},on:{click:t.makePayment}},[t._v("Make Payment")])]},proxy:!0}]),model:{value:t.moviePurches,callback:function(e){t.moviePurches=e},expression:"moviePurches"}},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Select Movie List")]),a("multiselect",{attrs:{placeholder:"Select Movie List",options:t.movieLists,label:"mediaTitle"},on:{input:t.movieChanges},model:{value:t.selectedMovieItem,callback:function(e){t.selectedMovieItem="string"===typeof e?e.trim():e},expression:"selectedMovieItem"}})],1),a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Payment Type")]),a("multiselect",{attrs:{placeholder:"Select Movie List",options:t.paymentType,label:"value"},model:{value:t.paymentTypeSelected,callback:function(e){t.paymentTypeSelected="string"===typeof e?e.trim():e},expression:"paymentTypeSelected"}})],1),"Online"===t.paymentTypeSelected.value?a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Amount")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Amount",type:"number",disabled:""},domProps:{value:t.selectedMovieItem.moviePrice}})]):t._e(),"Online"!==t.paymentTypeSelected.value?a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"default"}},[t._v("Voucher Id")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.voucherId,expression:"form.voucherId",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Voucher Id",type:"text"},domProps:{value:t.form.voucherId},on:{input:function(e){e.target.composing||t.$set(t.form,"voucherId",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"default"}},[t._v("Amount")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Amount",type:"number",disabled:""},domProps:{value:t.selectedMovieItem.moviePrice}})])])]):t._e()]),a("div",{style:{height:0,overflow:"hidden"}},[a("Rave",{attrs:{email:t.customers.email,amount:parseInt(t.paymentPayload.money),reference:t.paymentPayload.reference,"rave-key":t.paymentPayload.key,callback:t.callback,"redirect-url":t.paymentPayload.redirect,"customer-firstname":t.customers.firstname,"customer-lastname":t.customers.lastname,"custom-title":t.customers.displayName,close:t.close,"payment-options":"card,barter,account,ussd","hosted-payment":t.paymentPayload.hostedPayment,currency:"NGN"}},[a("i",{attrs:{id:"pay"}},[t._v("Pay")])])],1)],1)},s=[],n=(a("96cf"),a("1da1")),o=a("c2a4"),i=a("8e5f"),c=a.n(i),l=a("c1df"),u=a.n(l),d=a("323e"),m=a.n(d),p=a("ce91"),f=a.n(p),v=a("dde5"),h=a("b508"),y={page:{title:"Customer",meta:[{name:"description",content:o.description}]},components:{Multiselect:c.a,Rave:f.a},data:function(){return{selectedMovieItem:{contentProviderValue:"Content-1",mediaCategory:"Movie",mediaId:2,mediaTitle:"Catch.ER",moviePrice:0,releaseDate:Array[3],status:"ACTIVE"},topUpModalItem:{id:0,price:0},paymentPayload:{money:0,hostedPayment:1,key:"FLWPUBK_TEST-dbacaad48125d6a50b6a15c0df5cba58-X",reference:"",redirect:""},customer:[{key:"serial_no",value:"STB No"},{key:"account_no",value:"Customer Id"}],paymentType:[{key:"online",value:"Online"},{key:"voucher",value:"Voucher"}],paymentAmount:0,paymentTypeSelected:{key:"online",value:"Online"},query:"",customerBy:{key:"serial_no",value:"STB No"},title:"Customer",items:[{text:"Home",href:"/"},{text:"Customer",active:!0}],form:{title:"",firstName:"",middleName:"",lastName:"",gender:"",email:"",number:"",address:"",city:"",state:"",country:"",postCode:"",stbNumber:"",planName:"",expiryDate:"",planAmount:"",voucherCode:"",movieList:"",movieAmount:"",voucherId:"",accountNo:"",movieListValue:""},titles:["Mr.","Sri.","Mrs"],genderOpt:["Male","Female","Other"],bouquetsOpt:["DAFT","BASE"],movieLists:[],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{key:"transDate",sortable:!0},{key:"transactionType",sortable:!0},{key:"referenceNO",sortable:!0},{key:"amount",sortable:!0}],movieFields:[{key:"chargeCode",sortable:!0},{key:"eventName",sortable:!0},{key:"eventPrice",sortable:!0},{key:"bookedDate",sortable:!0},{key:"status",sortable:!0}],tableData:[],movieTableData:[],topUp:!1,moviePurches:!1,show:!1,customers:{email:"eb@gmail.com"},clientId:null}},computed:{getUserDetails:function(){return this.$store.getters["auth/loggedInDetails"]},rows:function(){return this.tableData.length}},mounted:function(){Object(v["d"])("ZGVhbGVyOmRlYWxlcg=="),this.totalRows=this.items.length},methods:{callback:function(t){console.log(t)},close:function(){console.log("Payment closed")},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},findCustomer:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,Object(v["d"])("ZGVhbGVyOmRlYWxlcg=="),m.a.start(),t.next=5,Object(h["h"])(this.customerBy.key,this.query);case 5:if(e=t.sent,this.clientId=e.data.id,!e){t.next=17;break}return t.next=10,Object(h["i"])(e.data.id);case 10:return a=t.sent,t.next=13,Object(h["f"])(a.data.orderData[0].planType,e.data.id);case 13:this.customers=a.data,this.pwMovieList(),this.show=!0,this.form={title:this.customers.title,firstName:this.customers.firstname,lastName:this.customers.lastname,email:this.customers.email,number:this.customers.phone,address:this.customers.address,city:this.customers.city,state:this.customers.state,country:this.customers.country,postCode:this.customers.zip,stbNumber:this.customers.hwSerialNumber,planName:this.customers.orderData[0].planDescription,expiryDate:this.getDate(this.customers.orderData[0].endDate),planAmount:this.customers.planamount,accountNo:this.customers.accountNo};case 17:this.getTransaction(),this.getMovie(),m.a.done(),t.next=26;break;case 22:t.prev=22,t.t0=t["catch"](0),this.$notify({group:"alert",type:"error",text:"".concat(t.t0.message),duration:5e3}),m.a.done();case 26:case"end":return t.stop()}}),t,this,[[0,22]])})));function e(){return t.apply(this,arguments)}return e}(),getDate:function(t){var e;return void 0!==t&&(e=t[0]+"-"+t[1]+"-"+t[2]),u()(e).format("DD MMMM YYYY")},getFormattedDate:function(t){var e;return void 0!==t&&(e=t[0]+"-"+t[1]+"-"+t[2]),u()(e).format("MMM Do YYYY")},getTransaction:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h["k"])(this.clientId);case 3:e=t.sent,this.tableData=e.data.pageItems,t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),this.tableData=[],this.$notify({group:"alert",type:"error",text:"".concat(t.t0.message.defaultUserMessage),duration:5e3});case 11:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),getMovie:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h["d"])(this.clientId);case 3:e=t.sent,this.movieTableData=e.data,t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),this.movieTableData=[],this.$notify({group:"alert",type:"error",text:"".concat(t.t0.message.defaultUserMessage),duration:5e3});case 11:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),movieChanges:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.form.movieListValue=e.mediaId;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),pwMovieList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["c"])();case 2:e=t.sent,this.movieLists=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateValue:function(t){this.customerBy=t},topUpModal:function(t){this.topUpModalItem=t,this.topUp=!0},makeTopUp:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={stbNo:this.form.stbNumber,amount:"1000",itemName:"RC",paymentDetails:{paymentType:"voucherPayment",voucherId:this.form.voucherCode}},t.next=3,Object(h["j"])(this.customers.orderData[0].id,e);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),makeMoviePurchase:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={stbNo:this.form.stbNumber,itemId:this.form.movieListValue,paymentDetails:{paymentType:"voucherPayment",voucherId:this.form.voucherId}},t.next=4,Object(h["e"])(this.customers.id,e);case 4:a=t.sent,a&&this.$swal({group:"alert",type:"success",text:"You Movie Purchase Successfully",duration:5e3}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$notify({group:"alert",type:"error",text:"".concat(t.t0.message.defaultUserMessage),duration:5e3});case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),makePaymentTopUp:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={clientId:this.clientId,amount:this.topUpModalItem.price,purchaseType:"topup",stbNo:this.form.stbNumber,refId:this.topUpModalItem.id},this.paymentPayload.money=this.topUpModalItem.price,t.next=4,Object(h["b"])(e);case 4:a=t.sent,r=a.data.details.map.revorder.txId,r&&(this.paymentPayload.reference=r,this.paymentPayload.redirect=a.data.details.map.callbackUrl,s=document.getElementById("pay"),setTimeout((function(){s.click()}),1e3));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),makePayment:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={clientId:this.clientId,amount:this.selectedMovieItem.moviePrice,purchaseType:"tvod",stbNo:this.form.stbNumber,refId:this.selectedMovieItem.mediaTitle},this.paymentPayload.money=this.selectedMovieItem.moviePrice,t.next=4,Object(h["b"])(a);case 4:r=t.sent,s=r.data.details.map.revorder.txId,s&&(this.paymentPayload.reference=s,this.paymentPayload.redirect=r.data.details.map.callbackUrl,n=document.getElementById("pay"),setTimeout((function(){n.click()}),1e3));case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),refreshEntitlement:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={requestMessage:[{Activation:"true"}],requestType:"RETRACK",clientServiceId:this.customers.orderData[0].clientServiceId,type:"single",clientId:this.customers.id},t.next=3,Object(h["g"])(e);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},b=y,g=a("2877"),C=Object(g["a"])(b,r,s,!1,null,null,null);e["default"]=C.exports},b508:function(t,e,a){"use strict";a.d(e,"h",(function(){return s})),a.d(e,"a",(function(){return n})),a.d(e,"l",(function(){return o})),a.d(e,"i",(function(){return i})),a.d(e,"f",(function(){return c})),a.d(e,"k",(function(){return l})),a.d(e,"c",(function(){return u})),a.d(e,"d",(function(){return d})),a.d(e,"e",(function(){return m})),a.d(e,"b",(function(){return p})),a.d(e,"j",(function(){return f})),a.d(e,"g",(function(){return v}));var r=a("dde5"),s=function(t,e){return Object(r["c"])("/clients/search/".concat(t,"?columnValue=").concat(e),r["b"].GET,r["a"].NGB)},n=function(t,e){return Object(r["c"])("/users/validate/".concat(t),r["b"].PUT,r["a"].NGB,e)},o=function(t,e){return Object(r["c"])("/users/".concat(t),r["b"].PUT,r["a"].NGB,e)},i=function(t){return Object(r["c"])("/clients/getclient360?key=id&value=".concat(t),r["b"].GET,r["a"].NGB)},c=function(t,e){return Object(r["c"])("/orders/getRenewalOrderByClient?planType=".concat(t,"&clientId=").concat(e),r["b"].GET,r["a"].NGB)},l=function(t,e,a){return Object(r["c"])("/transactionhistory/".concat(t,"?fromDate=").concat(e,"&limit=14&offset=0&toDate=").concat(a),r["b"].GET,r["a"].NGB)},u=function(){return Object(r["c"])("/assets/mediadata",r["b"].GET,r["a"].NGB)},d=function(t){return Object(r["c"])("/eventorder?clientId=".concat(t),r["b"].GET,r["a"].NGB)},m=function(t,e){return Object(r["c"])("/orders/TOVDtopUp",r["b"].POST,r["a"].NGB,e)},p=function(t){return Object(r["c"])("/revpay/createorder",r["b"].POST,r["a"].NGB,t)},f=function(t,e){return Object(r["c"])("/orders/topUp/".concat(t),r["b"].POST,r["a"].NGB,e)},v=function(t){return Object(r["c"])("/orders/retrackOsdmessage",r["b"].POST,r["a"].NGB,t)}},ce91:function(t,e,a){!function(e,a){t.exports=a()}(window,(function(){return a={},t.m=e=[function(t,e,a){var r=a(2);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,a(5).default)("7ce5ac5d",r,!0,{})},function(t,e,a){"use strict";a(0)},function(t,e,a){(t.exports=a(3)(!1)).push([t.i,"\n.payButton{\n    color: #61DAFB;\n    width: 250px;\n    height: 50px;\n    font-weight: 800;\n}\n",""])},function(t){"use strict";function e(t,e){var a=t[1]||"",r=t[3];if(!r)return a;if(e&&"function"==typeof btoa){var s=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t))));return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e)," */")}(r),n=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[a].concat(n).concat([s]).join("\n")}return""+a}t.exports=function(t){var a=[];return a.toString=function(){return this.map((function(a){var r=e(a,t);return a[2]?"@media ".concat(a[2],"{").concat(r,"}"):r})).join("")},a.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var n=this[s][0];null!=n&&(r[n]=!0)}for(var o=0;o<t.length;o++){var i=t[o];null!=i[0]&&r[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="(".concat(i[2],") and (").concat(e,")")),a.push(i))}},a}},function(t,e,a){"use strict";a.r(e);var r={props:{styleClass:{type:String,default:"payButton"},email:{type:String,required:!0},amount:{type:Number,required:!0},raveKey:{type:String,required:!0},reference:{type:String,required:!0},callback:{type:Function,required:!0,default:function(){}},close:{type:Function,required:!0,default:function(){}},metadata:{type:Array,default:function(){return[]}},currency:{type:String,default:"NGN"},country:{type:String,default:"NG"},customerFirstname:{type:String,default:""},customerLastname:{type:String,default:""},customTitle:{type:String,default:""},customDescription:{type:String,default:""},customLogo:{type:String,default:""},redirectUrl:{type:String,default:""},paymentOptions:{type:String,default:"card"},paymentPlan:{type:Number,default:0},hostedPayment:{type:Number,default:0},subaccounts:{type:Array,default:function(){return[]}}},created:function(){var t=document.createElement("script");t.src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js",document.getElementsByTagName("head")[0].appendChild(t)},methods:{payWithRave:function(){var t=this;window.getpaidSetup({customer_email:this.email,amount:this.amount,txref:this.reference,PBFPubKey:this.raveKey,onclose:function(){return t.close()},callback:function(e){return t.callback(e)},meta:this.metadata,currency:this.currency,country:this.country,customer_firstname:this.customerFirstname,customer_lastname:this.customerLastname,custom_title:this.customTitle,custom_logo:this.customLogo,redirect_url:this.redirectUrl,payment_plan:this.paymentPlan,payment_options:this.paymentOptions,subaccounts:this.subaccounts,hosted_payment:this.hostedPayment})}}},s=(a(1),function(t,e,a,r,s,n,o,i){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),r&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),o?l._ssrRegister=c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)}:s&&(c=i?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}(r,(function(){var t=this;return(t._self._c||t.$createElement)("button",{class:t.styleClass,on:{click:t.payWithRave}},[t._t("default",[t._v("Make Payment")])],2)}),[],!1,null,null,null));e.default=s.exports},function(t,e,a){"use strict";function r(t,e){for(var a=[],r={},s=0;s<e.length;s++){var n=e[s],o=n[0],i={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[o]?r[o].parts.push(i):a.push(r[o]={id:o,parts:[i]})}return a}function s(t,e,a,s){v=a,y=s||{};var o=r(t,e);return n(o),function(e){for(var a=[],s=0;s<o.length;s++)(i=d[o[s].id]).refs--,a.push(i);for(e?n(o=r(t,e)):o=[],s=0;s<a.length;s++){var i;if(0===(i=a[s]).refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete d[i.id]}}}}function n(t){for(var e=0;e<t.length;e++){var a=t[e],r=d[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(i(a.parts[s]));a.parts.length<r.parts.length&&(r.parts.length=a.parts.length)}else{var n=[];for(s=0;s<a.parts.length;s++)n.push(i(a.parts[s]));d[a.id]={id:a.id,refs:1,parts:n}}}}function o(){var t=document.createElement("style");return t.type="text/css",m.appendChild(t),t}function i(t){var e,a,r=document.querySelector("style["+b+'~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var s=f++;r=p=p||o(),e=c.bind(null,r,s,!1),a=c.bind(null,r,s,!0)}else r=o(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),y.ssrId&&t.setAttribute(b,e.id),s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}function c(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=C(e,s);else{var n=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(n,o[e]):t.appendChild(n)}}a.r(e),a.d(e,"default",(function(){return s}));var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u,d={},m=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,h=function(){},y=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),C=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")})}],t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)t.d(r,s,function(t){return e[t]}.bind(null,s));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="/dist/",t(t.s=4);function t(r){if(a[r])return a[r].exports;var s=a[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var e,a}))}}]);
//# sourceMappingURL=chunk-46a32825-legacy.a939611c.js.map