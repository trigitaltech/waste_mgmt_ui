<template>
	<div id="pdf" style="display: none">
		<p style="text-align:center;margin-top:50px;font-size:22px;font-weight: bold">INT’L SWIMS INC. & DOMINUS CONSTRUCTION (JOINT VENTURE)</p>
		<p style="text-align:center;font-size:18px">LOT 1 QUIRINO HIGHWAY ST. DOMINIQUE DR. SUBD. BAESA QUEZON CITY</p>
		<h2 style="text-align:center;margin-top:15px">WORK ASSIGNMENT FORM</h2>
		<p style="text-align:center;font-size:16px;font-weight:bold;">STAGING AREA TO DISPOSAL FACILITY</p>
		<div style="margin-top: 20px">
			<p style="margin-left:80px;font-size:19px">DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="font-size:18px"> {{data.item.createdDate | formatDate }}</span></p>
			<p style="margin-left:400px;margin-top:-34px;font-size:19px">CONTROL NO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :<span style="font-size:18px"> {{data.item.controlNo}}</span></p>
		</div>
		<div style="margin-top: 2px">
			<p style="margin-left:80px;font-size:19px">TYPE OF UNIT :<span style="font-size:18px"> {{data.item.typeOfUnit}}</span></p>
			<p style="margin-left:400px;margin-top:-34px;font-size:19px">VOLUME CAPACITY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :<span style="font-size:18px"> </span></p>
		</div>
		<div style="margin-top: 2px">
			<p style="margin-left:80px;font-size:19px">PLATE NO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :<span style="font-size:18px"> {{data.item.plateNo }}</span></p>
			<p style="margin-left:400px;margin-top:-34px;font-size:19px">TIME OUT STAGING AREA&nbsp;&nbsp;&nbsp;:<span style="font-size:18px">  {{data.item.stagingAreaName }}</span></p>
		</div>
		<div style="margin-top: 2px">
			<p style="margin-left:80px;font-size:19px">BODY NO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :<span style="font-size:18px"> {{data.item.plateNo }}</span></p>
			<p style="margin-left:400px;margin-top:-34px;font-size:19px">ESTIMATED VOLUME (in%) :<span style="font-size:18px">  {{data.item.volumeCheckerMeasuredVolume }}</span></p>
		</div>
		<div style="margin-top:10px">
			<p style="margin-left:80px;font-size:19px">NAME OF DRIVER:&nbsp;&nbsp;&nbsp;<span style="font-size:18px"> {{data.item.driverName }}</span></p>
		</div>
		<div style="margin-top:20px">
			<p style="text-align:center;font-size:15px;font-weight:bold;">I hereby certify that the above information is true and correct.</p>
			<div style="margin-left:10px;margin-top: 120px">
				<hr style="width:300px;margin-left:20px">
				<p style="margin-left:80px">DISPATCHER - CONTRACTOR</p>
				<p style="margin-left:80px">(Signature over printed name)</p>
			</div>
			<div style="border:1px solid;margin-left:360px;margin-top:-180px;width:400px;height:240px">
					<h5 style="margin-left:10px">MMDA STAMP</h5>
			</div>
		</div>
	</div>
</template>

<script>
import moment from "moment";
export default {
	data() {
		return {

		};
	},
	props: ["data","ticket"],
	mounted() {
		console.log(this.data.item)
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