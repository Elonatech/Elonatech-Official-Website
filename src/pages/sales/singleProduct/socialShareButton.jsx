import React from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

const SocialShareButtons = ({ url, title, image }) => {
  return (
    <div className="share-buttons mt-3">
      <h6>SHARE THIS PRODUCT</h6>
      <div style={{ display: 'flex', gap: '10px' }}>
      <FacebookShareButton url={url} quote={title} hashtag="#elonatech">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} via="elonatech" hashtags={["elonatech", "tech"]}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      </div>
    </div>
  );
};

export default SocialShareButtons;