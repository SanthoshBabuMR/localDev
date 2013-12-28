module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 9001,
					hostname: 'localhost',
					base: '.',
					keepalive: true,
					livereload: true
				}
			}
		},

		compass: {                  
			compileBase: {                   
				options: {              
					sassDir: ['src/asset/sass/'],
					cssDir: ['src/asset/css/']
				}
			},
			compileDoc:  {                   
				options: {              
					sassDir: ['src/doc/*/sass/'],
					cssDir: ['src/doc/*/css/']
				}
			},
		},

		watch: {
			sass: {
				files: ['src/asset/sass/*','src/doc/*/sass/*'],
				tasks: ['compass'],
				options: {
					livereload: true,
				},
			},
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