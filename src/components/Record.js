import React from "react";

function Record(props) {
    return (
        <div className="indivProject">
            <div className="bigP">
                <iframe
                    style="border-radius:12px"
                    src={props.src}
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
            </div>
        </div>
    );
}

export default Record;
