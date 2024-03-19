$(".form__btn").click(function () {
  // Check if name and message fields are filled
  var name = $("#name").val().trim();
  var message = $("#message").val().trim();

  if (name !== "" && message !== "") {
    $(".mail__letter").toggleClass("move");
    $(".mail__top").toggleClass("closed");
    $(".form__btn--invisible").toggleClass("visible");
    $(".form__btn--visible").toggleClass("invisible");

    // Reset animation after 2 seconds
    setTimeout(function() {
      $(".mail__letter").removeClass("move");
      $(".mail__top").removeClass("closed");
      $(".form__btn--invisible").removeClass("visible");
      $(".form__btn--visible").removeClass("invisible");
    }, 2000);
  } else {
    // Add 'shake' class to the button and change color to red
    $(".form__btn").addClass("shake").css("background-color", "#ff4d4d");
    // Remove 'shake' class and revert color after 0.3 seconds
    setTimeout(function() {
      $(".form__btn").removeClass("shake").css("background-color", "#7581ff");
    }, 300);
  }
});

$("input").focus(function () {
  $(this).parent().addClass("active");
  $("input").focusout(function () {
    if ($(this).val() == "") {
      $(this).parent().removeClass("active");
    } else {
      $(this).parent().addClass("active");
    }
  });
});
