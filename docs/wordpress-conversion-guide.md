
# WordPress Theme Conversion Guide

This document outlines how the current React structure maps to WordPress theme development.

## Current Structure Analysis

### Static Components (Template Parts)
These components contain static HTML/styling and will become WordPress template parts:

- `src/components/Navbar.tsx` → `header.php`
- `src/components/Footer.tsx` → `footer.php`
- `src/components/layout/PageLayout.tsx` → Main template wrapper structure
- `src/components/layout/HeroTemplate.tsx` → Reusable hero section template part
- `src/components/layout/ContentSection.tsx` → Content wrapper template part

### Dynamic Content Areas
These components contain dynamic content that will be populated from WordPress:

- `src/components/sections/ServicesGrid.tsx` → Custom post type: Services
- `src/components/sections/BlogGrid.tsx` → WordPress posts loop
- `src/components/Newsletter.tsx` → Contact form or shortcode
- `src/components/HeroSection.tsx` → Homepage content areas

### Page Templates
Current pages map directly to WordPress template files:

- `src/pages/Index.tsx` → `front-page.php` or `index.php`
- `src/pages/Blog.tsx` → `archive.php` or `home.php`
- `src/pages/BlogPost.tsx` → `single.php`
- `src/pages/About.tsx` → `page-about.php` or custom page template
- `src/pages/Contact.tsx` → `page-contact.php`
- Legal pages → Individual page templates

## WordPress Conversion Steps

### 1. Theme Structure Setup
```
wp-content/themes/clouditechnologies/
├── style.css (theme header)
├── functions.php
├── index.php
├── header.php
├── footer.php
├── front-page.php
├── single.php
├── archive.php
├── page.php
├── template-parts/
│   ├── hero-section.php
│   ├── content-section.php
│   └── services-grid.php
├── assets/
│   ├── css/
│   └── js/
└── inc/
    ├── customizer.php
    └── custom-post-types.php
```

### 2. Content Strategy

#### Services (Custom Post Type)
- Create a "Services" custom post type
- Custom fields: icon, description, title
- Replace `ServicesGrid` component data with WordPress loop

#### Blog Posts
- Use standard WordPress posts
- Custom fields for featured images and excerpts
- Implement pagination

#### Hero Sections
- Use WordPress Customizer for hero content
- Or implement as Advanced Custom Fields on pages

### 3. Technology Migration

#### Styling
- Copy Tailwind CSS configuration to WordPress
- Enqueue Tailwind in `functions.php`
- Convert component styles to WordPress-compatible format

#### JavaScript Functionality
- Move React state management to vanilla JS or minimal framework
- Convert language switching to WordPress localization
- Theme switching to WordPress customizer or cookies

#### Responsive Design
- Maintain current Tailwind responsive classes
- Ensure mobile menu functionality in vanilla JS

### 4. Dynamic Features

#### Internationalization
- Replace `useLanguage` hook with WordPress i18n functions
- Use `__()`, `_e()`, `_n()` functions
- Create .po/.mo files for translations

#### Navigation
- Replace React Router with WordPress menus
- Use `wp_nav_menu()` for dynamic navigation
- Implement active page detection with WordPress functions

#### Contact Forms
- Replace Newsletter component with Contact Form 7 or Gravity Forms
- Or implement custom form with WordPress AJAX

### 5. Performance Considerations
- Optimize image loading with WordPress best practices
- Implement proper caching strategies
- Minify CSS/JS assets
- Use WordPress asset optimization plugins

## File Mapping Reference

| React Component | WordPress Equivalent | Notes |
|----------------|---------------------|-------|
| `PageLayout.tsx` | Theme wrapper structure | Base layout for all pages |
| `HeroTemplate.tsx` | `template-parts/hero.php` | Reusable hero sections |
| `ContentSection.tsx` | `template-parts/content-wrapper.php` | Content containers |
| `ServicesGrid.tsx` | Custom post type loop | Dynamic services content |
| `BlogGrid.tsx` | Posts loop | WordPress posts query |
| `Navbar.tsx` | `header.php` | Site header with navigation |
| `Footer.tsx` | `footer.php` | Site footer |
| Language context | WordPress i18n | Localization system |
| Theme context | Customizer options | Dark/light mode |

This modular structure makes the WordPress conversion straightforward, with clear separation between static layout elements and dynamic content areas.
