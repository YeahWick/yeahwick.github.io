#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read posts from posts.json
const postsPath = path.join(__dirname, '../blog/posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

// RSS feed metadata
const siteUrl = 'https://yeahwick.github.io';
const blogTitle = "YeahWick's Blog";
const blogDescription = 'Where technology meets creativity';
const blogLanguage = 'en-us';

// Function to convert date string to RFC 822 format
function toRFC822(dateString) {
    const date = new Date(dateString);
    return date.toUTCString();
}

// Function to escape XML special characters
function escapeXml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// Generate RSS feed
const rssItems = posts.map(post => {
    const fullUrl = `${siteUrl}${post.url}`;
    const pubDate = toRFC822(post.date);

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${fullUrl}</link>
      <guid>${fullUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
}).join('\n');

const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(blogTitle)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(blogDescription)}</description>
    <language>${blogLanguage}</language>
    <lastBuildDate>${toRFC822(posts[0].date)}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

// Write RSS feed to file
const outputPath = path.join(__dirname, '../rss.xml');
fs.writeFileSync(outputPath, rssFeed, 'utf8');
console.log(`RSS feed generated successfully at ${outputPath}`);
