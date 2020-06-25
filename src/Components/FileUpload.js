import React, { Component } from "react";
// import axios from "axios";
import "./FileUpload.css";
import AudioPlayer from "./AudioPlayerComponent/AudioPlayer";
// import ReactPlayerComponent from "./ReactPlayerComponent";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import ImportExportIcon from "@material-ui/icons/ImportExport";

class FileUpload extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    uploadedFile: "",
    reactPlayer: null,
    url: "",
    name: "",
  };

  submitAudioFile = (event) => {
    event.preventDefault();
  };

  fileLoaded = (event) => {
    // console.log(event.target.files[0]);

    const url = URL.createObjectURL(event.target.files[0]);
    // console.log(url);
    this.setState({ url: url, name: event.target.files[0].name });
    // let react_player = (
    //   <AudioPlayer url={url} name={event.target.files[0].name} />
    // );
    console.log(this.state);

    // this.setState({ reactPlayer: react_player });
    // console.log(this.state.reactPlayer);
    // this.forceUpdate();
    event.preventDefault();
  };

  render() {
    // console.log(styles)
    // let x = this.state.reactPlayer;
    return (
      <div>
        <form onSubmit={this.submitAudioFile}>
          <Button
            className="Button"
            size="large"
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
          >
            Upload File
            <input
              accept="audio/*"
              type="file"
              onChange={this.fileLoaded}
              style={{ display: "none" }}
            />
          </Button>
        </form>
        {this.state.url && (
          <AudioPlayer url={this.state.url} name={this.state.name} />
        )}
      </div>
    );
  }
}

export default FileUpload;
