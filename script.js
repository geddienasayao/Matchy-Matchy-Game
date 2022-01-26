$(document).ready(function() {
	$('img').click(function() {
		var src= "/images/background.png";
		var altsrc= $(this).attr('data-alt-src');
		console.log( $(this).attr('src'));
		if ($(this).attr('src')!=src) {
			$(this).attr('src', src);
		}else {
			$(this).attr('src', altsrc);
		}
	});
})