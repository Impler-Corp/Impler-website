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
        Accept: "application/json",
      },
    })
    .then((response) => {
      if (response.ok) {
        openPopup("Thank You For Contacting IMPLER!");
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            openPopup("Oops! There was a problem submitting your form");
          }
        });
      }
    })
    .catch((error) => {
      openPopup("Oops! There was a problem submitting your form");
    });
}

form.addEventListener("submit", handleSubmit);

// dynamic footer
const footerCopyright = document.querySelector(".copyright p");

const year = new Date().getFullYear();

footerCopyright.textContent = `Copyright@${year} | All Rights Reserved`;

// Popup
function closePopup() {
  const popupContainer = document.querySelector(".popup-container");
  const popup = document.querySelector(".popup");

  popupContainer.style.pointerEvents = "none";
  popupContainer.style.opacity = 0;
  popup.style.transform = "scale(0)";
}

function openPopup(message) {
  const popupContainer = document.querySelector(".popup-container");
  const popup = document.querySelector(".popup");
  const popupMessage = document.querySelector(".popup-message");

  popupMessage.textContent = message;

  popupContainer.style.pointerEvents = "all";
  popupContainer.style.opacity = 1;
  popup.style.transform = "scale(1)";
}