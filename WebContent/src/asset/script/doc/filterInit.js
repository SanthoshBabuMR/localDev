require.config({
    paths: {
    	/* lib */
        'jquery': '/src/asset/script/lib/jquery-1.10.2',
        
        /* plugins */
        'textBoxFilter': '/src/asset/script/plugins/TextBoxFilter'
    }
});

require(['jquery','textBoxFilter'], function($, TextBoxFilter){
	var inputElement = "quick-reveal";
	var listElement = "brand";
	
	// set configuration for filter
	TextBoxFilter.setConfig({
		casesensitive: false,
		globalMatch: false
	})
	$('#'+inputElement).on('keyup', function(){
		var self = this;
		TextBoxFilter.filter(self,listElement);
	});
});
