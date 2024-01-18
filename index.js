const navbar = document.querySelector("nav")
const menuButton = document.getElementById("menu-button")

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("open")
})
