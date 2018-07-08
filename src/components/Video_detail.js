import React from "react";

export default props => {
  const video = props.video;

  if (!video) {
    return <div>loading....</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>
          <strong>{video.snippet.title}</strong>
        </div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
