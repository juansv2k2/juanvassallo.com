import React from "react";
import Composition from "../Composition";
import Composition_audio from "../Composition_audio";

function Compositions() {
  return (
    <div className="secondaryWrapper">
      <div className="width">
        <div>
          <h1 className="neonText">Compositions</h1>
          <h3 className="subtitle2">Instrumental/mixed media</h3>
        </div>

        <div className="projects">
          <Composition
            title="Versificator - Render 3"
            vid="MGxBEbUMMt4"
            text="Vokalensembelet 'Tabula Rasa'"
          />

          <Composition
            title="Oscillations (i)"
            vid="OWPVtlxfByM"
            text="Julie Hasfjord, Voice; Andrea Urstad Toft, visuals; Juan S. Vassallo, composition, electronics"
          />
          <Composition
            title="Oscillations (iii)"
            vid="GW2uNDWmZ8Y"
            text="Késia Decoté Rodrigues, piano/toy piano; Sergej Tchirkov, accordion; Anders Hannevold, percussion, accessories; Alexander Fiske Fosse, narration; Andrea Urstad Toft, visuals"
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

        <div className="projects">
          <div>
            <Composition_audio
              title="Trivium Jazz Cuyano"
              audio="music/Trivium_audio.mp3"
              text="Zone Experimental Basel"
            />
          </div>
        </div>

        <div>
          <h3 className="subtitle2">Electroacoustic</h3>
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

        <div>
          <h3 className="subtitle2">Audiovisual</h3>
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

        <div>
          <h3 className="subtitle2">Installations</h3>
        </div>
        <div className="projects">
          <Composition
            title="Encroach"
            vid="0Gs0bcSGbH4"
            text="Installation by Lilianne Milgroom; Juan Vassallo, electronics"
          />
          <Composition
            title="Sonidos de lo incierto"
            vid="yBBQS4i0N1k"
            text="Fernanda Almanza, Federico Echave, Juan Vassallo"
          />
        </div>
        {/* <h3 className="neonText2">Complete catalog of works</h3>
        <ul className="cv">
          <li>
            2022 – "I am a strange loop" for saxophone quartet, harpsichord and
            recorder
          </li>
          <li>2023 – "Oscillations (I)" for voice and electronics </li>
          <li>2022 – "Evoluciones 2A" for string orchestra </li>
          <li>2022 - "Isovell Che Segila Centelare" for eight voices</li>
          <li>2021 – "Elevator pitch" for trumpet and electronics</li>
          <li>2021 - "Versificator - Render 3" for five voices</li>
          <li>2021 – "Milonga del gesto" for solo guitar</li>
          <li>2020 – "Both ways" for string quartet</li>
          <li>
            2019 – "Deconstructions" for voice, synthetized voice and visuals
          </li>
          <li>2018 – "Mirrors (electroacoustic)</li>
          <li>2018 – "Viderunt omnes" (electroacoustic)</li>
          <li>2017 – "Romance del niño del agua" for SATB choir</li>
          <li>2017 – "Sonidos de lo Incierto" (multimedia installation)</li>
          <li>
            2016 – "Música para la lectura de tres poemas de Julio Cortázar" for
            vocal ensamble
          </li>
          <li>2015 – "Semblanza" (mixed media)</li>
          <li>2015 - "Encroach" (sound installation)</li>
          <li>2014 – "Retro-alimento" (sound installation)</li>
          <li>2014 – "Cinco Soles" (mixed media) </li>
          <li>
            2013 – Trilogy: "To make a blindfold - Measure - The size of your
            head" (mixed media)
          </li>
          <li>2012 – "RGB" for string quartet</li>
          <li>2012 – "Yzur" for voice and piano</li>
          <li>
            2012 – "Trivium – Jazz cuyano" for piano, double bass and percussion
          </li>
          <li>2011 – "Non-Sancta Romana" for string orchestra </li>
          <li>2010 – Quintet for harpsichord and string quartet</li>
          <li>
            2006 – "Una plegaria americana" for flute, violin, cello and piano
          </li>
          <li>2005 – "Diego de la gente" (electroacoustic) </li>
          <li>2005 – "Katrina" (wind quartet)</li>
          <li>2004 – "Música para cine clase B" for piano and cello</li>
        </ul> */}
      </div>
    </div>
  );
}

export default Compositions;
