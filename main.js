// Smooth scrolling
$(function(){
	$('a[href*="#"]:not([href="#"])').click(function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			&& location.hostname == this.hostname) {
			var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
		}
	});
});


//  Map
/* function initMap() {
	var location = { lat: 43.6565679, lng: 17.7470759 };
	var map = new google.maps.Map(document.querySelector('#map'), {
		zoom: 8,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}
 */