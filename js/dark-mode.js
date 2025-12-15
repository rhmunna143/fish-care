/**
 * Dark Mode Toggle
 * Allied Fish Care Ltd.
 */

(function() {
  'use strict';

  const THEME_KEY = 'afcl-theme';
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlElement = document.documentElement;

  /**
   * Get stored theme or system preference
   */
  function getInitialTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    
    if (storedTheme) {
      return storedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  /**
   * Set theme
   */
  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleIcon(theme);
  }

  /**
   * Update toggle button icon
   */
  function updateToggleIcon(theme) {
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i') || themeToggle.querySelector('.icon');
    
    if (icon) {
      if (theme === 'dark') {
        icon.className = 'fas fa-sun';
      } else {
        icon.className = 'fas fa-moon';
      }
    } else {
      // If no icon element, update button text
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  /**
   * Toggle theme
   */
  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  /**
   * Initialize dark mode
   */
  function init() {
    // Set initial theme
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);

    // Add toggle event listener
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem(THEME_KEY)) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose toggle function globally (optional)
  window.toggleTheme = toggleTheme;
})();
