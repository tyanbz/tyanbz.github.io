$(document).ready(function(){

  // sticky-nav
  var waypoint = new Waypoint({
    element: document.getElementById('restoraunt-discription'),
    handler: function(direction) {
      if(direction == 'down') {
        $('nav').attr('id','sticky-nav');
      } else {
        $('nav').removeAttr('id');
      }
    },
    offset: 80
  });

  //buttons and link click
  $('.btn-order').click(function() {
    $("html, body").animate({scrollTop: $('#how-to-order-section').offset().top}, 1000);
  });

  $('.btn-more').click(function() {
    $("html, body").animate({scrollTop: $('#restoraunt-discription').offset().top}, 1000);
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //animation
  var waypoint = new Waypoint({
    element: document.getElementById('restoraunt-discription'),
    handler: function(direction) {
      $(".anima").addClass("animated animate__fadeIn");
    },
    offset: 80
  });

  //animation
  var waypoint = new Waypoint({
    element: document.getElementById('cities-section'),
    handler: function(direction) {
      $(".anim2").addClass("animated animate__fadeInRight");
    },
    offset: 80
  });

  //animation order-button
  var waypoint = new Waypoint({
    element: document.getElementById('header-text'),
    handler: function(direction) {
      if(direction == 'up') {
        $('.anim4').addClass('animated shake');
      }
    },
    offset: 80
  });

  // mobile menu
  var open = true;
  $('.mobile-icon').click(function() {

    var icon = $(".mobile-icon ion-icon");

    if (open == true){
      open = false;
      $("nav").animate({height: "300px"}, 300);
    } else {
      open = true;
      $("nav").animate({height: "80px"}, 300);
    }

    $("#main-nav").slideToggle(300);
  });

})
