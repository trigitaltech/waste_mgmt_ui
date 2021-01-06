(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-559734c4"],{"02b4":function(e,t,i){"use strict";var a=i("eb33"),r=i.n(a);r.a},c269:function(e,t,i){"use strict";var a=i("e535"),r=i.n(a);r.a},e535:function(e,t,i){},e9c0:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("PageHeader",{attrs:{items:e.items}}),i("div",{staticClass:"animated"},[i("b-card",{staticClass:"mt-10 ml-10 mr-10 mx-auto",attrs:{header:"Edit Servicerequest Truck"}},[i("div",{staticClass:"mt-1"},[i("div",{staticClass:"mx-xl-5"},[i("div",{staticClass:"card-body"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.update()}}},[i("b-row",[i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("Driver Time IN")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.drivertimein,expression:"drivertimein"}],staticClass:"form-control",attrs:{name:"body",placeholder:"Enter Driver Time In"},domProps:{value:e.drivertimein},on:{input:function(t){t.target.composing||(e.drivertimein=t.target.value)}}})]),i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("DISTANCE (KMS)")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.distancekms,expression:"distancekms"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter distancekms"},domProps:{value:e.distancekms},on:{input:function(t){t.target.composing||(e.distancekms=t.target.value)}}})])],1),i("b-row",[i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Equipment Used")]),i("multiselect",{attrs:{multiple:!0,options:e.equip},on:{input:e.getequipCode},model:{value:e.equipmentused,callback:function(t){e.equipmentused=t},expression:"equipmentused"}})],1),i("b-col")],1),i("br"),e._l(e.inputs,(function(t,a){return i("b-row",{key:a},[i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("\n                    Time In")]),i("datetime",{attrs:{format:{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit"},type:"datetime",placeholder:"SELECT Time"},model:{value:t.timeIn,callback:function(i){e.$set(t,"timeIn",i)},expression:"input.timeIn"}})],1),i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("\n                    Time Out")]),i("datetime",{attrs:{format:{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit"},type:"datetime",placeholder:"SELECT Time"},model:{value:t.timeOut,callback:function(i){e.$set(t,"timeOut",i)},expression:"input.timeOut"}})],1),i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("\n                    Duration")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"input.duration"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter duration"},domProps:{value:t.duration},on:{input:function(i){i.target.composing||e.$set(t,"duration",i.target.value)}}})]),i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardNameEx"}},[e._v("\n                    Buckets Loaded")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bucketLoaded,expression:"input.bucketLoaded"}],staticClass:"form-control",attrs:{id:"defaultFormCardtextEx",type:"text",placeholder:"Enter bucketsloaded"},domProps:{value:t.bucketLoaded},on:{input:function(i){i.target.composing||e.$set(t,"bucketLoaded",i.target.value)}}})]),i("b-col",[i("span",[i("i",{directives:[{name:"show",rawName:"v-show",value:a||!a&&e.inputs.length>1,expression:"k || (!k && inputs.length > 1)"}],staticClass:"fas fa-minus-circle",on:{click:function(t){return e.remove(a)}}}),i("br"),i("i",{directives:[{name:"show",rawName:"v-show",value:a==e.inputs.length-1,expression:"k == inputs.length - 1"}],staticClass:"fas fa-plus-circle",staticStyle:{width:"50px"},on:{click:function(t){return e.add(a)}}})])])],1)})),i("br"),i("b-row",[i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Verified BY")]),i("b-form-select",{staticClass:"form-control",attrs:{options:e.checkerListNames},on:{change:e.getCheckerId},model:{value:e.verifiedby,callback:function(t){e.verifiedby="string"===typeof t?t.trim():t},expression:"verifiedby"}})],1),i("b-col")],1),i("b-row",[i("b-col",[i("label",{staticClass:"grey-text font-weight-dark",attrs:{for:"defaultFormCardtextEx"}},[e._v("Dispatched BY")]),i("multiselect",{attrs:{multiple:!0,options:e.dispatcherListNames},on:{input:e.getdispatchid},model:{value:e.dispatchedby,callback:function(t){e.dispatchedby=t},expression:"dispatchedby"}})],1),i("b-col")],1),i("br"),i("button",{staticClass:"btn btn-custome float-right btn-secondary mb-3",attrs:{type:"submit"}},[e._v("Submit")])],2)])])])])],1)],1)},r=[],s=i("1da1"),n=i("2b0e"),o=i("c2a4"),c=i("444f"),u=i("2579"),l=(i("323e"),i("fea2")),d=i("859b"),m=i("8e5f"),p=i.n(m),h=i("c1df"),v=i.n(h),g=i("6bf2");n["default"].component("multiselect",p.a);var b={page:{title:"Edit Servicerequest Truck",meta:[{name:"description",content:o.description}]},data(){return{inputs:[{name:""}],items:[{text:"Servicerequests",href:"/"},{text:"Servicerequest Trucks",href:"#/Servicerequest/Truck"},{text:"Edit SR Truck",active:!0}],areadata:[],areaarray:"",routedate:[],routearray:[],emp:[],controlno:"",area:"",route:"",driver:"",contractor:"",collector:null,lgu:"",plate:"",plates:[],body:"",tripDate:"",trucktype:"",driverid:"",startTime:"",drivers:[],helpers:[],vehicles:[],servingAreas:[],route:"",driver:"",helper:null,servingRoutes:[],driverList:[],checkerListNames:[],hauler:"",haulerList:[],contractorList:[],paleroList:[],garbage:null,lgu:null,equip:[],equipments:[],equipmentused:"",drivertimein:"",distancekms:"",equipmentarray:[],verifiedby:"",dispatchedby:"",inputs:[{timeIn:"",timeOut:"",duration:"",bucketLoaded:""}],loginlguid:"",checkerList:[],dispatcherListNames:[],dispatcherlist:[],dispatchId:"",checkerId:""}},components:{Layout:c["a"],PageHeader:u["a"],VueTimepicker:l["a"],Multiselect:p.a,datetime:d["Datetime"]},computed:{getUserDetails(){return this.$store.getters["auth/loggedInDetails"]}},mounted(){this.tripDate=v()(new Date).format("DD-MM-YYYY"),this.drivertimein=new Date,console.log(this.tripDate+" "+this.startTime),this.getLgu(),this.getequipments(),this.getvolume(),this.getvolume1()},methods:{getLgu(){var e=this;return Object(s["a"])((function*(){const t=JSON.parse(localStorage.getItem("auth.currentUser"));e.loginlguid=t.lguemployee.lguId,e.dispatcherid=t.user.id,e.dispatchername=t.user.userName}))()},getvolume(){var e=this;return Object(s["a"])((function*(){try{var t="VOLUME_CHECKER";const i=yield Object(g["yc"])(e.loginlguid,t);e.checkerList=i.data.response.result,e.checkerList.map(t=>{e.checkerListNames.push(t.userName)})}catch(i){console.log(i)}}))()},getvolume1(){var e=this;return Object(s["a"])((function*(){try{var t="ENCODER";const i=yield Object(g["yc"])(e.loginlguid,t);e.dispatcherlist=i.data.response.result,e.dispatcherlist.map(t=>{e.dispatcherListNames.push(t.userName)})}catch(i){console.log(i)}}))()},add(){this.inputs.push({timeIn:"",timeOut:"",duration:"",bucketLoaded:""}),console.log(this.inputs)},remove(e){this.inputs.splice(e,1)},getequipments(){var e=this;return Object(s["a"])((function*(){const t=yield Object(g["ec"])();e.equipments=t.data.response.equipment,e.equipments.map(t=>{e.equip.push(t.equipmentNo)})}))()},getequipCode(){console.log("hai",this.equipmentused),this.equipmentarray=[];for(var e=0;e<this.equipmentused.length;e++)this.equipments.map(t=>{this.equipmentused[e]===t.equipmentNo&&(this.equipmentarray.push({equipment:t.id}),console.log("routedata",this.equipmentarray))})},getCheckerId(){this.checkerList.map(e=>{this.verifiedby==e.userName&&(this.checkerId=e.id)})},getdispatchid(){this.dispatcherlist.map(e=>{this.dispatchedby==e.userName&&(this.dispatchId=e.id)})},update(){var e=this;return Object(s["a"])((function*(){console.log("second");try{let t={serviceRequstEqTruck:e.equipmentarray,serviceTicketTruckReport:e.inputs,totaldistance:e.distancekms,driverTimeIn:e.drivertimein,dispatcherBy:e.dispatchId,verifiedBY:e.checkerId};const i=yield Object(g["A"])(e.$route.params.id,t);i&&(e.$swal({group:"alert",type:"success",text:"Updated Service request Truck",duration:5e3}),e.$router.push({path:"/Servicerequest/Truck"}))}catch(t){}}))()},getTruckType(){this.vehicles.map(e=>{e.plateNo==this.plate&&(this.trucktype=e.vehicleType.code,this.body=e.vehicleNo)})},add(e){this.inputs.length<=4&&this.inputs.push({name:""})},remove(e){this.inputs.splice(e,1)}}},f=b,k=(i("60bc"),i("02b4"),i("c269"),i("2877")),y=Object(k["a"])(f,a,r,!1,null,"55debc92",null);t["default"]=y.exports},eb33:function(e,t,i){}}]);
//# sourceMappingURL=chunk-559734c4.e777de79.js.map