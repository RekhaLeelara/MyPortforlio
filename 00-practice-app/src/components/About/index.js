import React from 'react'
import developer from '../../../src/developer.png'



function About() {

    return (
        <section className="my-5" >
            <h1 id="about">Who am I?</h1>
            <p>
                I am working as a Senior Software Engineering Manager in United Health Group. I am passionate about designing and building web applications.
            </p>
            {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
            <img src={developer} alt="developer" />
            {/* <div className="my-2"> */}

            {/* </div> */}
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

export default About