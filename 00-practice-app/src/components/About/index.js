//importing the necessary files
import React from 'react'
import developer from '../../../src/developer.png'


//To display the contents displayed in the About Me page

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">Who am I?</h1>
            <p>
                I am working as a Senior Software Engineering Manager in United Health Group. I am passionate about designing and building web applications.
            </p>
            <img src={developer} alt="developer" />
            <div className="flex-row px-1">
                <div href="#">
                    <i className="fab fa-facebook-f">
                        <a style={{ marginLeft: "10px" }} href="https://www.facebook.com/rekha.leelaraman" rel="noreferrer">
                            Facebook
                        </a>
                    </i>
                </div>
                <div href="#">
                    <i className="fab fa-Linkedin">
                        <a style={{ marginLeft: "10px" }} href="https://www.linkedin.com/in/rekha-leelaraman-51745a87/" rel="noreferrer">
                        Linkedin
                        </a>
                    </i>
                </div>
                <div href="#">
                    <i className="fab fa-GitHub">
                        <a style={{ marginLeft: "10px" }} href="https://github.com/RekhaLeelara" rel="noreferrer">
                            GitHub
                        </a>
                    </i>
                </div>
                
                </div>
        </section>
    )
}

//Exporting the About page contents
export default About