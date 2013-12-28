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
        compile: {                   
          options: {              
            sassDir: 'src/asset/scss/',
            cssDir: 'src/asset/css/'
          }
        }
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask( 'server', [ 'connect' ] );
  grunt.registerTask( 'runcompass', [ 'compass' ] );

};