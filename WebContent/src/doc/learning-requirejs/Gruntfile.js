module.exports = function( grunt ) {
	grunt.initConfig({
		"connect": {
			"server": {
				"options": {
					hostname: "localhost",
					port: 6234,
					keepalive: true
				}
			},
			"server2": {
				"options": {
					hostname: "127.0.0.2",
					port: 6235,
					keepalive: true
				}
			}
		}
	});
	grunt.loadNpmTasks( "grunt-contrib-connect" );
	grunt.registerTask( "default", "connect" );
	grunt.registerTask( "server2", "connect:server2" );
};