var submitButton = document.querySelector("button");
var ratings = document.querySelectorAll(".rating");

submitButton.addEventListener("click", clickAlert);

ratings.forEach((rating, ratingValue) => {
  rating.addEventListener("click", clickAlert);
});


function clickAlert() {
  alert("Clicked!");
}
