(function(){
	var g = {};
  window.g = g;
		
	var fetchColors = function() {
		var save = function ( data ) {
		  if ( window.localStorage ) {
			  window.localStorage.primaryColors = JSON.stringify( data.primary );
			}
		};
		var alert = function ( error) {
		  alert( "Oops!! Network Error. Try after some time." );
		};
		$.ajax( "/test-data/json/colors.php" ).done(save).fail(alert);
	}
	
	
	window.g = {
	  fetchColors: fetchColors
	}
	
})());