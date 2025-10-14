# AI Agent Instructions for 43works Website

This is a Jekyll-based coworking space website using the Forty theme. Follow these specific patterns and conventions:

## Architecture Overview

### Component Structure
- **Layouts (`_layouts/`)**: Base templates that define page structure
  - `2-col-page.html`: Primary layout for service pages with form integration
  - `page.html`: Standard content pages
  - `post.html`: Blog post format
- **Includes (`_includes/`)**: Reusable components
  - `tiles.html`: Dynamic grid for services/posts
  - `header.html`: Site navigation
  - `footer.html`: Contact info and social links

### Content Organization
- **Service Pages**: Named with numerical prefix (e.g., `001_conference_rooms.md`)
- **Blog Posts**: Located in `_posts/` with date prefix
- **Static Pages**: Direct in root (e.g., `about.md`, `privacy-policy.md`)

## Key Development Patterns

### 1. Page Creation
```yaml
---
layout: 2-col-page  # or page, post
title: Service Name
description: SEO-friendly description
image: assets/images/service.jpg
nav-menu: true  # Show in navigation
iframe_src: https://form-url  # For service pages
---
```

### 2. Styling Architecture
- **Global Variables** (`_sass/libs/_vars.scss`):
  ```scss
  $duration: (menu: 0.35s, transition: 0.2s)
  $size: (inner: 65em, border-radius: 4px)
  $font: (family: ('Source Sans Pro', Helvetica, sans-serif))
  ```
- **Component SCSS** (`_sass/components/`):
  - Uses vendor mixins for cross-browser compatibility
  - BEM-like naming convention
  - Responsive breakpoints via Skel.js

### 3. UI Interactions
- Minimal JS with jQuery dependency
- Responsive navigation using Skel.js breakpoints
- Parallax scrolling on supported browsers
- Form integrations via iframe embeds

## Development Workflow

### Local Development
```bash
bundle install
bundle exec jekyll serve --livereload
```

### Production Build
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Common Tasks

### Adding New Service
1. Create `[number]_service-name.md` in root
2. Add required front matter (see template above)
3. Place service image in `assets/images/`
4. Update `tiles-count` in `_config.yml` if needed
5. Test tile appearance on homepage

### Configuration Changes
- Site settings in `_config.yml`:
  - `tiles-source`: Controls homepage content source
  - `tiles-count`: Number of tiles to display
  - Social media links
  - Contact information

### Form Integration
Service pages use Google Forms via iframe:
1. Add form URL to front matter: `iframe_src: [URL]`
2. Form automatically appears in right column
3. Mobile-responsive layout handles form resizing

Remember: Always test locally before committing. GitHub Actions handles deployment to Pages.