$(function name() {
  
  $('.nav-bar').on('click', function () {
    $('.nav-items').slideToggle(300, function name() {
      
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });
  });

});