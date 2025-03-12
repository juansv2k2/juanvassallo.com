import React from "react";
import Photos from "../Photos";

function Texts() {
  return (
    <div className="secondaryWrapper whenSubComponent">
      <h1 className="neonText">Texts</h1>
      <div className="cv bigP texts">
        <ul>
          <h3 className="subtitle2">Articles</h3>
          <li>
            Vassallo, J. S. (2024). Exploring Musical Procedural Rhetoric:
            Computational Influence on Compositional Frameworks and Methods in
            the piece “Elevator Pitch”. International Journal of Music Science,
            Technology and Art. 6, 1-16.
            <p className="link">
              <a
                className="link"
                href="https://doi.org/10.48293/IJMSTA-114"
                target="_blank"
              >
                https://doi.org/10.48293/IJMSTA-114
              </a>
            </p>
          </li>
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
            Vassallo, J. S. (2022). Machinic automation in the process of text
            and music composition: The versificator. Proceedings of the 7th
            Colloquium on Artistic Research in Performing Arts (CARPA7).
            <p>
              <a
                className="link"
                href="https://nivel.teak.fi/carpa7/machinic-automation-in-the-process-of-text-and-music-composition/"
                target="_blank"
              >
                https://nivel.teak.fi/carpa7/machinic-automation-in-the-process-of-text-and-music-composition/
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
  );
}

export default Texts;
