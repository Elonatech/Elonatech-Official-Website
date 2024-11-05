import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaData = ({ title, description, author, canonicalUrl, ogImage }) => {
  const fullTitle = title ? `${title} on Elonatech` : 'Elonatech';
  const fullCanonicalUrl = canonicalUrl ? `${process.env.REACT_APP_FRONTEND_URL}${canonicalUrl}` : '';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      {title && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}
      {author && <meta name="author" content={author} />}
      {canonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph / Facebook */}
      {title && <meta property="og:title" content={fullTitle} />}
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      {title && <meta name="twitter:title" content={fullTitle} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default MetaData;
