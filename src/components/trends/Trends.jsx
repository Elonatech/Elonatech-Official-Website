import React from 'react';
import BlogGrid from '../blog/BlogGrid';

const Trends = () => (
  <BlogGrid
    initialFilter='trends'
    basePath='/trends'
    pageHeading='Trends'
    metaTitle='Tech Solutions Blog - Latest News, Insights, Trends & IT Updates'
    canonicalPath='https://elonatech.com.ng/trends'
  />
);

export default Trends;
