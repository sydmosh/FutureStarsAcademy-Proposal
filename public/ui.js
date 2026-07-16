// ui.js – Enhanced UI interactions for the proposal site
(function() {
  'use strict';

  // ========================================
  // Theme Management
  // ========================================
  const THEME_KEY = 'fsa-theme';
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleIcon(theme);
  }

  function updateThemeToggleIcon(theme) {
    if (!themeToggle) return;
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
      moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
    }
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Initialize theme
  applyTheme(getPreferredTheme());

  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ========================================
  // Mobile Navigation
  // ========================================
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.hdr .nav');
  const navOverlay = document.getElementById('navOverlay');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.classList.toggle('active');
      document.body.classList.toggle('nav-open');
      if (navOverlay) {
        navOverlay.classList.toggle('active');
      }
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
  }

  // Close mobile nav on link click
  if (nav) {
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        if (navToggle) navToggle.classList.remove('active');
        document.body.classList.remove('nav-open');
        if (navOverlay) navOverlay.classList.remove('active');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Close mobile nav on overlay click
  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      nav.classList.remove('open');
      if (navToggle) navToggle.classList.remove('active');
      document.body.classList.remove('nav-open');
      navOverlay.classList.remove('active');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Close mobile nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav?.classList.contains('open')) {
      nav.classList.remove('open');
      if (navToggle) navToggle.classList.remove('active');
      document.body.classList.remove('nav-open');
      if (navOverlay) navOverlay.classList.remove('active');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      navToggle?.focus();
    }
  });

  // ========================================
  // Scroll Progress Bar
  // ========================================
  const progressBar = document.getElementById('progressBar');
  
  function updateProgressBar() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    progressBar.style.transform = `scaleX(${Math.min(progress, 1)})`;
  }

  // Throttled scroll handler
  let scrollTicking = false;
  function onScroll() {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        updateProgressBar();
        updateScrollSpy();
        updateBackToTop();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // Initial call
  updateProgressBar();

  // ========================================
  // Scroll Spy (Active Nav Highlighting)
  // ========================================
  const sections = document.querySelectorAll('main .section[id]');
  const navLinks = document.querySelectorAll('.hdr .nav a[href^="#"]');
  
  function updateScrollSpy() {
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const scrollPos = window.scrollY + 150; // Offset for header
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without scroll
        history.pushState(null, '', href);
        
        // Focus target for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.removeAttribute('tabindex');
      }
    });
  });

  // ========================================
  // IntersectionObserver for Section Animations
  // ========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once visible
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // ========================================
  // Iframe Lazy Loading with Skeleton
  // ========================================
  const iframeWrappers = document.querySelectorAll('.iframe-wrapper');
  
  const iframeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const wrapper = entry.target;
        const iframe = wrapper.querySelector('iframe');
        const skeleton = wrapper.querySelector('.iframe-skeleton');
        
        if (iframe && !iframe.classList.contains('loaded')) {
          // If iframe already has src, just wait for load
          if (iframe.src) {
            iframe.addEventListener('load', () => {
              iframe.classList.add('loaded');
              if (skeleton) skeleton.classList.add('hidden');
            }, { once: true });
          } else if (iframe.dataset.src) {
            // Lazy load from data-src
            iframe.src = iframe.dataset.src;
            iframe.addEventListener('load', () => {
              iframe.classList.add('loaded');
              if (skeleton) skeleton.classList.add('hidden');
            }, { once: true });
          }
        }
        
        iframeObserver.unobserve(wrapper);
      }
    });
  }, {
    rootMargin: '200px',
    threshold: 0.01
  });

  iframeWrappers.forEach(wrapper => iframeObserver.observe(wrapper));

  // ========================================
  // Back to Top Button with Progress Ring
  // ========================================
  const backToTop = document.getElementById('backToTop');
  const progressRing = document.querySelector('.back-to-top .progress-ring-progress');
  const RING_RADIUS = 22;
  const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

  if (progressRing) {
    progressRing.style.strokeDasharray = RING_CIRCUMFERENCE;
    progressRing.style.strokeDashoffset = RING_CIRCUMFERENCE;
  }

  function updateBackToTop() {
    if (!backToTop) return;
    
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    
    if (scrollTop > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    
    if (progressRing) {
      const offset = RING_CIRCUMFERENCE * (1 - Math.min(progress, 1));
      progressRing.style.strokeDashoffset = offset;
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========================================
  // Keyboard Navigation Enhancements
  // ========================================
  // Trap focus in mobile nav when open
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && nav?.classList.contains('open')) {
      const focusableElements = nav.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });

  // ========================================
  // Performance: Debounce Resize
  // ========================================
  let resizeTicking = false;
  window.addEventListener('resize', () => {
    if (!resizeTicking) {
      requestAnimationFrame(() => {
        updateScrollSpy();
        resizeTicking = false;
      });
      resizeTicking = true;
    }
  });

  // ========================================
  // Initialize: Update scroll spy on load
  // ========================================
  document.addEventListener('DOMContentLoaded', () => {
    updateScrollSpy();
    updateBackToTop();
  });

})();