function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#Profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Maycon 1.jpg")
  } else {
    img.setAttribute("src", "./assets/Maycon 2.jpg")
  }
}
