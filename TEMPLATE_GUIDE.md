# Blog Template Guide

This guide explains how to use the blog template system for YeahWick's Blog.

## Overview

The blog uses a minimal web 2.0 design with a shared stylesheet (`styles.css`) that provides:
- Clean, light color scheme
- Modern typography
- Subtle shadows and rounded corners
- Responsive design
- Consistent styling across all pages

## Files Structure

```
yeahwick.github.io/
├── styles.css                          # Shared stylesheet
├── index.html                          # Homepage
├── blog/
│   ├── index.html                     # Blog archive page
│   ├── post-template.html             # Template for new posts
│   └── [blog-post-name].html          # Individual blog posts
```

## Creating a New Blog Post

### 1. Copy the Template

Copy `blog/post-template.html` to create a new blog post:

```bash
cp blog/post-template.html blog/my-new-post.html
```

### 2. Replace Template Placeholders

The template includes the following placeholders that need to be replaced:

- `{{POST_TITLE}}` - The title of your blog post
- `{{PUBLISH_DATE}}` - Publication date (e.g., "January 7, 2026")
- `{{READ_TIME}}` - Estimated reading time in minutes (e.g., "5")
- `{{POST_CONTENT}}` - Your blog post content in HTML

### 3. Write Your Content

Replace `{{POST_CONTENT}}` with your blog post content. Use the following HTML structure:

```html
<h2>Main Section Heading</h2>
<p>Paragraph text goes here.</p>

<h3>Subsection Heading</h3>
<p>More paragraph text.</p>

<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>

<pre><code>
// Code blocks
function example() {
    return "Hello, World!";
}
</code></pre>
```

## Design Guidelines

### Color Palette

- **Background**: `#f5f7fa` (light gray-blue)
- **Text**: `#2c3e50` (dark gray-blue)
- **Primary**: `#3498db` (blue)
- **Secondary**: `#5a6c7d` (medium gray)
- **Accent**: `#e74c3c` (red for errors/alerts)

### Typography

- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', etc.)
- **Base Font Size**: 16px (1rem)
- **Line Height**: 1.6 (body text), 1.8 (post content)

### Components

#### Cards
All major content sections use the `.card` class:
- White background
- 8px border radius
- Subtle shadow
- 24px padding

#### Buttons
Use the `.button` class for all call-to-action links:
- Blue background (`#3498db`)
- White text
- 6px border radius
- Hover effect with slight lift

#### Blog Posts
Blog post cards use `.card.blog-post`:
- Full height flex layout
- Post title in `.post-header h3`
- Metadata in `.post-meta`
- Excerpt in `.post-excerpt`
- Read more button with `.button.read-more`

## Updating the Blog Index

When you add a new blog post, update `blog/index.html` by adding a new article block:

```html
<article class="card blog-post">
    <div class="post-meta">
        <span><i class="far fa-calendar"></i> January 7, 2026</span>
        <span><i class="far fa-clock"></i> 5 min read</span>
    </div>
    <h3><a href="/blog/my-new-post.html">My New Post Title</a></h3>
    <p class="post-excerpt">A brief excerpt describing your post...</p>
    <a href="/blog/my-new-post.html" class="button read-more">
        <i class="fas fa-arrow-right"></i> Read More
    </a>
</article>
```

## Responsive Design

The design is mobile-first and includes breakpoints for:
- Mobile: < 768px (single column layout)
- Desktop: >= 768px (multi-column grid layout)

## Best Practices

1. **Keep it Simple**: The minimal web 2.0 style prioritizes content and readability
2. **Use Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)
3. **Optimize Images**: If adding images, compress them for web delivery
4. **Test Responsively**: Check your posts on both mobile and desktop
5. **Maintain Consistency**: Follow the existing color scheme and spacing

## Common Tasks

### Changing the Color Scheme

Edit `styles.css` and update the color values in the relevant sections.

### Adding New Components

Add new CSS classes to `styles.css` following the existing naming conventions.

### Updating Navigation

Navigation links are defined in the header of each page:

```html
<nav class="nav-links">
    <a href="/"><i class="fas fa-home"></i> Home</a>
    <a href="/blog/"><i class="fas fa-blog"></i> Blog</a>
    <a href="/"><i class="fas fa-envelope"></i> Contact</a>
</nav>
```

## Troubleshooting

### Styles Not Loading

Ensure the stylesheet link is correct:
```html
<link rel="stylesheet" href="/styles.css">
```

### Icons Not Showing

Verify Font Awesome is loaded:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## Design Philosophy

The minimal web 2.0 design emphasizes:
- **Clarity**: Clean layouts with plenty of whitespace
- **Simplicity**: Subtle effects and straightforward interactions
- **Readability**: Large, legible typography with good contrast
- **Performance**: Minimal dependencies and fast load times
- **Accessibility**: Semantic HTML and proper ARIA labels
