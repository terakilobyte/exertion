/* eslint-disable */
$(document).ready(function($){
  //toggle 3d navigation
  $('.cd-3d-nav-trigger').on('click', function(){
    toggle3dBlock(!$('.cd-header').hasClass('nav-is-visible'));
  });

  $('.cd-3d-nav').on('click', 'a', function(){
    toggle3dBlock(false)
  });

  function toggle3dBlock(addOrRemove) {
    if (typeof addOrRemove === 'undefined'){
      addOrRemove = true;
    }
    $('.cd-header').toggleClass('nav-is-visible', addOrRemove);
    $('.cd-3d-nav-container').toggleClass('nav-is-visible', addOrRemove);
    $('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      addOrRemove;
    });
  }

  $.fn.removeClassPrefix = function(prefix) {
    this.each(function(i, el) {
      var classes = el.className.split(" ").filter(function(c) {
        return c.lastIndexOf(prefix, 0) !== 0;
      });
      el.className = $.trim(classes.join(" "));
    });
    return this;
  };
});
