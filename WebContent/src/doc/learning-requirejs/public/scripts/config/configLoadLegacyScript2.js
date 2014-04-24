require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",

		// modules
		"loadLegacyScript2": "modules/loadLegacyScript2",

		// non-AMD Modules
		"maths": "legacyModules/maths",
		"underscore": "legacyModules/underscore",
		"backbone": "legacyModules/backbone"
	},
	shim: {
		"maths": {
			exports: "simpleMATH",
			init: function () {
				simpleMATH = this.maths;
			}
		},
		"underscore" : {
			exports: "_"
		},
		"backbone": {
			deps: [ "jquery",  ],
			exports: "bb"
		}
	}
})