import React from "react";

function Record(props) {
    return (
        <div className="records">
            <div className="bigP">
                <iframe
                    src={props.src}
                    style={{
                        margin: "10px",
                        border: 0,
                        borderRadius: "12px",
                        width: "298px",
                        height: "400px",
                    }}
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
            </div>
        </div>
    );
}

export default Record;
