$(function () {
	function up() {
		$('#globe .row:last').hide().insertBefore($('#globe .row:first')).slideDown(function () {
			postMove();
		});
		return false;
	}
	function down() {
		$('#globe .row:first').slideUp(function () {
			$(this).insertAfter($('#globe .row:last')).show(postMove);
		});
		return false;
	}
	function left() {
		$('#globe .row').each(function () {
			$(this).find('.col:last').css('width', 0).insertBefore($(this).find('.col:first')).animate({width: 500}, postMove);
		});
		return false;
	}
	function right() {
		$('#globe .row').each(function () {
			var self = $(this);
			var col = self.find('.col:first');
			col.animate({width: 0}, function () {
				col.insertAfter(self.find('.col:last')).css('width', 500);
				postMove();
			});
		});
		return false;
	}

	function postMove() {
		var selected = $('.row:eq(2) .col:eq(2)');
		$('.spotlight').removeClass('spotlight');
		selected.addClass('spotlight');
		$('#status').text(selected.attr('id'));
	}

	postMove();

	$('#up').click(up);
	$('#down').click(down);
	$('#left').click(left);
	$('#right').click(right);

	$('#upandleft').click(function () {return up() || left();})
	$('#upandright').click(function () {return up() || right();})
	$('#downandleft').click(function () {return down() || left();})
	$('#downandright').click(function () {return down() || right();})
});