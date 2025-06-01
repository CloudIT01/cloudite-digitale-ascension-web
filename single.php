
<?php get_header(); ?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
        <!-- Hero Section -->
        <section class="pt-24 pb-12 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
            <div class="container mx-auto px-4">
                <div class="w-24 h-1 bg-cloud-gradient mx-auto rounded-full mb-8"></div>
            </div>
        </section>

        <!-- Blog Post Content -->
        <section class="py-16 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4">
                <article class="max-w-3xl mx-auto">
                    <!-- Article Header -->
                    <div class="mb-8">
                        <a href="<?php echo home_url('/blog'); ?>" class="mb-4 text-cloud-purple hover:text-cloud-lightViolet inline-flex items-center gap-2">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m0 7h18"></path>
                            </svg>
                            <?php _e('Retour au blog', 'clouditechnologies'); ?>
                        </a>
                        <h1 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent">
                            <?php the_title(); ?>
                        </h1>
                        <div class="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                            <span><?php echo get_the_date(); ?></span>
                            <span class="mx-2">•</span>
                            <span><?php _e('Par', 'clouditechnologies'); ?> <?php the_author(); ?></span>
                        </div>
                    </div>
                    
                    <!-- Featured Image -->
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
                        </div>
                    <?php endif; ?>
                    
                    <!-- Article Content -->
                    <div class="prose prose-lg dark:prose-invert max-w-none">
                        <?php the_content(); ?>
                    </div>
                </article>
            </div>
        </section>
    <?php endwhile; ?>
<?php endif; ?>

<!-- Newsletter Section -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
        <?php get_template_part('template-parts/newsletter'); ?>
    </div>
</section>

<?php get_footer(); ?>
