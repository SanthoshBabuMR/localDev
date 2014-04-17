module.exports = function ( grunt ) {
		grunt.initConfig({
			connect: {
					dev: {
							options: {
									port: 8080,
									protocol: "http",
									hostname: "127.0.0.40",
									keepalive: true,
									livereload: true,
									useAvailablePort: false,
									base: "./views/"
							}
					},
					prod: {
							options: {
									port: 8443,
									protocol: "https",
									hostname: "localhost",
									keepalive: true,
									livereload: true,
									useAvailablePort: true,
									base: "./views/"
							}
					}
			}
		});
		
		grunt.loadNpmTasks( "grunt-contrib-connect" );
		
		grunt.registerTask( "devserver",  "connect:dev"  );
		grunt.registerTask( "prodserver",  "connect:prod" );
		
		console.log("\nGruntfile Parsed.. \n");
};