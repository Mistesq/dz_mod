$(function () {

  var $links = $('.nav-link');

  $links.on('click', function() {
    $links.removeClass("active");
    $(this).toggleClass("active");
    var $menuText = $('.menu-text');
    if($(this).hasClass("A")) {
      $menuText.hide();
      $(".Atext").show();
    }
    else if($(this).hasClass("B")) {
      $menuText.hide();
      $(".Btext").show();
    }
    else{
      $menuText.hide();
      $(".Ctext").show();
    }
    console.log(this);
  })

var $button = $('.btn');

$("#firstname").hover( function() { $(".cv2").toggle(); });
$("#lastname").hover( function() { $(".cv3").toggle(); });
$("#address").hover( function() { $(".cv4").toggle(); });

$button.on('click',function() {
 $(".cv2").toggle();
   $(".cv3").toggle();
  $(".cv4").toggle();
})
})
