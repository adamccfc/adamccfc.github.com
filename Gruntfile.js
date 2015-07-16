module.exports = function(grunt) {

  grunt.initConfig({
    // This concatenates the JS and CSS libs into a libs directory
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
        dest: 'dist/assets/js/project-libs.js'
      },
      cssLibs: {
        src: 
          [
            // Add css libs here
            'bower_components/bootstrap/dist/css/bootstrap.min.css'
          ],
        dest: 'assets/css/project-libs.css'
      }
    },
    // Compiles the less files into one main css file
    less: {
      dev: {
        files: {
          "assets/css/project-styles.css" : "less/base.less"
        }
      }
    },
    // This cleans up the jQuery file and adds it into the assets folder
    uglify: {
      jquery: {
        files: {
          'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
        }
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      },
      deploy: {
        cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['less', 'uglify', 'copy', 'exec:build']);
  grunt.registerTask('deploy', ['default', 'exec:deploy']);

  // For Development
  grunt.registerTask('dev', [
    'concat',
    'less',
    'uglify',
    'exec:serve'
  ]);

};
