const submitButton = document.querySelector("button");
const ratings = document.querySelectorAll(".rating");

submitButton.addEventListener("click", function() {
  alert("Submitted!");
});

for (var i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function() {

    const clickValue = this.innerHTML;
    const currentSelection = document.querySelector(".selected");

    if (currentSelection != null) {
      if (currentSelection.innerHTML != this.innerHTML) {
        currentSelection.classList.remove("selected");
      } else {
        return;
      }
    }
    this.classList.add("selected");
    document.getElementById("submitted-rating").innerHTML = clickValue;
  });
}
