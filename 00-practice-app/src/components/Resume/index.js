import React from 'react';
import resume from '../../../src/Rekha_Leelaraman.pdf'

function Resume() {

    return (
        <section className='resumesection'>

            <h1 className='resumeTitle'>Resume</h1>
            <div>
            <span><p> Download my </p><a href={resume} target="_blank" rel="noreferrer" >resume</a></span>
                {/* <a href={resume} target="_blank" rel="noreferrer" className="resLink"><h3 className="viewTitle" id="resumeTitle">RESUME</h3></a> */}
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

export default Resume

