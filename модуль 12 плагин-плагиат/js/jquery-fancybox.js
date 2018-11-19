(function($) {

  $.fn.fancybox = function() {
    var $link = this;
    var $body = $('body');
    var $modal;
    var $overlay;

    function showModal(e) {
      var href = $link.attr('href');
      $modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>"');
      $overlay = $('<div class="fancybox-overlay">');

      e.preventDefault();

      $overlay.one('click', hideModal);
      $body.append($overlay);
      $body.append($modal);
    }

    function hideModal() {
      $modal.remove();
      $overlay.remove();
    }


    $link.on('click', showModal);



    return this;
  }

})(jQuery);
