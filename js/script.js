(function($) {
  'use strict';

  $(function() {
    document.addEventListener("touchstart", function() {}, false);

    if ('ontouchstart' in document.documentElement) {
      $('body').css('cursor', 'pointer');
    }

    /* Sticky menu */
    $('body').Temp({
      sticky: true
    });

  });
})(jQuery);


// text counting section -------------------------------------------------------------------------

// Simple Counter Animation
  const counters = document.querySelectorAll('.counter-number');
  const speed = 200; // lower = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target.toLocaleString() + '+';
        }
      };

      updateCount();
    });
  };

// Animate only when visible
const options = {
  threshold: 0.5
};

const target = document.querySelector('.counter-section');

if (target) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCounters();
        observer.disconnect(); // Animate only once
      }
    });
  }, options);

  observer.observe(target);
}




// clients/Partners logo  slider ------------------------------------

$(document).ready(function(){
  $('.client-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,      // No delay between slides
    speed: 3000,           // Slow, smooth scrolling
    cssEase: 'linear',     // Continuous motion
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,   // We'll handle pause manually
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 520,
        settings: { slidesToShow: 2 }
      }
    ]
  });

  // Force immediate pause/resume on hover
  $('.client-slider').on('mouseenter', function () {
    $(this).slick('slickPause');
  }).on('mouseleave', function () {
    $(this).slick('slickPlay');
  });
});



    // About Page Mission Vision (Read More) -------------------------------

function toggleText(btn) {
  const card = btn.closest('.info-card');
  const moreTexts = card.querySelectorAll('.more-text');
  const dots = card.querySelector('.dots');

  const isHidden = [...moreTexts].some(el => el.classList.contains('d-none'));

  moreTexts.forEach(el => {
    el.classList.toggle('d-none', !isHidden);
  });

  dots.style.display = isHidden ? 'none' : 'inline';
  btn.textContent = isHidden ? 'Read Less' : 'Read More';
}



// services section slider ---------------------------------------
const carousel = document.getElementById("carousel");
const track = document.getElementById("carouselTrack");

if (carousel && track) {
  const originalCards = [...track.children];
  const totalOriginal = originalCards.length;
  let currentIndex = 0;
  let interval;
  let isDragging = false;
  let startX = 0;
  let deltaX = 0;

  // Clone cards to simulate infinite loop
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  function getCardsPerView() {
    const width = window.innerWidth;
    if (width <= 576) return 1;
    else if (width <= 992) return 2;
    return 3;
  }

  function scrollToIndex(index) {
    const cardsPerView = getCardsPerView();
    const cardWidth = carousel.offsetWidth / cardsPerView;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  function startAutoScroll() {
    stopAutoScroll();
    interval = setInterval(() => {
      const cardsPerView = getCardsPerView();
      currentIndex++;
      scrollToIndex(currentIndex);

      if (currentIndex >= totalOriginal) {
        setTimeout(() => {
          track.style.transition = "none";
          currentIndex = 0;
          scrollToIndex(currentIndex);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              track.style.transition = "transform 0.5s ease-in-out";
            });
          });
        }, 500);
      }
    }, 2500);
  }

  function stopAutoScroll() {
    clearInterval(interval);
  }

  // Mouse events for drag
  let scrollStart;

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollStart = carousel.scrollLeft;
    carousel.classList.add("dragging");
    stopAutoScroll();
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollStart - walk;
  });

  carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
    startAutoScroll();
  });

  carousel.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      carousel.classList.remove("dragging");
      startAutoScroll();
    }
  });

  // Touch events for mobile
  carousel.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX - carousel.offsetLeft;
    scrollStart = carousel.scrollLeft;
    stopAutoScroll();
  });

  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollStart - walk;
  });

  carousel.addEventListener("touchend", () => {
    isDragging = false;
    startAutoScroll();
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", stopAutoScroll);
  carousel.addEventListener("mouseleave", startAutoScroll);

  // Resize handler
  window.addEventListener("resize", () => {
    scrollToIndex(currentIndex);
  });

  // Start
  track.style.transition = "transform 0.5s ease-in-out";
  startAutoScroll();
}



// team slider swiper container ---------------------

 const swiperEl = document.getElementById('teamSwiper');

if (swiperEl) {
  swiperEl.addEventListener('mouseenter', () => {
    swiperEl.swiper.autoplay.stop();
  });

  swiperEl.addEventListener('mouseleave', () => {
    swiperEl.swiper.autoplay.start();
  });
}



//   product Search button 
// ============================================

 function searchTable() {
      const input = document.getElementById('searchInput');
      const filter = input.value.toUpperCase();
      const table = document.getElementById('productTable');
      const tr = table.getElementsByTagName('tr');

      for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[1];
        if (td) {
          const txtValue = td.textContent || td.innerText;
          tr[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
        }
      }
    }


    // Image gallery 
    // ============================================

 function filterSelection(category, event) {
    const items = document.querySelectorAll(".gallery-item");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    items.forEach(item => {
      item.classList.remove("show");
      void item.offsetWidth; // trigger reflow for animation
      if (category === "all" || item.classList.contains(category)) {
        item.classList.add("show");
      }
    });
  }

  function openModal(src) {
    document.getElementById('modalImage').src = src;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }
















  


