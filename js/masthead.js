/*	Author: TMW - Zander Martineau */
/**
 * Masthead.js
 * Usage:
 *
 */
;(function (TMW, $) {
	TMW.Masthead = {
		init : function () {
			$('.searchBtn').on('click', function(event) {
				if ( $(this).hasClass('is-active') ) {
					TMW.Masthead.searchClose();
				} else {
					TMW.Masthead.searchOpen();
					TMW.Masthead.navClose();
				}
			});

			$('.searchClose').on('click', function(event) {
				TMW.Masthead.searchClose();
			});


			$('.infoBar-navBtn').on('click', function(event) {
				if ( $(this).hasClass('is-active') ) {
					TMW.Masthead.navClose();
				} else {
					TMW.Masthead.navOpen();
					TMW.Masthead.searchClose();
				}
			});
		},

		searchOpen : function() {
			$('.infoBar-search').addClass('is-active');
			$('.searchBtn').addClass('is-active');
		},

		searchClose : function() {
			$('.infoBar-search').removeClass('is-active');
			$('.searchBtn').removeClass('is-active');
			var q = document.getElementById('q');
			q.value = '';
		},

		navOpen : function() {
			$('.infoBar-navList').addClass('is-active');
			$('.infoBar-navBtn').addClass('is-active');
		},

		navClose : function() {
			$('.infoBar-navList').removeClass('is-active');
			$('.infoBar-navBtn').removeClass('is-active');
		},
	};
})(window.TMW = window.TMW || {}, jQuery);
