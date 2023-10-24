import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";

function Composition_home(props) {
  return (
    <div className="video_home">
      <YoutubeEmbed embedId={props.vid} />
    </div>
  );
}

export default Composition_home;
