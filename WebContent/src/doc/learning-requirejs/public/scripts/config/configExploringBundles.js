require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",

		// define modules
		"colors": "modules/colors",
		"aSimpleObjectDefinition": "modules/aSimpleObjectDefinition",
		"aSimpleFunctionDefinition": "modules/aSimpleFunctionDefinition",

		// require modules
		"exploringBundles": "modules/exploringBundles"
	},
	bundles: {
		"primary": ["jquery", "colors", "aSimpleObjectDefinition", "aSimpleFunctionDefinition"]
	}
})