$(document).ready(function(){
  // header dropdown toggle
  $('.js-header-toggle').click(function(){
    $('body').toggleClass('is-show-dropdown lock');
  });

  // link to scroll
  $('.js-link-anchor').click(function(e) {
    e.preventDefault();
    $('body').removeClass('is-show-dropdown lock');
    var aid = $(this).attr('href');
    $('html,body').animate({scrollTop: $(aid).offset().top - 50},'slow');
  });

  // modal init
  $('.js-modal-open').click(function(){
    $('body').addClass('is-modal');
    $('.modal--profit').addClass('is-show');
    e.preventDefault();
  });

  $('.js-modal-close').click(function(){
    $('body').removeClass('is-modal');
    $('.modal--profit').removeClass('is-show');
    e.preventDefault();
  });

  $('.js-btn-gift').click(function(){
    $(this).toggleClass('is-show-mobile');
    e.preventDefault();
  });
});

// animation scroll
if($('.wow').length){
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 35,
    mobile: false
  });
  wow.init();
}

(function initPlayVideo() {
  var $videoContainer = $('.video-responsive');
  var $videoCover = $('.video-responsive__cover');

  $videoCover.on('click', function () {
    $videoCover.fadeOut();
    $videoContainer.append('<iframe width="652" height="367" src="https://www.youtube.com/embed/oa_kxagn8js?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });
})();