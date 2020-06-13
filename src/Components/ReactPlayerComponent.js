import React from "react";
import ReactPlayer from "react-player";
import "./ReactPlayerComponent.css";

function ReactPlayerComponent(props) {
  return (
    <ReactPlayer
      className="ReactPlayer"
      // style={{ margin: "auto" }}
      width="80%"
      height="40px"
      config={{
        file: {
          attributes: {
            controlsList: "nodownload",
          },
        },
      }}
      url={props.Source}
      controls={true}
    />
  );
}

export default ReactPlayerComponent;
