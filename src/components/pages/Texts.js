import React from "react";
import Photos from "../Photos";

function Texts() {
  return (
    <div className="secondaryWrapper whenSubComponent">
      <div className="indivContact">
        <h1 className="neonText">Texts</h1>
        <div className="cv bigP texts">
          <ul>
            <h3 className="subtitle2">Articles</h3>
            <li>
              Vassallo, J. S. (2023). Symbolic Musical Resynthesis As An
              Ekphrastic Compositional Practice Using Computational Methods.
              Culture Crossroads, 22, 129–147.
              <p className="link">
                <a
                  className="link"
                  href="https://doi.org/10.55877/cc.vol22.443"
                  target="_blank"
                >
                  https://doi.org/10.55877/cc.vol22.443
                </a>
              </p>
            </li>
            <h3 className="subtitle2">Conference proceedings</h3>
            <li>
              Vassallo, J. S. (2021). Versificator: Music Composition and
              Algorithmic Poetry. Proceedings - The 7th Colloquium on Artistic
              Research in Performing Arts.
              <p>
                <a
                  className="link"
                  href="https://nivel.teak.fi/carpa7/"
                  target="_blank"
                >
                  https://nivel.teak.fi/carpa7/
                </a>
              </p>
            </li>
            <h3 className="subtitle2">M.A. Thesis</h3>
            <li>
              Vassallo, J. S. (2019). Music expert-novice differences in speech
              perception. University of Victoria Repository Dspace.
              <p>
                <a
                  className="link"
                  href="http://hdl.handle.net/1828/11061"
                  target="_blank"
                >
                  http://hdl.handle.net/1828/11061
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Texts;
