import React from "react";

import VideoListItem from "./Video_list_item";

export default props => {
  const VideoItems = props.videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });
  return <ul className="col-md-4 list-group">{VideoItems}</ul>;
};