import React from 'react';
import { FacebookShareButton, LinkedinShareButton, FacebookIcon, LinkedinIcon } from 'react-share';
import { FaXTwitter } from "react-icons/fa6";

const BlogSocialShareButtons = ({ url, title, image }) => {
  return (
    <div className="share-buttons mt-3">
      <h6>SHARE THIS POST</h6>
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Facebook Share */}
        <FacebookShareButton url={url} quote={title} hashtag="#elonatech">
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        {/* X (formerly Twitter) Share */}
        <a
          href={`https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&via=elonatech&hashtags=elonatech,blog&image=${encodeURIComponent(image)}`}
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', backgroundColor: '#1DA1F2', color: 'white' }}
        >
          <FaXTwitter size={16} />
        </a>

        {/* Optional: LinkedIn Share */}
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default BlogSocialShareButtons;
