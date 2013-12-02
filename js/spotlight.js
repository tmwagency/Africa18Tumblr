/*	Author: TMW - Zander Martineau */

;(function (TMW, $) {
	TMW.Spotlight = {
		$spotlightSml :  $('.spotlight-sml'),

		init : function  () {

			if ($('.gt-ie8').length) {
				this.resize();
				window.onresize = this.resize.throttle(300);
			}

			this.cta();

			window.onscroll = function(){
				TMW.Spotlight.scratchAdjustOnScroll($('.spotlight-scratch'), window.pageYOffset);
			}
		},

		resize : function () {
			var dims = TMW.getViewportDimensions();

			if (dims.height > 600 && dims.width > 700) {
				$('.spotlight-lrg').css({
					height: dims.height
				});
			} else {
				$('.spotlight-lrg').removeAttr('style');
			}

			if (dims.height > 750 && dims.width > 700) {
				$('.spotlight-sml').css({
					height: dims.height * 0.5
				});
			} else {
				$('.spotlight-sml').removeAttr('style');
			}
		},

		scratchAdjustOnScroll : function(object, scrollTop) {
			var translateY = scrollTop * 0.4,
				scale      = 1 + (scrollTop * 0.01)
			;

			object.css({
			  '-webkit-transform' : 'translateY(' + translateY + 'px) scale(' + scale + ')',
			     '-moz-transform' : 'translateY(' + translateY + 'px) scale(' + scale + ')',
			      '-ms-transform' : 'translateY(' + translateY + 'px) scale(' + scale + ')',
			       '-o-transform' : 'translateY(' + translateY + 'px) scale(' + scale + ')',
			          'transform' : 'translateY(' + translateY + 'px) scale(' + scale + ')'
			});
		},

		cta : function () {
			var main = document.getElementById('main'),
				mainOffsetTop = main.offsetTop
			;
			$('.spotlight-scrollCta').on('click', function(event) {
				event.preventDefault();
				$('html, body').animate({scrollTop: mainOffsetTop}, 300);
				console.log('cta clicked');
			});
		}
	};
})(window.TMW = window.TMW || {}, jQuery);
