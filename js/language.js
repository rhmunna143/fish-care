/**
 * Language Toggle (English/Bengali)
 * Allied Fish Care Ltd.
 */

(function() {
  'use strict';

  const LANG_KEY = 'afcl-language';
  const langToggle = document.querySelector('.lang-toggle');
  const htmlElement = document.documentElement;

  /**
   * Get stored language or default
   */
  function getInitialLanguage() {
    const storedLang = localStorage.getItem(LANG_KEY);
    
    if (storedLang) {
      return storedLang;
    }

    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('bn')) {
      return 'bn';
    }

    return 'en';
  }

  /**
   * Set language
   */
  function setLanguage(lang) {
    // Update HTML lang attribute
    htmlElement.setAttribute('lang', lang);
    
    // Update body class for CSS selectors
    document.body.className = document.body.className.replace(/lang-\w+/, '');
    document.body.classList.add(`lang-${lang}`);
    
    // Store preference
    localStorage.setItem(LANG_KEY, lang);
    
    // Update toggle button text
    updateToggleText(lang);
    
    // Show/hide content based on language
    updateContent(lang);
  }

  /**
   * Update toggle button text
   */
  function updateToggleText(lang) {
    if (!langToggle) return;

    const languages = {
      'en': 'EN 🇬🇧',
      'bn': 'বাং 🇧🇩'
    };

    langToggle.textContent = languages[lang] || 'EN';
    langToggle.setAttribute('aria-label', `Switch to ${lang === 'en' ? 'Bengali' : 'English'}`);
  }

  /**
   * Update content visibility based on language
   */
  function updateContent(lang) {
    // Hide/show elements based on lang attribute
    const allLangElements = document.querySelectorAll('[lang]');
    
    allLangElements.forEach(element => {
      const elementLang = element.getAttribute('lang');
      
      if (elementLang === lang) {
        element.style.display = '';
        element.removeAttribute('aria-hidden');
      } else {
        element.style.display = 'none';
        element.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /**
   * Toggle language
   */
  function toggleLanguage() {
    const currentLang = htmlElement.getAttribute('lang') || 'en';
    const newLang = currentLang === 'en' ? 'bn' : 'en';
    setLanguage(newLang);
  }

  /**
   * Initialize language toggle
   */
  function init() {
    // Set initial language
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);

    // Add toggle event listener
    if (langToggle) {
      langToggle.addEventListener('click', toggleLanguage);
    }

    // Add keyboard shortcut (Alt+L)
    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        toggleLanguage();
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose toggle function globally (optional)
  window.toggleLanguage = toggleLanguage;
  window.setLanguage = setLanguage;
})();
