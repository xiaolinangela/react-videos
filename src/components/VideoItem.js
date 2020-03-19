import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img class="ui image" src={video.snippet.thumbnails.medium.url} />
      <div class="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
