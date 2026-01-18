// Dark Mode Toggle Script
(function() {
    const STORAGE_KEY = 'theme-preference';

    // Get saved theme preference: 'dark', 'light', or null (auto/OS preference)
    function getThemePreference() {
        return localStorage.getItem(STORAGE_KEY);
    }

    // Check if dark mode is currently active (from manual setting or OS preference)
    function isDarkModeActive() {
        const html = document.documentElement;

        // If manually set to dark
        if (html.classList.contains('dark-mode')) {
            return true;
        }

        // If manually set to light
        if (html.classList.contains('light-mode')) {
            return false;
        }

        // Otherwise, check OS preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Apply theme by adding appropriate class to html element
    function applyTheme(theme) {
        const html = document.documentElement;

        // Remove both classes first
        html.classList.remove('dark-mode', 'light-mode');

        if (theme === 'dark') {
            html.classList.add('dark-mode');
        } else if (theme === 'light') {
            html.classList.add('light-mode');
        }
        // If theme is null/undefined, no class is added and OS preference takes over
    }

    // Update toggle button icon based on current active state
    function updateToggleIcon() {
        const toggle = document.getElementById('dark-mode-toggle');
        if (!toggle) return;

        const isDark = isDarkModeActive();
        const icon = toggle.querySelector('i');

        if (isDark) {
            icon.className = 'fas fa-sun';
            toggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            icon.className = 'fas fa-moon';
            toggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    // Toggle between dark and light modes
    function toggleDarkMode() {
        const isDark = isDarkModeActive();
        const newTheme = isDark ? 'light' : 'dark';

        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);
        updateToggleIcon();
    }

    // Initialize dark mode on page load
    function init() {
        const theme = getThemePreference();
        applyTheme(theme);

        // Listen for toggle button clicks
        const toggle = document.getElementById('dark-mode-toggle');
        if (toggle) {
            toggle.addEventListener('click', toggleDarkMode);
            updateToggleIcon();
        }

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                const savedTheme = getThemePreference();
                // Only update icon if user hasn't manually set a theme
                if (!savedTheme) {
                    updateToggleIcon();
                }
            });
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
