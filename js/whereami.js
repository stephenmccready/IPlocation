$(function() {
	$('.english').toggle();
	$('#toggle-lng').bootstrapToggle({
		off: '&#127482;&#127480; English',
		on: '&#127464;&#127475; 中文'
	});
});
$('#myform :checkbox').change(function() { 
	$('.hanzi').toggle();
	$('.english').toggle();
});
function loadMap() {
	$.getJSON('https://api.ipify.org?format=json', function(result1) {
		$("#ip").html(result1.ip);
	});
	$.getJSON('https://json.geoiplookup.io/'+$("#ip").html(),function(result2) {
		$("#isp").html(result2.isp);
		$("#org").html(result2.org);
		$("#hostname").html(result2.hostname);
		$("#longitude").html(result2.longitude);
		$("#latitude").html(result2.latitude);
		$("#postal_code").html(result2.postal_code);
		$("#city").html(result2.city);
		$("#country_code").html(result2.country_code);
		$("#country_name").html(result2.country_name);
		$("#continent_code").html(result2.continent_code);
		$("#region").html(result2.region);
		$("#district").html(result2.district);
		$("#timezone_name").html(result2.timezone_name);
		$("#connection_type").html(result2.connection_type);
		$("#asn").html(result2.asn);	//autonomous system number
		$("#currency_code").html(result2.currency_code);
		$("#currency_name").html(result2.currency_name);
		$("#success").html(result2.success);
		$("#cached").html(result2.cached);
		map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
			credentials: 'Am9Vjl9n5UajkUfSBWrKPus5HNYffqtTRHXK4758LkwSHXC9ekPkqRPoa-NVTZ6b',
			center: new Microsoft.Maps.Location($("#latitude").html(), $("#longitude").html()),
			zoom: 4
		});
		var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
		map.entities.push(pushpin);
	});
}
