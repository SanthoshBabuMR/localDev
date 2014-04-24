require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",

		// modules
		"loadLegacyScript": "modules/loadLegacyScript",
		
		// non-AMD Modules
		"maths": "legacyModules/maths"
	},
	shim: {
		"maths": {
			exports: "simpleMATH",
			init: function () {
				simpleMATH = this.maths;
			}
		}
	}
})