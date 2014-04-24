require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": [ "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1-rc2/jquery",
					"lib/jquery-2.1.0"],
		"moment": "lib/moment-with-langs",
		"text": "lib/text",
		"async": "lib/async",

		// define modules
		"colors": "modules/colors",
		"colorsv2": "modules/colors.0.0.2",
		"aSimpleObjectDefinition": "modules/aSimpleObjectDefinition",
		"aSimpleFunctionDefinition": "modules/aSimpleFunctionDefinition",
		"moduleObjectAnalyser" : "modules/moduleObjectAnalyser",
		"moduleA": "modules/moduleA",
		"moduleB": "modules/moduleB",
		"dataType": "modules/dataType",
		"typeCheck": "modules/typeCheck",

		// require modules
		"helloWorld": "modules/helloWorld",
		"requireJsPathsConvention": "modules/requireJsPathsConvention",
		"loadLegacyScript": "modules/loadLegacyScript",
		"loadLegacyScript2": "modules/loadLegacyScript2",
		"relativePathLoading": "modules/relativePathLoading",
		"circularDependency": "modules/circularDependency",
		"namedModule": "modules/namedModule",
		"jsonCall": "modules/jsonCall",
		"jsonpCall": "modules/jsonpCall",
		"oldModule": "modules/oldModule",
		"newModule": "modules/newModule",

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
		},
		"backbone": {
			deps: [ "jquery",  ],
			exports: "bb"
		}
	},
	map: {

	},
	config: {
		*: {
			author: "santhosh babu"
		}
	}
})