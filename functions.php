
<?php
/**
 * CloudITechnologies WordPress Theme Functions
 * 
 * @package CloudITechnologies
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function clouditechnologies_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add support for custom background
    add_theme_support('custom-background', array(
        'default-color' => 'ffffff',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'clouditechnologies'),
        'footer' => __('Footer Menu', 'clouditechnologies'),
    ));

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');

    // Add support for responsive embeds
    add_theme_support('responsive-embeds');

    // Add support for wide and full alignment
    add_theme_support('align-wide');
}
add_action('after_setup_theme', 'clouditechnologies_setup');

/**
 * Enqueue scripts and styles
 */
function clouditechnologies_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style(
        'clouditechnologies-style',
        get_template_directory_uri() . '/assets/css/style.css',
        array(),
        '1.0.0'
    );

    // Enqueue Tailwind CSS
    wp_enqueue_style(
        'tailwindcss',
        'https://cdn.tailwindcss.com',
        array(),
        '3.3.0'
    );

    // Enqueue main JavaScript
    wp_enqueue_script(
        'clouditechnologies-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        '1.0.0',
        true
    );

    // Add inline script for Tailwind config
    wp_add_inline_script('clouditechnologies-main', '
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "cloud-purple": "#6628c8",
                        "cloud-lightViolet": "#b767d5",
                        "cloud-darkBlue": "#0032f8",
                        "cloud-blue": "#2e3192"
                    },
                    backgroundImage: {
                        "cloud-gradient": "linear-gradient(135deg, #6628c8, #b767d5, #0032f8)",
                    },
                    animation: {
                        "float": "float 6s ease-in-out infinite",
                        "float-delay": "float-delay 8s ease-in-out infinite 1s",
                        "gradient": "gradient 8s ease infinite",
                        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
                        "rotate-slow": "rotate-slow 20s linear infinite",
                    }
                }
            }
        }
    ', 'before');

    // Localize script for AJAX
    wp_localize_script('clouditechnologies-main', 'ajax_object', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('clouditechnologies_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'clouditechnologies_scripts');

/**
 * Register widget areas
 */
function clouditechnologies_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'clouditechnologies'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'clouditechnologies'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer', 'clouditechnologies'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'clouditechnologies'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'clouditechnologies_widgets_init');

/**
 * Custom excerpt length
 */
function clouditechnologies_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'clouditechnologies_excerpt_length');

/**
 * Custom excerpt more
 */
function clouditechnologies_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'clouditechnologies_excerpt_more');

/**
 * Newsletter subscription handler
 */
function clouditechnologies_newsletter_subscription() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'clouditechnologies_nonce')) {
        wp_die('Security check failed');
    }

    $first_name = sanitize_text_field($_POST['first_name']);
    $email = sanitize_email($_POST['email']);

    if (!is_email($email)) {
        wp_send_json_error('Invalid email address');
    }

    // Here you would typically integrate with your email service provider
    // For now, we'll just store it in the database or send a simple email

    // Send confirmation email
    $subject = __('Newsletter Subscription Confirmation', 'clouditechnologies');
    $message = sprintf(
        __('Hello %s,\n\nThank you for subscribing to our newsletter!\n\nBest regards,\nCloudITechnologies Team', 'clouditechnologies'),
        $first_name
    );
    
    wp_mail($email, $subject, $message);

    wp_send_json_success(__('Thank you for subscribing!', 'clouditechnologies'));
}
add_action('wp_ajax_newsletter_subscription', 'clouditechnologies_newsletter_subscription');
add_action('wp_ajax_nopriv_newsletter_subscription', 'clouditechnologies_newsletter_subscription');

/**
 * Contact form handler
 */
