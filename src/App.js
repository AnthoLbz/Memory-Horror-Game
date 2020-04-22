import React, {useState, useEffect} from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import axios from 'axios';

const App = () =>{
  const [player, setPlayer] = useState([])

  useEffect(() =>{
    getVideo()
  }, [])

  const getVideo = () =>{
      axios.get("https://horrormemo.herokuapp.com/memory")
        .then(response => setPlayer(response.data))
    }
    console.log(player)
    return (
      <div className="App">
        {player.filter(player => player.id <= 19)
        .map(player =>
          <VideoPlayer name={player.name} video={player.video}/>
        )}
      </div>
    );
  
}

export default App;
