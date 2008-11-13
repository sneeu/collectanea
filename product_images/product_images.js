$(function () {
	$('.product_images').each(function () {
		var self = $(this);
		self.find('.frame:not(:first) .payload').hide();
		self.find('.trigger').click(function () {
			self.find('.payload').fadeOut();
			$(this).parent('.frame').siblings('.on').removeClass('on');
			$(this).parent('.frame').addClass('on');
			$(this).next('.payload').fadeIn();
		});
		self.hover(function () {
			if (self.parent('.spotlight').length > 0) {
				self.find('.trigger').fadeIn();
				self.find('p').fadeIn();
			}
		}, function () {
			self.find('.trigger').fadeOut();
			self.find('p').fadeOut();
		});
		self.find('.trigger').hide();
		self.find('p').hide();
	});
});