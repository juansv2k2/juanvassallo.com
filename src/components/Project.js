import React from "react";

function Project(props) {
    return (
        <div>
            <div className="project">
                <div className="projText">
                    <h3 className="fh3">{props.title}</h3>
                    <p>{props.text}</p>
                </div>
                <div className="projImg">
                    <img className="imgBody2" src={props.img}></img>
                </div>
            </div>
        </div>
    );
}

export default Project;
