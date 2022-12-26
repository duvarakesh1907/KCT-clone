const navBtn = document.querySelector(".navBtn");
const navBar = document.querySelector(".navList");
navBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
