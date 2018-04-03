//business logic
function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = 10;
}


Ticket.prototype.adjustedPrice = function() {
  if (this.age <= 12) {
    this.price -= 3;
  } else if (this.age >= 65) {
    this.price -= 5;
  } else {
    this.price = 10;
  }
  return this.price;
};


// user interface logic
$(document).ready(function() {
  $("#ticket-price").submit(function(event){
    event.preventDefault();
    debugger;
    var inputtedMovieTitle = $("#movie-title").val();
    var inputtedMovieTime = $("#movie-time").val();
    var inputtedAge = parseInt($("#age").val());

    var ticketPrice = new Ticket(inputtedMovieTitle, inputtedMovieTime, inputtedAge);


    var adjustedPrice = ticketPrice.adjustedPrice();
    console.log(adjustedPrice)
    $("#show-ticket-price").show();
    $("ul#price").append(adjustedPrice);

    $(".movie-title").text(inputtedMovieTitle);
    $(".movie-time").text(inputtedMovieTime);
  });

});
