
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 md:py-4">
    <div class="container mx-auto rounded-xl transition-all duration-300 bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm">
        <nav class="flex items-center justify-between px-4 py-2">
            <!-- Logo -->
            <a href="<?php echo home_url(); ?>" class="flex items-center">
                <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 bg-cloud-gradient rounded-full flex items-center justify-center">
                        <span class="text-white font-bold">C</span>
                    </div>
                    <span class="font-bold text-xl bg-gradient-to-r from-cloud-purple to-cloud-darkBlue bg-clip-text text-transparent">
                        CloudITechnologies
                    </span>
                </div>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                <div class="flex space-x-1">
                    <a href="<?php echo home_url(); ?>" class="nav-link <?php echo (is_front_page()) ? 'active-nav-link' : ''; ?>">
                        <?php _e('Accueil', 'clouditechnologies'); ?>
                    </a>
                    <a href="<?php echo home_url('/a-propos'); ?>" class="nav-link <?php echo (is_page('a-propos')) ? 'active-nav-link' : ''; ?>">
                        <?php _e('À Propos', 'clouditechnologies'); ?>
                    </a>
                    <a href="<?php echo home_url('/contact'); ?>" class="nav-link <?php echo (is_page('contact')) ? 'active-nav-link' : ''; ?>">
                        <?php _e('Contact', 'clouditechnologies'); ?>
                    </a>
                    <a href="<?php echo home_url('/blog'); ?>" class="nav-link <?php echo (is_home() || is_category() || is_single()) ? 'active-nav-link' : ''; ?>">
                        <?php _e('Blog', 'clouditechnologies'); ?>
                    </a>
                </div>
                
                <div class="flex items-center space-x-2">
                    <!-- Theme Toggle Button -->
                    <button id="theme-toggle" class="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle theme">
                        <span class="dark:hidden">🌙</span>
                        <span class="hidden dark:inline">☀️</span>
                    </button>
                    
                    <!-- Language Switcher -->
                    <div class="relative">
                        <button id="language-toggle" class="text-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Change language">
                            🇫🇷
                        </button>
                    </div>
                    
                    <!-- CTA Button -->
                    <a href="<?php echo home_url('/contact'); ?>" class="btn-primary ml-2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cloud-purple to-cloud-darkBlue text-white rounded-lg hover:opacity-90 transition-opacity">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <?php _e('Planifier un appel', 'clouditechnologies'); ?>
                    </a>
                </div>
            </div>

            <!-- Mobile Menu Button -->
            <div class="flex items-center md:hidden space-x-2">
                <!-- Theme Toggle Button Mobile -->
                <button id="theme-toggle-mobile" class="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle theme">
                    <span class="dark:hidden">🌙</span>
                    <span class="hidden dark:inline">☀️</span>
                </button>
                
                <!-- Language Switcher Mobile -->
                <button id="language-toggle-mobile" class="text-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Change language">
                    🇫🇷
                </button>
                
                <!-- Mobile Menu Toggle -->
                <button id="mobile-menu-toggle" class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Menu">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="md:hidden py-3 px-2 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hidden">
            <div class="flex flex-col space-y-2">
                <a href="<?php echo home_url(); ?>" class="px-3 py-2 rounded-md <?php echo (is_front_page()) ? 'bg-cloud-purple/10 text-cloud-purple' : ''; ?>">
                    <?php _e('Accueil', 'clouditechnologies'); ?>
                </a>
                <a href="<?php echo home_url('/a-propos'); ?>" class="px-3 py-2 rounded-md <?php echo (is_page('a-propos')) ? 'bg-cloud-purple/10 text-cloud-purple' : ''; ?>">
                    <?php _e('À Propos', 'clouditechnologies'); ?>
                </a>
                <a href="<?php echo home_url('/contact'); ?>" class="px-3 py-2 rounded-md <?php echo (is_page('contact')) ? 'bg-cloud-purple/10 text-cloud-purple' : ''; ?>">
                    <?php _e('Contact', 'clouditechnologies'); ?>
                </a>
                <a href="<?php echo home_url('/blog'); ?>" class="px-3 py-2 rounded-md <?php echo (is_home() || is_category() || is_single()) ? 'bg-cloud-purple/10 text-cloud-purple' : ''; ?>">
                    <?php _e('Blog', 'clouditechnologies'); ?>
                </a>
                <a href="<?php echo home_url('/contact'); ?>" class="btn-primary flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cloud-purple to-cloud-darkBlue text-white rounded-lg hover:opacity-90 transition-opacity">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <?php _e('Planifier un appel', 'clouditechnologies'); ?>
                </a>
            </div>
        </div>
    </div>
</header>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }
});
</script>
