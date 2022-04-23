import React from "react";

function Project(props) {
    return (
        <div className="indivProject">
            <div className="leftSide bigP">
                <h3 className="fh3">{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <div className="rightSide">
                <img className="projImg" src={props.img}></img>
            </div>
        </div>
    );
}

export default Project;
