require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		"moment": "lib/moment-with-langs",

		// define modules
		"colors": "modules/colors",
		"aSimpleObjectDefinition": "modules/aSimpleObjectDefinition",
		"aSimpleFunctionDefinition": "modules/aSimpleFunctionDefinition",
		"moduleObjectAnalyser" : "modules/moduleObjectAnalyser",
		"moduleA": "modules/moduleA",
		"moduleB": "modules/moduleB",

		// require modules
		"helloWorld": "modules/helloWorld",
		"requireJsPathsConvention": "modules/requireJsPathsConvention",
		"loadLegacyScript": "modules/loadLegacyScript",
		"loadLegacyScript2": "modules/loadLegacyScript2",
		"relativePathLoading": "modules/relativePathLoading",
		"circularDependency": "modules/circularDependency",

		// non-AMD Modules
		"maths": "legacyModules/maths",
		"underscore": "legacyModules/underscore",
		"backbone": "legacyModules/jquery-1.7"
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
		}
		"backbone": {
			deps: [ "jquery",  ],
			exports: "bb"
		}
	}
})