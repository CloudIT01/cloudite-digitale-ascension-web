
// CloudITechnologies Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    initThemeToggle();
    
    // Language switcher
    initLanguageSwitcher();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Newsletter form
    initNewsletterForm();
    
    // Contact form
    initContactForm();
    
    // Cookie consent
    initCookieConsent();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Calendly modal
    initCalendlyModal();
    
    // Load saved theme
    loadSavedTheme();
});

/**
 * Theme Toggle Functionality
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update theme toggle icons
        updateThemeIcons(isDark);
    }
    
    function updateThemeIcons(isDark) {
        const moonIcons = document.querySelectorAll('.theme-icon-moon');
        const sunIcons = document.querySelectorAll('.theme-icon-sun');
        
        moonIcons.forEach(icon => {
            icon.style.display = isDark ? 'none' : 'inline';
        });
        
        sunIcons.forEach(icon => {
            icon.style.display = isDark ? 'inline' : 'none';
        });
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
}

/**
 * Load saved theme preference
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemPreference;
    
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    // Update icons based on current theme
    const isDark = document.documentElement.classList.contains('dark');
    updateThemeIcons(isDark);
}

/**
 * Language Switcher
 */
function initLanguageSwitcher() {
    const languageToggle = document.getElementById('language-toggle');
    const languageToggleMobile = document.getElementById('language-toggle-mobile');
    
    // This would integrate with a WordPress multilingual plugin
    function handleLanguageChange() {
        // Implementation would depend on the multilingual plugin used
        console.log('Language change triggered');
    }
    
    if (languageToggle) {
        languageToggle.addEventListener('click', handleLanguageChange);
    }
    
    if (languageToggleMobile) {
        languageToggleMobile.addEventListener('click', handleLanguageChange);
    }
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

/**
 * Newsletter Form
 */
function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const messageDiv = document.getElementById('newsletter-message');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            formData.append('action', 'newsletter_subscription');
            formData.append('nonce', ajax_object.nonce);
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            
            fetch(ajax_object.ajax_url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    messageDiv.textContent = data.data;
                    messageDiv.className = 'mt-4 text-center text-green-600';
                    messageDiv.classList.remove('hidden');
                    form.reset();
                } else {
                    messageDiv.textContent = data.data || 'Une erreur est survenue';
                    messageDiv.className = 'mt-4 text-center text-red-600';
                    messageDiv.classList.remove('hidden');
                }
            })
            .catch(error => {
                messageDiv.textContent = 'Une erreur est survenue';
                messageDiv.className = 'mt-4 text-center text-red-600';
                messageDiv.classList.remove('hidden');
            })
            .finally(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
}

/**
 * Contact Form
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            formData.append('action', 'contact_form');
            formData.append('nonce', ajax_object.nonce);
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            
            fetch(ajax_object.ajax_url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.data);
                    form.reset();
                } else {
                    alert(data.data || 'Une erreur est survenue');
                }
            })
            .catch(error => {
                alert('Une erreur est survenue');
            })
            .finally(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
}

/**
 * Cookie Consent
 */
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('cookie-accept');
    const declineButton = document.getElementById('cookie-decline');
    const settingsButton = document.getElementById('cookie-settings');
    
    // Show cookie consent if not already accepted
    if (cookieConsent && !localStorage.getItem('cookie-consent')) {
        cookieConsent.classList.remove('hidden');
    }
    
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookie-consent', 'accepted');
            cookieConsent.classList.add('hidden');
        });
    }
    
    if (declineButton) {
        declineButton.addEventListener('click', function() {
            localStorage.setItem('cookie-consent', 'declined');
            cookieConsent.classList.add('hidden');
        });
    }
    
    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            // Open cookie settings modal
            alert('Cookie settings would open here');
        });
    }
}

/**
 * Smooth Scrolling
 */
function initSmoothScrolling() {
    const scrollToServices = document.getElementById('scroll-to-services');
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    function scrollToElement(targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (scrollToServices) {
        scrollToServices.addEventListener('click', function() {
            scrollToElement('services');
        });
    }
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            scrollToElement('services');
        });
    }
}

/**
 * Calendly Modal
 */
function initCalendlyModal() {
    const calendlyButton = document.getElementById('calendly-button');
    
    if (calendlyButton) {
        calendlyButton.addEventListener('click', function() {
            // This would integrate with Calendly widget
            // For now, we'll open a simple modal or redirect
            const calendlyUrl = 'https://calendly.com/your-calendly-link';
            window.open(calendlyUrl, '_blank', 'width=800,height=600');
        });
    }
}

/**
 * Utility function to update theme icons
 */
function updateThemeIcons(isDark) {
    // This function is called from multiple places to update theme toggle icons
    const themeToggles = document.querySelectorAll('[id^="theme-toggle"]');
    
    themeToggles.forEach(toggle => {
        const moonIcon = toggle.querySelector('.theme-icon-moon');
        const sunIcon = toggle.querySelector('.theme-icon-sun');
        
        if (moonIcon && sunIcon) {
            if (isDark) {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'inline';
            } else {
                moonIcon.style.display = 'inline';
                sunIcon.style.display = 'none';
            }
        }
    });
}
