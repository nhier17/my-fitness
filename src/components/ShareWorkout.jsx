import React from 'react'
import {
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TwitterShareButton,
 
  } from "react-share";

const ShareWorkout = () => {
    const shareUrl = 'https://my-fitness17.netlify.app'
    const title = 'Check out my workout achievement!'
  return (
    <div>
       <FacebookShareButton url={shareUrl} quote={title}>
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        Share on Twitter
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        Share on LinkedIn
      </LinkedinShareButton>
      <RedditShareButton url={shareUrl} title={title}>
        Share on Reddit
      </RedditShareButton>
      <PinterestShareButton url={shareUrl} title={title}>
        Share on Pinterest
      </PinterestShareButton>
    </div>
  )
}

export default ShareWorkout
