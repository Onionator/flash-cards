$(document).ready(function() {
  //click function that hides term and shows definition
  $(".col-md-3").click(function() {
    $(this).children("p").toggle();
    $(this).children("h1").toggle();
    //$(this).children("p").addClass("selected");
  });
});
