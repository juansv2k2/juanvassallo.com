import React from "react";
import Photos from "../Photos";

function CV() {
  return (
    <div className="mainWrapper">
      <div className="secondaryWrapper">
        <div className="leftSide">
          <h1 className="neonText">CV</h1>
          <div className="cv">
            <h2 className="underlined">Field of artistic practice</h2>
            <ul>
              <li>
                Composer of instrumental and electronic music. Performer of live
                electronics.
              </li>
              <li>
                Multimedia artist, with a focus on video art, procedural
                visuals, and algorithmic poetry.
              </li>
              <li>
                Pianist with experience in diverse classical and popular genres.
              </li>
            </ul>
            <h2 className="underlined">
              Academic and artistic research interests
            </h2>
            <ul>
              <li>Applications of artificial intelligence in art creation.</li>
              <li>
                Computer-assisted composition, sound synthesis, and
                spatialization.
              </li>
              <li>
                Musical perceptual expertise; cognitive processes in music
                composition; human creativity.
              </li>
              <li>
                Sonification/visualization of speech and sonic data for artistic
                applications; sonification of body signals (biofeedback).
              </li>
            </ul>
            <h2 className="underlined">Relevant skills</h2>
            <ul>
              <li>
                Data Science and Machine Learning. Expertise in predictive
                analytics and exploratory data analysis using Python (pandas,
                numpy, scikit-learn, statsmodels, etc.). Experience in neural
                networks, deep learning with TensorFlow and PyTorch, and AI
                development in LISP for symbolic and generative applications.
              </li>
              <li>
                Full-Stack Web development. Expertise in Node.js, Express.js,
                React.js, PostgreSQL, and EJS. Skilled in session management,
                HTTP request handling, API rest, and building responsive,
                user-friendly interfaces using modern web technologies.
              </li>
            </ul>
            <h2 className="underlined">Education</h2>
            <ul>
              <li>
                2020-2024 – Ph.D. in Artistic Research at the Grieg Academy of
                Music, University of Bergen. Project: "Outward Threads –
                Intuitive Computers / Rational Composers." Supervision: Dániel
                Péter Biró and Örjan Sandred. Defense scheduled for September
                11, 2025.
              </li>
              <li>
                2017-2019 – Master's degree in interdisciplinary studies (Music
                and Psychology) - University of Victoria (Canada). Project:
                "Music expert-novice differences in speech perception."
                Supervision: Andrew Schloss (MUS) and James Tanaka (PSYC).
                Master's thesis accessible here:
                http://hdl.handle.net/1828/11061.
              </li>
              <li>
                2007-2013 – Bachelor's degree in music composition - National
                University of Córdoba (Argentina)
              </li>
              <li>
                2002-2007 – Bachelor's in piano - Provincial Conservatory of
                Córdoba (Argentina)
              </li>
            </ul>
            <h2 className="underlined">Additional relevant training</h2>
            <ul>
              <li>
                2023 – Certificate in Data Sciences – Digital House Coding
                School. Buenos Aires, Argentina; (420 hs., 7 months program)
              </li>
              <li>
                2021 – Certificate in Full-Stack Web Development– Digital House
                Coding School. Buenos Aires, Argentina; (420 hs., 7 months)
              </li>
              <li>
                2010 – Graduate course in Cultural Management – Universidad
                Nacional de Córdoba, Argentina; (120 hs., 4 months)
              </li>
            </ul>
            <h2 className="underlined">
              Teaching experience (at tertiary level)
            </h2>
            <ul>
              <li>
                2020-2025 – The Grieg Academy, Faculty of Music, Art and Design
                (KMD), University of Bergen (UiB), Norway. Individual
                supervision of Bachelor's / Master's students, instructor for
                courses including Musical Analysis, Newer Composition
                Techniques, Composition seminar, and Chord-based piano.
              </li>
              <li>
                2019 – Academic tutor (Learning Assistance Program) at the
                University of Victoria (Canada).
              </li>
              <li>
                2017-2018 – Teaching Assistant at UVic School of Music.
                University of Victoria, Canada.
              </li>
              <li>
                2008-2017 – Instructor. Music department of the Institute of
                Continuous Teacher Training (IFDC VM) - Villa Mercedes (San
                Luis), Argentina.
              </li>
            </ul>
            <h2 className="underlined">Non-academic job positions</h2>
            <ul>
              <li>
                2025 – Contributor (freelance) for the project 'Pegasus HSL'
                (Humanity's Last Exam).
              </li>
              <li>
                2020 – Music transcriber for the British Columbia Folklore
                Society.
              </li>
              <li>
                2019 – Campaign assistant - United Way University of Victoria
                campaign 2019.
              </li>
              <li>
                2016-2019 – Pianist - Tango Orchestra "La Sanluistango" (San
                Luis, Argentina).
              </li>
            </ul>
            <h2 className="underlined">Scholarships / Grants</h2>
            <ul>
              <li>
                2025 – Music Norway – Travel grant for ICMC 2025 (Boston, USA).
              </li>
              <li>
                2024 – Morten Eide Pedersen Minnefond – Project Oscillations –
                An Ekphrastic Take on Müller–Schubert's Winterreise.
              </li>
              <li>
                2023 – Norsk Komponistforening (NKF) – Grant for the publication
                of the composition I am a Strange Loop.
              </li>
              <li>
                2022 – Morten Eide Pedersen Minnefond – Project Versificator, in
                collaboration with ensemble Tabula Rasa (Bergen).
              </li>
              <li>
                2021 – Innovation Grant of the Norwegian Artistic Research
                Program – Project Sounding Philosophy.
              </li>
              <li>
                2019 – Graduate Fellowship, University of Victoria (Canada).
              </li>
              <li>
                2018 – William Ross Holm Scholarship for a Graduate Student,
                University of Victoria.
              </li>
            </ul>
            <h2 className="underlined">Languages</h2>
            <ul>
              <li>Spanish - native language</li>
              <li>English – Level: C2 (proficient oral, written)</li>
              <li>
                Norwegian Bokmål – Level: B1 (good knowledge, oral, written)
              </li>
              <li>French – Basic knowledge (written/oral)</li>
            </ul>
            <h2 className="underlined">Community engagement</h2>
            <ul>
              <li>Board member: Avgarde (Bergen, Norway) 2023-2025</li>
              <li>Board member: NyMusikk (Bergen, Norway) 2023-today</li>
              <li>Member: NyMusikk Group of Composers (Norway)</li>
              <li>Member: NKF (Norwegian Society of Composers)</li>
              <li>Member: NOPA (Norwegian Society of Composers and Writers)</li>
              <li>Member: TONO (Norwegian collective management company)</li>
            </ul>
          </div>
        </div>
        <Photos />
      </div>
    </div>
  );
}

export default CV;
