//business logic


// user interface logic
$(document).ready(function() {
  $("#ticket-price").submit(function(event){
    event.preventDefault();
    var movieTitle = $("#movie-title").val(); console.log(movieTitle)
    var movieTime = $("#movie-time").val(); console.log(movieTime)
    var age = parseInt($("#age").val());; console.log(age)
    $("#show-ticket-price").show();

    $(".movie-title").text(movieTitle);
    $(".movie-time").text(movieTime);
  });

});
