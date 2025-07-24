document.addEventListener("DOMContentLoaded", function () {
  // === Newsletter Form ===
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail").value;
      const msgBox = document.getElementById("newsletterMsg");

      fetch("PHP/newsletter_submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "email=" + encodeURIComponent(email)
      })
        .then(res => res.text())
        .then(data => {
          msgBox.style.display = "block";
          msgBox.innerHTML = `<div class="alert alert-success">${data}</div>`;
          newsletterForm.reset();
        })
        .catch(() => {
          msgBox.style.display = "block";
          msgBox.innerHTML = `<div class="alert alert-danger">Something went wrong. Please try again.</div>`;
        });
    });
  }

  // === Popup Form ===
  const popupForm = document.getElementById("popupFormMain");
  if (popupForm) {
    popupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(popupForm);
      const msgBox = document.getElementById("popupMsg");

      fetch("PHP/popup_form_submit.php", {
        method: "POST",
        body: new URLSearchParams(formData)
      })
        .then(res => res.text())
        .then(data => {
          msgBox.style.display = "block";
          msgBox.innerHTML = `<div class="alert alert-success">${data}</div>`;
          popupForm.reset();
        })
        .catch(() => {
          msgBox.style.display = "block";
          msgBox.innerHTML = `<div class="alert alert-danger">Submission failed. Please try again.</div>`;
        });
    });
  }


  // === Callback Form (Request a Call Back) ===
  const callbackForm = document.getElementById("contact-form");
  if (callbackForm) {
    callbackForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(callbackForm);

      fetch("PHP/callback_form_submit.php", {
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(data => {
          let alertBox = document.createElement("div");
          alertBox.className = "form-alert-box";
          alertBox.innerHTML = `<div class="alert ${data.status === "success" ? "alert-success" : "alert-danger"}">${data.message}</div>`;
          callbackForm.appendChild(alertBox);

          if (data.status === "success") {
            callbackForm.reset();
          }

          setTimeout(() => {
            alertBox.remove();
          }, 4000);
        })
        .catch(err => {
          alert("Submission failed. Please try again.");
          console.error(err);
        });
    });
  }
  

  // ========== 1. Inject Success Modal into DOM ==========
const successModalHTML = `
  <div id="ssgsSuccessModal" class="ssgs-modal-overlay">
    <div class="ssgs-modal-content">
      <h4>Thank you!</h4>
      <p>Your request has been submitted successfully. Our team will contact you shortly.</p>
      <button id="ssgsCloseModalBtn" class="btn btn-style-5">Close</button>
    </div>
  </div>
`;
document.body.insertAdjacentHTML("beforeend", successModalHTML);

// ========== 2. Show & Auto-Close Modal ==========
function showSuccessModal() {
  const modal = document.getElementById("ssgsSuccessModal");
  if (modal) {
    modal.classList.add("show");
    setTimeout(() => {
      modal.classList.remove("show");
    }, 5000);
  }
}

// ========== 3. Close Modal on Button Click ==========
document.body.addEventListener("click", function (e) {
  if (e.target.id === "ssgsCloseModalBtn") {
    const modal = document.getElementById("ssgsSuccessModal");
    if (modal) modal.classList.remove("show");
  }
});

// ========== 4. Request Service Form ==========
const serviceForm = document.getElementById("service-request-form");
if (serviceForm) {
  serviceForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(serviceForm);

    fetch("PHP/request_form_submit.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          serviceForm.reset();
          showSuccessModal(); //  Show modal only here
        } else {
          alert(data.message || "Submission failed. Try again.");
        }
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      });
  });
}

// ========== 5. Contact Us Form ==========
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    fetch("PHP/contact_form_submit.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          contactForm.reset();
          showSuccessModal(); //  Show modal only here
        } else {
          alert(data.message || "Submission failed. Try again.");
        }
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      });
  });
}




});



