module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
         files: [{
           expand: true,
           cwd: 'src/sass',
           src: ['*.scss'],
           dest: 'public/css',
           ext: '.css'
         }]
       }
     },
     concat: {
       dist: {
         src: ['src/js/script.js'],
         dest: 'public/js/mainscript.js',
       },
     },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['concat','sass'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task(s).
  grunt.registerTask('default', ['sass'],['watch'],['concat']);

};
