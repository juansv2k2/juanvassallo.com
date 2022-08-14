import React from "react";

function Project(props) {
    return (
        <div className="indivProject">
            <div>
                <h3 className="subtitle2">{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <img className="projImg" src={props.img} alt=""></img>
        </div>
    );
}

export default Project;
