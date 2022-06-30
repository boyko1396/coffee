// header scroll
if (document.getElementsByClassName('js-header-scroll').length > 0) {
  let scrollpos = window.scrollY
  const header = document.querySelector('.js-header-scroll')
  const header_height = header.offsetHeight

  const add_class_on_scroll = () => header.classList.add('is-scroll');
  const remove_class_on_scroll = () => header.classList.remove('is-scroll');

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
  });
}

$(document).ready(function(){
  // header dropdown toggle
  $('.js-header-toggle').click(function(){
    $('body').toggleClass('is-show-dropdown lock');
  });
});
