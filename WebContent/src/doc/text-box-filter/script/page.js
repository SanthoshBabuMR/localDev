require.config({
	paths: {
		/* lib */
		'jquery': '/src/asset/script/lib/jquery-1.10.2',

		/* plugins */
		'listFilter': '/src/asset/script/plugins/listFilter'
	}
});

require(['jquery','listFilter'], function($, ListFilter){
	var inputElement = "quick-reveal";
	var listElement = "brand";

	// set configuration for filter
	ListFilter.setConfig({
		casesensitive: false,
		globalMatch: false
	});

	// bind keyup event to input box for triggering filter behaviour  
	$('#'+inputElement).on('keyup', function(){
		var self = this;
		ListFilter.filter(self,listElement);
	});
	
});
