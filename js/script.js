/*
	Project: Lynx Africa 18
	Authors: Zander
*/

// Create a closure to maintain scope of the '$' and TMW

;(function (TMW, $) {

	$(function() {

		TMW.Config.init();

	});// END DOC READY


	TMW.Config = {
		init : function () {

			if ( $('.gt-ie8').length ) {
				TMW.Spotlight.init();
			}
			TMW.Popup();
			TMW.Masthead.init();
		}
	};

})(window.TMW = window.TMW || {}, jQuery);

