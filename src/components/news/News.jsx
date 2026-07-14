import React from 'react';
import BlogGrid from '../blog/BlogGrid';

const News = () => (
  <BlogGrid
    initialFilter='news'
    basePath='/news'
    pageHeading='News'
    metaTitle='Tech Solutions Blog - Latest News, Trends & Insights in IT & Digital Solutions'
    canonicalPath='https://elonatech.com.ng/news'
  />
);

export default News;
