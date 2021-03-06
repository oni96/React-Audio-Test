import React, { Component } from "react";
import styles from "./AudioPlayer.module.css";
import "./AudioPlayerStyle.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
// import LinearProgress from "@material-ui/core/LinearProgress";
import Slider from "@material-ui/core/Slider";
// import { duration } from "@material-ui/core";

class AudioPlayer extends Component {
  constructor(props) {
    console.log("AudioPlayer Called");

    super();
    this.audioRef = React.createRef();
  }

  state = {
    playing: false,
    source: null,
    currentTime: 0,
    duration: 0,
    audioSource: "",
    name: "",
  };

  playOrPauseButton = () => {
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
    // this.setState({ duration: Math.floor(e.target.duration) });

    // console.log(this.state.currentTime + ":" + this.state.duration);
  };

  audioEnded = (e) => {
    console.log("ended");
    this.setState({ playing: false, currentTime: 0 });
  };

  audioWasLoaded = (e) => {
    this.setState({ duration: Math.floor(e.target.duration) });
    console.log(this.state.duration);

    // let x = e.target.src;
  };

  handleChangeOfSlider = (e, v) => {
    console.log(v);
    let duration = this.state.duration;
    this.setState({ currentTime: Math.floor((v * duration) / 100) });
    this.audioRef.current.currentTime = this.state.currentTime;
  };
  render() {
    let x = this.playOrPauseButton();
    // this.getAudioLength();

    return (
      <div>
        <div className={styles.audioPlayerDiv}>
          {x}
          <div>
            <p style={{ textAlign: "center" }}>
              {this.state.currentTime}/{this.state.duration}
            </p>

            <p style={{ fontWeight: "bold" }}>{this.props.name}</p>
          </div>

          <audio
            onLoadedMetadata={(event) => this.audioWasLoaded(event)}
            onEnded={(event) => this.audioEnded(event)}
            onTimeUpdate={(event) => this.audioIsPlaying(event)}
            src={this.props.url}
            ref={this.audioRef}
          />

          <NoteAddIcon className="playPauseButtonHover"></NoteAddIcon>
          <Slider
            className="top"
            value={(this.state.currentTime * 100) / this.state.duration}
            onChange={(event, value) => this.handleChangeOfSlider(event, value)}
            aria-labelledby="continuous-slider"
          />
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
