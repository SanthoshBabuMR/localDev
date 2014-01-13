module.exports = function(grunt) {
	'use strict';
	var page = grunt.file.readJSON('config/page.json');
	var pageDir = page.srcPath;

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 9345,
					hostname: 'localhost',
					base: '.',
					keepalive: true,
					livereload: true
				}
			}
		},

		compass: {                  
			base: {                  
				options: {              
					sassDir: ['src/asset/sass/'],
					cssDir: ['src/asset/css/']
				}
			},
			doc:  {                  
				options: {              
					sassDir: ['src/doc/'+pageDir+'/sass/'],
					cssDir: ['src/doc/'+pageDir+'/css/']
				}
			},
		},

		watch: {
			base: {
				files: ['src/asset/sass/*'],
				tasks: ['compass:base'],
				options: {
					livereload: true,
				},
			},
			doc: {
				files: ['src/doc/'+pageDir+'/sass/*'],
				tasks: ['compass:doc'],
				options: {
					livereload: true,
				},
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'src/doc/*/script/*.js']
		// 'src/asset/script/plugins/*', 
		},

	});

	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-contrib-compass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );

	grunt.registerTask( 'server', [ 'connect' ] );
	grunt.registerTask( 'runcompass', [ 'compass' ] );
	grunt.registerTask( 'runwatch', [ 'watch' ] );
	grunt.registerTask( 'runlint', [ 'jshint' ] );

};