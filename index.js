const submitButton = document.querySelector("button");
const ratings = document.querySelectorAll(".rating");

submitButton.addEventListener("click", function() {
  alert("Submitted!");
});

for (var i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function() {
    document.getElementById("submitted-rating").innerHTML = this.innerHTML;
  });
}
