import React from "react";
import Composition from "../Composition";
import Composition_audio from "../Composition_audio";

function Compositions() {
  return (
    <div className="secondaryWrapper">
      <div>
        <div>
          <h1 className="neonText">Compositions</h1>
          <h3 className="subtitle2">Musical works</h3>
        </div>
        <div className="projects">
          <div>
            <Composition_audio
              title="Cinco Soles"
              audio="music/cinco soles/Cinco Soles ST.mp3"
              text="Percussion, samplers and live processing"
            />
          </div>
          <div>
            <Composition_audio
              title="Trivium Jazz Cuyano"
              audio="music/Trivium_audio.mp3"
              text="For piano, double-bass and percussion - Ensemble: Zone Experimental Basel"
            />
          </div>
        </div>

        <div className="projects">
          <Composition
            title="Versificator - Render 3"
            vid="MGxBEbUMMt4"
            text="For vocal ensemble  - Performed by
                        Vokalensembelet 'Tabula Rasa'"
          />

          <Composition
            title="Oscillations (i)"
            vid="OWPVtlxfByM"
            text="For voice, visuals and electronics  
                        Voice: Julie Hasfjord; Visuals: Andrea Toft"
          />
          <Composition
            title="I am a strange loop"
            vid="6O5pmolmsvY"
            text="for saxophone quartet, harpsichord and recorder - Quasar Saxophone Quartet, Hans Knut Sveen, Jostein Gundersen"
          />
          <Composition
            title="Elevator pitch"
            vid="cg8yMYOZQ64"
            text="For solo trumpet - trumpet: Kayleigh Neff"
          />
          <Composition
            title="Isovell Che Segila Chentelare"
            vid="MYdZZTBkRMM"
            text="For double vocal quartet SATB - Eduard Grieg Choir"
          />
          <Composition
            title="Evolutions 2A"
            vid="5h_lDeV5iOc"
            text="For string orchestra - Ensemble: Langhaugen String Orchestra"
          />
          <Composition
            title="Both ways"
            vid="zbmKgACBXM0"
            text="For string quartet  - Hanna Veits, violin I; Amin Mojaddamzadeh, violin II; Sara Baier Evensen, viola; Clara Dietze, cello"
          />
          <Composition
            title="Milonga del gesto"
            vid="cBkxHk5SSWI"
            text="For solo guitar  - Guitar: Benjamin Sørensen"
          />
          <Composition
            title="Mirrors"
            vid="tWAQtFqOht0"
            text="For processed voice - Based on the poem 'Cazador de ángeles' by Luis Ressia"
          />
          <Composition
            title="Trivium Jazz Cuyano"
            vid="2Sl64le8r84"
            text="For piano, double-bass and percussion - Piano: Federico Cámara-Halac, Percussion: Javier Mazzuccelli, Double-bass: Mauricio Diez"
          />
          <Composition
            title="RGB"
            vid="XVgRveZZRLc"
            text="For string quartet - Violin I: Mauricio Pregot, Violin II: Florencia Veronese, Viola: Flor Maria Díaz, Violoncello: Marcela Vicente"
          />
        </div>
        <div>
          <h3 className="subtitle2">Audiovisual works</h3>
        </div>

        <div className="projects">
          <Composition
            title="ARGO/AGO"
            vid="nj7lkkAAGIs"
            text="Immersive sound and visuals - Collaborative work"
          />
          <Composition
            title="Deconstructions"
            vid="KwPAwxJZcK0"
            text="For voice, visuals and electronics - Voice: Jessica Wagner"
          />

          <Composition
            title="musikkstykke til julekalenderen (2020)"
            vid="UcvPKtGPTJ4"
            text="Christmas calendar 2020 - Grieg Academy of Music, University of Bergen"
          />
        </div>

        <div>
          <h3 className="subtitle2">Multimedia Installations</h3>
        </div>
        <div className="projects">
          <Composition
            title="Encroach"
            vid="0Gs0bcSGbH4"
            text="Installation by Lilianne Milgroom (2015) - Original soundscape: Juan Vassallo - Exhibited at the 'Visaural – Sight, sound and action' exposition - October 2015 - Boston, MA. USA"
          />
          <Composition
            title="Sonidos de lo incierto"
            vid="yBBQS4i0N1k"
            text="Artistas: Fernanda Almanza, Federico Echave, Juan Vassallo - Presented between August 12-17, 2017, at the basement of Institute for Continuous Teacher Training Villa Mercedes (Argentina)"
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
