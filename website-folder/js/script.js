// script.js
$(document).ready(function() {
    // Fade in elements on page load
	$('body').fadeIn(1000);
	
	// Toggle a hidden section on click
	$('h2:contains("Project 1")').on('click', function() {
		$('#project1').toggle();
	});
	// Add a click event to the navigation links
	$('nav a').on('click', function() {
		// Add a smooth scrolling effect
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
});     