//import all the necessary files
import React from 'react';
import resume from '../../../src/Rekha_Leelaraman.pdf'

//display contents in the resume page section
function Resume() {

    return (
        <section className='resumesection'>

            <h1 className='resumeTitle'>Resume</h1>
            <div>
            <span><p> Download my </p>
            <a href={resume} download>resume</a>
            </span>
            </div>
            <div>
                <h1>Front-end Proficiencies</h1>
                <p></p>
                <li>HTML</li>
                <li>CSS</li>
                <li>javascript</li>
                <li>JQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </div>
            <div>
                <h1>Back-end Proficiencies</h1>
                <p></p>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MYSQL, Sequelize</li>
                <li>MongoDB, Mangoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </div>
            <p></p>
        </section>
    );
}

//Exporting the Resume page contents
export default Resume

