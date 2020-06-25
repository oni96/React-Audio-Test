import React, { Component } from "react";
// import axios from "axios";
import "./FileUpload.css";
import AudioPlayer from "./AudioPlayerComponent/AudioPlayer";
// import ReactPlayerComponent from "./ReactPlayerComponent";
import { Button, Container } from "@material-ui/core";
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
    const url = URL.createObjectURL(event.target.files[0]);
    this.setState({ url: url, name: event.target.files[0].name });
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Container>
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
        </Container>
        {this.state.url && (
          <AudioPlayer url={this.state.url} name={this.state.name} />
        )}
      </div>
    );
  }
}

export default FileUpload;
