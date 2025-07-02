document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <!-- - - - - - - - - - - - - - Header - - - - - - - - - - - - - - - - -->
    <header id="header" class="header">

      <!-- pre-header (NOT sticky) -->
      <div class="pre-header">
        <div class="container">
          <div class="flex-row flex-justify">
            <ul class="contact-info">
              <li><a href="tel:+91-9999992605"><i class="icon-phone pr-4"> </i> +91-9999992605</a></li>
              <li><a href="tel:+91-9718430644"><i class="icon-phone"> </i> +91-9718430644</a></li>
              <li><a href="tel:011-40194697"><i class="icon-phone"> </i> 011-40194697</a></li>
              <li><a href="mailto:contact@ssglobalservices.com"><i class="icon-email"> </i> info@ssglobalservices.in</a></li>
            </ul>
            <ul class="social-icons" id="pre-header-social-icons">
              <li><a href="#"><i class="icon-facebook"></i></a></li>
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="#"><i class="icon-linkedin-3"></i></a></li>
              <li><a href="#"><i class="icon-youtube-play"></i></a></li>
              <li><a href="#"><i class="icon-instagram-5"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Sticky Main Menu -->
      <div class="menu-holder" style="position: sticky; top: 0; z-index: 1000; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <div class="menu-wrap">
          <div class="container">
            <div class="nav-item flex-row flex-justify flex-center">
              <div class="logo-wrap">
                <a href="index.html" class="logo float-start p-0">
                  <img src="images/logo.webp" style="max-height:90px;" alt="Logo">
                </a>
              </div>

              <nav id="main-navigation" class="main-navigation">
                <ul id="menu" class="clearfix">
                  <li class="current"><a href="#">Home</a></li>

                  <li class="dropdown"><p>About</p>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="team.html">Our Team</a></li>
                        <li><a href="#">Achievements & Awards</a></li>
                        <li><a href="#">Association</a></li>
                      </ul>
                    </div>
                  </li>

                  <li class="dropdown has-megamenu"><p>Services</p>
                    <div class="sub-menu-wrap mega-menu flex-row">
                      <div class="mega-submenu">
                        <h5 class="mega-title"><span class="cicon-heating"></span>License & Certification</h5>
                        <ul>
                          <li><a href="BIS-domestic-manufacturers.html">BIS (ISI Mark) for Domestic Manufacturers</a></li>
                          <li><a href="#">BIS (ISI Mark) for Foreign Manufacturers</a></li>
                          <li><a href="#">BIS Scheme-X Certification</a></li>
                          <li><a href="#">BIS Certificate of Conformity (CoC)</a></li>
                          <li><a href="#">BIS License For Toys</a></li>
                          <li><a href="#">Reach Certification (Global)</a></li>
                          <li><a href="#">Laboratory Recognition Scheme (LRS)</a></li>
                          <li><a href="#">World Manufacturer Identifier (WMI) Code</a></li>
                        </ul>
                      </div>
                      <div class="mega-submenu">
                        <h5 class="mega-title"><span class="cicon-cooling"></span>Registrations</h5>
                        <ul>
                          <li><a href="#">BEE Registration</a></li>
                          <li><a href="#">BIS (CRS) Registration For Electronic Product</a></li>
                          <li><a href="#">E-Waste Management (EPR)</a></li>
                          <li><a href="#">WPC-ETA Approval</a></li>
                          <li><a href="#">TEC/MTCTE Approval</a></li>
                          <li><a href="#">TAC & IMEI Registration</a></li>
                          <li><a href="#">MSME & NSIC Registration</a></li>
                          <li><a href="#">LMPC Registration</a></li>
                          <li><a href="#">Start-Up Registration</a></li>
                          <li><a href="#">Legal Metrology</a></li>
                        </ul>
                      </div>
                      <div class="mega-submenu">
                        <h5 class="mega-title"><span class="cicon-plumbing"></span>Auxiliary</h5>
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

                  <li class="dropdown"><p>Latest notification</p>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="#">News & Update</a></li>
                        <li><a href="#">Upcoming Events</a></li>
                        <li><a href="#">Career</a></li>
                      </ul>
                    </div>
                  </li>

                  <li class="dropdown"><p>Gallery</p>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="gallery.html">Image Gallery</a></li>
                        <li><a href="#">Video Gallery</a></li>
                        <li><a href="#">International Audit</a></li>
                      </ul>
                    </div>
                  </li>

                  <li class="dropdown"><p>Contact Us</p>
                    <div class="sub-menu-wrap">
                      <ul>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#">Feedback/Concerns</a></li>
                      </ul>
                    </div>
                  </li>

                  <li class="dropdown"><p>Login</p>
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
    <!-- - - - - - - - - - - - - end Header - - - - - - - - - - - - - - - -->
  `;
  document.getElementById("header-container").innerHTML = headerHTML;
});
