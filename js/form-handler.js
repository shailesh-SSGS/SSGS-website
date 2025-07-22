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
  
});
