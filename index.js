jQuery(document).ready(function() {
	jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.header ul').toggleClass('active');

		e.preventDefault();
	});
});