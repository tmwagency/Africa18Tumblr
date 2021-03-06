module.exports = function (grunt) {

	'use strict';

	/*
	   Javascript settings - Edit this section
	   ========================================================================== */
	/**
	 * Specify which js files you want to include
	 */

	var jsFileList = [
		'js/libs/jquery/jquery-1.10.2.js',
		'js/helpers/console.js',
		'js/helpers/limit.js',
		'js/helpers/getViewportDimensions.js',
		'js/spotlight.js',
		'js/popup.js',
		'js/masthead.js',
		'js/script.js'
	];
	var jsHintFileList = [
		'js/helpers/console.js',
		'js/helpers/cookies.js',
		'js/helpers/limit.js',
		'js/helpers/getViewportDimensions.js',
		'js/spotlight.js',
		'js/popup.js',
		'js/script.js'
	];

	/**
	 * Specify your output directory
	 */
	var distDir = 'js/dist/';

	/**
	 * Specify the name of your compiled JS file
	 * which will be placed in the directory you define above
	 */
	var jsFile = 'app.min.js';

	/* ==================== */

	/**
	 * Project configuration
	 */
	grunt.initConfig({
		pkg: require('./package'),


		/**
		 * JSHint
		 * https://github.com/gruntjs/grunt-contrib-jshint
		 * Manage the options inside .jshintrc file
		 */
		jshint: {
			all: jsHintFileList,
			options: {
				jshintrc: '.jshintrc'
			}
		},


		/**
		 * Sass compilation
		 * https://github.com/gruntjs/grunt-contrib-sass
		 * Separate options for dev and production environments
		 * Includes kickoff.scss and kickoff-old-ie.scss by default
		 * Also creates source maps
		 */
		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					lineNumbers: false,
					debugInfo : false,
					precision : 8,
					sourcemap : true
				},
				files: {
					'css/lynxafrica18.css': 'scss/lynxafrica18.scss',
					'css/lynxafrica18-old-ie.css': 'scss/lynxafrica18-old-ie.scss'
				}
			},
			production: {
				options: {
					style: 'compressed',
					precision : 8,
					sourcemap : false
				},
				files: {
					'css/lynxafrica18.css': 'scss/lynxafrica18.scss',
					'css/lynxafrica18-old-ie.css': 'scss/lynxafrica18-old-ie.scss'
				}

			}
		},


		/**
		 * Uglify
		 * https://github.com/gruntjs/grunt-contrib-uglify
		 * Minifies and concatinates your JS
		 * Also creates source maps
		 */
		uglify: {
			options: {
				mangle: true,
				beautify: false,
				compress: true,
				// report: 'gzip', // report: Show file size report

				// sourceMap: @string. The location of the source map, relative to the project
				// sourceMap: distDir + jsFile + '.map',

				// sourceMappingURL: @string. The string that is printed to the final file
				// sourceMappingURL: jsFile +'.map',

				// sourceMapRoot: @string. The location where your source files can be found. This sets the sourceRoot field in the source map.
				// sourceMapRoot: '../../'

			},

			/**
			 * Use the array at the top of this file to specify which js files you include
			 */
			js: {
				src: jsFileList,
				dest: distDir + jsFile
			}
		},


		/**
		 * Watch
		 * https://github.com/gruntjs/grunt-contrib-watch
		 * Watches your scss, js etc for changes and compiles them
		 * Also includes Livereload. Install and activate the browser extension to see live changes
		 */
		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				tasks: ['sass:production']
				// tasks: ['sass:dev', 'autoprefixer:dist', 'csso']
			},

			js: {
				files: jsFileList,
				tasks: ['uglify']
			},

			livereload: {
				options: { livereload: true },
				files: [
					'css/*.css'
				]
			}
		},


		/**
		 * Autoprefixer
		 * https://github.com/ai/autoprefixer
		 * Auto prefixes your CSS using caniuse data
		 */
		autoprefixer: {
			dist : {
				options: {
					// Task-specific options go here - we are supporting
					// the last 2 browsers, any browsers with >1% market share,
					// and ensuring we support IE7 + 8 with prefixes
					browsers: ['last 2 versions', '> 1%', 'ie 8', 'ie 7']
				},
				files: {
					'css/kickoff.prefixed.css': 'css/kickoff.css',
					'css/kickoff-old-ie.prefixed.css': 'css/kickoff-old-ie.css'
				}
			}
		},


		/**
		 * CSSO
		 * https://github.com/t32k/grunt-csso
		 * Minify CSS files with CSSO
		 */
		csso: {
			dist: {
				files: {
					'css/kickoff.min.css': ['css/kickoff.prefixed.css'],
					'css/kickoff-old-ie.min.css': ['css/kickoff-old-ie.prefixed.css']
				},

			}
		}

		,

		/**
		 * Custom jQuery builder
		 * Check build numbers at jquery.com
		 */
		jquery: {
			build: {
				options: {
					prefix: "jquery-",
					minify: true
				},
				output: "js/libs/jquery",
				versions: {
					// Add items to the below arrays to remove them from the build
					// Remove everything we don't need from 2.x versions
					"2.0.3": [ "deprecated", "dimensions", "offset", "wrap"],

					// We can't remove sizzle from 1.x versions, so let's not specify it
					"1.10.2": [ "deprecated", "dimensions", "offset", "wrap"]
				}
			}
		}

	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks("grunt-jquery-builder");


	/**
	 * Available tasks:
	   * grunt        : run jshint, uglify and sass:dev
	   * grunt watch  : run sass:dev, uglify and livereload
	   * grunt dev    : run jshint, uglify and sass:dev
	   * grunt deploy : run jshint, uglify and sass:production
	   * grunt jquery : build custom version of jquery
	 */

	/**
	 * Default task
	 * run jshint, uglify and sass:dev
	 */
	// Default task
	grunt.registerTask('default', ['jshint', 'uglify', 'sass:dev']);


	/**
	 * A task for development
	 * run jshint, uglify and sass:dev
	 */
	grunt.registerTask('dev', ['jshint', 'uglify', 'sass:dev']);

	/**
	 * A task for your production environment
	 * run jshint, uglify and sass:production
	 */
	grunt.registerTask('deploy', ['jshint', 'uglify', 'sass:production']);
	// grunt.registerTask('production', ['jshint', 'uglify', 'sass:production', 'autoprefixer', 'csso']);

};
