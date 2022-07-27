import React from "react";
import Record from "../Record";

function Records() {
    return (
        <div className="secondaryWrapper">
            <div>
                <div>
                    <h1 className="neonText">Edited recordings</h1>
                </div>
                <div className="Records">
                    <Record src="https://open.spotify.com/embed/album/4WUwvPQtGRIQgApizScsqA?utm_source=generator" />
                </div>
            </div>
        </div>
    );
}

export default Records;
