import React from "react";
import Photos from "../Photos";

function Bio() {
  return (
    <div className="mainWrapper">
      <div className="secondaryWrapper">
        <h1 className="neonText">bio</h1>
        <div className="row">
          <div className="leftSide">
            <div className="bigP bio">
              <p>
                I am an Argentinian experimental artist and researcher based in
                Bergen, Norway. My practice encompasses both instrumental and
                electronic composition and live-electronics performance. My
                artistic research is driven by curiosity about the relationships
                between cognition, technology, and sound.
              </p>
              <p>
                I am most interested in creating hybrid spaces where acoustic
                and electronic sound, text, and visual media interact, and
                exploring how technology —particularly artificial intelligence—
                can extend, disrupt, and transform traditional musical
                practices. Recent projects have ranged from traditional and
                folkloric instrumental improvisation augmented by electronics to
                investigations into the poetics of AI in relation to intuition,
                semantic connections, hallucinations, glitches, and steered
                generative processes.
              </p>
              <p>
                I hold a Ph.D. in artistic research (University of Bergen,
                Norway), an interdisciplinary Master’s degree in music and
                psychology (University of Victoria, Canada), and a bachelor's
                degree in music composition and piano (National University of
                Córdoba and Provincial Conservatory of Córdoba, Argentina). My
                technical background includes formal training in data science,
                machine learning, and web development.
              </p>
              <p>
                My music has been performed by leading ensembles and soloists
                internationally, including Quasar Saxophone Quartet (Canada),
                JÓR Saxophone Quartet (Scandinavia), Zone Experimental Basel
                (Switzerland), PPCM Graz (Austria), Hinge Quartet (USA), New
                Earth Vocal Ensemble (USA), Obsidian Ensemble (Norway), Vocal
                Ensemble Tabula Rasa (Norway), Edvard Grieg Kor (Norway), and
                renowned performers including Lucas Fels (Germany), Sergej
                Tchirkov (Russia), Dimitrios Polisoidis (Greece), Ludvig
                Lindström (Finland), and Elide Sulsenti (Italy), among many
                others. Newer commissions include works for the pianists Késia
                Decoté (Brazil/Norway), Ensemble 404 (Germany), Neo Quartet
                (Poland), Nidaros Vokal (Norway) and TACETi ensemble (Thailand).
              </p>

              <p>
                My music has been featured at contemporary music festivals such
                as Bled Contemporary Music Festival,St. Petersburg International
                New Music Festival, OutHEAR Contemporary Music Week, Impuls, New
                Music Montreal, Festspillene i Bergen (drop-in concerts), and
                H&K Festival (Stavanger). I have also participated in several
                artistic residencies, including at the Ligeti Zentrum, Bergen
                Senter for Elektronisk Kunst (BEK) in February 2026, H&K
                Festival in Stavanger (2022), the Center for Movement Research
                (New York, 2014), and the Virginia Center for the Creative Arts
                (VCCA) (USA, 2012).{" "}
              </p>

              <p>
                My compositions have received prizes at international
                competitions, including the first prize in the Arthaus
                composition contest 2026 (Argentina), the 2024 IEEE Big Data
                Conference’s AI-based composition contest, the Prix ‘Pas de
                Calais’ (France/Argentina, 2012), the Chengdu River Sun Prize
                (China/ISCM, 2013), and special mentions for electroacoustic and
                interdisciplinary work in Argentina.
              </p>

              <p>
                Collaboration and interdisciplinarity are key to my practice.
                Past projects include multimedia works and art installations
                exhibited at VISAURAL Gallery (Boston), Paseo del Buen Pastor
                (Córdoba, Argentina), the Kirchner Cultural Center (Buenos
                Aires), and the Center for Research in Movement (New York),
                among others.
              </p>

              <p>
                My popular music roots also continue to inform my sensitivity to
                musical narrative and contemporary composition. As a member of
                the Argentinean ensemble Azul 514, we explore boundaries between
                folk-traditional, contemporary, and electronic sound worlds,
                creating unpredictable spaces for sonic exploration through
                collaborative composition and improvisation.
              </p>
              <p>
                Alongside my experimental practice, I maintain an active career
                as a tango pianist and arranger, and in recent years have
                performed and toured internationally with the Sanluistango
                Orchestra.
              </p>
            </div>
            {/* CV Download Link */}
            <p>
              <a
                href="/cv-juan-vassallo.pdf"
                download="cv-juan-vassallo.pdf"
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
