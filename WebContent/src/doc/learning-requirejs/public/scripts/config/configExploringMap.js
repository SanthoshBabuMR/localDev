require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		
		// define modules
		"colors": "modules/colors",

		// require modules
		"oldModule": "modules/oldModule",
		"newModule": "modules/newModule"
	},
	map : {
		"newModule" : {
			"colors": "modules/colors",
		},
		"oldModule" : {
			"colors": "modules/colors.0.0.2",
		}
	}
})