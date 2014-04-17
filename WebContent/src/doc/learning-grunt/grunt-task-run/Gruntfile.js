module.exports = function ( grunt ) {
		grunt.initConfig({
			connect: {
					myserver: {
							options: {
									port: 6234,
									hostname: "localhost",
									keepalive: true,
							}
					}
			}
		});
		
		grunt.loadNpmTasks( "grunt-contrib-connect" );
		
		grunt.registerTask( "default",  function() {
			console.log("\nstarting server ...\n");
			grunt.task.run("connect");
		}  );
		
		console.log("\nGruntfile Parsed.. \n");
};