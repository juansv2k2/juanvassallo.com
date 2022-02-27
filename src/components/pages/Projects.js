import React from "react";
import Project from "../Project";

function Projects() {
    return (
        <div className="bodyDiv">
            <h1>Ongoing Projects</h1>

            <div className="prueba"></div>

            <div>
                <Project
                    title="Versificator"
                    img="img/iStock-913445910_2.jpg"
                    text="This artistic research project reflects on the world of possibilities that afford the use of rule-based computer-assisted music composition tools and artificial intelligence as a means for investigating and developing stronger symbolic and perceptual relationships between musical structures and human language -considered as a general term which includes mainly speech and its written equivalent-. Several inquiries arise from this project; in one hand, those related to the material-structural crossed-relationship between music and language: What relationships be traced between dimensions of human language and those of a piece of contemporary music? Is music ultimately a simulation of a model of production coming from another human emerging capacity, such as language? In the other hand, lays the question about creative agency of algorithmic processes in art creation: to this day, the heuristic processes involved and a composer's decision-making process in creating a musical work remain speculative, somewhat of a mystery. Is there is any a priori reason to deny creative agency to non-human entities, such as machines or algorithms? Is it possible to discuss a new perspective on the creative agency of algorithmic composition systems regarding to the idea of cognitive assemblages as described by Hayes? In the context of this artistic research, the Versificator is reframed as a technology that potentially extends the basic creative mechanism in favor of novel searches: A kind of cognitive assemblage that facilitates a novel approach towards contemporary music composition, by means of the establishment of multidimensional mappings between a complex network of musical and linguistic materials and structures."
                />
            </div>

            <div>
                <Project
                    title="Sounding Philosophy"
                    img="img/spinoza.jpeg"
                    text="Leaded by Daniel Biro (University of Bergen) and Catherine Geunes (University of Stavanger), Sounding Philosophy is an interdisciplinary research project combining the fields of music, dance, visual arts, philosophy and science. The project integrates these fields, investigating how recent theories of emergence, reason and the mind can be approached from creative, metaphysical and scientific standpoints. The project integrate artistic research with the humanities and sciences into the study programs of the Grieg Academy and University of Stavanger, thereby seeking to strengthen collaboration and interaction between teachers, students and institutions as well as across disciplines and genres."
                />
            </div>
            <div>
                <Project
                    title="Azul 514"
                    img="img/IMG-20170625-WA0001.jpg"
                    text="Based in Villa Mercedes, Argentina, Azul 514 is an experimental music group that proposes a new aesthetic, from a practice immersed in the Live Project. The core of the artistic proposal is the use of digital technology for the creation (synthesis) and real-time processing of sound, coupled with instrumental improvisation and chance. As a result of this interaction, unpredictable and unrepeatable musical and sound spaces are constructed in each session."
                />
            </div>
        </div>
    );
}

export default Projects;
