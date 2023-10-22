import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Composition_audio(props) {
  return (
    <div className="indivAudioComposition">
      <div>
        <h3 className="subtitle2">{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div>
        <ReactAudioPlayer src={props.audio} controls />
      </div>
    </div>
  );
}

export default Composition_audio;
