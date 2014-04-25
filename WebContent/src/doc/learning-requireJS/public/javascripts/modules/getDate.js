require( ["jquery", "moment"], function( $ , moment) {
	$('body').append( "<section><h1>Date Widget</h1><p> Todayz : " + moment().format() +"</p></section>");
});