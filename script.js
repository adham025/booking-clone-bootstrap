document.querySelectorAll(".fa-heart").forEach((heart) => {
  heart.addEventListener("click", function () {
    if (heart.classList.contains("fa-regular")) {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid");
      heart.style.color = "red";
    } else {
      heart.classList.remove("fa-solid");
      heart.classList.add("fa-regular");
      heart.style.color = "black";
    }
  });
});

function hideButton(button) {
  button.style.display = "none";
}
