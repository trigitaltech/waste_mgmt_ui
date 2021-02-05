<template>
	<div id="pdf" style="display: none">
		<h4 style="text-align: center">INT'L SWIMS, INC</h4>
		<p style="text-align: center;font-size:14px">INTERNATIONAL SOLID WASTE INTEGRATED</p>
		<p style="text-align: center;font-size:14px">MANAGEMENT SPECIALIST INCORPORATED</p>
		<h3 style="text-align: center;">SERVIVE TICKET     M</h3>
		<p style="text-align: center;">F-OPS-0061Rev.0110/02/2017</p>
		<p style="color:red;margin-top:-34px;margin-left:500px">No.<span>{{data.equipmentNo}}</span></p>
		<div style="margin-left:100px">
			<p>Equipment: {{data.equipmentmodel}}</p>
			<p style="text-align:right;margin-top:-33px">Date: {{data.created_date | formatDate }} </p>
			<p>Rate/Hour/Contract: </p>
			<p>Hired Contracted by: </p>
			<p>Location: </p>
			<p>Nature of Job: {{data.type}}</p>
			<p>Time in AM: &nbsp;&nbsp;&nbsp;&nbsp;Time Out AM: &nbsp;&nbsp;&nbsp;&nbsp;Total:</p>
			<p>Time in PM: &nbsp;&nbsp;&nbsp;&nbsp;Time Out PM: &nbsp;&nbsp;&nbsp;&nbsp;Total:</p>
			<p>Driver/Operator: fdvjh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Grand Total: 7578</p>
			<p>Fuel Consumed:</p>
			<p>Diesel/Gas: </p>
			<p style="text-align:right;margin-top:-33px;margin-right:150px">Operator: </p>
			<p>Oil:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<p>Others:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<p style="text-align:right;margin-top:-33px;margin-right:150px">By: </p>
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
		console.log(this.data.id);
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