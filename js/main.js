$(window).load(function(){
	jQuery.extend(jQuery.easing, {
	    easeOutCirc: function(x, t, b, c, d) {
	        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	    }
	});

	var itemWidth = 161 + 12;
	var sliderWidth = $('#wardrobe_slider').children().size() * itemWidth;

	$('#wardrobe_slider').css('width', sliderWidth);

	var sliderPageWidth = parseInt($('#wardrobe_items').css('width'));

	var eventInterrupted = function(sliderDirection) {
	    $('#wardrobe_slider').stop(true, true);
	    if (sliderDirection == 0) {
	        sliderAnimateRight();
	    } else {
	        sliderAnimateLeft();
	    }
	};

	var sliderAnimateRight = function() {
	    var leftPos = $('#wardrobe_slider').position().left - 5;
	    if (sliderWidth + leftPos <= sliderPageWidth) return false;
	    if ((sliderWidth + leftPos) % itemWidth != 0) {
	        eventInterrupted(0);
	        return false;
	    }
	    $('#wardrobe_slider').animate({
	        left: leftPos - itemWidth + 'px'
	    }, 1000, 'easeOutCirc');
	    return false;
	};

	var sliderAnimateLeft = function() {
	    var leftPos = $('#wardrobe_slider').position().left - 5;
	    if (leftPos >= 0) return false;
	    if (leftPos % itemWidth != 0) {
	        eventInterrupted(1);
	        return false;
	    }
	    $('#wardrobe_slider').animate({
	        left: leftPos + itemWidth + 'px'
	    }, 1000, 'easeOutCirc');
	    return false;
	};

	$('#wardrobe_prev').click(function() {
	    sliderAnimateLeft();
	    return false;
	});

	$('#wardrobe_next').click(function() {
	    sliderAnimateRight();
	    return false;
	});
}); 
