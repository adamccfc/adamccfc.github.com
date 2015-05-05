# Adam Morgan's Jekyll Blog

## Development

Running grunt on the commandline will now perform the following tasks:

- Compile a less file in assets/_less/application.less that makes use of the bootstrap less files and finally minify&copy it to assets/css/application.min.css.
- Copy the jquery sources and minify them to assets/js/jquery.min.js.
- Concatenate and minify some bootstrap javascript files and output them to assets/js/bootstrap.min.js
- Copy the bootstrap glyph icons to assets/img.
- A exec:build and exec:serve task that can be used for generating the website and hosting it locally.
- A exec:deploy task that copies your website to a remote server using rsync over ssh.

To build the site and run the serve locally, run the following command in the command line ```grunt exec```