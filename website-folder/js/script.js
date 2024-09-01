// script.js
$(document).ready(function() {
    //black background to start
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff'; /* Set text color to white */
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
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const gradientHeight = document.body.offsetHeight; // use the document height
        const purpleIntensity = Math.min(scrollPosition / gradientHeight, 1); // cap at 1
        const backgroundColor = `rgb(${Math.floor(48 * purpleIntensity)}, 0, ${Math.floor(96 * purpleIntensity)})`;
        document.body.style.backgroundColor = backgroundColor;
      });

      document.body.style.backgroundColor = backgroundColor + ' !important';
});     