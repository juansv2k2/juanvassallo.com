import React from "react";
import Photos from "../Photos";

function CV() {
  return (
    <div className="secondaryWrapper">
      <div className="leftSide">
        <h1 className="neonText">CV</h1>
        <div className="cv">
          <ul>
            <h2 className="underlined">Main field:</h2>
            <li>
              Instrumental and electronic music. Performer of live electronics.
              Pianist with experience in diverse genres.
            </li>
            <h2 className="underlined">Academic/research interests:</h2>
            <li>
              Computer-assisted composition. Music perception and cognition.
              Artificial Intelligence. Contemporary art and aesthetics. Music
              theory and analysis.
            </li>
            <h2 className="underlined">Other skills:</h2>
            <li>
              Data sciences and Machine learning - Programming languages: Lisp,
              Python.
            </li>
            <li>
              Web development - Programming languages: Node JS, JavaScript,
              HTML, CSS, MySQL.
            </li>
            <li>
              Administration, management and communication - Coursework and work
              experience.
            </li>
          </ul>
          <h2 className="underlined">Education</h2>
          <ul>
            <li>
              Ph.D. Candidate in Artistic Research at the Grieg Academy, Faculty
              of Fine Art, Music and Design (KMD), University of Bergen (UiB).
            </li>

            <li>
              Master of Arts in Interdisciplinary Studies (MUS and PSYC) -
              University of Victoria (Canada), 2019.
            </li>
            <li>
              Bachelor’s in Music Composition - National University of Córdoba
              (Argentina), 2013.
            </li>
            <li>
              Bachelor’s in Music Education - National University of Córdoba,
              (Argentina), 2008.
            </li>
            <li>
              Diploma in Piano - Provincial Conservatory of Córdoba (Argentina),
              2007.
            </li>
          </ul>
          <h2 className="underlined">Courses</h2>
          <li>
            Data Sciences – Digital House Coding School. Buenos Aires
            (Argentina), 2021.
          </li>
          <li>
            Full-stack web developer – Digital House Coding School. Buenos Aires
            (Argentina), 2021.
          </li>
          <h2 className="underlined">Work Experience</h2>
          <ul>
            <li>
              2020 (Nov – today) – Research fellow – Griegakademiet, Fakultet
              for kunst, musikk og design (KMD) Universitetet i Bergen (UiB)
              Bergen, Norge.
            </li>
            <li>
              2020 (Dec - Mar) – Music transcriber for the British Columbia
              Folklore Society. Victoria BC, Canada.
            </li>
            <li>
              2019 (Sept – Dec) – Campaign assistant - United Way University of
              Victoria campaign 2019. Victoria BC, Canada.
            </li>
            <li>
              2019 – Academic tutor (Learning Assistance Program) at the
              Univerity of Victoria, Canada.
            </li>
            <li>
              2017-2018 – Teaching assistant at UVic School of Music. University
              of Victoria, Canada.
            </li>
            <li>
              2016-2019 – Pianist and artistic collaborator of the Tango
              Orchestra “La Sanluistango”. San Luis, Argentina.
            </li>
            <li>
              2012-2015 - Conductor and arranger of the Tango Orchestra “Los
              inmortales del tango” Villa Mercedes (San Luis) Argentina.
            </li>
            <li>
              2010 - Assistant Professor. Courses: “Repertory for singers”,
              “Complementary Piano I”, and “Preparatory piano”. School of music
              of the National University of La Rioja, Argentina.
            </li>
            <li>
              2009-2016 - Co-conductor and pianist of the Vocal Group "Camerata
              de la Luna" Villa Mercedes (San Luis) Argentina.
            </li>
            <li>
              2008-2017 - Instructor. Course: Piano II - Music department of the
              Institute of Continuous Teacher Training (IFDC VM) - Villa
              Mercedes (San Luis) Argentina.
            </li>
          </ul>

          <h2 className="underlined">Scholarships / Grants</h2>
          <ul>
            <li>
              2021 - Innovation grant – Norwegian Academy of Music – CEMPE.
              Project: ‘Sounding Philosophy’. Roll: Collaborator. Leader: Daniel
              Peter Biro.
            </li>
            <li>
              2018 - Graduate Fellowship – University of Victoria (Canada)
            </li>
            <li>
              2017 – William Ross Holm Scholarship for a Graduate Student –
              University of Victoria
            </li>
            <li>
              2013 – Scholarship for artistic residency granted by OEI
              (Organization of Iberoamerican States). Institution: Movement
              Research Center. New York, USA.
            </li>
            <li>
              2012 – Scholarship for artistic residency granted by the
              UNESCO-Aschberg Program. Institution: Virginia Center for Creative
              Arts, (Virginia, USA)
            </li>
          </ul>

          <h2 className="underlined">Personal awards</h2>
          <ul>
            <li>
              2019 – Special Mention at the 1st. Exhibition of Art and
              Technology, organized by the National Fund of Arts of Argentina.
              Piece: “Deconstructions” for voice, visuals and electronics.
            </li>
            <li>
              2015 – Special mention for the work “Retro-Alimento” (sound
              installation) in the "2nd. Visual Arts Exhibition" Casa de la
              Cultura, Villa Mercedes, San Luis (Argentina).
            </li>
            <li>
              2013 – Outstanding Award for the work “Trivium – Jazz Cuyano” in
              the 9th. Competition of composition Chengdu Sun River Prize
              (Conservatory of Sichuan, China) organized by the
              ISCM-International Society for Contemporary Music.
            </li>
            <li>
              2013 – Special Mention for the composition “Semblanza” in the Art
              Contest “In memory of the 30th. Anniversary of the return of the
              democracy”. Organized by the Honorable Deliberative Council of the
              city of Villa Mercedes, San Luis (Argentina).
            </li>
          </ul>
          <h2 className="underlined">Group awards</h2>
          <ul>
            <li>
              2016 – Fox Music Awards 2016 in the category: “Best fusion folk
              music” with the Orchestra “La Sanluistango” Houston, TX (USA).
            </li>
            <li>
              2016 – Golden Condor 2016 with the Tango Orchestra “Sanluistango,
              the highest distinction awarded by the International Tango
              Festival of Justo Daract (San Luis) Argentina.
            </li>
            <li>
              2016 – 1st prize in the category “Mixed choir” in the
              International Competition of Choirs “San Juan sings 2016” with the
              Vocal Group Camerata de la Luna. San Juan, Argentina.
            </li>
            <li>
              2016 – Nominated as ‘Cultural Ambassadors’ of the city of Villa
              Mercedes (San Luis) with the vocal group Camerata de la Luna, by
              the Deliberative Council of Villa Mercedes (San Luis) Argentina.
            </li>
          </ul>
          <h2 className="underlined">Languages</h2>
          <ul>
            <li>Spanish (mother tongue)</li>
            <li>English (Proficient - Toefl)</li>
            <li>Norwegian Bokmål (Intermediate - B1)</li>
          </ul>
        </div>
      </div>

      <Photos />
    </div>
  );
}

export default CV;
