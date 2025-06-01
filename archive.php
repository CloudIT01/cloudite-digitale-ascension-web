
<?php get_header(); ?>

<!-- Hero Section -->
<section class="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
    <div class="container mx-auto px-4">
        <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent">
                <?php _e('Blog', 'clouditechnologies'); ?>
            </h1>
            <div class="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
        </div>
    </div>
</section>

<!-- Blog Posts -->
<section class="py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-cloud-purple shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                        <div class="relative h-64 overflow-hidden">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover transition-transform duration-500 hover:scale-105')); ?>
                            <?php else : ?>
                                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="<?php the_title(); ?>" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                            <?php endif; ?>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 p-6">
                                <p class="text-white/80 text-sm"><?php echo get_the_date(); ?> • <?php _e('Par', 'clouditechnologies'); ?> <?php the_author(); ?></p>
                            </div>
                        </div>
                        
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-3 hover:text-cloud-purple dark:hover:text-cloud-lightViolet transition-colors">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-4"><?php the_excerpt(); ?></p>
                            <a href="<?php the_permalink(); ?>" class="text-cloud-purple dark:text-cloud-lightViolet hover:underline">
                                <?php _e('Lire l\'article', 'clouditechnologies'); ?>
                            </a>
                        </div>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <p><?php _e('Aucun article trouvé.', 'clouditechnologies'); ?></p>
            <?php endif; ?>
        </div>

        <!-- Pagination -->
        <div class="mt-12 text-center">
            <?php
            the_posts_pagination(array(
                'mid_size' => 2,
                'prev_text' => __('&laquo; Précédent', 'clouditechnologies'),
                'next_text' => __('Suivant &raquo;', 'clouditechnologies'),
            ));
            ?>
        </div>
    </div>
</section>

<!-- Newsletter Section -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
        <?php get_template_part('template-parts/newsletter'); ?>
    </div>
</section>

<?php get_footer(); ?>
