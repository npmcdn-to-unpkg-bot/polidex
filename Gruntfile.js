module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Spriting
        svgstore: {
          options: {
            prefix: '',
            cleanup: true,
            inheritviewbox: true,
            symbol: {
              preserveAspectRatio: 'xMidYMid meet',
              width: '100%'
            },
            formatting: {
              indent_size: 2
            }
          },
          default: {
            files: {
              'img/sprite.svg': [
                'img/source/*.svg'
              ]
            }
          }
        }
    })
}
