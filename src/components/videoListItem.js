import React from 'react';

//instead of props we used this syntax which is identical to const video = props.video
const VideoListItem = ({video}) => {
  // console.log(video)
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <img className="media-object" src={imageUrl} alt=""/>
      </div>
       <div className="media-body">
      <div className="media-heading">
        {video.snippet.title}
      </div>
    </div>
    </li>
    
   
  )
}

export default VideoListItem;