import React, { Component } from "react";
import axios from "axios";
import "./FileUpload.css";
import ReactPlayerComponent from "./ReactPlayerComponent";
import { Button, Container } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ImportExportIcon from "@material-ui/icons/ImportExport";

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
    console.log("Submitting Audio File");
    console.log("Performing Post Request");

    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
    });

    event.preventDefault();
  };

  fileLoaded = (event) => {
    // console.log(event.target.files[0]);

    const url = URL.createObjectURL(event.target.files[0]);
    console.log(url);

    const react_player = (
      <div>
        <ReactPlayerComponent Source={url} />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          startIcon={<ImportExportIcon />}
        >
          Process
        </Button>
      </div>
    );

    this.setState({ reactPlayer: react_player });
    event.preventDefault();
  };

  render() {
    // console.log(styles)

    return (
      <Container maxWidth="sm">
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
          {/* <CloudUploadIcon /> */}
          {this.state.reactPlayer}
        </form>
      </Container>
    );
  }
}

export default FileUpload;
