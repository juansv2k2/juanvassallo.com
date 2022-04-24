import React from "react";
import Project from "../Project";

function Projects() {
    return (
        <div className="mainWrapper">
            <div className="secondaryWrapper whenSubComponent">
                <h1 className="neonText2">Ongoing Projects</h1>
                <div>
                    <Project
                        title="Computational artistic agency and extended mind"
                        img="img/fondo_1.jpg"
                        text="The current artistic project aims mainly to reflect upon a two-folded research perspective, in one hand, the philosophical problem about agency of algorithmic systems involved in the creative process for composition of contemporary music, and in the other hand, investigating the cognitive processes involved in a composer’s decision-making for creating a musical work."
                    />
                </div>
                <div>
                    <Project
                        title="Versificator"
                        img="img/iStock-913445910_2.jpg"
                        text="In this research project, the metaphor for Orwell's versificator is reconfigured from the idea of an alienating and artistically precarious device into a system that will expand my compositional thinking. My own versificator then, will be used as a platform for composing music that aims to bring new ways of configuring the formal and conceptual architecture of the work, as well as the relationships between form and material."
                    />
                </div>

                <div>
                    <Project
                        title="Sounding Philosophy"
                        img="img/spinoza.jpeg"
                        text="Leaded by Daniel Biro (University of Bergen), Sounding Philosophy is an interdisciplinary research project combining the fields of music, dance, visual arts, philosophy and science. The project integrates these fields, investigating how recent theories of emergence, reason and the mind can be approached from creative, metaphysical and scientific standpoints."
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
