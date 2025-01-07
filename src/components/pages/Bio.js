import React from "react";
import Photos from "../Photos";

function Bio() {
  return (
    <div className="secondaryWrapper">
      <div className="leftSide">
        <h1 className="neonText">Bio</h1>
        <div className="bigP bio">
          <p>
            I am an Argentinian composer and performer based in Bergen, Norway.
            I am educated as a composer of instrumental and electronic music and
            piano performance. I hold an interdisciplinary master’s degree in
            music and psychology and am pursuing a Ph.D. in Artistic Research at
            the University of Bergen (Norway). My artistic practice focuses on
            exploring possibilities for human-computer interaction in art
            creation, encompassing points of intersection between
            computer-assisted composition, artificial intelligence, algorithmic
            poetry, live electronics, and improvisation. For this, I am
            currently developing software tools for composers and performers,
            particularly related to artificial intelligence, that can be
            integrated into a computer-assisted composition workflow, and for
            improvisation. In parallel to that, I am trained in data sciences,
            machine learning, and web development.
          </p>
          <p>
            My music has been performed in several countries around the world by
            renowned ensembles and soloists, such as Projecto RED ensemble
            (Arg), Schola Heidelberg (Ger), Quasar Saxophone Quartet (Can),
            Vocal Ensemble Tabula Rasa (Nor), Edvard Grieg Kor (Nor), JÓR
            saxophone quartet (Nor/Swe/Den), Zone Experimental Basel (Swi),
            Lucas Fels (Ger), Sergej Tchirkov (Rus), Elide Sulsenti (Ita), among
            many others. Some of my compositions have been awarded in national
            and international competitions. My piece “Oscillations (iii) was
            recently awarded the first prize in the AI-based composition contest
            at the IEEE Conference on Big Data in Washington D.C. My work
            “Deconstructions” for human voice, electronic voice, and visuals was
            selected to be part of the 1st. Art and technology show, organized
            by the National Endowment for the Arts at the Kirchner Cultural
            Center (Buenos Aires, Argentina) between June and December 2019. My
            work “Trivium Jazz Cuyano” received the “Outstanding Award” on the
            9th. “Chengdu River Sun Prize” contest, organized by the Sichuan
            Conservatory (China) and the International Society of Contemporary
            Music (ISCM, 2013). My work “Semblanza” (electroacoustic) received a
            special mention in the 1st. Contemporary Art Contest in celebration
            of the 30th. anniversary of the return of democracy”, organized by
            the Municipality of Villa Mercedes, in the category “Ephemeral Art”
            (2014).
          </p>
          <p>
            I have received several international grants and academic
            scholarships. As an example, in 2012, I received a scholarship from
            the UNESCO-Aschberg Program to carry out an artistic residency at
            the Virginia Center for Creative Arts VCCA (USA), and in 2014 by the
            Organization of Ibero-American States (OEI) through the IBERÚSICAS
            Program, to develop the “Cinco Soles” musical-choreographic project,
            at the Movement Research Center (New York, USA). In addition, I have
            received multiple grants for creative projects, such as the Morten
            Eide Pedersen Minnefond (2021, 2023) and Norsk Komponistforening
            support for the recording and development of novel musical projects.
            Currently, I am part of the project “Sounding Philosophy” led by
            Dániel Péter Biró at the University of Bergen, and I am a board
            member of the new music organizations ‘Avgarde’ and ‘NyMusikk
            Bergen.’
          </p>
          <p>
            My previous work has been characterized by collaborative and
            interdisciplinary projects. For example, as a member of the ensemble
            ‘Azul 514’ (Arg), we explored the interaction between traditional,
            contemporary, and electronic musical sound, in the form of
            compositions and instrumental improvisation, seeking to create
            nonpredictable and unrepeatable new sonic, musical and multimedia
            spaces. Additionally, I have developed an intense activity as a
            Tango performer. I have participated in many albums as a pianist and
            arranger, and together with the Orchestra ‘Sanluistango’ (Arg), we
            have carried out several international tours, performing in some of
            the most important venues in Europe and Latin America.
          </p>
        </div>
      </div>
      <Photos />
    </div>
  );
}

export default Bio;
