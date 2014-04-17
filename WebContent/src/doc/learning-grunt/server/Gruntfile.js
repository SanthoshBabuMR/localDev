module.exports = function ( grunt ) {
		grunt.initConfig({
			connect: {
					dev: {
							options: {
									port: 6234,
									hostname: "localhost",
									keepalive: true,
									livereload: true,
									useAvailablePort: false,
									base: "./views/"
							}
					}
			}
		});
		
		grunt.loadNpmTasks( "grunt-contrib-connect" );
		
		grunt.registerTask( "myserver",  "connect"  );
	
		console.log("\nGruntfile Parsed.. \n");
};