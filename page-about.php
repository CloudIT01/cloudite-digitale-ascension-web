
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

        <!-- About Content -->
        <section class="py-16 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <div class="prose prose-lg dark:prose-invert mx-auto">
                        <?php the_content(); ?>
                    </div>
                </div>
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
