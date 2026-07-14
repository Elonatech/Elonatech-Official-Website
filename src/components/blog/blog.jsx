import React from 'react';
import BlogGrid from './BlogGrid';

const Blog = () => (
  <BlogGrid
    initialFilter='all'
    basePath='/blog'
    pageHeading='Blog'
    metaTitle='Tech Solutions Blog - Latest News, Trends & Insights in Digital Solutions'
    canonicalPath='https://elonatech.com.ng/blog'
  />
);

export default Blog;
