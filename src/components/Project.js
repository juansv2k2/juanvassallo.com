import React from "react";

function Project(props) {
    return (
        <div className="indivProject">
            <div className="leftSide bigP">
                <h3 className="subtitle2">{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <div className="rightSide justifyCenter">
                <img className="projImg" src={props.img}></img>
            </div>
        </div>
    );
}

export default Project;
