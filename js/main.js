//
$(document).ready(function () {

    $(".button-collapse").sideNav();
    $(".fancybox").fancybox();

    // Scroll to the top of the page
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

    $('#scroll-top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // dropdown
    var $dropdownBtn = $(".dropdown-button");

    $dropdownBtn.dropdown();
    $dropdownBtn.dropdown({
            belowOrigin: true
        }
    );

    // Scroll down to the section
    scrollToSection($("#scroll-header"), $("#features-wrapper"));
    scrollToSection($("#scroll-features"), $("#date-list-top"));
    scrollToSection($("#scroll-reverse"), $("#blog-wrapper"));
    scrollToSection($("#scroll-blog"), $("#articles-wrapper"));
    scrollToSection($("#scroll-articles"), $("#team-wrapper"));
    scrollToSection($("#scroll-team"), $("#project-form-wrapper"));

});




// Scroll down to the section
function scrollToSection(btn, section) {
    btn.click(function() {
        $('html, body').animate({
            scrollTop:section.offset().top
        }, 2000);
    });
}

// Map
function myMap() {
    var position = new google.maps.LatLng(40.191494, 44.5111);
    var mapOptions = {
        center: position,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'ArtCoding',
        icon: {
            url: "images/map-marker.png"
        }
    });
}


