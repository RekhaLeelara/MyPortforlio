import React from 'react'
import developer from '../../../src/developer.png'


function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <p>
            I am a Senior Software Engineering Manager who is passionate about designing and building web applications.
        </p>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <img src={developer} alt="developer" />
      {/* <div className="my-2"> */}

      {/* </div> */}
    </section>
  )
}

export default About