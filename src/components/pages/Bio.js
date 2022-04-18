import React, { useState, useEffect } from "react";



function Bio() {
    return (
        <div className="bodyDiv">
            <div className="prueba">
                <div className="one ">
                    <div className="neonText">
                        <h1>Bio</h1>
                        <p>
                            Juan Sebastián Vassallo (b. 1984, Villa Mercedes,
                            Argentina) is a composer, pianist and media artist
                            currently based in Bergen (Norway). He holds a
                            Bachelor's degree in Music Composition (National
                            University of Córdoba, Argentina) and graduated from
                            the Provincial Conservatory of Music of Córdoba
                            (Argentina) in piano. He obtained his Master's
                            degree at the University of Victoria (Canada) and is
                            currently pursuing his PhD in Artistic Research at
                            the University of Bergen (Norway).
                        </p>
                        <p>
                            His previous work has been characterized by
                            collaborative and interdisciplinary artistic
                            endeavors that explore artistic possibilities that
                            arise from the interaction between traditional and
                            contemporary musical expressions and real-time
                            processing of sound, coupled with instrumental
                            improvisation and chance, resulting in
                            non-predictable and unrepeatable new musical and
                            sound spaces. His current research aims to explore
                            possibilities for human-computer interaction and
                            artificial intelligence for music composition,
                            seeking to develop meaningful connections between
                            sound, music, and human language.
                        </p>
                        <p>
                            Parallel to this, he has developed an intense
                            activity as a Tango performer. He has participated
                            in many albums as pianist and arranger, and together
                            with the Orchestra "Sanluistango", they have carried
                            out several international tours, performing in some
                            of the most important venues of Europe and Latin
                            America.
                        </p>
                        <p>
                            His music has been performed in Argentina, México,
                            Spain, Norway, United States and Canada. In 2012 he
                            received a scholarship from the UNESCO-Aschberg
                            Program to carry out an artistic residency at
                            Virginia Center for Creative Arts VCCA (USA), and in
                            2014 by the Organization of Ibero-American States
                            (OEI), through the IBERÚSICAS Program, to develop
                            the "Cinco Soles" musical-choreographic project, at
                            the Movement Research Center (New York, USA). Some
                            of his compositions have been awarded in national
                            and international competitions. His work
                            "Evolutions" for the symphony orchestra received the
                            "Conseil du Pas de Calais" Prize at the 1st.
                            Franco-Argentine contest of musical composition,
                            organized by the Opal Sinfonietta Orchestra, from
                            the city of Boulogne Sur Mer (France, 2012) . His
                            work "Trivium Jazz Cuyano" received the "Outstanding
                            Award" in the 9th. "Chengdu River Sun Prize"
                            contest, organized by the Sichuan Conservatory
                            (China) and the International Society of
                            Contemporary Music (ISCM, 2013). His work
                            "Semblanza" (electroacoustic) received a special
                            mention in the 1st. Contemporary Art Contest in
                            celebration of the 30th. anniversary of the the
                            return of democracy", organized by the Municipality
                            of Villa Mercedes, in the category "Ephemeral Art"
                            (2014). His sound installation "Retro-Alimento"
                            received an honorable mention in the "2nd. Visual
                            Arts Hall", organized by the Municipality of Villa
                            Mercedes, San Luis (2015). Recently, his work
                            "Deconstructions" for human voice, synthetic voice
                            and visuals was selected to be part of the 1st. Art
                            and technology show, organized by the National
                            Endowment for the Arts at the Kirchner Cultural
                            Center (Buenos Aires, Argentina) between June and
                            December 2019.
                        </p>
                    </div>
                </div>
                <div className="two">
                    <img className="imgBody" src="img/Juan.jpg" />
                    <img className="imgBody" src="img/juan_edited_edited.jpg" />
                    <img
                        className="imgBody"
                        src="img/31224930_952206774948132_5286944826858668032_n.jpg"
                    />
                    <img
                        className="imgBody"
                        src="img/31955481_10155222962441046_251916440548933632_o.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Bio;
