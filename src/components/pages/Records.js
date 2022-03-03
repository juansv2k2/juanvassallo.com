import React from "react";
import MainPlayer from "../player/MainPlayer";

function Records() {
    return (
        <div className="bodyDiv">
            <h1>Records</h1>
            <div className="deckRecords">
                <MainPlayer title="Probando 123" img="images/song-1.jpg" />
                <MainPlayer title="Hola" />
                <MainPlayer title="Otro 123" />
                <MainPlayer title="Uno mas" />
            </div>
        </div>
    );
}

export default Records;
