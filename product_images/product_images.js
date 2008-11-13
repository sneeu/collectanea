$(function () {
	$('.product_images').each(function () {
		var self = $(this);
		self.find('.frame:not(:first) .payload').hide();
		self.find('.trigger').click(function () {
			self.find('.payload').fadeOut();
			$(this).parent('.frame').siblings('.on').removeClass('on');
			$(this).parent('.frame').addClass('on');
			$(this).next('.payload').fadeIn();
		})
	});
});