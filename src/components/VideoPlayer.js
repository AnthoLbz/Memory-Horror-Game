import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer ({player}) {
    return(
    <div>
    <h4>{player.name}</h4>
    <ReactPlayer url={player.video} playing />
    <h4>{player.name}</h4>
    <ReactPlayer url={player.video} playing />
    </div>
    
    )
}

export default VideoPlayer