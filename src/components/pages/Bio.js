import React from "react";
import Photos from "../Photos";

function Bio() {
  return (
    <div className="secondaryWrapper">
      <div className="leftSide">
        <h1 className="neonText">Bio</h1>
        <div className="bigP bio">
          <p>
            Juan Sebastián Vassallo is an Argentinian composer based in Bergen,
            Norway. He holds a master’s degree in music perception and cognition
            and is currently pursuing his Ph.D. in Artistic Research at the
            University of Bergen. His current artistic research aims to explore
            possibilities for human-computer interaction in art creation,
            encompassing points of intersection between computer-assisted
            composition, artificial intelligence, algorithmic poetry, generative
            visuals, and live electronics.
          </p>
          <p>
            His previous work has been characterized by collaborative and
            interdisciplinary artistic works that explore interaction between
            traditional and contemporary musical means and real-time processing
            of sound, coupled with instrumental improvisation and chance,
            resulting in non-predictable and unrepeatable new musical and sound
            spaces. Parallel to this, he has developed an intense activity as a
            Tango performer. He has participated in many albums as pianist and
            arranger, and together with the Orchestra "Sanluistango", they have
            carried out several international tours, performing in some of the
            most important venues of Europe and Latin America.
          </p>
          <p>
            His music has been performed in Argentina, México, Spain, Norway,
            United States and Canada. In 2012 he received a scholarship from the
            UNESCO-Aschberg Program to carry out an artistic residency at
            Virginia Center for Creative Arts VCCA (USA), and in 2014 by the
            Organization of Ibero-American States (OEI), through the IBERÚSICAS
            Program, to develop the "Cinco Soles" musical-choreographic project,
            at the Movement Research Center (New York, USA). Some of his
            compositions have been awarded in national and international
            competitions. His work "Deconstructions" for human voice, electronic
            voice and visuals was selected to be part of the 1st. Art and
            technology show, organized by the National Endowment for the Arts at
            the Kirchner Cultural Center (Buenos Aires, Argentina) between June
            and December 2019. His work "Trivium Jazz Cuyano" received the
            "Outstanding Award" in the 9th. "Chengdu River Sun Prize" contest,
            organized by the Sichuan Conservatory (China) and the International
            Society of Contemporary Music (ISCM, 2013). His work "Semblanza"
            (electroacoustic) received a special mention in the 1st.
            Contemporary Art Contest in celebration of the 30th. anniversary of
            the the return of democracy", organized by the Municipality of Villa
            Mercedes, in the category "Ephemeral Art" (2014).
          </p>
        </div>
      </div>
      <Photos />
    </div>
  );
}

export default Bio;
