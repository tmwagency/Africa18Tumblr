/*	Author: TMW - Zander Martineau */
/**
 * Popup.js
 * Usage:
 * <a href="#" data-popup='{"width":"485px","height":"255px"}'></a>
 */
;(function (TMW, $) {
	TMW.Popup = function () {
		$('[data-popup]').on('click', function(event) {
			event.preventDefault();
			var options = $(this).data('popup');
			window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=' + options.height + ',width=' + options.width + '');
		});
	};
})(window.TMW = window.TMW || {}, jQuery);
