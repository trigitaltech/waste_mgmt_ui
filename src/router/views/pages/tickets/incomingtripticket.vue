<template>
	<div id="pdf" style="display: none;">
		<h1 style="font-weight: bold;text-align:center;text-decoration: underline;">ROUTE TRIP TICKET</h1>
		<div style="text-align:right;margin-right: 100px">
			<p style="font-weight: bold;font-size: 20px">CONTROL NO.: <span style="font-size: 19px;font-weight: bold;">{{data.item.controlNo}}</span></p>
			<p style="font-weight: bold;font-size: 20px">DATE : <span style="font-size: 19px;font-weight: bold;">{{data.item.createdDate | formatDate }}</span></p>
		</div>
		<div style="margin-top:40px">
			<h3 style="font-weight: bold;text-align:center;">INT’L SWIMS INC. & DOMINUS CONSTRUCTION (JOINT VENTURE)</h3>
			<p style="font-size: 16px;text-align: center">LOT 1 QUIRINO HIGHWAY ST. DOMINIQUE DR. SUBD. BAESA QUEZON CITY</p>
		</div>
		<div style="margin-top:40px">
			<p style="margin-left:100px;font-weight:bold;font-size:18px">LGU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="font-size: 19px;font-weight: bold;">  {{data.item.lguId}}</span></p>	
			<p style="margin-top:-40px;margin-left: 400px;font-weight:bold;font-size:18px">TOTAL DISTANCE(KM):<span style="font-size: 19px;font-weight: bold;">  {{data.item.volumeCheckerTotalKmServed}}</span></p>
		</div>
		<div>
			<p style="margin-left:100px;font-weight:bold;font-size:18px">PLATE NO. :<span style="font-size: 19px;font-weight: bold">  {{data.item.truckplateNo}}</span></p>
			<p style="margin-top: -40px;margin-left: 400px;font-size: 18px;font-weight: bold">BODY NO. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="font-size: 19px;font-weight: bold;">  {{data.item.truckBodyNo}}</span> </p>
			<p style="margin-left: 400px;font-size: 18px;font-weight: bold">TRUCK TYPE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="font-size: 19px;font-weight: bold;">  {{data.item.truckType}}</span></p>
		</div>
		<div style="margin-top: 20px">
			<p style="margin-left:100px;font-weight:bold;font-size:18px">COLLECTION HOURS (TIME)</p>
			<p style="margin-left:100px;font-weight:bold;font-size:18px">FROM <span style="font-size: 19px;font-weight: bold;">{{data.item.tripStartTime | formatTime}}</span></p>
			<p style="margin-top:-40px;margin-left:400px;font-weight:bold;font-size:18px"> TO <span style="font-size: 19px;font-weight: bold;" v-if="data.item.tripEndTime != null">{{data.item.tripEndTime | formatTime}}</span></p>
		</div>
		<div>
			<p style="margin-left:100px;font-weight:bold;font-size:18px">DRIVER : <span style="font-size: 19px;font-weight: bold;"> {{data.item.driverName}}</span></p>
			<p style="margin-top:-40px;margin-left: 400px;font-size: 18px;font-weight: bold">TIME DISPATCHED : <span style="font-size: 19px;font-weight: bold;"> {{data.item.modifiedDate | formatTime}}</span></p>
		</div>
		<div>
			<p style="margin-left:100px;font-weight:bold;font-size:18px">GARBAGE COLLECTORS</p>
			<div v-for="(item,index) in data.item.garbageCollector" :key="index">
				<p style="margin-left:120px;margin-top:20px;font-weight:bold;font-size:18px">{{item.garbageCollectorName}}</p>
			</div>
			<p style="margin-top:-80px;margin-left: 400px;font-size: 18px;font-weight: bold">GUIDE : <span style="font-size: 19px;font-weight: bold;"> {{data.item.helperName}}</span></p>
			<div v-for="(item,index) in data.item.garbageCollector" :key="index">
				<p style="margin-left:-200px;margin-top:20px;font-weight:bold;font-size:18px">{{item.garbageCollectorName}}</p>
			</div>
			<p style="margin-top:-22px;margin-left:400px;font-weight:bold;font-size:18px">ROUTE/AREA OF COLLECTION:</p>
			<template v-for="item in 
			areas">
				<p style="margin-left:420px;font-weight:bold;font-size:18px">{{item}}</p>
			</template> 
		</div>
		<div>
			<p style="margin-left:100px;font-weight:bold;font-size:18px">VOLUME OF GARBAGE<br>
			FOR FINAL DISPOSAL</p>
			<div style="border:1px solid;margin-left:100px;width:300px;padding:3px">
				<p style="font-size: 18px">CONTRACTOR DISPATCHER</p>
				<p style="font-size:17px">{{data.item.contractorDispatcherName}}</p>
				<hr style="margin-top:-14px">
				<div style="border:1px solid;margin-left:160px;width:120px;margin-top:-9px">
					CU.M.
				</div>
				<p style="font-size: 18px">LGU CHECKER</p>
				<p style="font-size:17px">{{data.item.volumeCheckerName}}</p>
				<hr style="margin-top:-14px">
				<div style="border:1px solid;margin-left:160px;width:120px;margin-top: -9px">
					CU.M.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from "moment";
export default {
	props: ["data","ticket","areas"],
	mounted() {
		console.log(this.data.item)
		console.log(this.areas);
		this.print();
	},
	filters: {
	    formatDate: function(value) {
	    	return moment(value).format("DD MMMM YYYY");
	    },
	    formatTime: function(value) {
	    	return moment(value).format("HH:mm:ss A");
	    }
	},
	methods:{
		print() {
			var divContents = document.getElementById('pdf').innerHTML;
		      var a = window.open('', '', 'height=500, width=500');
		      a.document.write('<html>');
		      a.document.write('<body >');
		      a.document.write('<div>');
		      a.document.write(divContents);
		      a.document.write('</div></body></html>');
		      a.document.close();
		      a.print();
		      a.close();
		      this.ticket = false;
      		this.$emit("change", this.ticket);
		}
	}
}	
</script>

<style scoped>

</style>