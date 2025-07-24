document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <footer id="footer" class="footer">
      <div class="main-footer" data-bg="/images/1920x556_bg1.jpg">
        <div class="container">
          <div class="row flex-row">
            <div class="col-md-4 col-xs-6 text-start">
              <div class="widget">
                <h5 class="widget-title">Contact Us</h5>
                <div class="content-element3">           
                  <p>
                    <div class="company-logo">
                     <a href="/index.html"> <img src="/images/logo-ss global services-white.png" alt=""></a>
                    </div>
                  <div>
                    <strong>Phone:</strong>
                    <a href="tel:+919999992605" class="link-text">+91 9999992605</a>
                    </div>
                    <div>
                    <strong>Telephone:</strong>
                    <a href="tel:011-40194697" class="link-text">011-40194697</a>
                    </div>
                    <div>
                    <strong>WhatsApp: </strong>
                    <a href="https://wa.me/919717929681" target="_blank" class="link-text">+91 9717929681</a>
                    </div>
                    <div>
                    <strong>E-mail:</strong>
                    <a href="mailto:info@ssglobalservices.in" class="link-text">info@ssglobalservices.in</a>
                    </div>
                  </p>
                </div>
                <div class="brend-box">
                  <a href="#"><img src="/images/BIS-certification-logo.png" alt="BIS Certification in India" /></a>
                  <a href="#"><img src="/images/EPR-certification-logo.png" alt="EPR Certification in India" /></a>
                  <a href="#"><img src="/images/BEE-certification-logo.png" alt="BEE Certification in India" /></a>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-xs-6">
              <div class="widget">
                <h5 class="widget-title">Services</h5>
                <ul class="info-links">
                  <li><a href="#">BIS Approval</a></li>
                  <li><a href="#">EPR Certification</a></li>
                  <li><a href="#">WPC-ETA Approval</a></li>
                  <li><a href="#">BEE Certification</a></li>
                  <li><a href="#">TAC IMEI Certification</a></li>
                  <li><a href="#">TEC/MTCTE Approval</a></li>
                  <li><a href="#">LMPC Registration</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-2 col-xs-6">
              <div class="widget">
                <h5 class="widget-title">Quick Links</h5>
                <ul class="info-links">
                  <li><a href="/about.html">About Us</a></li>
                  <li><a href="/contact.html">Contact US</a></li>
                  <li><a href="/news-updates.html">News & Update</a></li>
                  <li><a href="/gallery.html">Our Gallery</a></li>
                  <li><a href="/blogs.html">Our Blogs</a></li>
                  <li><a href="/career.html">Career</a></li>
                  <li><a href="/international-audit.html">International Audit</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-xs-6 ">
              <div class="widget">
                <h5 class="widget-title">Follow Us</h5>
                <ul class="social-icons style-2">
                  <li><a href="https://www.facebook.com/share/1Auq4pfYhL/" target="_blank" alt="Facebook | SS Global Services"><i class="icon-facebook" ></i></a></li>
                  
                  <li><a href="https://www.linkedin.com/company/ss-global-services/" target="_blank" alt="LinkedIn | SS Global Services"><i class="icon-linkedin-3" ></i></a></li>
                  <li><a href="https://www.youtube.com/@ssglobalservices7644" target="_blank" alt="YouTube | SS Global Services"><i class="icon-youtube-play" ></i></a></li>
                  <li><a href="https://www.instagram.com/ssglobalservices_?igsh=aXJiM3BwbzYyZTB5" target="_blank" alt="Instagram | SS Global Services"><i class="icon-instagram-5"></i></a></li>
                </ul>
              </div>
              <div class="widget">
                <h5 class="widget-title">We accept</h5>
                <div class="pay-box">
                  <a href="#"><img src="/images/pay1.jpg" alt="" ></a>
                  <a href="#"><img src="/images/pay2.jpg" alt="" ></a>
                  <a href="#"><img src="/images/pay3.jpg" alt="" ></a>
                  <a href="#"><img src="/images/pay4.jpg" alt="" ></a>
                </div>
              </div>
            </div>
          </div>

            
              <div class="widget office-location my-5">
                <h5 class="widget-title mb-3 pt-4">Office Locations</h5>
                <div class="row">
                    <div class="col-md-6 mb-4">
                  <p class="content-element1">
                     <span class="address-title">Head Office:</span> B-1/630, 2nd floor, Janakpuri East, Delhi, India -110058
                  </p>
                    </div>
                    <div class="col-md-6 mb-4">
                  <p class="content-element1">
                     <span class="address-title">Registered Office:</span> F-38, Vishnu Garden, New Delhi, 110018
                  </p>
                    </div>
                </div>
                
                <div class="row ">
                        <div class="col-md-6 mb-4">
                      <p class="content-element1">
                         <span class="address-title">Branch Office:</span> H.B Twin Tower, 8th Floor, Above Max Hospital, Netaji Subhash Place, New Delhi, 110034
                      </p>
                        </div>
                    <div class="col-md-6 mb-4">
                  <p class="content-element1">
                     <span class="address-title">Branch Office:</span> Office number 606, Nandan Probiz, opposite to R. K Laxman Museum, Laxman Nagar, Balewadi Pune, 411045
                  </p>
                    </div>
                </div>
                <div class="row">
                <div class="col-md-6 mb-4">
              <p class="content-element1">
                 <span class="address-title">Branch Office: </span> Suite: 805, Floor: 8, Block A, Automobile Mansion, 45 Zhenhua Road, Huaqiang North Area, Futian, Shenzhen 518031, China.
              </p>
                </div>
                </div>
                </div>
           

         
        </div>
        <div class="container-fluid bottom-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6 copyright">
                <p>Copyright © <span id="copyright-year"></span> SS Global Services. All Rights Reserved.</p>
              </div>
              <div class="col-md-6 privacy-policy">
                <a href="">Privacy Policy</a> <span class="px-1">|</span>
                <a href="">Term & Condition</a> <span class="px-1">|</span>
                <a href="">Refund & Cancellation Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  //  footer HTML and year
  document.getElementById("footer-container").innerHTML = footerHTML;
  document.getElementById("copyright-year").textContent = new Date().getFullYear();

  // Success Modal HTML
  const successModalHTML = `
    <div id="ssgsSuccessModal" class="ssgs-modal-overlay" style="display: none;">
      <div class="ssgs-modal-content">
        <h4>Thank you!</h4>
        <p>Your request has been submitted successfully. Our team will contact you shortly.</p>
        <button id="ssgsCloseModalBtn" class="btn btn-style-5">Close</button>
      </div>
    </div>
  `;

  // Inject Success Modal into DOM
  document.body.insertAdjacentHTML("beforeend", successModalHTML);

  // Close Modal on Button Click
  document.body.addEventListener("click", function (e) {
    if (e.target.id === "ssgsCloseModalBtn") {
      document.getElementById("ssgsSuccessModal").style.display = "none";
    }
  });


});
