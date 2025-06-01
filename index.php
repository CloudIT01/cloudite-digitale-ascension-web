
<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @package CloudITechnologies
 */

get_header(); ?>

<main>
    <!-- Content Area -->
    <section class="pt-32 pb-16 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <?php if (have_posts()) : ?>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <?php while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]'); ?>>
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="relative h-48 overflow-hidden">
                                    <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover')); ?>
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute bottom-0 left-0 p-4">
                                        <p class="text-white/80 text-sm"><?php echo get_the_date(); ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <div class="p-6">
                                <h2 class="text-xl font-bold mb-3 hover:text-cloud-purple dark:hover:text-cloud-lightViolet transition-colors">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_title(); ?>
                                    </a>
                                </h2>
                                <div class="text-gray-600 dark:text-gray-400 mb-4">
                                    <?php the_excerpt(); ?>
                                </div>
                                <a href="<?php the_permalink(); ?>" class="text-cloud-purple dark:text-cloud-lightViolet hover:underline">
                                    <?php _e('Lire la suite', 'clouditechnologies'); ?>
                                </a>
                            </div>
                        </article>
                    <?php endwhile; ?>
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
            <?php else : ?>
                <div class="text-center">
                    <h1 class="text-3xl font-bold mb-4"><?php _e('Aucun contenu trouvé', 'clouditechnologies'); ?></h1>
                    <p class="text-gray-600 dark:text-gray-400"><?php _e('Il semble qu\'il n\'y ait rien ici. Peut-être devriez-vous essayer l\'un des liens ci-dessous ou une recherche ?', 'clouditechnologies'); ?></p>
                    <div class="mt-8">
                        <?php get_search_form(); ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>
