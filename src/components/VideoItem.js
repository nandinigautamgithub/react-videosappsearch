import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={vodeo.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};
export default VideoItem;
