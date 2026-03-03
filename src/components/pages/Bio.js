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
                electronic composition, live-electronics performance, and the
                creation of hybrid spaces where acoustic and electronic sound,
                text, and visual media interact. My artistic research is driven
                by curiosity about the relationships between cognition,
                technology, and sound.
              </p>
              <p>
                I am most interested in exploring how technology —particularly
                artificial intelligence— can extend, disrupt, and transform
                traditional musical practices, and how it can function as a
                creative partner in artistic exploration. Recent projects have
                ranged from traditional and folkloric instrumental improvisation
                augmented by electronics to investigations into the poetics of
                AI in relation to intuition, semantic connections,
                hallucinations, glitches, and steered generative processes.
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
                internationally, including Projecto RED Ensemble (Argentina),
                Quasar Saxophone Quartet (Canada), JÓR Saxophone Quartet
                (Scandinavia), Zone Experimental Basel (Switzerland), .abeceda
                ensemble (Slovenia), Hinge Quartet (USA), EcoVoices Project
                (USA), Obsidian Ensemble (Norway), Vocal Ensemble Tabula Rasa
                (Norway), Edvard Grieg Kor (Norway), and soloists including
                Lucas Fels (Germany), Sergej Tchirkov (Russia), Ludvig Lindström
                (Finland), and Elide Sulsenti (Italy), among many others. Newer
                commissions include works for the pianists Késia Decoté
                (Brazil/Norway), Windsor wind quintet (The Netherlands), and the
                Apple Pie Concert Foundation (The Netherlands).
              </p>

              <p>
                My music has been featured at contemporary music festivals such
                as Samtida Musik (2026), Impuls 2023, New Music Montreal 2022,
                Festspillene i Bergen (2021, drop-in concerts), and the H&K
                Festival in Stavanger. Upcoming presentations include St.
                Petersburg International New Music Festival and outHEAR
                Contemporary Music Week. I have also participated in several
                artistic residencies, including Festival precept.concept.percept
                XIII (Slovenia, 2025), the H&K Festival (Stavanger, 2022), the
                Center for Movement Research (New York, 2014), and the Virginia
                Center for the Creative Arts (VCCA) (USA, 2012). I will be an
                artist in residence at Bergen Senter for Elektronisk Kunst (BEK)
                in February 2026.
              </p>

              <p>
                My compositions have received prizes at international
                competitions, including the 2024 IEEE Big Data Conference’s
                AI-based composition contest (first prize,{" "}
                <em>Oscillations/iii</em>), the Prix ‘Pas de Calais’
                (France/Argentina), the Chengdu River Sun Prize (China/ISCM),
                and special mentions for electroacoustic and interdisciplinary
                work in Argentina.
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
                the ensemble Azul 514 (Argentina), we explore boundaries between
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
                href="/documents/Vassallo-CV-website.pdf"
                className="cv-download-link"
                download="Juan Vassallo - CV.pdf"
                onClick={(e) => {
                  // Force download by creating a temporary link
                  e.preventDefault();

                  const link = document.createElement("a");
                  link.href = "/documents/Vassallo-CV-website.pdf";
                  link.download = "Juan Vassallo - CV.pdf";
                  link.style.display = "none";

                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);

                  // Fallback: if download doesn't work, open in new tab
                  setTimeout(() => {
                    window.open("/documents/Vassallo-CV-website.pdf", "_blank");
                  }, 100);
                }}
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
