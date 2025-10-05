import React from "react";
import Photos from "../Photos";

function Bio() {
  return (
    <div className="mainWrapper">
      <div className="secondaryWrapper">
        <h1 className="neonText">Bio</h1>
        <div className="row">
          <div className="leftSide">
            <div className="bigP bio">
              <p>
                I am an Argentinian experimental artist and researcher based in
                Bergen, Norway. I hold a Ph.D. in artistic research (University
                of Bergen, Norway), an interdisciplinary Master’s degree in
                music and psychology (University of Victoria, Canada) and
                bachelor's degree in music composition and piano (National
                University of Córdoba and Provincial Conservatory of Córdoba,
                Argentina).
              </p>
              <p>
                My practice lies at the intersection of technologically mediated
                creation and instrumental sonic exploration. My work is driven
                by curiosity about the relationships between cognition,
                technology, and sound. I am fascinated by how technology can
                extend, disrupt, and transform traditional musical practices,
                not as a replacement for human creativity, but as a
                collaborative partner in the search for new musical
                possibilities. Some of my recent projects have involved
                exploring human-computer interaction in live and fixed media,
                instrumental improvisation augmented by electronics, and
                investigating the poetics of AI and algorithmic processes. I am
                also interested in the tactile and embodied dimensions of
                sound-making, from extended techniques and instrumental
                improvisation to the hybrid space of acoustic, electronic
                sounds, and visual media.
              </p>
              <p>
                I also develop software tools for performers and composers,
                supporting innovative forms of improvisation and collaborative
                creation. My technical training includes data science, machine
                learning, and web development.
              </p>
              <p>
                My music has been performed by leading ensembles and soloists
                internationally, including Projecto RED Ensemble (Argentina),
                Quasar Saxophone Quartet (Canada), JÓR Saxophone Quartet
                (Scandinavia), Zone Experimental Basel (Switzerland), Hinge
                Quartet (USA), EcoVoices Project (USA), Obsidian Ensemble
                (Norway), Vocal Ensemble Tabula Rasa (Norway), Edvard Grieg Kor
                (Norway), and soloists including Lucas Fels (Germany), Sergej
                Tchirkov (Russia), Késia Decoté (Brazil), Ludvig Lindström
                (Finland), and Elide Sulsenti (Italy), among others.
              </p>
              <p>
                My compositions have received prizes at international
                competitions, such as the 2024 IEEE Big Data Conference’s
                AI-based composition contest (first prize,{" "}
                <em>Oscillations/iii)</em>, the Prix ‘Pas de Calais’
                (France/Argentina), the Chengdu River Sun Prize (China/ISCM),
                and special mentions for electroacoustic and interdisciplinary
                work in Argentina and abroad.
              </p>
              <p>
                Collaboration and interdisciplinarity are key to my practice.
                Past projects include works exhibited at the Kirchner Cultural
                Center (Buenos Aires) and the <em>Cinco Soles</em>{" "}
                musical-choreographic project developed in New York. As a member
                of the ensemble Azul 514 (Argentina), we explored the boundaries
                between traditional, contemporary, and electronic sound worlds,
                creating unpredictable spaces for sonic exploration through
                collaborative composition and improvisation.
              </p>
              <p>
                Alongside my contemporary practice, I have an active career as a
                tango pianist and arranger, performing and touring
                internationally with Sanluistango Orchestra. My popular music
                roots to this day continue to inform my sensitivity to musical
                narrative and contemporary composition.
              </p>
            </div>
            {/* CV Download Link */}
            <p>
              <a
                href="/documents/Juan_Vassallo_CV.pdf"
                download="Juan_Vassallo_CV.pdf"
                className="cv-download-link"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV (PDF)
              </a>
            </p>
          </div>
          <Photos />
        </div>
      </div>
    </div>
  );
}

export default Bio;
