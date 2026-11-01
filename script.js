// attaching the pointer to move
// $(document).ready(function() {
//   var $magic = $(".magic"),
//       magicWHalf = $magic.width() / 2;
//   $(document).on("mousemove", function(e) {
//     $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
//   });
// });
// adding delay
$(document).ready(function() {
  var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2,
      delay = 500; // Delay in milliseconds
  $(document).on("mousemove", function(e) {
    setTimeout(function() {
      $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    }, delay);
  });
});