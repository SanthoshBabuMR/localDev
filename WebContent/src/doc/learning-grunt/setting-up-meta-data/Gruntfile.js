module.exports = function( grunt ) {

		grunt.initConfig({
			pkg: grunt.file.readJSON("package.json"),
			meta: {
				destFolder : "target",
				logsFolder : "<%=meta.destFolder%>/logs",
				docs : "<%=meta.destFolder%>/docs",
				host : "127.0.0.1",
				port : 6234				
			},
			connect: {
				myserver : {
					options : {
						hostname : "<%=meta.host%>",
						port: "<%=meta.port%>",
						keepalive: true
					}
				}
			}
		});
		
		grunt.loadNpmTasks( 'grunt-contrib-connect' );
		
		grunt.registerTask( "myserver", "connect" );
		
};
