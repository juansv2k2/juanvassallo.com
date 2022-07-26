import React from "react";

function Record(props) {
    return (
        <div className="indivProject">
            <div className="bigP">
                <h3 className="subtitle2">{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <img className="projImg" src={props.img}></img>
        </div>
    );
}

export default Record;
