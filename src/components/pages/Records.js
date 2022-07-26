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
                    <Record title="Record 1" img="img/fondo_1.jpg" />

                    <Record
                        title="Versificator"
                        img="img/iStock-913445910_2.jpg"
                    />

                    <Record
                        title="Sounding Philosophy"
                        img="img/spinoza.jpeg"
                    />

                    <Record
                        title="Azul 514"
                        img="img/IMG-20170625-WA0001.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Records;
