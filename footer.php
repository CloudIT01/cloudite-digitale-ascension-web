
<footer class="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="space-y-4">
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
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    <?php _e('Solutions marketing digitales innovantes pour stimuler votre croissance.', 'clouditechnologies'); ?>
                </p>
                <div class="flex space-x-3">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.526l1.718-1.718c.39.586 1.059.974 1.825.974 1.207 0 2.188-.981 2.188-2.188 0-.766-.388-1.435-.974-1.825l1.718-1.718c.93.757 1.526 1.908 1.526 3.205 0 2.273-1.842 4.115-4.115 4.115z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="font-bold text-lg mb-4"><?php _e('Navigation', 'clouditechnologies'); ?></h3>
                <ul class="space-y-2">
                    <li><a href="<?php echo home_url(); ?>" class="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet"><?php _e('Accueil', 'clouditechnologies'); ?></a></li>
                    <li><a href="<?php echo home_url('/a-propos'); ?>" class="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet"><?php _e('À Propos', 'clouditechnologies'); ?></a></li>
                    <li><a href="<?php echo home_url('/contact'); ?>" class="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet"><?php _e('Contact', 'clouditechnologies'); ?></a></li>
                    <li><a href="<?php echo home_url('/blog'); ?>" class="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet"><?php _e('Blog', 'clouditechnologies'); ?></a></li>
                </ul>
            </div>

            <!-- Legal -->
            <div>
                <h3 class="font-bold text-lg mb-4"><?php _e('Légal', 'clouditechnologies'); ?></h3>
                <ul class="space-y-2">
                    <li><a href="<?php echo home_url('/mentions-legales'); ?>" class="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet"><?php _e('Mentions Légales', 'clouditechnologies'); ?></a></li>
                    <li><a href="<?php echo home_url('/politique-de-confidentialite'); ?>" class="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet"><?php _e('Politique de Confidentialité', 'clouditechnologies'); ?></a></li>
                    <li><a href="<?php echo home_url('/politique-des-cookies'); ?>" class="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet"><?php _e('Politique des Cookies', 'clouditechnologies'); ?></a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h3 class="font-bold text-lg mb-4"><?php _e('Contact', 'clouditechnologies'); ?></h3>
                <ul class="space-y-3">
                    <li class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>01 23 45 67 89</span>
                    </li>
                    <li class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span>contact@clouditechnologies.fr</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
            <p>&copy; <?php echo date('Y'); ?> CloudITechnologies. <?php _e('Tous droits réservés.', 'clouditechnologies'); ?></p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
