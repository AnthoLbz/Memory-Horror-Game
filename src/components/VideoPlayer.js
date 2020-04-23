import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios';

const VideoPlayer =() =>{
    const [player, setPlayer] = useState([])

  useEffect(() =>{
    getVideo()
  }, [])

  const getVideo = () =>{
      axios.get("https://horrormemo.herokuapp.com/memory")
        .then(response => setPlayer(response.data))
    }

    return(
    <div>
        {player.filter(player => player.id <= 19)
        .map(player =>
            <div>
            <h4>{player.name}</h4>
            <ReactPlayer url={player.video} 
            light
            controls = 'true'
            width = '45%'/>
            </div>
        )}
    </div>
    )
}

export default VideoPlayer