document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header id="header" class="header sticky-header">
      <!-- pre-header -->
      <div class="pre-header">
        <div class="container">
          <div class="flex-row flex-justify">
            <ul class="contact-info">
              <li><a href="tel:+91-9999992605"><i class="icon-phone pr-4"> </i> +91-9999992605</a></li>
              <li><a href="tel:+91-9717929681"><i class="icon-phone"> </i> +91-9717929681</a></li>
              <li><a href="tel:011-40194697"><i class="icon-phone"> </i> 011-40194697</a></li>
              <li><a href="mailto:contact@ssglobalservices.com"><i class="icon-email"> </i> info@ssglobalservices.in</a></li>
            </ul>
            <ul class="social-icons" id="pre-header-social-icons">
              <li><a href="https://www.facebook.com/share/1Auq4pfYhL/" target="_blank"><i class="icon-facebook"></i></a></li>
               
              <li><a href="https://www.linkedin.com/company/ss-global-services/" target="_blank"><i class="icon-linkedin-3"></i></a></li>
              <li><a href="https://www.youtube.com/@ssglobalservices7644" target="_blank"><i class="icon-youtube-play"></i></a></li>
              <li><a href="https://www.instagram.com/ssglobalservices_?igsh=aXJiM3BwbzYyZTB5" target="_blank"><i class="icon-instagram-5"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- main menu -->
      <div class="menu-holder">
        <div class="menu-wrap">
          <div class="container">
            <div class="nav-item flex-row flex-justify flex-center">
              <div class="logo-wrap">
                <a href="/index.html" class="logo float-start p-0">
                  <img src="/images/logo.webp" style="max-height:90px;" alt="">
                </a>
              </div>
              <nav id="main-navigation" class="main-navigation">
                <ul id="menu" class="clearfix">
                  <li><a href="index.html" class="nav-link home-link">Home</a></li>
                  <li class="dropdown">
                    <a href="#">About</a>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="/about.html">About Us</a></li>
                        <li><a href="/team.html">Our Team</a></li>
                        <li><a href="#">Achievements & Awards</a></li>
                        <li><a href="/associations.html">Association</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="dropdown has-megamenu">
                    <a href="#">Services</a>
                    <div class="sub-menu-wrap mega-menu flex-row">
                      <div class="mega-submenu">
                        <h5 class="mega-title">License & Certification</h5>
                        <ul>
                          <li><a href="/BIS-domestic-manufacturers.html">BIS (ISI Mark) for Domestic Manufacturers</a></li>
                          <li><a href="/BIS-foreign-manufacturers.html">BIS (ISI Mark) for Foreign Manufacturers</a></li>
                          <li><a href="/#">BIS Scheme-X Certification</a></li>
                          <li><a href="/#">BIS Certificate of Conformity (CoC)</a></li>
                          <li><a href="/#">BIS License For Toys</a></li>
                          <li><a href="/#">Reach Certification (Global)</a></li>
                          <li><a href="/#">Laboratory Recognition Scheme (LRS)</a></li>
                          <li><a href="/#">World Manufacturer Identifier (WMI) Code</a></li>
                        </ul>
                      </div>
                      <div class="mega-submenu">
                        <h5 class="mega-title">Registrations</h5>
                        <ul>
                          <li><a href="#">BEE Registration</a></li>
                          <li><a href="#">BIS (CRS) Registration For Electronic Product</a></li>
                          <li><a href="#">EPR Registration for E-Waste</a></li>
                          <li><a href="#">EPR Registration for Plastic Waste</a></li>
                          <li><a href="#">EPR Registration for Battery Waste</a></li>
                          <li><a href="#">EPR Registration for Tyre Waste</a></li>
                          <li><a href="#">WPC-ETA Approval</a></li>
                          <li><a href="#">BIS Scheme-X Certification</a></li>
                          <li><a href="#">TEC/MTCTE Approval</a></li>
                          <li><a href="#">TAC & IMEI Registration</a></li>
                          <li><a href="#">Legal Metrology (LMPC) Registration</a></li>
                        </ul>
                      </div>
                      <div class="mega-submenu">
                        <h5 class="mega-title">Auxiliary</h5>
                        <ul>
                          <li><a href="#">EMI-EMC Test</a></li>
                          <li><a href="#">RF Testing</a></li>
                          <li><a href="#">IP Rating Test</a></li>
                          <li><a href="#">NABL Testing</a></li>
                          <li><a href="#">LM 79 & LM 80</a></li>
                          <li><a href="#">ROHS Approval</a></li>
                          <li><a href="#">List of Equipments</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown">
                    <a href="#">Latest Notification</a>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="/news-updates.html">News & Update</a></li>
                        <li><a href="#">Upcoming Events</a></li>
                        <li><a href="/blogs.html">Blogs</a></li>
                        <li><a href="/career.html">Career</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="dropdown">
                    <a href="#">Gallery</a>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="/gallery.html">Image Gallery</a></li>
                        <li><a href="/international-audit.html">International Audit</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="dropdown">
                    <a href="#">Contact Us</a>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="/contact.html">Contact Us</a></li>
                        <li><a href="/feedback.html">Feedback/Concerns</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="dropdown">
                    <a href="#">Login</a>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="#">Payment</a></li>
                        <li><a href="#">Admin Login</a></li>
                        <li><a href="#">CRM Login</a></li>
                        <li><a href="#">Vendor Registration</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;

  // Insert the header into the page
  document.getElementById("header-container").innerHTML = headerHTML;

  // Wait until DOM updates with new header, then match current page
  setTimeout(() => {
    const path = window.location.pathname.split("/").pop() || "index.html";
    const navItems = document.querySelectorAll('#menu li');

    navItems.forEach(parentLi => {
      const childLink = parentLi.querySelector("a");
      if (!childLink) return;
      const href = childLink.getAttribute("href").replace(/^\//, '');
      const currentPath = path.replace(/^\//, '');

      if (href && href === currentPath) {
        parentLi.classList.add("current");
        const grandParent = parentLi.closest("li.dropdown");
        if (grandParent && grandParent !== parentLi) {
          grandParent.classList.add("current");
        }
      }
    });
  }, 10);
});
