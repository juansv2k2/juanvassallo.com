import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";

function Composition(props) {
    return (
        <div className="indivComposition">
            <div>
                <h3 className="subtitle2">{props.title}</h3>
                <p>{props.text}</p>
            </div>

            <div className="videos">
                <YoutubeEmbed embedId={props.vid} />
            </div>
        </div>
    );
}

export default Composition;
