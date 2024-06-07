import React from 'react'
import {
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";

const ShareWorkout = () => {
    const shareUrl = 'https://my-fitness17.netlify.app'
    const title = 'Check out my workout achievement!'
  return (
    <div className="container flex items-center gap-4 mx-auto px-4 py-8">
        <FacebookShareButton url={shareUrl} quote={title}>
           <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} title={title} className="bg-red-600 text-white px-4 py-2 rounded-md">
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <PinterestShareButton url={shareUrl} title={title} className="bg-red-400 text-white px-4 py-2 rounded-md">
          <PinterestIcon size={32} round={true} />
        </PinterestShareButton>
    </div>
  )
}

export default ShareWorkout
