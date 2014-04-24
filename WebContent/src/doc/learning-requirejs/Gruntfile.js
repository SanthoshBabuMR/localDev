module.exports = function( grunt ) {
	grunt.initConfig({
		"connect": {
			"server": {
				"options": {
					hostname: "localhost",
					port: 6234,
					keepalive: true
				}
			}
		}
	});

	grunt.loadNpmTasks( "grunt-contrib-connect" );

	grunt.registerTask( "default", "connect" );
};