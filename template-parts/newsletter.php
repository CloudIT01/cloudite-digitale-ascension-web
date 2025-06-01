
<div class="text-center mb-8">
    <h2 class="text-2xl md:text-3xl font-bold mb-4"><?php _e('Abonnez-vous à notre newsletter', 'clouditechnologies'); ?></h2>
    <p class="text-gray-600 dark:text-gray-400"><?php _e('Recevez nos dernières actualités et conseils marketing', 'clouditechnologies'); ?></p>
</div>

<form id="newsletter-form" class="max-w-md mx-auto">
    <div class="flex flex-col sm:flex-row gap-4">
        <input 
            type="text" 
            name="first_name"
            placeholder="<?php _e('Prénom', 'clouditechnologies'); ?>" 
            class="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloud-purple dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
        >
        <input 
            type="email" 
            name="email"
            placeholder="<?php _e('Email', 'clouditechnologies'); ?>" 
            class="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloud-purple dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
        >
        <button 
            type="submit" 
            class="btn-primary px-6 py-3 bg-cloud-purple text-white rounded-md hover:bg-cloud-lightViolet transition-colors"
        >
            <?php _e('S\'abonner', 'clouditechnologies'); ?>
        </button>
    </div>
    <div id="newsletter-message" class="mt-4 text-center hidden"></div>
</form>
