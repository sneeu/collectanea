$(function () {
	$('.frame').each(function () {
		var self = $(this);
		var target = $('<img />').appendTo(self.find('.target'));
		var triggers = self.find('.trigger');

		triggers.click(function () {
			var pulled = $(this);
			triggers.filter('.on').removeClass('on');
			pulled.addClass('on');

			target.fadeOut(function () {
				var im = new Image();
				im.src = pulled.attr('href');
				im.onload = function () {
					// Perhaps x-fade?
					target.attr('src', im.src).fadeIn();
				}
			});

			return false;
		})
	});
});