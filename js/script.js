;
(function($) {

    'use strict';

    $(function() {

        document.addEventListener("touchstart", function() {}, false);

        if ('ontouchstart' in document.documentElement) {
            $('body').css('cursor', 'pointer');
        }

        /* ---------------------------------------------------- */
        /*	Calculate items										*/
        /* ---------------------------------------------------- */

        if ($('#calc-item').length) {

            $(window).on('load resize', function() {

                var hitem = $("#calc-item").height() / 1.99;

                $("#calc-item").css('margin-top', hitem * -1);

            });

        }

        /* ---------------------------------------------------- */
        /*	Revolution slider									*/
        /* ---------------------------------------------------- */

        if ($('#header').hasClass('style-2')) {

            if ($('#rev-slider').length) {

                jQuery("#rev-slider").revolution({
                    sliderType: "standard",
                    spinner: "spinner3",
                    responsiveLevels: [4096, 1024, 778, 480],
                    delay: 6000,
                    navigation: {
                        arrows: {
                            enable: true,
                            left: {
                                container: "slider",
                                h_align: "left",
                                v_align: "center",
                                h_offset: 30,
                                v_offset: 50
                            },
                            right: {
                                container: "slider",
                                h_align: "right",
                                v_align: "center",
                                h_offset: 30,
                                v_offset: 50
                            }
                        },
                        bullets: {
                            style: "",
                            enable: false,
                            container: "slider",
                            hide_onmobile: false,
                            hide_onleave: false,
                            hide_delay: 200,
                            hide_under: 0,
                            hide_over: 9999,
                            tmp: '<span class="circle-bullet"></span>',
                            direction: "horisontal",
                            space: 10,
                            h_align: "center",
                            v_align: "bottom",
                            v_offset: 60
                        }
                    },
                    gridwidth: 1200,
                    gridheight: 765
                });

            }

        } else {

            if ($('#rev-slider').length) {

                jQuery("#rev-slider").revolution({
                    sliderType: "standard",
                    spinner: "spinner3",
                    responsiveLevels: [4096, 1024, 778, 480],
                    delay: 6000,
                    navigation: {
                        arrows: {
                            enable: true,
                            left: {
                                container: "slider",
                                h_align: "left",
                                v_align: "center",
                                h_offset: 30,
                                v_offset: 0
                            },
                            right: {
                                container: "slider",
                                h_align: "right",
                                v_align: "center",
                                h_offset: 30,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            style: "",
                            enable: false,
                            container: "slider",
                            hide_onmobile: false,
                            hide_onleave: false,
                            hide_delay: 200,
                            hide_under: 0,
                            hide_over: 9999,
                            tmp: '<span class="circle-bullet"></span>',
                            direction: "horisontal",
                            space: 10,
                            h_align: "center",
                            v_align: "bottom",
                            v_offset: 60
                        }
                    },
                    gridwidth: 1200,
                    gridheight: 635
                });

            }

        }

        if ($('#rev-slider2').length) {

            jQuery("#rev-slider2").revolution({
                sliderType: "standard",
                spinner: "spinner3",
                gridheight: [980, 800, 800, 720],
                gridwidth: [1200, 1024, 1024, 620],
                responsiveLevels: [1440, 1024, 813, 620],
                delay: 6000,
                navigation: {
                    arrows: {
                        enable: true,
                        left: {
                            container: "slider",
                            h_align: "left",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 50
                        },
                        right: {
                            container: "slider",
                            h_align: "right",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 50
                        }
                    },
                    bullets: {
                        style: "",
                        enable: false,
                        container: "slider",
                        hide_onmobile: false,
                        hide_onleave: false,
                        hide_delay: 200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: '<span class="circle-bullet"></span>',
                        direction: "horisontal",
                        space: 10,
                        h_align: "center",
                        v_align: "bottom",
                        v_offset: 60
                    }
                }
            });

        }

        /* ---------------------------------------------------- */
        /*	Isotope												*/
        /* ---------------------------------------------------- */

        $(window).on('load', function() {

            var $container = $('.isotope');
            // filter buttons
            $('#filters button').on('click', function() {
                var $this = $(this);
                // don't proceed if already selected
                if (!$this.hasClass('is-checked')) {
                    $this.parents('#options').find('.is-checked').removeClass('is-checked');
                    $this.addClass('is-checked');
                }
                var selector = $this.attr('data-filter');
                $container.isotope({
                    itemSelector: '.item',
                    filter: selector
                });
                return false;
            });

            $.mad_core.isotope();

        });

        /* ---------------------------------------------------- */
        /*	Gallery carousel									*/
        /* ---------------------------------------------------- */

        var pageCarousel = $('.owl-carousel');

        if (pageCarousel.length) {

            $('.owl-carousel').not('#thumbnails').each(function() {

                /* Max items counting */
                var max_items = $(this).data('max-items');
                var tablet_items = max_items;
                if (max_items > 1) {
                    tablet_items = max_items - 1;
                }
                var mobile_items = 1;

                var autoplay_carousel = $(this).data('autoplay');

                var center_carousel = $(this).data('center');

                var item_margin = $(this).data('item-margin');

                /* Install Owl Carousel */
                $(this).owlCarousel({
                    smartSpeed: 450,
                    nav: true,
                    loop: true,
                    autoplay: autoplay_carousel,
                    center: center_carousel,
                    autoplayTimeout: 3000,
                    navText: false,
                    margin: item_margin,
                    lazyLoad: true,
                    rtl: $.mad_core.SUPPORT.ISRTL ? true : false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: mobile_items
                        },
                        481: {
                            items: tablet_items
                        },
                        992: {
                            items: max_items
                        }
                    }
                });


            });

            $('.custom-owl-prev').on('click', function() {

                $('.owl-carousel').trigger('prev.owl.carousel');

                return false;

            });

            $('.custom-owl-next').on('click', function() {

                $('.owl-carousel').trigger('next.owl.carousel');

                return false;

            });

            if ($('#thumbnails').length) {
                $('#thumbnails').each(function() {

                    /* Max items counting */
                    var data = $(this).data();
                    var max_items = $(this).data('max-items');
                    var tablet_items = max_items;
                    if (max_items > 1) {
                        tablet_items = max_items - 1;
                    }
                    var mobile_items = 1;

                    var autoplay_carousel = $(this).data('autoplay');

                    $(this).owlCarousel({
                        items: max_items,
                        URLhashListener: false,
                        navSpeed: 800,
                        nav: false,
                        loop: false,
                        rtl: $.mad_core.SUPPORT.ISRTL ? true : false,
                        navText: false,
                        responsive: {
                            0: {
                                items: tablet_items
                            },
                            481: {
                                items: max_items
                            },
                            1200: {
                                items: max_items
                            }
                        }
                    });
                });

            }
        }

        /* ---------------------------------------------------- */
        /*	SmoothScroll										*/
        /* ---------------------------------------------------- */

        try {
            $.browserSelector();
            var $html = $('html');
            if ($html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10')) {
                $.smoothScroll();
            }
        } catch (err) {}

        /* ---------------------------------------------------- */
        /*	Custom Select										*/
        /* ---------------------------------------------------- */

        if ($('.custom-select').length) {
            $('.custom-select').madCustomSelect();
        }

        /* ---------------------------------------------------- */
        /*	Tabs												*/
        /* ---------------------------------------------------- */

        $(window).on("load", function() {

            var tabs = $('.tabs-section');
            if (tabs.length) {
                tabs.tabs({
                    beforeActivate: function(event, ui) {
                        var hash = ui.newTab.children("li a").attr("href");
                    },
                    hide: {
                        effect: "fadeOut",
                        duration: 450
                    },
                    show: {
                        effect: "fadeIn",
                        duration: 450
                    },
                    updateHash: false
                });
            }

            /* ------------------------------------------------
            	Tabs - opacity
            ------------------------------------------------ */

            var tabs = $('.mad-tabs');

            if (tabs.length) {

                tabs.MadTabs({
                    easing: 'easeOutQuint',
                    speed: 600,
                    cssPrefix: 'mad-'
                });

            }

        });

        /* ---------------------------------------------------- */
        /*	Newsletter											*/
        /* ---------------------------------------------------- */

        var subscribe = $('[id^="newsletter"]');
        subscribe.append('<div class="message-container-subscribe"></div>');
        var message = $('.message-container-subscribe'),
            text;

        subscribe.on('submit', function(e) {
            var self = $(this);

            if (self.find('input[type="email"]').val() == '') {
                text = "Please enter your e-mail!";
                message.html('<div class="alert-box warning"><p>' + text + '</p></div>')
                    .slideDown()
                    .delay(4000)
                    .slideUp(function() {
                        $(this).html("");
                    });

            } else {
                self.find('span.error').hide();
                $.ajax({
                    type: "POST",
                    url: "bat/newsletter.php",
                    data: self.serialize(),
                    success: function(data) {
                        if (data == '1') {
                            text = "Your email has been sent successfully!";
                            message.html('<div class="alert-box success"><p>' + text + '</p></div>')
                                .slideDown()
                                .delay(4000)
                                .slideUp(function() {
                                    $(this).html("");
                                })
                                .prevAll('input[type="email"]').val("");
                        } else {
                            text = "Invalid email address!";
                            message.html('<div class="alert-box error"></i><p>' + text + '</p></div>')
                                .slideDown()
                                .delay(4000)
                                .slideUp(function() {
                                    $(this).html("");
                                });
                        }
                    }
                });
            }
            e.preventDefault();
        });

        /* ---------------------------------------------------- */
        /*	Loader												*/
        /* ---------------------------------------------------- */

        if ($('.loader').length) {

            $("body").queryLoader2({
                backgroundColor: '#fff',
                barColor: '#1da1f2',
                barHeight: 4,
                deepSearch: true,
                minimumTime: 1000,
                onComplete: function() {
                    $(".loader").fadeOut('200');
                }
            });

        }

        /* ---------------------------------------------------- */
        /*	Sticky menu											*/
        /* ---------------------------------------------------- */

        $('body').Temp({
            sticky: true
        });

        /* ------------------------------------------------
        Instagram Feed
        ------------------------------------------------ */

        if ($('.instagram-feed').length) {

            $('#instafeed').each(function() {

                var insta_items = $(this).data('instagram');

                var feed = new Instafeed({
                    target: 'instafeed',
                    tagName: 'living',
                    limit: insta_items,
                    get: 'user',
                    userId: 6342285178,
                    accessToken: '6342285178.1677ed0.c3bed2a253a44cf09a764e5ae8c3e72d',
                    resolution: 'standard_resolution',
                    clientId: '3c7e5fc7abd84b48aa2e2040f0e668ac',
                    template: '<li class="nv-instafeed-item"><a class="fancybox nv-lightbox" data-fancybox="instagram" href="{{image}}" title="{{location}}"><img src="{{image}}" /></a></li>',
                    after: function() {
                        $('#' + this.options.target).find('.fancybox').fancybox();
                    }
                });

                feed.run();

            });

        }

        /* ------------------------------------------------
		Twitter Feed
		------------------------------------------------ */

        if ($("#twitter").length) {

            $('#twitter').tweet({

                modpath: 'plugins/twitter/',
                username: "velikorodnov",
                count: 2,
                loading_text: 'loading twitter feed...'
                /* etc... */
            });

            $('.tweet_list > li').append('<div class="wrapper"><div class="entry-meta"><time class="entry-date" datetime="2018-03-25">March 25, 2018</time></div><ul class="menu-list"><li><a href="#">Retweet</a></li><li><a href="#">Favorite</a></li></ul></div>');

        }

        /* ---------------------------------------------------- */
        /*	Accordion & Toggle									*/
        /* ---------------------------------------------------- */

        var aItem = $('.accordion:not(.toggle) .accordion-item'),
            link = aItem.find('.a-title'),
            $label = aItem.find('label'),
            aToggleItem = $('.accordion.toggle .accordion-item'),
            tLink = aToggleItem.find('.a-title');

        aItem.add(aToggleItem).children('.a-title').not('.active').next().hide();

        function triggerAccordeon($item) {
            $item
                .addClass('active')
                .next().stop().slideDown()
                .parent().siblings()
                .children('.a-title')
                .removeClass('active')
                .next().stop().slideUp();
        }


        if ($label.length) {
            $label.on('click', function() {
                triggerAccordeon($(this).closest('.a-title'))
            });
        } else {
            link.on('click', function() {
                triggerAccordeon($(this))
            });
        }

        tLink.on('click', function() {
            $(this).toggleClass('active')
                .next().stop().slideToggle();

        });

        /* ---------------------------------------------------- */
        /*	Quantity											*/
        /* ---------------------------------------------------- */

        var q = $('.quantity');

        q.each(function() {
            var $this = $(this),
                button = $this.children('button'),
                input = $this.children('input[type="text"]'),
                val = +input.val();

            button.on('click', function() {
                if ($(this).hasClass('qty-minus')) {
                    if (val === 1) return false;
                    input.val(--val);
                } else {
                    input.val(++val);
                }
            });
        });

        /* ---------------------------------------------------- */
        /*	Contact Form										*/
        /* ---------------------------------------------------- */

        if ($('#contact-form').length) {

            var cf = $('#contact-form');
            cf.append('<div class="message-container"></div>');

            cf.on("submit", function(event) {

                var self = $(this),
                    text;

                var request = $.ajax({
                    url: "bat/mail.php",
                    type: "post",
                    data: self.serialize()
                });

                request.then(function(data) {
                    if (data == "1") {

                        text = "Your message has been sent successfully!";

                        cf.find('input:not([type="submit"]),textarea').val('');

                        $('.message-container').html('<div class="alert-box success"><i class="icon-smile"></i><p>' + text + '</p></div>')
                            .delay(150)
                            .slideDown(300)
                            .delay(4000)
                            .slideUp(300, function() {
                                $(this).html("");
                            });

                    } else {
                        if (cf.find('textarea').val().length < 20) {
                            text = "Message must contain at least 20 characters!"
                        }
                        if (cf.find('input').val() == "") {
                            text = "All required fields must be filled!";
                        }
                        $('.message-container').html('<div class="alert-box error"><i class="icon-warning"></i><p>' + text + '</p></div>')
                            .delay(150)
                            .slideDown(300)
                            .delay(4000)
                            .slideUp(300, function() {
                                $(this).html("");
                            });
                    }
                }, function() {
                    $('.message-container').html('<div class="alert-box error"><i class="icon-warning"></i><p>Connection to server failed!</p></div>')
                        .delay(150)
                        .slideDown(300)
                        .delay(4000)
                        .slideUp(300, function() {
                            $(this).html("");
                        });
                });

                event.preventDefault();

            });

        }

        if ($('#contact-form-app').length) {

            var cf = $('#contact-form-app');
            cf.append('<div class="message-container"></div>');

            cf.on("submit", function(event) {

                var self = $(this),
                    text;

                var request = $.ajax({
                    url: "bat/mail_app.php",
                    type: "post",
                    data: self.serialize()
                });

                request.then(function(data) {
                    if (data == "1") {

                        text = "Your message has been sent successfully!";

                        cf.find('input:not([type="submit"]),textarea').val('');

                        $('.message-container').html('<div class="alert-box success"><i class="icon-smile"></i><p>' + text + '</p></div>')
                            .delay(150)
                            .slideDown(300)
                            .delay(4000)
                            .slideUp(300, function() {
                                $(this).html("");
                            });

                    } else {
                        if (cf.find('textarea').val().length < 20) {
                            text = "Message must contain at least 20 characters!"
                        }
                        if (cf.find('input').val() == "") {
                            text = "All required fields must be filled!";
                        }
                        $('.message-container').html('<div class="alert-box error"><i class="icon-warning"></i><p>' + text + '</p></div>')
                            .delay(150)
                            .slideDown(300)
                            .delay(4000)
                            .slideUp(300, function() {
                                $(this).html("");
                            });
                    }
                }, function() {
                    $('.message-container').html('<div class="alert-box error"><i class="icon-warning"></i><p>Connection to server failed!</p></div>')
                        .delay(150)
                        .slideDown(300)
                        .delay(4000)
                        .slideUp(300, function() {
                            $(this).html("");
                        });
                });

                event.preventDefault();

            });

        }

        /* ---------------------------------------------------- */
        /*	Google Maps											*/
        /* ---------------------------------------------------- */

        if ($('#googleMap').length) {

            $(document).ready(function() {

                var myCenter = new google.maps.LatLng(30.3459488, -97.7145152);

                function loadMap() {
                    var mapProp = {
                        center: new google.maps.LatLng(30.3459488, -97.6545152),
                        zoom: 13,
                        mapTypeId: google.maps.MapTypeId.ROADMAP

                    };

                    var map = document.getElementById('googleMap');

                    if (map !== null) {

                        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

                    }

                    var marker = new google.maps.Marker({
                        position: myCenter,
                        map: map,
                        icon: 'images/map_marker.png'
                    });

                    marker.setMap(map);

                    //Zoom to 7 when clicked on marker
                    google.maps.event.addListener(marker, 'click', function() {
                        map.setZoom(9);
                        map.setCenter(marker.getPosition());
                    });

                }
                google.maps.event.addDomListener(window, 'load', loadMap);

            });

        }

        if ($('#googleMap2').length) {

            function loadMap() {
                var mapProp = {
                    center: {
                        lat: 45.947129,
                        lng: 10.925227
                    },
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = document.getElementById('googleMap2');

                if (map !== null) {

                    var map = new google.maps.Map(document.getElementById("googleMap2"), mapProp);

                }

                setMarkers(map);

            }
            var marks = [
                ['first', 45.960129, 10.815227],
                ['second', 45.957129, 10.999927],
                ['third', 45.968129, 10.925227]
            ];

            function setMarkers(map) {

                for (var i = 0; i < marks.length; i++) {
                    var mark = marks[i];
                    var marker = new google.maps.Marker({
                        position: {
                            lat: mark[1],
                            lng: mark[2]
                        },
                        map: map,
                        icon: 'images/map_marker.png',
                        title: mark[0],
                        zIndex: mark[3]
                    });

                    var contentString = '<div class="mad-info-box">' +
                        '<h5 class="mad-info-title">Termosolar on Marmora Road</h5>' +
                        '<div class="mad-info-item">' +
                        '<address>8901 Marmora Road, Glasgow, D04 89GR.</address>' +
                        '</div>' +
                        '<div class="mad-info-item">' +
                        'Freephone: +1 800 559 6580' +
                        '</div>' +
                        '<div class="mad-info-item">' +
                        'Telephone: +1 800 603 6035' +
                        '</div>' +
                        '<div class="mad-info-item">' +
                        'FAX: +1 800 889 9898' +
                        '</div>' +
                        '<div class="mad-info-item time">' +
                        'E-mail: <a href="mailto:#">mail@companyname.com</a>' +
                        '</div>' +
                        '</div>';

                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });

                    function infoCallback(infowindow, marker) {
                        return function() {
                            infowindow.open(map, marker);
                            $('.gm-style-iw').addClass('show');
                        };
                    }

                    function mapCallback(infowindow, map) {
                        return function() {
                            infowindow.close();
                            $('.gm-style-iw').removeClass('show');
                        };
                    }

                    google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
                        infowindow.open(map, marker);
                    });

                    google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));

                    google.maps.event.addListener(map, 'click', mapCallback(infowindow, map));

                    google.maps.event.addListener(infowindow, 'domready', function() {

                        // Reference to the DIV which receives the contents of the infowindow using jQuery
                        var iwOuter = $('.gm-style-iw');

                        /* The DIV we want to change is above the .gm-style-iw DIV.
                         * So, we use jQuery and create a iwBackground variable,
                         * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
                         */
                        var iwBackground = iwOuter.prev();

                        // Remove the background shadow DIV
                        iwBackground.children(':nth-child(2)').css({
                            'display': 'none'
                        });

                        // Remove the white background DIV
                        iwBackground.children(':nth-child(4)').css({
                            'display': 'none'
                        });

                        var iwCloseBtn = iwOuter.next();

                        // Apply the desired effect to the close button
                        iwCloseBtn.css({
                            display: 'none',
                        });

                        iwBackground.children(':nth-child(3)').hide();
                        iwBackground.children(':nth-child(2)').hide();
                        iwBackground.children(':nth-child(1)').hide();

                    });

                }
            }

            google.maps.event.addDomListener(window, 'load', loadMap);

        }

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

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCounters();
        observer.disconnect(); // Animate only once
      }
    });
  }, options);

  observer.observe(document.querySelector('.counter-section'));



