module.exports = function(grunt) {
    
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'src/css/*.css'
                ],
                dest: 'css/combined.css'
            },
            js: {
                src: [
                    'src/js/*.js'
                ],
                dest: 'js/script.js'
            }
        },
        uglify: {
            build: {
                src: 'js/script.js',
                dest: 'js/script.min.js'
            }
        },
        cssmin: {
            build: {
                src: 'css/combined.css',
                dest: 'css/combined.min.css'
            }
        },
        watch: {
		    files: ['src/css/*', 'src/js/*'],
		    tasks: ['concat', 'cssmin', 'uglify']
	    }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['concat','uglify','cssmin']);
    
}