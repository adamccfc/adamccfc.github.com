module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          options: {
            banner: '<%= banner %>',
            stripBanners: true
          },
          jsLibs: {
            src:
              [
                // Add js libs here
              ],
            dest: 'assets/js/project-libs.js'
          },
          cssLibs: {
            src: 
              [
                // Add css libs here
                'libs/foundation-sites/dist/foundation.css',
                'libs/components-font-awesome/css/font-awesome.min.css'
              ],
            dest: 'assets/css/project-libs.css'
          }
        },
        copy: {
          main: {
            files: [{
              expand: true,
              cwd: 'libs/components-font-awesome/fonts',
              src: ['**'],
              dest: 'assets/fonts/'
            }]
          },
        },
        compass: {
          dist: {
            options: {
              sassDir: '_sass',
              cssDir: 'assets/css',
              environment: 'production'
            }
          }
        },

        jekyll: {
          prod: {
            options: {
              serve : true,
              server_port : 4000,
              watch : true,
              // drafts : true
            }
          },
          dev: {
            options: {
              serve : true,
              server_port : 4000,
              watch : true,
              drafts : true
            }
          }
        },

        watch: {
            // scripts: {
            //     files: ['js/*.js'],
            //     tasks: ['concat', 'uglify'],
            //     options: {
            //       spawn: false,
            //     },
            // },
            css: {
                files: ['_sass/*.scss'],
                tasks: ['compass'],
                options: {
                  spawn: false,
                }
            },
            options : {
              spawn : false,
              atBegin : true
            }
        },

        concurrent: {
            prod : {
              tasks: ['concat', 'watch', 'jekyll:prod'],
              options: {
                logConcurrentOutput: true
              }
            },
            dev : {
              tasks: ['concat', 'copy', 'watch', 'jekyll:dev'],
              options: {
                logConcurrentOutput: true
              }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-concurrent');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concurrent:prod']);
    grunt.registerTask('dev', ['concurrent:dev']);

};