// client slider ------------------------------------

$(document).ready(function(){
      $('.client-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // No delay between slides
        speed: 3000, // Higher = slower (but smoother)
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
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
    });



    // About Page Mission Vision -------------------------------

    function toggleText(btn) {
      const card = btn.closest('.info-card');
      const moreText = card.querySelector('.more-text');
      const dots = card.querySelector('.dots');

      if (moreText.classList.contains('d-none')) {
        moreText.classList.remove('d-none');
        dots.style.display = 'none';
        btn.textContent = 'Read Less';
      } else {
        moreText.classList.add('d-none');
        dots.style.display = 'inline';
        btn.textContent = 'Read More';
      }
    }



    // services section slider ---------------------------------------

    const carousel = document.getElementById("carousel");
  const track = document.getElementById("carouselTrack");
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
    }, 2500); // Adjust scroll speed here
  }

  function stopAutoScroll() {
    clearInterval(interval);
  }

  // Pause on hover
  carousel.addEventListener("mouseenter", () => stopAutoScroll());
  carousel.addEventListener("mouseleave", () => startAutoScroll());

  // Mouse drag
 
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
  const walk = (x - startX) * 1.5; // drag speed
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

  // Touch swipe
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


  // On resize, adjust to currentIndex
  window.addEventListener("resize", () => {
    scrollToIndex(currentIndex);
  });

  // Start auto scroll on load
  track.style.transition = "transform 0.5s ease-in-out";
  startAutoScroll();




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



//   popup form ------------------------

  const popupForm = document.getElementById('popupForm');
  const openFormBtn = document.getElementById('openFormBtn');
  let hasOpened = false;

   const formModal = new bootstrap.Modal(popupForm, {
    backdrop: 'static',
    keyboard: false
  });

  // Manual open
  openFormBtn.addEventListener('click', function () {
    hasOpened = true;
    formModal.show();
  });

  // Auto-show the popup after 10 seconds, only if not opened manually
  window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      if (!hasOpened) {
        formModal.show();
      }
    }, 10000); // 10 seconds
  });


  
  // Set the current year in the footer===============================
  
  document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("copyright-year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  });

