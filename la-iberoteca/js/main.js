(function () {
  "use strict";

  var CONFIG = {
    phone: "+34931010471",
    whatsapp: "",
    reserveMessage: "Hola, quiero reservar en La Iberoteca",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.5150507,2.1231923"
  };

  var state = {
    smoother: null,
    reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    hasGsap: typeof window.gsap !== "undefined",
    menuOpen: false,
    navigating: false
  };

  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function canUseGsap() {
    return state.hasGsap && !state.reduced;
  }

  function buildReserveHref() {
    if (CONFIG.whatsapp) {
      var number = CONFIG.whatsapp.replace(/[^0-9]/g, "");
      return "https://wa.me/" + number + "?text=" + encodeURIComponent(CONFIG.reserveMessage);
    }
    return "tel:" + CONFIG.phone;
  }

  function wireActions() {
    qsa("[data-action=\"reserve\"]").forEach(function (el) {
      el.setAttribute("href", buildReserveHref());
    });
    qsa("[data-action=\"call\"]").forEach(function (el) {
      el.setAttribute("href", "tel:" + CONFIG.phone);
    });
    qsa("[data-action=\"directions\"]").forEach(function (el) {
      el.setAttribute("href", CONFIG.mapsUrl);
    });
  }

  function handleImageError(event) {
    var img = event.target;
    if (!img || img.tagName !== "IMG") {
      return;
    }
    img.style.opacity = "0";
    var wrap = img.parentElement;
    if (wrap) {
      wrap.classList.add("is-broken");
    }
  }

  function setupImages() {
    document.addEventListener("error", handleImageError, true);
    qsa("img").forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) {
        handleImageError({ target: img });
      }
    });
  }

  function revealAllStatic() {
    qsa("[data-reveal]").forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  function removePreloader(instant) {
    var preloader = qs(".preloader");
    var curtain = qs(".curtain");
    if (preloader) {
      preloader.parentNode.removeChild(preloader);
    }
    if (curtain && instant) {
      curtain.style.transform = "translateY(-100%)";
    }
  }

  function setupSmoother() {
    if (!canUseGsap()) {
      return;
    }
    if (!qs("#smooth-wrapper") || typeof window.ScrollSmoother === "undefined") {
      return;
    }
    state.smoother = window.ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.15,
      effects: true,
      smoothTouch: 0,
      normalizeScroll: false
    });
  }

  function lockScroll(locked) {
    if (state.smoother) {
      state.smoother.paused(locked);
    }
    document.documentElement.classList.toggle("is-locked", locked);
    document.body.classList.toggle("is-locked", locked);
  }

  function runPreloader() {
    var preloader = qs(".preloader");
    var curtain = qs(".curtain");
    if (!preloader) {
      playHeroIntro();
      return;
    }
    if (!canUseGsap() || typeof window.SplitText === "undefined") {
      removePreloader(true);
      revealAllStatic();
      return;
    }

    var nameEl = qs(".preloader__name");
    var split = new window.SplitText(nameEl, { type: "chars", charsClass: "char" });
    var tl = window.gsap.timeline();

    window.gsap.set(split.chars, { yPercent: 115, opacity: 0 });
    tl.to(split.chars, { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.045 });
    tl.to(".preloader__sub", { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.5");
    tl.to(".preloader__bar span", { scaleX: 1, duration: 1, ease: "power2.inOut" }, "-=0.7");
    tl.to(".preloader", { yPercent: -100, duration: 1, ease: "expo.inOut" }, "+=0.2");
    if (curtain) {
      tl.set(curtain, { transform: "translateY(-100%)" }, ">-0.2");
    }
    tl.add(function () {
      removePreloader(false);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    });
    tl.add(playHeroIntro, "-=0.6");
  }

  function playHeroIntro() {
    var hero = qs(".hero");
    if (!hero || !canUseGsap()) {
      return;
    }
    var title = qs(".hero__title");
    var tl = window.gsap.timeline();

    if (typeof window.SplitText !== "undefined" && title) {
      var split = new window.SplitText(title, { type: "words,chars", wordsClass: "word", charsClass: "char" });
      window.gsap.set(split.chars, { yPercent: 120 });
      tl.to(split.chars, { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.022 });
    }
    tl.from(".hero__eyebrow", { yPercent: 100, opacity: 0, duration: 0.8, ease: "power3.out" }, 0.1);
    tl.from(".hero__sub", { y: 24, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.6");
    tl.from(".hero__actions > *", { y: 24, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }, "-=0.6");
    tl.from(".seal", { scale: 0.4, opacity: 0, duration: 0.9, ease: "back.out(1.7)" }, "-=0.7");

    var media = qs(".hero__media");
    if (media) {
      window.gsap.fromTo(media, { scale: 1.18 }, { scale: 1, duration: 2.4, ease: "power2.out" });
    }
  }

  function setupCursor() {
    var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || !canUseGsap()) {
      return;
    }
    var ring = qs(".cursor");
    var dot = qs(".cursor-dot");
    if (!ring || !dot) {
      return;
    }
    window.gsap.set([ring, dot], { opacity: 1 });
    var ringX = window.gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
    var ringY = window.gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });
    var dotX = window.gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    var dotY = window.gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });

    window.addEventListener("mousemove", function (event) {
      ringX(event.clientX);
      ringY(event.clientY);
      dotX(event.clientX);
      dotY(event.clientY);
    });
    document.addEventListener("mouseover", function (event) {
      if (event.target.closest("a, button, [data-cursor]")) {
        ring.classList.add("is-hover");
      }
    });
    document.addEventListener("mouseout", function (event) {
      if (event.target.closest("a, button, [data-cursor]")) {
        ring.classList.remove("is-hover");
      }
    });
  }

  function getScroll() {
    if (state.smoother) {
      return state.smoother.scrollTop();
    }
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  function setupHeader() {
    var header = qs(".header");
    var bars = qsa(".actionbar, .callfab");
    var lastScroll = 0;
    var threshold = window.innerHeight * 0.5;

    function update() {
      var current = getScroll();
      if (header) {
        header.classList.toggle("header--solid", current > 60);
        if (current > lastScroll && current > threshold && !state.menuOpen) {
          header.classList.add("header--hidden");
        } else {
          header.classList.remove("header--hidden");
        }
      }
      bars.forEach(function (bar) {
        bar.classList.toggle("is-visible", current > threshold * 0.6);
      });
      lastScroll = current;
    }

    if (canUseGsap() && window.ScrollTrigger) {
      window.ScrollTrigger.create({ start: 0, end: "max", onUpdate: update, onRefresh: update });
    } else {
      window.addEventListener("scroll", update, { passive: true });
    }
    update();
    bars.forEach(function (bar) {
      bar.classList.add("is-visible");
    });
  }

  function animateMenuOpen(menu, links) {
    window.gsap.set(menu, { clipPath: "inset(0 0 100% 0)" });
    var tl = window.gsap.timeline();
    tl.to(menu, { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "expo.inOut" });
    tl.from(links, { yPercent: 120, opacity: 0, duration: 0.7, ease: "power4.out", stagger: 0.07 }, "-=0.4");
    tl.from(".menu__footer > *", { y: 18, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.08 }, "-=0.4");
  }

  function setupMenu() {
    var burger = qs(".burger");
    var menu = qs(".menu");
    if (!burger || !menu) {
      return;
    }
    var links = qsa(".menu__link", menu);

    function open() {
      state.menuOpen = true;
      burger.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
      menu.classList.add("is-open");
      lockScroll(true);
      if (canUseGsap()) {
        animateMenuOpen(menu, links);
      }
    }

    function close() {
      state.menuOpen = false;
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      lockScroll(false);
      if (canUseGsap()) {
        window.gsap.to(menu, { clipPath: "inset(0 0 100% 0)", duration: 0.7, ease: "expo.inOut" });
        window.setTimeout(function () {
          menu.classList.remove("is-open");
        }, 650);
      } else {
        menu.classList.remove("is-open");
      }
    }

    burger.addEventListener("click", function () {
      if (state.menuOpen) {
        close();
      } else {
        open();
      }
    });
    menu.addEventListener("click", function (event) {
      if (event.target.closest(".menu__link")) {
        close();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && state.menuOpen) {
        close();
      }
    });
  }

  function setupReveals() {
    if (!canUseGsap() || !window.ScrollTrigger) {
      revealAllStatic();
      return;
    }
    qsa("[data-reveal]").forEach(function (el) {
      var type = el.getAttribute("data-reveal");
      var base = { scrollTrigger: { trigger: el, start: "top 85%" }, duration: 1.1, ease: "power4.out" };
      if (type === "clip") {
        window.gsap.from(el, Object.assign({ clipPath: "inset(0 0 100% 0)", opacity: 0 }, base));
      } else if (type === "mask") {
        window.gsap.from(el, Object.assign({ scale: 1.12, opacity: 0, duration: 1.3 }, base));
      } else {
        window.gsap.from(el, Object.assign({ y: 44, opacity: 0 }, base));
      }
    });
  }

  function setupStagger() {
    if (!canUseGsap() || !window.ScrollTrigger) {
      return;
    }
    qsa("[data-stagger]").forEach(function (group) {
      window.gsap.from(group.children, {
        scrollTrigger: { trigger: group, start: "top 82%" },
        y: 46,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
      });
    });
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var obj = { value: 0 };
    window.gsap.to(obj, {
      value: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: function () {
        el.textContent = obj.value.toFixed(decimals).replace(".", ",") + suffix;
      }
    });
  }

  function setupCounters() {
    var counters = qsa("[data-count]");
    if (!canUseGsap() || !window.ScrollTrigger) {
      counters.forEach(function (el) {
        var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
        var suffix = el.getAttribute("data-suffix") || "";
        el.textContent = parseFloat(el.getAttribute("data-count")).toFixed(decimals).replace(".", ",") + suffix;
      });
      return;
    }
    counters.forEach(animateCounter);
  }

  function setupMarquee() {
    qsa(".marquee__track").forEach(function (track) {
      track.innerHTML = track.innerHTML + track.innerHTML;
      if (!canUseGsap()) {
        return;
      }
      var reverse = track.getAttribute("data-reverse") === "true";
      window.gsap.fromTo(track,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, duration: 28, ease: "none", repeat: -1 });
    });
  }

  function setupDragScroll() {
    qsa(".hswipe").forEach(function (rail) {
      var down = false;
      var startX = 0;
      var startLeft = 0;
      rail.addEventListener("pointerdown", function (event) {
        if (event.pointerType === "touch") {
          return;
        }
        down = true;
        startX = event.clientX;
        startLeft = rail.scrollLeft;
        rail.style.cursor = "grabbing";
      });
      window.addEventListener("pointerup", function () {
        down = false;
        rail.style.cursor = "";
      });
      rail.addEventListener("pointermove", function (event) {
        if (!down) {
          return;
        }
        rail.scrollLeft = startLeft - (event.clientX - startX);
      });
    });
  }

  function filterGroups(filter, groups) {
    groups.forEach(function (group) {
      var match = filter === "all" || group.getAttribute("data-category") === filter;
      if (match) {
        group.hidden = false;
        if (canUseGsap()) {
          window.gsap.fromTo(group, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
        }
      } else if (canUseGsap()) {
        window.gsap.to(group, {
          opacity: 0,
          y: 14,
          duration: 0.4,
          ease: "power2.in",
          onComplete: function () {
            group.hidden = true;
          }
        });
      } else {
        group.hidden = true;
      }
    });
    if (state.smoother && window.ScrollTrigger) {
      window.setTimeout(function () {
        window.ScrollTrigger.refresh();
      }, 500);
    }
  }

  function setupFilters() {
    var bar = qs(".filters");
    if (!bar) {
      return;
    }
    var buttons = qsa(".filter", bar);
    var groups = qsa(".menu-group");
    bar.addEventListener("click", function (event) {
      var button = event.target.closest(".filter");
      if (!button) {
        return;
      }
      buttons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      filterGroups(button.getAttribute("data-filter"), groups);
    });
  }

  function setupForm() {
    var form = qs(".form");
    if (!form) {
      return;
    }
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var button = qs("[type=\"submit\"]", form);
      if (button) {
        button.disabled = true;
        button.textContent = "✓";
      }
    });
  }

  function isInternalNav(link) {
    if (!link || link.target === "_blank" || link.hasAttribute("download")) {
      return false;
    }
    var href = link.getAttribute("href") || "";
    if (href.indexOf("#") === 0 || href.indexOf("tel:") === 0 || href.indexOf("mailto:") === 0 || href.indexOf("http") === 0) {
      return false;
    }
    if (link.hasAttribute("data-lang") || link.hasAttribute("data-action")) {
      return false;
    }
    return href.indexOf(".html") !== -1;
  }

  function setupPageTransition() {
    var curtain = qs(".curtain");
    document.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (!isInternalNav(link) || state.navigating || !canUseGsap() || !curtain) {
        return;
      }
      event.preventDefault();
      state.navigating = true;
      var destination = link.getAttribute("href");
      window.gsap.set(curtain, { transform: "translateY(100%)" });
      window.gsap.to(curtain, {
        transform: "translateY(0%)",
        duration: 0.6,
        ease: "expo.inOut",
        onComplete: function () {
          window.location.assign(destination);
        }
      });
    });
    window.addEventListener("pageshow", function (event) {
      if (event.persisted && curtain) {
        state.navigating = false;
        window.gsap.set(curtain, { transform: "translateY(-100%)" });
      }
    });
  }

  function registerPlugins() {
    if (!state.hasGsap) {
      return;
    }
    var plugins = [];
    if (window.ScrollTrigger) {
      plugins.push(window.ScrollTrigger);
    }
    if (window.ScrollSmoother) {
      plugins.push(window.ScrollSmoother);
    }
    if (window.SplitText) {
      plugins.push(window.SplitText);
    }
    if (plugins.length) {
      window.gsap.registerPlugin.apply(window.gsap, plugins);
    }
  }

  function init() {
    setupImages();
    wireActions();
    registerPlugins();
    setupSmoother();
    setupCursor();
    setupMenu();
    setupHeader();
    setupReveals();
    setupStagger();
    setupCounters();
    setupMarquee();
    setupDragScroll();
    setupFilters();
    setupForm();
    setupPageTransition();
    runPreloader();

    if (!canUseGsap()) {
      removePreloader(true);
      revealAllStatic();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
