import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
    this.getVideo = this.getVideo.bind(this);
  }

  componentDidMount() {
    this.getVideo();
  }

  getVideo() {
    axios
      .get("https://horrormemo.herokuapp.com/memory")
      .then(response => response.data)
      .then(data => {
        this.setState({
          player: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.player ? (
          <VideoPlayer player={this.state.player} />
        ) : (
          <p>No data yet</p>
        )}
      </div>
    );
  }
}

export default App;
