
<?php get_header(); ?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
        <!-- Hero Section -->
        <section class="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
            <div class="container mx-auto px-4">
                <div class="text-center">
                    <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent">
                        <?php the_title(); ?>
                    </h1>
                    <div class="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
                </div>
            </div>
        </section>
        
        <!-- Contact Content -->
        <section class="py-16 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Contact Info -->
                        <div class="md:col-span-1">
                            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
                                <h2 class="text-2xl font-bold mb-6 text-cloud-purple dark:text-cloud-lightViolet">
                                    <?php _e('Nos coordonnées', 'clouditechnologies'); ?>
                                </h2>
                                
                                <div class="space-y-6">
                                    <div class="flex items-start space-x-3">
                                        <div class="bg-cloud-purple/10 p-2 rounded-full text-cloud-purple">
                                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-medium">Email</h3>
                                            <p class="text-gray-600 dark:text-gray-400">contact@clouditechnologies.fr</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start space-x-3">
                                        <div class="bg-cloud-purple/10 p-2 rounded-full text-cloud-purple">
                                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-medium"><?php _e('Téléphone', 'clouditechnologies'); ?></h3>
                                            <p class="text-gray-600 dark:text-gray-400">01 23 45 67 89</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start space-x-3">
                                        <div class="bg-cloud-purple/10 p-2 rounded-full text-cloud-purple">
                                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-medium"><?php _e('Adresse', 'clouditechnologies'); ?></h3>
                                            <p class="text-gray-600 dark:text-gray-400">
                                                123 Avenue des Nuages<br />
                                                75000 Paris<br />
                                                France
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Contact Form -->
                        <div class="md:col-span-2">
                            <?php the_content(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <?php endwhile; ?>
<?php endif; ?>

<?php get_footer(); ?>
