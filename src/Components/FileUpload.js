import React, { Component } from "react";
import axios from "axios";
import "./FileUpload.css";
import AudioPlayer from "./AudioPlayerComponent/AudioPlayer";
// import ReactPlayerComponent from "./ReactPlayerComponent";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import ImportExportIcon from "@material-ui/icons/ImportExport";

class FileUpload extends Component {
  // const state;
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: "",
      reactPlayer: null,
    };
  }

  submitAudioFile = (event) => {
    event.preventDefault();
  };

  fileLoaded = (event) => {
    // console.log(event.target.files[0]);

    const url = URL.createObjectURL(event.target.files[0]);
    // console.log(url);

    let react_player = (
      <AudioPlayer url={url} name={event.target.files[0].name} />
    );

    this.setState({ reactPlayer: react_player });
    // console.log(this.state.reactPlayer);

    event.preventDefault();
  };

  render() {
    // console.log(styles)

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
        {this.state.reactPlayer}
      </div>
    );
  }
}

export default FileUpload;
