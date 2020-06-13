import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from 'react-player'
import './FileUpload.css'

class FileUpload extends Component {
  submitAudioFile = (event) => {
    console.log("Submitting Audio File");
    console.log("Performing Post Request");

    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
    });

    event.preventDefault();
  };

  render() {

    // console.log(styles)
    
    return (
      <div>
        <form onSubmit={this.submitAudioFile}>
          <input type="file"></input>
          
          <div>
            <h1>Hello</h1>
          </div>

        <ReactPlayer 
        style = {{'color': 'red'}}
        width='500px'
        height='100px'
        url='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' 
        controls={true} />

        <button type="submit">Submit</button>

                </form>
      </div>
    );
  }
}

export default FileUpload;
