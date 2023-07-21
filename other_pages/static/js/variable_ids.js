function loadAbout() {
  document.getElementById("header_title").innerHTML = "About me";
  fetch("static/js/sections/about.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("body_content").innerHTML = text));
}

function loadProjects() {
  document.getElementById("header_title").innerHTML = "Projects";
  fetch("static/js/sections/projects.html")
  .then((response) => response.text())
  .then((text) => (document.getElementById("body_content").innerHTML = text));
}
