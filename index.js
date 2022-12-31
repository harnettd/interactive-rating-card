const submitButton = document.querySelector("button");
const ratings = document.querySelectorAll(".rating");

for (var i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function() {

    const clickValue = this.innerHTML;
    const currentSelection = document.querySelector(".selected");

    if (currentSelection != null) {
      if (currentSelection.innerHTML != clickValue) {
        currentSelection.classList.remove("selected");
      } else {
        return;
      }
    }
    this.classList.add("selected");
    document.getElementById("submitted-rating").innerHTML = clickValue;
  });
}

submitButton.addEventListener("click", function() {
  document.querySelector(".rating-card").classList.add("inactive");
  document.querySelector(".thank-you-card").classList.remove("inactive");
});
