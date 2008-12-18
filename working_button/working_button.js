(function ($) {
	$(function () {
		$('form').submit(function () {
			$(this).find('[type=submit]').addClass('working').click(function () {
				return false;
			});
			// return false; // Testing that the code actually works by not submitting the form :)
		});
	});
})(jQuery);
