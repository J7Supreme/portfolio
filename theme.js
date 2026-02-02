(function () {
    // 1. Theme initialization logic
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateButton(theme);
    };

    // 2. Button creation and management
    const createToggleBtn = () => {
        const btn = document.createElement('button');
        btn.id = 'theme-toggle-btn';
        btn.setAttribute('aria-label', 'Toggle Dark Mode');
        // Simple styling to blend in
        btn.style.background = 'transparent';
        btn.style.border = 'none';
        btn.style.cursor = 'pointer';
        btn.style.padding = '0'; // Remove padding to match text link visual spacing
        btn.style.display = 'flex';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        btn.style.color = 'var(--text-primary)';
        btn.style.transition = 'color 0.2s ease';

        btn.onclick = () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        };

        return btn;
    };

    const updateButton = (theme) => {
        const btn = document.getElementById('theme-toggle-btn');
        if (!btn) return;

        // Icons: Sun for Dark (switch to light), Moon for Light (switch to dark)
        const sunIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        const moonIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

        btn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
    };

    // 3. Inject button into Nav
    const init = () => {
        const nav = document.querySelector('nav');
        if (nav && !document.getElementById('theme-toggle-btn')) {
            const btn = createToggleBtn();
            nav.appendChild(btn);

            // Apply current theme to button state
            const currentTheme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
            updateButton(currentTheme);
        }
    };

    // Run initialization
    // Apply theme immediately to avoid flash if possible (script should be loaded in head or top of body for best results, but defer works too if fast)
    const preferred = getPreferredTheme();
    document.documentElement.setAttribute('data-theme', preferred);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
