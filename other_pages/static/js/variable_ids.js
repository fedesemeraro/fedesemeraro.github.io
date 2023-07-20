function loadAbout() {
  document.getElementById("header_title").innerHTML = "About me";
  fetch("static/js/sections/about.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("body_content").innerHTML = text));
}

function loadPublications() {
  document.getElementById("header_title").innerHTML = "Publications";
  fetch("static/js/sections/publications.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("body_content").innerHTML = text));
}

function loadProjects() {
  document.getElementById("header_title").innerHTML = "Projects";
  fetch("static/js/sections/projects.html")
  .then((response) => response.text())
  .then((text) => (document.getElementById("body_content").innerHTML = text));
}

function loadStudies() {
  document.getElementById("header_title").innerHTML = "Studies";
  fetch("static/js/sections/studies.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("body_content").innerHTML = text));
}

function loadWork() {
  document.getElementById("header_title").innerHTML = "Work";
  fetch("static/js/sections/work.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("body_content").innerHTML = text));
}
