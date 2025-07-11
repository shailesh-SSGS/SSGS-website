document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <footer id="footer" class="footer">
      <div class="main-footer" data-bg="images/1920x556_bg1.jpg">
        <div class="container">
          <div class="row flex-row">
            <div class="col-md-4 col-xs-6 text-start">
              <div class="widget">
                <h5 class="widget-title">Contact Us</h5>
                <div class="content-element3">
                  <p class="content-element1">
                    <strong>Office address:</strong> B-1/630, 2nd floor, Janakpuri, Delhi -58
                  </p>
                  <p>
                    <strong>Phone:</strong>
                    <a href="tel:+919999992605" class="link-text">+91 9999992605</a><br />
                    <strong>Telephone:</strong>
                    <a href="tel:011-40194697" class="link-text">011-40194697</a><br />
                    <strong>WhatsApp: </strong>
                    <a href="https://wa.me/919717929681" class="link-text">+91 9717929681</a><br />
                    <strong>E-mail:</strong>
                    <a href="mailto:info@ssglobalservices.in" class="link-text">info@ssglobalservices.in</a>
                  </p>
                </div>
                <div class="brend-box">
                  <a href="#"><img src="images/BIS-certification-logo.png" alt="" /></a>
                  <a href="#"><img src="images/EPR-certification-logo.png" alt="" /></a>
                  <a href="#"><img src="images/BEE-certification-logo.png" alt="" /></a>
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
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">News & Update</a></li>
                  <li><a href="#">Our Gallery</a></li>
                  <li><a href="#">Contact US</a></li>
                  <li><a href="#">Our Blogs</a></li>
                  <li><a href="#">International Audit</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-xs-6 text-md-end">
              <div class="widget">
                <h5 class="widget-title">Follow Us</h5>
                <ul class="social-icons style-2">
                  <li><a href="#"><i class="icon-facebook"></i></a></li>
                  <li><a href="#"><i class="icon-twitter"></i></a></li>
                  <li><a href="#"><i class="icon-linkedin-3"></i></a></li>
                  <li><a href="#"><i class="icon-youtube-play"></i></a></li>
                  <li><a href="#"><i class="icon-instagram-5"></i></a></li>
                </ul>
              </div>
              <div class="widget">
                <h5 class="widget-title">We accept</h5>
                <div class="pay-box">
                  <a href="#"><img src="images/pay1.jpg" alt="" /></a>
                  <a href="#"><img src="images/pay2.jpg" alt="" /></a>
                  <a href="#"><img src="images/pay3.jpg" alt="" /></a>
                  <a href="#"><img src="images/pay4.jpg" alt="" /></a>
                </div>
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

  document.getElementById("footer-container").innerHTML = footerHTML;
  document.getElementById("copyright-year").textContent = new Date().getFullYear();
});
