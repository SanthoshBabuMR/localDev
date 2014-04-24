require( [ "jquery", "dataType" ], function( $, dt ) {
	var str = "";
	str += "<h1>Data Types in JS</h1>";
	for(var i=0;i<dt.types.length;i++) {
			str += dt.types[i] + "<br />";
	}
	$("body").append(
		str
	);
});