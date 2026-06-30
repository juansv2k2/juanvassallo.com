import React, { useRef } from "react";
import Composition from "../Composition";
import Record from "../Record";
import Composition_audio from "../Composition_audio";

function ArtisticPortfolio() {
  const iframeRef = useRef(null);
  const compositionsRef = useRef(null);
  const experimentalRef = useRef(null);
  const recordingsRef = useRef(null);

  const enterFullscreen = () => {
    const iframe = iframeRef.current;

    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mainWrapper">
      <div className="secondaryWrapper">
        <div className="width">
          <h1 className="neonText">works</h1>
          <div className="portfolio-links">
            (
            <span
              className="portfolio-link"
              onClick={() => scrollToSection(compositionsRef)}
            >
              compositions
            </span>{" "}
            | 
            <span
              className="portfolio-link"
              onClick={() => scrollToSection(experimentalRef)}
            >
              Live electronics
            </span>{" "}
            | 
            <span
              className="portfolio-link"
              onClick={() => scrollToSection(recordingsRef)}
            >
              Albums & EPs
            </span>
            )
          </div>{" "}
          {/* Compositions Section */}
          <div ref={compositionsRef} className="portfolio-section">
            <div className="cv">
              <h2 className="portfolio-section-title">compositions</h2>
            </div>

            <div className="cv">
              <h3 className="subtitle2">instrumental/mixed media</h3>
            </div>
            <div className="projects">
              <Composition
                title="Transmutations - 1. The Birth of a Poem"
                vid="WdCkX9l7wEE?start=5625&end=6093"
                text="Andrei Maksimov, voice; Luisa E. Vinuesa, flute; Sam Alvarez, saxophone; Hui Han Lui, piano; Iván Zavala, percussion; Giordano De Nisi, conductor"
              />
              <Composition
                title="Transmutations - 2. The Burial of the Sun"
                vid="bSji6jiV1pw"
                text="Camille Primeau, voice; Dácil Guerra, bass clarinet; Dimitrios Polisoidis, viola; Sophie Schafleitner, violin"
              />
              <Composition
                title="Pu Werken (The Messengers)"
                vid="vEG6J0FDaV0"
                text="Tore Eide Bordal, piano; Juan S. Vassallo, electronics; narrated texts by Javier Villalba"
              />
              <Composition
                title="Versificator - Render 3"
                vid="MGxBEbUMMt4"
                text="Vokalensembelet 'Tabula Rasa' – Rikke Lina Sorell Matthiesen, soprano; Sigrun Jødre, mezzo-soprano; Tord Kalvenes, tenor; Arild Rohde, tenor; Jakub Niedziela, bass"
              />
              <Composition
                title="Elevator Pitch"
                vid="X8W7ojWZCjg"
                text="Elide Sulsenti, cello; Juan S. Vassallo, electronics"
              />
              <Composition
                title="Oscillations (full version)"
                vid="FafMeuMg7mQ"
                text="Ludvig Lindström, voice; Diana Galakhova, piano; Késia Decoté, piano; Sergej Tchirkov, accordion; Anders Hannevold, percussion; Alexander Fiske Fosse, narration; Andrea Urstad Toft, visuals"
              />
              <Composition
                title="Oscillations (i)"
                vid="OWPVtlxfByM"
                text="Julie Hasfjord, Voice; Andrea Urstad Toft, visuals; Juan S. Vassallo, composition, electronics"
              />
              <Composition
                title="Oscillations (iii)"
                vid="5svV1NTPC8k"
                text="Késia Decoté, piano; Sergej Tchirkov, accordion; Anders Hannevold, percussion; Alexander Fiske Fosse, narration; Andrea Urstad Toft, visuals"
              />
              <Composition
                title="I am a strange loop"
                vid="qf292OZFaaY"
                text="JÓR Saxophone Quartet; Sergej Tchirkov, accordion; Anders Hannevold, organetto"
              />
              <Composition
                title="Evolutions 2A"
                vid="5h_lDeV5iOc"
                text="Langhaugen String Orchestra"
              />
              <Composition
                title="Aphorisms (2)"
                vid="E-B-HRO5MYs"
                text="Obsidian Ensemble"
              />
              <Composition
                title="Milonga del gesto"
                vid="cBkxHk5SSWI"
                text="Benjamin Sørensen, guitar"
              />
              <Composition
                title="Mirrors"
                vid="tWAQtFqOht0"
                text="Based on the poem 'Cazador de ángeles' by Luis Ressia; Juan S. Vassallo, composition, electronics"
              />
              <Composition
                title="Trivium Jazz Cuyano"
                vid="2Sl64le8r84"
                text="Federico Cámara-Halac, piano; Javier Mazzuccelli, percussion; Mauricio Diez, Double-bass"
              />
              <Composition
                title="RGB"
                vid="XVgRveZZRLc"
                text="Mauricio Pregot, violin 1; Florencia Veronese, Violin 2; Flor Maria Díaz, viola; Marcela Vicente, cello"
              />
            </div>

            {/* Score Follower */}
            <div className="projects">
              <div className="indivComposition">
                <div>
                  <h3 className="subtitle2">
                    Trivium Jazz Cuyano<br></br>
                    (score follower)
                  </h3>
                  <p>Zone Experimental Basel</p>
                </div>
                <div className="videos">
                  <div className="video-responsive">
                    <iframe
                      ref={iframeRef}
                      src="https://scorefol.io/embed/cm56oofpy0001pda89gepge0z"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Trivium Jazz Cuyano"
                    />
                  </div>
                  <div className="text-align-center">
                    <button
                      onClick={enterFullscreen}
                      className="fullscreen-button"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                      View Fullscreen
                    </button>
                  </div>
                </div>
              </div>

              <div className="indivComposition">
                <div>
                  <h3 className="subtitle2">
                    Transmutations – 2. The Burial of the Sun<br></br>
                    (score follower)
                  </h3>
                  <p>Klangforum Wien Members, PPCM Graz</p>
                </div>
                <div className="videos">
                  <div className="video-responsive">
                    <iframe
                      ref={iframeRef}
                      src="https://scorefol.io/embed/klwbekj7k14elj15pqv4182y"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-align-center">
                    <button
                      onClick={enterFullscreen}
                      className="fullscreen-button"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                      View Fullscreen
                    </button>
                  </div>
                </div>
              </div>

              <div className="indivComposition">
                <div>
                  <h3 className="subtitle2">
                    Versificator – Render 3<br></br>
                    (score follower)
                  </h3>
                  <p>Vocal Ensemble Tabula Rasa</p>
                </div>
                <div className="videos">
                  <div className="video-responsive">
                    <iframe
                      ref={iframeRef}
                      src="https://scorefol.io/embed/exijyjyynub0yzzbccvk4n7d"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-align-center">
                    <button
                      onClick={enterFullscreen}
                      className="fullscreen-button"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                      View Fullscreen
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="cv">
              <h3 className="subtitle2">electroacoustic</h3>
            </div>
            <div className="projects">
              <div>
                <Composition_audio
                  title="Viderunt Omnes"
                  audio="music/Viderunt plunder enhanced 2.mp3"
                  text="electroacoustic"
                />
              </div>
              <div>
                <Composition_audio
                  title="Diego de la gente"
                  audio="music/Diego de la gente_2.mp3"
                  text="electroacoustic"
                />
              </div>
            </div>

            <div className="cv">
              <h3 className="subtitle2">audiovisual</h3>
            </div>
            <div className="projects">
              <Composition
                title="ARGO/AGO"
                vid="nj7lkkAAGIs"
                text="Immersive sound and visuals (collaborative work)"
              />
              <Composition
                title="Deconstructions"
                vid="KwPAwxJZcK0"
                text="Jessica Wagner, voice; Juan S. Vassallo, composition, electronics"
              />
              <Composition
                title="Bokeh"
                vid="UcvPKtGPTJ4"
                text="Piece included in the Christmas calendar 2020 - Grieg Academy of Music, University of Bergen"
              />
            </div>

            <div className="cv">
              <h3 className="subtitle2">installations</h3>
            </div>
            <div className="projects">
              <Composition
                title="Encroach"
                vid="0Gs0bcSGbH4"
                text="Installation by Lilianne Milgroom; Juan Vassallo, electronics"
              />
              <Composition
                title="Sonidos de lo incierto"
                vid="p6PUOE1XiBU"
                text="Fernanda Almanza, Federico Echave, Juan Vassallo"
              />
            </div>
          </div>
          {/* Experimental Practice Section */}
          <div ref={experimentalRef} className="portfolio-section">
            <div className="cv">
              <h2 className="portfolio-section-title">live electronics</h2>
            </div>

            <div className="cv">
              <h3 className="subtitle2">w/Azul 514 Ensemble</h3>
            </div>
            <div className="projects">
              <Composition
                title="Vientos del Golfo"
                vid="T-KEdFdKRGw"
                text="Azul 514 ft. Eladio Dominguez (dance) – Azul 514 ensemble – Teatro 'La Oveja Negra' (2017)"
              />
              <Composition
                title="Gotas y Armónicos"
                vid="kzK027eBSSI"
                text="Azul 514 ft. Naile Antune (voice) – Azul 514 ensemble – Teatro 'La Oveja Negra' (2017)"
              />
              <Composition
                title="Encroach"
                vid="HA9ivSrmHM0"
                text="Azul 514 ensemble – Teatro 'La Oveja Negra' (2017)"
              />
              <Composition
                title="Blues"
                vid="OG7_7ErQVnk"
                text="Azul 514 ft. Ariel Garro (guitar) – Azul 514 ensemble – Teatro 'La Oveja Negra' (2017)"
              />
            </div>
            <div className="cv">
              <h3 className="subtitle2">solo or with other artists</h3>
            </div>
            <div className="projects">
              <Composition
                title="Improvisation"
                vid="1tcqMXrmqDU"
                text="ft. Daiyen Jone Castro (flute, voice, electronics) – Bergen Kjøtt, December 2025"
              />
            </div>
          </div>
          {/* Recordings Section */}
          <div ref={recordingsRef} className="portfolio-section">
            <div className="cv">
              <h2 className="portfolio-section-title">albums & EPs</h2>
            </div>

            <div className="width">
              <div className="cv">
                <h3 className="subtitle2">soloist releases</h3>
              </div>
              <div className="projects">
                <div className="indivRecord">
                  <div className="bigP">
                    <iframe
                      title="RecordBandCamp"
                      className="iframeRecord"
                      src="https://bandcamp.com/EmbeddedPlayer/track=1570026996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                      seamless
                    >
                      <a href="https://juanvassallo.bandcamp.com/track/i-am-a-strange-loop">
                        Semblanza by Juan Vassallo
                      </a>
                    </iframe>
                  </div>
                </div>
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
                      title="RecordBandCamp"
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
              <div>
                <div className="cv">
                  <h3 className="subtitle2">w/Azul 514</h3>
                </div>
                <div className="projects">
                  <div className="indivRecord">
                    <div className="bigP">
                      <iframe
                        title="RecordBandCamp"
                        className="iframeRecord"
                        src="https://bandcamp.com/EmbeddedPlayer/album=3163652547/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                        seamless
                      >
                        <a href="https://juanvassallo.bandcamp.com/album/azul-514">
                          Azul 514 by Azul 514
                        </a>
                      </iframe>
                    </div>
                  </div>
                  <div className="indivRecord">
                    <div className="bigP">
                      <iframe
                        title="RecordBandCamp"
                        className="iframeRecord"
                        src="https://bandcamp.com/EmbeddedPlayer/album=3055733207/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                        seamless
                      >
                        <a href="https://juanvassallo.bandcamp.com/album/cyan">
                          Cyan by Azul 514
                        </a>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="cv">
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
        </div>
      </div>
    </div>
  );
}

export default ArtisticPortfolio;
