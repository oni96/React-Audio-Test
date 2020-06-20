import React, { Component } from "react";
import styles from "./AudioPlayer.module.css";
import "./AudioPlayerStyle.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import LinearProgress from "@material-ui/core/LinearProgress";

class AudioPlayer extends Component {
  constructor(props) {
    super();
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ audioSource: this.props.url, name: this.props.name });
    console.log(this.props.name);
  }

  state = {
    playing: false,
    source: null,
    currentTime: 0,
    totalTime: 0,
    audioSource: "",
    name: "",
  };

  playOrPauseButton = () => {
    // console.log("CALLED");

    // const styleJson = { color: "#000", fontSize: "50" };

    if (!this.state.playing) {
      return (
        <PlayCircleFilledIcon
          //   style={styleJson}
          className="playPauseButtonHover"
          onClick={this.playOrPause}
        />
      );
    } else {
      return (
        <PauseCircleFilledIcon
          className="playPauseButtonHover"
          //   style={styleJson}
          onClick={this.playOrPause}
        />
      );
    }
  };

  playOrPause = () => {
    // console.log("Hello");
    if (this.state.playing) {
      this.audioRef.current.pause();
      console.log("pause");
    } else {
      this.audioRef.current.play();
      console.log("play");
    }
    const prevPlayingState = this.state.playing;
    this.setState({ playing: !prevPlayingState });
  };

  audioIsPlaying = (e) => {
    this.setState({ currentTime: Math.floor(e.target.currentTime) });
    this.setState({ duration: Math.floor(e.target.duration) });

    // console.log(this.state.currentTime + ":" + this.state.duration);
  };

  audioEnded = (e) => {
    console.log("ended");
    this.setState({ playing: false, currentTime: 0 });
  };

  audioWasLoaded = (e) => {
    this.setState({ duration: Math.floor(e.target.duration) });
    // let x = e.target.src;
  };

  render() {
    let x = this.playOrPauseButton();
    // this.getAudioLength();

    return (
      <div>
        <LinearProgress
          className="top"
          variant="determinate"
          value={(this.state.currentTime * 100) / this.state.duration}
        />
        <div className={styles.audioPlayerDiv}>
          {x}
          <div>
            <p style={{ textAlign: "center" }}>
              {this.state.currentTime}/{this.state.duration}
            </p>

            <p style={{ fontWeight: "bold" }}>{this.state.name}</p>
          </div>

          <audio
            onLoadedMetadata={(event) => this.audioWasLoaded(event)}
            onEnded={(event) => this.audioEnded(event)}
            onTimeUpdate={(event) => this.audioIsPlaying(event)}
            src={this.state.audioSource}
            ref={this.audioRef}
          />

          <NoteAddIcon className="playPauseButtonHover"></NoteAddIcon>
          {/* <button style={{ alignItems: "left" }}>take note</button> */}
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
