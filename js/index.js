const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".nav-toggle");

// NavBar Scroll Color Change
window.addEventListener("scroll", () => {
  const primaryHeader = document.querySelector(".primary-header");
  primaryHeader.classList.toggle("sticky", window.scrollY > 0);
});

// Navbar Toggle Button
function toggleNav() {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
}

navToggle.addEventListener("click", () => {});


// Contact Form Functions
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();

  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  
  console.log(data.values);
  
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Thanks For your Submission!");
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          alert("Oops! There was a problem submitting your form");
        }
      })
    }
  }).catch(error => {
    alert("Oops! There was a problem submitting your form");
  });
}

form.addEventListener("submit", handleSubmit)




// Form From Rubangino.in
// window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  // var form = document.getElementById("contact-form");
  // var status = document.getElementById("submit-button-status");

  // Success and Error functions for after the form is submitted

  // function success() {
  //   form.reset();
  //   status = alert("Hey! Your form submitted successfully. Thanks!");
  // }

  // function error() {
  //   status = alert("Contact form: All fields are mandatory!!");
  // }

  // handle the form submission event

//   form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

// helper function for sending an AJAX request

// function ajax(method, url, data, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Accept", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// }