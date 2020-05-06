import React, {useState, useEffect} from 'react'
import './VideoPlayer.css';
import ReactPlayer from 'react-player'
import axios from 'axios';
import GlitchClip from 'react-glitch-effect/core/Clip';
import { Link } from "react-router-dom";
import PlayList from "./PlayList";

const VideoPlayer =() =>{
    const [player, setPlayer] = useState([])

  useEffect(() =>{
    getVideo()
  }, [])

  const getVideo = () =>{
      axios.get("https://horrormemo.herokuapp.com/memory")
        .then(response => setPlayer(response.data))
    }

    return (
      <div className="Body1">
        <Link to="/" className="title">
          Memory Horror Game
        </Link>
        <div className="Body">
          {player
            .filter((player) => player.id <= 19)
            .map((player) => (
              <div className="test">
                <div className="VideoPlayer">
                  <img className="Card" src={player.image} alt={player.name} />
                  <GlitchClip className="Description">
                    <a
                      href={player.wiki}
                      className="Description"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {player.name}
                    </a>
                  </GlitchClip>
                  <ReactPlayer
                    className="Player"
                    url={player.video}
                    controls="true"
                    width="30%"
                    height="210px"
                  />
                </div>
                <div>
                  <hr />
                </div>
              </div>
            ))}
        </div>
        <PlayList />
      </div>
    );
}

export default VideoPlayer