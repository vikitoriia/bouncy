;(function ($) {
	"use strict";
	$(function () {
		$('.ba-team-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
		});
	})

	$(function () {
		$('.ba-slider-testimonials').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
  			autoplaySpeed: 4000
		});
	})

	$(window).load(function(){
		var map;
		var mapContainer = $('#map')[0];
		var mapCenter = {lat: 49.592552, lng: 34.547128};

		map = new google.maps.Map(mapContainer, {
			center: mapCenter,
			zoom: 17, 
			disableDefaultUI: true
		});

		var marker = new google.maps.Marker({
			position: mapCenter,
			map: map,
			icon: "../img/map-marker.png"
		});
	});
})(jQuery);

