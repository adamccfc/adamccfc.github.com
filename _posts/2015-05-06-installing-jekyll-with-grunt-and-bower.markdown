---
layout: post
title:  "Installing Jekyll with Grunt and Bower"
date:   2015-05-06 10:33:19
categories: jekyll bower grunt installation
---
I wanted to try creating my own portfolio website by using [Jekyll](http://jekyllrb.com/) for a long time. I found it simple to install, but to change the layout and design of the website I thought it would be worthwhile using [Bower](http://bower.io/) to install any libraries/frameworks and [Grunt](http://gruntjs.com/) to help compile everything that I would want to build my website with.

Now, I was wondering the best way to go about this, and after a quick search I came across a tutorial that I found very helpful. It was written by Patrick Pletscher, and you can check his post out [here](http://www.pletscher.org/blog/2013/05/27/website.html). My post is based on his tutorial, but whilst following it, there were some changes that I made to get it to work the way I wanted it to.

# Installing Jekyll

The first thing you will need to do, that Patrick's post does not cover is installing a Jekyll instance. I won't go into much detail on this, but you can follow the Jekyll tutorial [here](http://jekyllrb.com/docs/installation/) on how to get everything set up and installed correctly. 

# Installing NPM

We first need to install NPM which stands for Node Package Manager. You can do this by first installing Homebrew with the follwoing command `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`. Then use the command `homebrew install npm` to install NPM. Now in your projects directory you will need to create a package.json file. Below is an example of what it should look like. 

**package.json**

{% prism javascript %}
{
  "name": "websiteName",
  "description": "websiteDescription",
  "version": "0.0.1",
  "repository": {
    "type": "git",
    "url": "https://github.com/username/repo"
  },
  "dependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-less": "*",
    "grunt-contrib-uglify": "*",
    "grunt-contrib-copy": "*",
    "bower": "*",
    "grunt-exec": "*"
  },
  "engines": {
      "npm": "1.2.x"
  }
}
{% endprism %}

# Installing Bower

To install bower, go to your terminal and type in the following command `npm install -g bower`. This will install bower globally on your machine. 

You must then create a bower.json file, which will include the name of your project, and the dependancies it uses. Below is an example of a bower.json file with the dependancies of bootstrap and jquery. As you can see the numbers after them is the version of the dependancies.

**bower.json**

{% prism javascript %}
{
  "name": "mywebsite",
  "dependencies": {
    "bootstrap": "~3.0.0",
    "jquery": "~2.0.3"
  },
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components"
  ]
}
{% endprism %}

Save this file in your projects root directory. Then in your terminal go to your projects directory and run the following command `bower install`. This will install all of the dependancies that you have defined in your bower.json file.

# Installing Grunt

To install Grunt globally on your maching use the following command in your terminal `npm install -g grunt-cli`. You will then need to create a Gruntfile.js file in your root directory, like the example below.

**Gruntfile.js**

{% prism javascript %}
module.exports = function(grunt) {
  
grunt.initConfig({
  less: {
    production: {
      options: {
        paths: ["bower_components/bootstrap/less"],
        yuicompress: true
      },
      files: {
        "assets/css/application.min.css": "assets/_less/application.less"
      }
    }
  },
  uglify: {
    jquery: {
      files: {
        'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
      }
    },
    bootstrap: {
      files: {
        'assets/js/bootstrap.min.js': ['bower_components/bootstrap/js/bootstrap-collapse.js',
                                       'bower_components/bootstrap/js/bootstrap-scrollspy.js',
                                       'bower_components/bootstrap/js/bootstrap-button.js',
                                       'bower_components/bootstrap/js/bootstrap-affix.js']
      }
    }
  },
  copy: {
    bootstrap: {
      files: [
        {expand: true, cwd: 'bower_components/bootstrap/img/', src: ['**'], dest: 'assets/img/'}
      ]
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

grunt.registerTask('default', [ 'less', 'uglify', 'copy', 'exec:build' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
{% endprism %}

To run Jekyll locally, you can run the following command in your projects root directory `grunt exec`. This will serve jekyll locally on your server. If you go to the following URL `http://localhost:4000` you should then be able to see a working version of your website on your local machine.
