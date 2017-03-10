$(function() {
	$('.english').toggle();
	$('#toggle-lng').bootstrapToggle({
		off: '&#127464;&#127475; 中文',
		on: '&#127482;&#127480; English'
	});
});
$('#myform :checkbox').change(function() { 
	$('.hanzi').toggle();
	$('.english').toggle();
});
$.getJSON('http://freegeoip.net/json/', function(result) {
	$("#ip").html(result.ip);
	$("#country_code").html(result.country_code);
	$("#country_name").html(result.country_name);
	$("#region_code").html(result.region_code);
	$("#region_name").html(result.region_name);
	$("#city").html(result.city);
	$("#zip_code").html(result.zip_code);
	$("#time_zone").html(result.time_zone);
	$("#latitude").html(result.latitude);
	$("#longitude").html(result.longitude);
	$("#metro_code").html(result.metro_code);
});
