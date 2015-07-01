module.exports = function(grunt) {

  grunt.initConfig({
    // Compiles the less files into one main css file
    less: {
      dev: {
        files: {
          "assets/css/project-styles.css" : "styles/base.less"
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
    // This copies the bootstrap minified css into the assets folder
    copy: {
      bootstrap: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap/dist/css',
          src: ['bootstrap.min.css'],
          dest: 'assets/css'
        }]
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

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['less', 'uglify', 'copy', 'exec:build']);
  grunt.registerTask('deploy', ['default', 'exec:deploy']);

  // For Development
  grunt.registerTask('watch', [
    'less',
    'uglify',
    'copy',
    'exec:serve',
  ]);

};
