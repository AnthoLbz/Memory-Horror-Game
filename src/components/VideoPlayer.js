import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer ({name,video}) {
    return(
    <div>
    <h4>{name}</h4>
    <ReactPlayer url={video} playing />

    </div>
    
    )
}

export default VideoPlayer