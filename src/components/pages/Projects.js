import React from "react";
import Project from "../Project";

function Projects() {
    return (
        <div className="bodyDiv">
            <div className="prueba">
                <h1>Ongoing Projects</h1>
                <div>
                    <Project
                        title="Computational artistic agency and extended mind"
                        img="img/fondo_1.jpg"
                        text="The current artistic project aims mainly to bringing together the fields of music composition, cognitive sciences and philosophy and into interdisciplinary research that is informed, expanded, and enriched by empirical knowledge, practices and methodologies coming from multiple disciplines. The artistic outcome and the documentation of the process will serve the purpose for reflecting upon a two-folded research perspective, in one hand, the philosophical problem about agency of algorithmic systems involved in the creative process for composition of contemporary music, and in the other hand, investigating the cognitive processes involved in a composer’s decision-making for creating a musical work."
                    />
                </div>
                <div>
                    <Project
                        title="Versificator"
                        img="img/iStock-913445910_2.jpg"
                        text="Working with computer-assisted tools as a means for music composition has led me to explore an original creative process and investigate my own personal compositional method in a novel way: by providing me with greater processing power to work with a more advanced combinatorial, and more refined search methods to solve specific musical problems, these tools have expanded my capacity to implement a more complex heuristic which potentially results in novel multidimensional connections between ideas, material and structure in a musical work. Within my artistic practice, the metaphor for the versificator is reconfigured from the idea of an alienating and artistically precarious device into a system that potentially expands my compositional thinking. "
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
        </div>
    );
}

export default Projects;
