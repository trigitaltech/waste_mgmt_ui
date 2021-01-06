(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46a32825"],{"126e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-4"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row  justify-content-center"},[a("div",{staticClass:"col-md-5 mb-2"},[a("multiselect",{attrs:{placeholder:"Select Customer By",label:"value",options:t.customer,selected:t.customerBy},on:{update:t.updateValue},model:{value:t.customerBy,callback:function(e){t.customerBy="string"===typeof e?e.trim():e},expression:"customerBy"}})],1),a("div",{staticClass:"col-md-5 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Search query",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"col-md-1"},[a("button",{staticClass:"btn  btn-primary",attrs:{type:"submit"},on:{click:t.findCustomer}},[t._v("Search")])])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("b-tabs",{staticClass:"navtab-bg w-100",attrs:{pills:"",justified:""}},[a("b-tab",{attrs:{title:"Customer Profile",active:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 mb-2"},[a("fieldset",{staticClass:"border p-2"},[a("legend",{staticClass:"w-auto"},[a("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Personal Info")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("First Name")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter First Name",type:"text",disabled:""},domProps:{value:t.form.title+" "+t.form.firstName}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Last Name")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Last Name",type:"text",disabled:""},domProps:{value:t.form.lastName}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{placeholder:"Enter Email",disabled:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Phone Number")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Phone Number",disabled:""},domProps:{value:t.form.number}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Address Line 1")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Address",disabled:""},domProps:{value:t.form.address}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Post Code")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter PostCode",disabled:""},domProps:{value:t.form.postCode}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("City")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter State",disabled:""},domProps:{value:t.form.city}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("State")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter State",disabled:""},domProps:{value:t.form.state}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Country")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Country",disabled:""},domProps:{value:t.form.country}})])])])])]),a("div",{staticClass:"col-md-12"},[a("fieldset",{staticClass:"border p-2"},[a("legend",{staticClass:"w-auto"},[a("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Service Info")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Account No")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Account No",disabled:""},domProps:{value:t.form.accountNo}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("STB No")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter STB No",disabled:""},domProps:{value:t.form.stbNumber}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Plan Name")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Plan Name",disabled:""},domProps:{value:t.form.planName}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Plan Amount")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Plan Amount",disabled:""},domProps:{value:t.form.planAmount}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Expiry Date")]),a("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.form.expiryDate}})])])])])])]),a("hr"),a("b-tabs",{staticClass:"navtab-bg",attrs:{pills:""}},[a("b-tab",{attrs:{title:"Subscription",active:""}},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table mb-0"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Plan Description")]),a("th",{attrs:{scope:"col"}},[t._v("Status")]),a("th",{attrs:{scope:"col"}},[t._v("Start Date")]),a("th",{attrs:{scope:"col"}},[t._v("Expiry Date")]),a("th",{attrs:{scope:"col"}},[t._v("Active")])])]),a("tbody",t._l(t.customers.orderData,(function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(e.planDescription))]),a("td",[t._v(t._s(e.status))]),a("td",[t._v(t._s(t.getFormattedDate(e.startDate)))]),a("td",[t._v(t._s(t.getFormattedDate(e.endDate)))]),a("td",[a("button",{staticClass:"btn  btn-outline-primary btn-sm mr-2 d-inline-flex align-items-center",on:{click:t.refreshEntitlement}},[a("feather",{staticClass:"icon-xs mr-2",attrs:{type:"refresh-cw"}}),t._v("Refresh")],1),a("button",{staticClass:"btn  btn-outline-primary btn-sm  d-inline-flex align-items-center",on:{click:function(a){return t.topUpModal(e)}}},[a("feather",{staticClass:"icon-xs mr-2",attrs:{type:"zap"}}),t._v("Recharge")],1)])])})),0)])])]),a("b-tab",{attrs:{title:"Movies"}},[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-sm-12 col-md-12 d-flex justify-content-end"},[a("button",{staticClass:"btn  btn-primary  d-inline-flex align-items-center",on:{click:function(e){t.moviePurches=!0}}},[a("feather",{staticClass:"icon-xs mr-2",attrs:{type:"tv"}}),t._v("Movie Purchase")],1)])]),a("div",{staticClass:"row mb-md-2"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                            Show \n                            "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries\n                          ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[a("b-form-input",{staticClass:"form-control  ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),a("div",{staticClass:"table-responsive mb-0"},[a("b-table",{attrs:{"show-empty":"",items:t.movieTableData,fields:t.movieFields,responsive:!0,"per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(bookedDate)",fn:function(e){return[a("td",[t._v(t._s(t.getFormattedDate(e.item.bookedDate)))])]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])],1)],1),a("b-tab",{attrs:{title:"Transactions"}},[a("div",{staticClass:"row mb-md-2"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                        Show \n                        "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries\n                      ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[a("b-form-input",{staticClass:"form-control  ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),a("div",{staticClass:"table-responsive mb-0"},[a("b-table",{attrs:{"show-empty":"",items:t.tableData,fields:t.fields,responsive:!0,"per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(transDate)",fn:function(e){return[a("td",[t._v(t._s(t.getFormattedDate(e.item.transDate)))])]}},{key:"cell(referenceNO)",fn:function(e){return[a("td",[t._v(t._s(e.item.transactionId))])]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])],1)],1)])])])]),a("b-modal",{attrs:{title:"TopUp","title-class":"font-18"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("b-button",{attrs:{variant:"light"},on:{click:function(e){t.topUp=!1}}},[t._v("Close")]),"Online"!==t.paymentTypeSelected.value?a("b-button",{attrs:{variant:"primary"},on:{click:t.makeTopUp}},[t._v("\n        Make TopUp")]):a("b-button",{attrs:{variant:"primary"},on:{click:t.makePaymentTopUp}},[t._v("Make Payment")])]},proxy:!0}]),model:{value:t.topUp,callback:function(e){t.topUp=e},expression:"topUp"}},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Price")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Voucher Code",type:"text",disabled:""},domProps:{value:t.topUpModalItem.price}})]),a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Payment Type")]),a("multiselect",{attrs:{placeholder:"Select Movie List",options:t.paymentType,label:"value"},model:{value:t.paymentTypeSelected,callback:function(e){t.paymentTypeSelected="string"===typeof e?e.trim():e},expression:"paymentTypeSelected"}})],1),"Online"!==t.paymentTypeSelected.value?a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Voucher Code")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.voucherCode,expression:"form.voucherCode",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Voucher Code",type:"text"},domProps:{value:t.form.voucherCode},on:{input:function(e){e.target.composing||t.$set(t.form,"voucherCode",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]):t._e()]),a("b-modal",{attrs:{title:"Movie Purchase","title-class":"font-18"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("b-button",{attrs:{variant:"light"},on:{click:function(e){t.moviePurches=!1}}},[t._v("Close")]),"Online"!==t.paymentTypeSelected.value?a("b-button",{attrs:{variant:"primary",disabled:!t.selectedMovieItem},on:{click:t.makeMoviePurchase}},[t._v("Make Movie Purchase")]):a("b-button",{attrs:{variant:"primary",disabled:!t.selectedMovieItem},on:{click:t.makePayment}},[t._v("Make Payment")])]},proxy:!0}]),model:{value:t.moviePurches,callback:function(e){t.moviePurches=e},expression:"moviePurches"}},[a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Select Movie List")]),a("multiselect",{attrs:{placeholder:"Select Movie List",options:t.movieLists,label:"mediaTitle"},on:{input:t.movieChanges},model:{value:t.selectedMovieItem,callback:function(e){t.selectedMovieItem="string"===typeof e?e.trim():e},expression:"selectedMovieItem"}})],1),a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Payment Type")]),a("multiselect",{attrs:{placeholder:"Select Movie List",options:t.paymentType,label:"value"},model:{value:t.paymentTypeSelected,callback:function(e){t.paymentTypeSelected="string"===typeof e?e.trim():e},expression:"paymentTypeSelected"}})],1),"Online"===t.paymentTypeSelected.value?a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("label",{attrs:{for:"default"}},[t._v("Amount")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Amount",type:"number",disabled:""},domProps:{value:t.selectedMovieItem.moviePrice}})]):t._e(),"Online"!==t.paymentTypeSelected.value?a("div",{staticClass:"form-group mt-3 mt-sm-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"default"}},[t._v("Voucher Id")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.voucherId,expression:"form.voucherId",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Enter Voucher Id",type:"text"},domProps:{value:t.form.voucherId},on:{input:function(e){e.target.composing||t.$set(t.form,"voucherId",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"default"}},[t._v("Amount")]),a("input",{staticClass:"form-control",attrs:{placeholder:"Enter Amount",type:"number",disabled:""},domProps:{value:t.selectedMovieItem.moviePrice}})])])]):t._e()]),a("div",{style:{height:0,overflow:"hidden"}},[a("Rave",{attrs:{email:t.customers.email,amount:parseInt(t.paymentPayload.money),reference:t.paymentPayload.reference,"rave-key":t.paymentPayload.key,callback:t.callback,"redirect-url":t.paymentPayload.redirect,"customer-firstname":t.customers.firstname,"customer-lastname":t.customers.lastname,"custom-title":t.customers.displayName,close:t.close,"payment-options":"card,barter,account,ussd","hosted-payment":t.paymentPayload.hostedPayment,currency:"NGN"}},[a("i",{attrs:{id:"pay"}},[t._v("Pay")])])],1)],1)},s=[],o=a("1da1"),i=a("c2a4"),n=a("8e5f"),l=a.n(n),c=a("c1df"),d=a.n(c),u=a("323e"),m=a.n(u),p=a("ce91"),f=a.n(p),v=a("dde5"),y=a("b508"),b={page:{title:"Customer",meta:[{name:"description",content:i.description}]},components:{Multiselect:l.a,Rave:f.a},data(){return{selectedMovieItem:{contentProviderValue:"Content-1",mediaCategory:"Movie",mediaId:2,mediaTitle:"Catch.ER",moviePrice:0,releaseDate:Array[3],status:"ACTIVE"},topUpModalItem:{id:0,price:0},paymentPayload:{money:0,hostedPayment:1,key:"FLWPUBK_TEST-dbacaad48125d6a50b6a15c0df5cba58-X",reference:"",redirect:""},customer:[{key:"serial_no",value:"STB No"},{key:"account_no",value:"Customer Id"}],paymentType:[{key:"online",value:"Online"},{key:"voucher",value:"Voucher"}],paymentAmount:0,paymentTypeSelected:{key:"online",value:"Online"},query:"",customerBy:{key:"serial_no",value:"STB No"},title:"Customer",items:[{text:"Home",href:"/"},{text:"Customer",active:!0}],form:{title:"",firstName:"",middleName:"",lastName:"",gender:"",email:"",number:"",address:"",city:"",state:"",country:"",postCode:"",stbNumber:"",planName:"",expiryDate:"",planAmount:"",voucherCode:"",movieList:"",movieAmount:"",voucherId:"",accountNo:"",movieListValue:""},titles:["Mr.","Sri.","Mrs"],genderOpt:["Male","Female","Other"],bouquetsOpt:["DAFT","BASE"],movieLists:[],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{key:"transDate",sortable:!0},{key:"transactionType",sortable:!0},{key:"referenceNO",sortable:!0},{key:"amount",sortable:!0}],movieFields:[{key:"chargeCode",sortable:!0},{key:"eventName",sortable:!0},{key:"eventPrice",sortable:!0},{key:"bookedDate",sortable:!0},{key:"status",sortable:!0}],tableData:[],movieTableData:[],topUp:!1,moviePurches:!1,show:!1,customers:{email:"eb@gmail.com"},clientId:null}},computed:{getUserDetails(){return this.$store.getters["auth/loggedInDetails"]},rows(){return this.tableData.length}},mounted(){Object(v["d"])("ZGVhbGVyOmRlYWxlcg=="),this.totalRows=this.items.length},methods:{callback(t){console.log(t)},close(){console.log("Payment closed")},onFiltered(t){this.totalRows=t.length,this.currentPage=1},findCustomer(){var t=this;return Object(o["a"])((function*(){try{Object(v["d"])("ZGVhbGVyOmRlYWxlcg=="),m.a.start();const e=yield Object(y["h"])(t.customerBy.key,t.query);if(t.clientId=e.data.id,e){const a=yield Object(y["i"])(e.data.id);yield Object(y["f"])(a.data.orderData[0].planType,e.data.id),t.customers=a.data,t.pwMovieList(),t.show=!0,t.form={title:t.customers.title,firstName:t.customers.firstname,lastName:t.customers.lastname,email:t.customers.email,number:t.customers.phone,address:t.customers.address,city:t.customers.city,state:t.customers.state,country:t.customers.country,postCode:t.customers.zip,stbNumber:t.customers.hwSerialNumber,planName:t.customers.orderData[0].planDescription,expiryDate:t.getDate(t.customers.orderData[0].endDate),planAmount:t.customers.planamount,accountNo:t.customers.accountNo}}t.getTransaction(),t.getMovie(),m.a.done()}catch(e){t.$notify({group:"alert",type:"error",text:""+e.message,duration:5e3}),m.a.done()}}))()},getDate(t){let e;return void 0!==t&&(e=t[0]+"-"+t[1]+"-"+t[2]),d()(e).format("DD MMMM YYYY")},getFormattedDate(t){let e;return void 0!==t&&(e=t[0]+"-"+t[1]+"-"+t[2]),d()(e).format("MMM Do YYYY")},getTransaction(){var t=this;return Object(o["a"])((function*(){try{const e=yield Object(y["k"])(t.clientId);t.tableData=e.data.pageItems}catch(e){t.tableData=[],t.$notify({group:"alert",type:"error",text:""+e.message.defaultUserMessage,duration:5e3})}}))()},getMovie(){var t=this;return Object(o["a"])((function*(){try{const e=yield Object(y["d"])(t.clientId);t.movieTableData=e.data}catch(e){t.movieTableData=[],t.$notify({group:"alert",type:"error",text:""+e.message.defaultUserMessage,duration:5e3})}}))()},movieChanges(t){var e=this;return Object(o["a"])((function*(){e.form.movieListValue=t.mediaId}))()},pwMovieList(){var t=this;return Object(o["a"])((function*(){const e=yield Object(y["c"])();t.movieLists=e.data}))()},updateValue(t){this.customerBy=t},topUpModal(t){this.topUpModalItem=t,this.topUp=!0},makeTopUp(){var t=this;return Object(o["a"])((function*(){const e={stbNo:t.form.stbNumber,amount:"1000",itemName:"RC",paymentDetails:{paymentType:"voucherPayment",voucherId:t.form.voucherCode}};yield Object(y["j"])(t.customers.orderData[0].id,e)}))()},makeMoviePurchase(){var t=this;return Object(o["a"])((function*(){try{const e={stbNo:t.form.stbNumber,itemId:t.form.movieListValue,paymentDetails:{paymentType:"voucherPayment",voucherId:t.form.voucherId}},a=yield Object(y["e"])(t.customers.id,e);a&&t.$swal({group:"alert",type:"success",text:"You Movie Purchase Successfully",duration:5e3})}catch(e){t.$notify({group:"alert",type:"error",text:""+e.message.defaultUserMessage,duration:5e3})}}))()},makePaymentTopUp(){var t=this;return Object(o["a"])((function*(){const e={clientId:t.clientId,amount:t.topUpModalItem.price,purchaseType:"topup",stbNo:t.form.stbNumber,refId:t.topUpModalItem.id};t.paymentPayload.money=t.topUpModalItem.price;const a=yield Object(y["b"])(e),r=a.data.details.map.revorder.txId;if(r){t.paymentPayload.reference=r,t.paymentPayload.redirect=a.data.details.map.callbackUrl;const e=document.getElementById("pay");setTimeout(()=>{e.click()},1e3)}}))()},makePayment(t){var e=this;return Object(o["a"])((function*(){let t={clientId:e.clientId,amount:e.selectedMovieItem.moviePrice,purchaseType:"tvod",stbNo:e.form.stbNumber,refId:e.selectedMovieItem.mediaTitle};e.paymentPayload.money=e.selectedMovieItem.moviePrice;const a=yield Object(y["b"])(t),r=a.data.details.map.revorder.txId;if(r){e.paymentPayload.reference=r,e.paymentPayload.redirect=a.data.details.map.callbackUrl;const t=document.getElementById("pay");setTimeout(()=>{t.click()},1e3)}}))()},refreshEntitlement(){var t=this;return Object(o["a"])((function*(){const e={requestMessage:[{Activation:"true"}],requestType:"RETRACK",clientServiceId:t.customers.orderData[0].clientServiceId,type:"single",clientId:t.customers.id};yield Object(y["g"])(e)}))()}}},h=b,g=a("2877"),C=Object(g["a"])(h,r,s,!1,null,null,null);e["default"]=C.exports},b508:function(t,e,a){"use strict";a.d(e,"h",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"l",(function(){return i})),a.d(e,"i",(function(){return n})),a.d(e,"f",(function(){return l})),a.d(e,"k",(function(){return c})),a.d(e,"c",(function(){return d})),a.d(e,"d",(function(){return u})),a.d(e,"e",(function(){return m})),a.d(e,"b",(function(){return p})),a.d(e,"j",(function(){return f})),a.d(e,"g",(function(){return v}));var r=a("dde5");const s=(t,e)=>Object(r["c"])(`/clients/search/${t}?columnValue=${e}`,r["b"].GET,r["a"].NGB),o=(t,e)=>Object(r["c"])("/users/validate/"+t,r["b"].PUT,r["a"].NGB,e),i=(t,e)=>Object(r["c"])("/users/"+t,r["b"].PUT,r["a"].NGB,e),n=t=>Object(r["c"])("/clients/getclient360?key=id&value="+t,r["b"].GET,r["a"].NGB),l=(t,e)=>Object(r["c"])(`/orders/getRenewalOrderByClient?planType=${t}&clientId=${e}`,r["b"].GET,r["a"].NGB),c=(t,e,a)=>Object(r["c"])(`/transactionhistory/${t}?fromDate=${e}&limit=14&offset=0&toDate=${a}`,r["b"].GET,r["a"].NGB),d=()=>Object(r["c"])("/assets/mediadata",r["b"].GET,r["a"].NGB),u=t=>Object(r["c"])("/eventorder?clientId="+t,r["b"].GET,r["a"].NGB),m=(t,e)=>Object(r["c"])("/orders/TOVDtopUp",r["b"].POST,r["a"].NGB,e),p=t=>Object(r["c"])("/revpay/createorder",r["b"].POST,r["a"].NGB,t),f=(t,e)=>Object(r["c"])("/orders/topUp/"+t,r["b"].POST,r["a"].NGB,e),v=t=>Object(r["c"])("/orders/retrackOsdmessage",r["b"].POST,r["a"].NGB,t)},ce91:function(t,e,a){!function(e,a){t.exports=a()}(window,(function(){return a={},t.m=e=[function(t,e,a){var r=a(2);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,a(5).default)("7ce5ac5d",r,!0,{})},function(t,e,a){"use strict";a(0)},function(t,e,a){(t.exports=a(3)(!1)).push([t.i,"\n.payButton{\n    color: #61DAFB;\n    width: 250px;\n    height: 50px;\n    font-weight: 800;\n}\n",""])},function(t){"use strict";function e(t,e){var a=t[1]||"",r=t[3];if(!r)return a;if(e&&"function"==typeof btoa){var s=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t))));return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e)," */")}(r),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[a].concat(o).concat([s]).join("\n")}return""+a}t.exports=function(t){var a=[];return a.toString=function(){return this.map((function(a){var r=e(a,t);return a[2]?"@media ".concat(a[2],"{").concat(r,"}"):r})).join("")},a.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var o=this[s][0];null!=o&&(r[o]=!0)}for(var i=0;i<t.length;i++){var n=t[i];null!=n[0]&&r[n[0]]||(e&&!n[2]?n[2]=e:e&&(n[2]="(".concat(n[2],") and (").concat(e,")")),a.push(n))}},a}},function(t,e,a){"use strict";a.r(e);var r={props:{styleClass:{type:String,default:"payButton"},email:{type:String,required:!0},amount:{type:Number,required:!0},raveKey:{type:String,required:!0},reference:{type:String,required:!0},callback:{type:Function,required:!0,default:function(){}},close:{type:Function,required:!0,default:function(){}},metadata:{type:Array,default:function(){return[]}},currency:{type:String,default:"NGN"},country:{type:String,default:"NG"},customerFirstname:{type:String,default:""},customerLastname:{type:String,default:""},customTitle:{type:String,default:""},customDescription:{type:String,default:""},customLogo:{type:String,default:""},redirectUrl:{type:String,default:""},paymentOptions:{type:String,default:"card"},paymentPlan:{type:Number,default:0},hostedPayment:{type:Number,default:0},subaccounts:{type:Array,default:function(){return[]}}},created:function(){var t=document.createElement("script");t.src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js",document.getElementsByTagName("head")[0].appendChild(t)},methods:{payWithRave:function(){var t=this;window.getpaidSetup({customer_email:this.email,amount:this.amount,txref:this.reference,PBFPubKey:this.raveKey,onclose:function(){return t.close()},callback:function(e){return t.callback(e)},meta:this.metadata,currency:this.currency,country:this.country,customer_firstname:this.customerFirstname,customer_lastname:this.customerLastname,custom_title:this.customTitle,custom_logo:this.customLogo,redirect_url:this.redirectUrl,payment_plan:this.paymentPlan,payment_options:this.paymentOptions,subaccounts:this.subaccounts,hosted_payment:this.hostedPayment})}}},s=(a(1),function(t,e,a,r,s,o,i,n){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),i?c._ssrRegister=l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)}:s&&(l=n?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}(r,(function(){var t=this;return(t._self._c||t.$createElement)("button",{class:t.styleClass,on:{click:t.payWithRave}},[t._t("default",[t._v("Make Payment")])],2)}),[],!1,null,null,null));e.default=s.exports},function(t,e,a){"use strict";function r(t,e){for(var a=[],r={},s=0;s<e.length;s++){var o=e[s],i=o[0],n={id:t+":"+s,css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(n):a.push(r[i]={id:i,parts:[n]})}return a}function s(t,e,a,s){v=a,b=s||{};var i=r(t,e);return o(i),function(e){for(var a=[],s=0;s<i.length;s++)(n=u[i[s].id]).refs--,a.push(n);for(e?o(i=r(t,e)):i=[],s=0;s<a.length;s++){var n;if(0===(n=a[s]).refs){for(var l=0;l<n.parts.length;l++)n.parts[l]();delete u[n.id]}}}}function o(t){for(var e=0;e<t.length;e++){var a=t[e],r=u[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(n(a.parts[s]));a.parts.length<r.parts.length&&(r.parts.length=a.parts.length)}else{var o=[];for(s=0;s<a.parts.length;s++)o.push(n(a.parts[s]));u[a.id]={id:a.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",m.appendChild(t),t}function n(t){var e,a,r=document.querySelector("style["+h+'~="'+t.id+'"]');if(r){if(v)return y;r.parentNode.removeChild(r)}if(g){var s=f++;r=p=p||i(),e=l.bind(null,r,s,!1),a=l.bind(null,r,s,!0)}else r=i(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),b.ssrId&&t.setAttribute(h,e.id),s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}function l(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=C(e,s);else{var o=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}a.r(e),a.d(e,"default",(function(){return s}));var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d,u={},m=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,y=function(){},b=null,h="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),C=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")})}],t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)t.d(r,s,function(t){return e[t]}.bind(null,s));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="/dist/",t(t.s=4);function t(r){if(a[r])return a[r].exports;var s=a[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var e,a}))}}]);
//# sourceMappingURL=chunk-46a32825.d791998e.js.map