function clouditechnologies_contact_form() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'clouditechnologies_nonce')) {
        wp_die('Security check failed');
    }

    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $subject = sanitize_text_field($_POST['subject']);
    $message = sanitize_textarea_field($_POST['message']);

    if (!is_email($email)) {
        wp_send_json_error('Invalid email address');
    }

    // Send email to admin
    $admin_email = get_option('admin_email');
    $email_subject = sprintf(__('New contact form submission: %s', 'clouditechnologies'), $subject);
    $email_message = sprintf(
        __("New contact form submission:\n\nName: %s\nEmail: %s\nPhone: %s\nSubject: %s\nMessage: %s", 'clouditechnologies'),
        $name,
        $email,
        $phone,
        $subject,
        $message
    );

    wp_mail($admin_email, $email_subject, $email_message);

    wp_send_json_success(__('Message sent successfully!', 'clouditechnologies'));
}
add_action('wp_ajax_contact_form', 'clouditechnologies_contact_form');
add_action('wp_ajax_nopriv_contact_form', 'clouditechnologies_contact_form');

/**
 * Add custom CSS for animations
 */
function clouditechnologies_custom_css() {
    ?>
    <style>
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }

    @keyframes float-delay {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
    }

    @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    @keyframes pulse-slow {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    @keyframes rotate-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .animate-float {
        animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delay {
        animation: float-delay 8s ease-in-out infinite 1s;
    }
    
    .animate-gradient {
        background-size: 200% auto;
        animation: gradient 8s ease infinite;
    }

    .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
    }

    .animate-rotate-slow {
        animation: rotate-slow 20s linear infinite;
    }

    .perspective {
        perspective: 1000px;
    }

    .translate-z-8 {
        transform: translateZ(8px);
    }

    .bg-grid-pattern {
        background-image: radial-gradient(circle, #6628c8 1px, transparent 1px);
        background-size: 30px 30px;
    }

    .grid-dots {
        opacity: 0.2;
        background-image: radial-gradient(#6628c8 1px, transparent 1px);
        background-size: 40px 40px;
    }

    .btn-primary {
        background: linear-gradient(135deg, #6628c8, #b767d5);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.375rem;
        font-weight: 500;
        transform: translateY(0);
        transition: all 0.2s;
        cursor: pointer;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        border: none;
    }

    .btn-primary:hover {
        background: linear-gradient(135deg, #b767d5, #6628c8);
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .btn-primary:active {
        transform: translateY(0) scale(0.95);
        background: linear-gradient(135deg, #0032f8, #2e3192);
    }

    .service-card {
        background: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        transition: all 0.3s;
        border: 2px solid #6628c8;
        box-shadow: 0 10px 25px rgba(102, 40, 200, 0.2);
    }

    .dark .service-card {
        background: #1f2937;
    }

    .service-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(102, 40, 200, 0.3);
        background: linear-gradient(to bottom, white, #faf5ff);
    }

    .dark .service-card:hover {
        background: linear-gradient(to bottom, #1f2937, #374151);
    }

    .nav-link {
        position: relative;
        display: inline-block;
        padding: 0.5rem 1rem;
        transition: colors 0.2s;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 0.125rem;
        background: #6628c8;
        transition: all 0.3s ease-in-out;
    }

    .nav-link:hover::after,
    .active-nav-link::after {
        width: 100%;
    }
    </style>
    <?php
}
add_action('wp_head', 'clouditechnologies_custom_css');

/**
 * Load text domain for translations
 */
function clouditechnologies_load_textdomain() {
    load_theme_textdomain('clouditechnologies', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'clouditechnologies_load_textdomain');

/**
 * Customizer additions
 */
function clouditechnologies_customize_register($wp_customize) {
    // Add a section for theme options
    $wp_customize->add_section('clouditechnologies_options', array(
        'title'    => __('CloudITechnologies Options', 'clouditechnologies'),
        'priority' => 30,
    ));

    // Add setting for contact email
    $wp_customize->add_setting('contact_email', array(
        'default'           => 'contact@clouditechnologies.fr',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label'    => __('Contact Email', 'clouditechnologies'),
        'section'  => 'clouditechnologies_options',
        'type'     => 'email',
    ));

    // Add setting for contact phone
    $wp_customize->add_setting('contact_phone', array(
        'default'           => '01 23 45 67 89',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label'    => __('Contact Phone', 'clouditechnologies'),
        'section'  => 'clouditechnologies_options',
        'type'     => 'text',
    ));
}
add_action('customize_register', 'clouditechnologies_customize_register');
