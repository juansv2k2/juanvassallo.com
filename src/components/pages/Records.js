import React from "react";
import Record from "../Record";

function Records() {
  return (
    <div className="secondaryWrapper">
      <div>
        <div>
          <h1 className="neonText">Edited records</h1>
        </div>
        <div>
          <div>
            <h3 className="subtitle2">Azul 514</h3>
          </div>
          <div className="projects">
            <Record src="https://open.spotify.com/embed/album/4WUwvPQtGRIQgApizScsqA?utm_source=generator" />
            <Record src="https://open.spotify.com/embed/album/2X7KT7PfDbGe1NzxquJHQw?utm_source=generator" />
          </div>
        </div>
        <div>
          <div>
            <h3 className="subtitle2">La Sanluistango</h3>
          </div>
          <div className="projects">
            <Record src="https://open.spotify.com/embed/album/6WqpeQuSpfJ5fZDY7wk7WH?utm_source=generator" />
            <Record src="https://open.spotify.com/embed/album/1UjEg1a2rXzDEEx0erP0Q3?utm_source=generator" />
            <Record src="https://open.spotify.com/embed/album/1AOpwvfZBt2lapMKSLFow6?utm_source=generator" />
            <Record src="https://open.spotify.com/embed/album/5lUALKwwz3vIxV9YxOQKzn?utm_source=generator" />
          </div>
        </div>
        <div>
          <div>
            <h3 className="subtitle2">Solo works</h3>
          </div>
          <div className="projects">
            <div className="indivRecord">
              <iframe
                //   className="iframeRecord"
                title="RecordBandCamp"
                style={{
                  border: 0,
                  borderRadius: "10px",
                  width: "320px",
                  height: "540px",
                  marginBottom: "20px",
                }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1681201843/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/"
              >
                <a href="https://juanvassallo.bandcamp.com/album/semblanza">
                  Semblanza by Juan Vassallo
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
