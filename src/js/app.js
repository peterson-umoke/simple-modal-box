(function($) {
  $(document).ready(function() {
    const btn = $(".show-modal-btn"),
      clBtn = $(".close-btn"),
      wrapperName = $(".simple-modal-wrapper");

    btn.on("click", function(me) {
      wrapperName.addClass("show-modal");
      me.preventDefault();
    });

    clBtn.on("click", function(me) {
      wrapperName.removeClass("show-modal");

      me.preventDefault();
    });

    $(window).on("click", function(ev) {
      if (ev.target == document.querySelector(".simple-modal-wrapper")) {
        wrapperName.removeClass("show-modal");
      }
    });
  });
})(jQuery);
