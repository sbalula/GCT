$(function(){
    
  var allPanels = $('.accordion_area li ul').hide();
    
  $('.accordion_area .areas a').click(function() {
    allPanels.slideUp();
    $(this).parent().parent().find('ul').slideDown();
    return false;
  });
});

