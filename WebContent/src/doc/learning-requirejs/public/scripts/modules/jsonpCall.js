require( ["jquery", "http://maps.googleapis.com/maps/api/geocode/json?latlng=12.9832601,80.2202&sensor=false&callback=define" ], function( $, jsonData ) {
	
	var str = "";
	var data = JSON.parse(jsonData);
		str += "<h1>jsonp Call</h1>";

	if( data) {
		str += data;
	}
	else {
		str += "<p>Data Unavailable</p>";
	}

	$("body").append(
		str	
	);	
});