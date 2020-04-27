import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const playlist = [
  { name: "Saw", src: "https://www.cjoint.com/doc/20_04/JDulwZhNq7n_saw.mp3" },
  {
    name: "Freddy",
    src: "https://www.cjoint.com/doc/20_04/JDulyjmPOOn_freddy.mp3",
  },
  {
    name: "Annabelle",
    src: "https://www.cjoint.com/doc/20_04/JDulzgSAu5n_annabelle.mp3",
  },
  {
    name: "Psychose",
    src: "https://www.cjoint.com/doc/20_04/JDulz7B5dtn_psychose.mp3",
  },
  {
    name: "The Exorcist",
    src: "https://www.cjoint.com/doc/20_04/JDulA0aW4xn_the-exorcist.mp3",
  },
  {
    name: "Halloween",
    src: "https://www.cjoint.com/doc/20_04/JDulBV8rW0n_halloween.mp3",
  },
];

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMusicIndex: 0,
    };
  }

  handleClickPrevious = () => {
    this.setState((prevState) => ({
      currentMusicIndex:
        prevState.currentMusicIndex === 0
          ? playlist.length - 1
          : prevState.currentMusicIndex - 1,
    }));
  };

  handleClickNext = () => {
    this.setState((prevState) => ({
      currentMusicIndex:
        prevState.currentMusicIndex < playlist.length - 1
          ? prevState.currentMusicIndex + 1
          : 0,
    }));
  };

  render() {
    const { currentMusicIndex } = this.state;
    return (
      <AudioPlayer
        className="audio"
        style={{ width: "400px", backgroundColor: "transparent" }}
        autoPlayAfterSrcChange={true}
        showSkipControls={true}
        showJumpControls={false}
        src={playlist[currentMusicIndex].src}
        onClickPrevious={this.handleClickPrevious}
        onClickNext={this.handleClickNext}
        customAdditionalControls={[]}
        layout="horizontal"
      />
    );
  }
}

export default PlayList;
