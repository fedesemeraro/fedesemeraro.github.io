function loadAboutTitle(){
    fetch('static/js/sections/about_title.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('header_title').innerHTML = text);
}
function loadAboutBody(){
    fetch('static/js/sections/about_body.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('body_content').innerHTML = text);
}

function loadHobbiesTitle(){
    fetch('static/js/sections/hobbies_title.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('header_title').innerHTML = text);
  }
function loadHobbiesBody(){
    fetch('static/js/sections/hobbies_body.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('body_content').innerHTML = text);
}

function loadProjectsTitle(){
    fetch('static/js/sections/projects_title.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('header_title').innerHTML = text);
  }
function loadProjectsBody(){
    fetch('static/js/sections/projects_body.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('body_content').innerHTML = text);
}

function loadStudiesTitle(){
    fetch('static/js/sections/studies_title.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('header_title').innerHTML = text);
  }
function loadStudiesBody(){
    fetch('static/js/sections/studies_body.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('body_content').innerHTML = text);
}

function loadWorkTitle(){
    fetch('static/js/sections/work_title.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('header_title').innerHTML = text);
  }
function loadWorkBody(){
    fetch('static/js/sections/work_body.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('body_content').innerHTML = text);
}
