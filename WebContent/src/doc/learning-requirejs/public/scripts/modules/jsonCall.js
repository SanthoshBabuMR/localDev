require( ["jquery", "text!http://localhost:6234/public/scripts/data/schema/profile.json" ], function( $, jsonData ) {
	
	var str = "";
	var data = JSON.parse(jsonData);
		str += "<h1>json Call</h1>";
		str += "<h2>Profile Schema</h2>";

	if( data && data.profile) {
		for(i in data.profile) {
			str += i + "<br />";
		}
	}
	else {
		str += "<p>Data Unavailable</p>";
	}

	$("body").append(
		str	
	);	
});