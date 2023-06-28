import React, { memo } from 'react';

const PopUpVideo = memo(({ videoUrl }) => {
   return (
      <div className="videoBox">
         <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
      </div>
   );
});

export default PopUpVideo;
