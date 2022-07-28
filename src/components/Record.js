import React from "react";

function Record(props) {
    return (
        <div className="records">
            <div className="bigP">
                <iframe
                    src={props.src}
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
            </div>
        </div>
    );
}

export default Record;
