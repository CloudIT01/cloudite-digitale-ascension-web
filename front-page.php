
<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <div class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <!-- Modern animated background elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Gradient blobs -->
            <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cloud-purple/30 to-cloud-blue/20 blur-3xl animate-float"></div>
            <div class="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-cloud-lightViolet/20 to-cloud-purple/10 blur-3xl animate-float-delay"></div>
            
            <!-- Geometric shapes -->
            <div class="absolute top-1/4 right-1/5 w-32 h-32 border border-cloud-purple/30 rounded-lg rotate-12 animate-rotate-slow"></div>
            <div class="absolute bottom-1/4 left-1/5 w-20 h-20 border border-cloud-blue/30 rounded-full animate-pulse-slow"></div>
            
            <!-- Rotating hexagon -->
            <div class="absolute bottom-[20%] right-[30%] w-28 h-28 shadow-lg animate-rotate-slow" style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(90deg, #2e3192 0%, #0032f8 100%); box-shadow: 0 0 15px #0032f8; opacity: 0.2;"></div>
            
            <!-- Floating dots grid -->
            <div class="grid-dots"></div>
            
            <!-- Moving gradient line -->
            <div class="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cloud-purple/50 to-transparent animate-pulse-slow"></div>
        </div>
        
        <!-- 3D perspective container -->
        <div class="container mx-auto px-4 z-10 relative perspective">
            <div class="max-w-3xl mx-auto text-center transform transition-all duration-700 hover:translate-z-8">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent animate-gradient">
                    <?php _e('Propulsez votre entreprise avec la pluie digitale', 'clouditechnologies'); ?>
                </h1>
                <p class="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                    <?php _e('Solutions marketing digitales innovantes pour stimuler votre croissance', 'clouditechnologies'); ?>
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button id="calendly-button" class="btn-primary text-lg px-8 py-6 flex items-center gap-2 group">
                        <svg class="h-5 w-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span class="relative">
                            <?php _e('Réserver un appel', 'clouditechnologies'); ?>
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </span>
                    </button>
                    <button id="scroll-to-services" class="px-6 py-3 text-cloud-purple border border-cloud-purple hover:bg-cloud-purple/10 dark:border-cloud-lightViolet dark:text-cloud-lightViolet dark:hover:bg-cloud-lightViolet/10 group rounded-md">
                        <span class="relative">
                            <?php _e('En savoir plus', 'clouditechnologies'); ?>
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cloud-purple dark:bg-cloud-lightViolet transition-all group-hover:w-full"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button id="scroll-indicator" class="rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300 p-3">
                <svg class="h-5 w-5 text-gray-700 dark:text-gray-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </div>
        
        <!-- Decorative tech pattern overlay -->
        <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </div>
    
    <!-- Services Section -->
    <section id="services" class="py-16 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4"><?php _e('Nos Services', 'clouditechnologies'); ?></h2>
                <div class="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
            </div>
            
            <?php get_template_part('template-parts/services-grid'); ?>
        </div>
    </section>
    
    <!-- Newsletter Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4">
            <?php get_template_part('template-parts/newsletter'); ?>
        </div>
    </section>
</main>

<?php get_template_part('template-parts/cookie-consent'); ?>

<?php get_footer(); ?>
