import React from "react";
import Record from "../Record";

function Records() {
  return (
    <div className="secondaryWrapper">
      <div className="width">
        <div>
          <h1 className="neonText">Edited records</h1>
        </div>

        <div className="width">
          <div>
            <h3 className="subtitle2">Soloist records</h3>
          </div>
          <div className="projects">
            <div className="indivRecord">
              <div className="bigP">
                <iframe
                  title="RecordBandCamp"
                  className="iframeRecord"
                  src="https://bandcamp.com/EmbeddedPlayer/album=733984164/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                  seamless
                >
                  <a href="https://juanvassallo.bandcamp.com/album/semblanza">
                    Semblanza by Juan Vassallo
                  </a>
                </iframe>
              </div>
            </div>
            <div className="indivRecord">
              <div className="bigP">
                <iframe
                  className="iframeRecord"
                  src="https://bandcamp.com/EmbeddedPlayer/album=2083284220/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
                  seamless
                >
                  <a href="https://juanvassallo.bandcamp.com/album/cinco-soles">
                    Cinco Soles by Juan Vassallo
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="subtitle2">w/Azul 514</h3>
          </div>
          <div className="projects">
            <Record src="https://open.spotify.com/embed/album/4WUwvPQtGRIQgApizScsqA?utm_source=generator" />
            <Record src="https://open.spotify.com/embed/album/2X7KT7PfDbGe1NzxquJHQw?utm_source=generator" />
          </div>
        </div>
        <div>
          <div>
            <h3 className="subtitle2">w/La Sanluistango</h3>
          </div>
          <div className="projects">
            <Record src="https://open.spotify.com/embed/album/6WqpeQuSpfJ5fZDY7wk7WH?utm_source=generator" />
            <Record src="https://open.spotify.com/embed/album/1UjEg1a2rXzDEEx0erP0Q3?utm_source=generator" />
            <Record src="https://open.spotify.com/embed/album/1AOpwvfZBt2lapMKSLFow6?utm_source=generator" />
            <Record src="https://open.spotify.com/embed/album/5lUALKwwz3vIxV9YxOQKzn?utm_source=generator" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
