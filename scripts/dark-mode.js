// Dark Mode Toggle Script
(function() {
    const DARK_MODE_CLASS = 'dark-mode-active';
    const STORAGE_KEY = 'theme-preference';

    // Check for saved theme preference or OS preference
    function getThemePreference() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return saved;
        }

        // Check OS preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    // Apply theme
    function applyTheme(theme) {
        const html = document.documentElement;
        if (theme === 'dark') {
            html.style.colorScheme = 'dark';
        } else {
            html.style.colorScheme = 'light';
        }
    }

    // Update toggle button icon
    function updateToggleIcon() {
        const toggle = document.getElementById('dark-mode-toggle');
        if (!toggle) return;

        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const icon = toggle.querySelector('i');

        if (isDark) {
            icon.className = 'fas fa-sun';
            toggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            icon.className = 'fas fa-moon';
            toggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    // Toggle dark mode
    function toggleDarkMode() {
        const toggle = document.getElementById('dark-mode-toggle');
        if (!toggle) return;

        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const newTheme = isDark ? 'light' : 'dark';

        localStorage.setItem(STORAGE_KEY, newTheme);

        // Update the color-scheme on html element
        document.documentElement.style.colorScheme = newTheme;
        updateToggleIcon();
    }

    // Initialize
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
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                const newTheme = e.matches ? 'dark' : 'light';
                localStorage.removeItem(STORAGE_KEY);
                applyTheme(newTheme);
                updateToggleIcon();
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
