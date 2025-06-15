import React from "react";
import Photos from "../Photos";

function Bio() {
  return (
    <div className="secondaryWrapper">
      <div className="leftSide">
        <h1 className="neonText">Bio</h1>
        <div className="bigP bio">
          <p>
            I am an Argentinian experimental artist and researcher based in
            Bergen, Norway. I was trained as a composer of instrumental and
            electronic music and as a pianist. I hold an interdisciplinary
            master’s degree in music and psychology and am currently pursuing a
            Ph.D. in Artistic Research at the University of Bergen (Norway).
          </p>
          <p>
            My artistic practice explores possibilities for human-computer
            interaction in art creation, encompassing intersections between
            computer-assisted composition, improvisation, artificial
            intelligence, algorithmic poetry, live electronics, and visuals. I
            am interested in human cognition and creativity from a cognitive
            perspective.
          </p>
          <p>
            Additionally, I develop software tools for composers and improvisers
            and have training in data science, machine learning, and web
            development.
          </p>
          <p>
            My music has been performed in several countries around the world by
            renowned ensembles and soloists, such as Projecto RED ensemble
            (Arg), Schola Heidelberg (Ger), Quasar Saxophone Quartet (Can),
            Vocal Ensemble Tabula Rasa (Nor), Edvard Grieg Kor (Nor), JÓR
            saxophone quartet (Nor/Swe/Den), Zone Experimental Basel (Swi),
            Hinge Quartet (USA), Obsidian Ensemble (Nor), Langhaugen String
            Orchestra (Nor), Lucas Fels (Ger), Sergej Tchirkov (Rus), Ludvig
            Lindström (Fin), Elide Sulsenti (Ita), among many others.
          </p>
          <p>
            Some of my compositions have been awarded in national and
            international competitions. Recently, my piece “Oscillations (iii)”
            was awarded the first prize in the AI-based composition contest at
            the IEEE Conference on Big Data in Washington D.C. (2024).
          </p>
          <p>
            My work “Deconstructions” for human voice, electronic voice, and
            visuals was selected to be part of the 1st. Art and technology show,
            organized by the National Endowment for the Arts at the Kirchner
            Cultural Center (Buenos Aires, Argentina) between June and December
            2019.
          </p>
          <p>
            My work “Evolutions” for symphonic orchestra received the Prix 'Pas
            de Calais' in the 1st French-Argentine Composition Contest, in 2012.
            Also, my work “Trivium Jazz Cuyano” received the “Outstanding Award”
            on the 9th. “Chengdu River Sun Prize” contest, organized by the
            Sichuan Conservatory (China) and the International Society of
            Contemporary Music (ISCM, 2013).
          </p>
          <p>
            My work “Semblanza” (electroacoustic) received a special mention in
            the 1st. Contemporary Art Contest in celebration of the 30th.
            anniversary of the return of democracy”, organized by the
            Municipality of Villa Mercedes, in the category “Ephemeral Art”
            (2014).
          </p>
          <p>
            I have received several international grants and academic
            scholarships. In 2012, I received a scholarship from the
            UNESCO-Aschberg Program to carry out an artistic residency at the
            Virginia Center for Creative Arts VCCA (USA), and in 2014 by the
            Organization of Ibero-American States (OEI) through the IBERÚSICAS
            Program, to develop the “Cinco Soles” musical-choreographic project,
            at the Movement Research Center (New York, USA).{" "}
          </p>
          <p>
            I have received multiple grants for creative projects, such as the
            Morten Eide Pedersen Minnefond (2021, 2023) and Norsk
            Komponistforening support for the recording and development of novel
            musical projects. Currently, I am part of the project “Sounding
            Philosophy” led by Dániel Péter Biró at the University of Bergen,
            and I am a board member of the new music organizations ‘Avgarde’ and
            ‘NyMusikk Bergen.’
          </p>
          <p>
            My previous work has been characterized by collaborative and
            interdisciplinary projects. For example, as a member of the ensemble
            ‘Azul 514’ (Arg), we explored the interaction between traditional,
            contemporary, and electronic musical sound, in the form of
            compositions and instrumental improvisation, seeking to create
            nonpredictable and unrepeatable new sonic, musical and multimedia
            spaces.
          </p>
          <p>
            Additionally, I have developed an intense activity as a Tango
            performer. I have participated in many albums as a pianist and
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
