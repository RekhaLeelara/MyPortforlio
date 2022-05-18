//importing necessary files
import React from "react";
import javascript from '../../../src/javascript.webp'
import mongo from '../../../src/Mongo.png'
import MVC from '../../../src/MVC.jpeg'
import MySQL from '../../../src/mysql.jpeg'
import githublink from '../../../src/github.jpeg'

//This function helps to display the contents in the Porfolio page
const index = () => {

    return (
        <div>
            <div className="image-container">
                <div className="portpic port-one">
                    <div className="project-info-one hidden">
                        <p>Weather Dashboard</p>
                        <a href="https://github.com/RekhaLeelara/WeatherDashboard" target="_blank" rel="noreferrer noopener"><img className="githubicon" src={githublink} alt="githublink" ></img></a>
                        <p><a href="https://rekhaleelara.github.io/WeatherDashboard/" target="_blank" rel="noreferrer noopener">App Link</a></p>
                    </div>
                    <img id="javascriptimg" className="portimg " src={javascript} alt="javascript" />
                </div>

                <div className="portpic port-one">
                    <div className="project-info-one hidden">
                        <p>MVC_TechBlog</p>
                        <a href="https://github.com/RekhaLeelara/MVC_TechBlog" target="_blank" rel="noreferrer noopener"><img className="githubicon" src={githublink} alt="githublink" ></img></a>
                        <p><a href="https://rekhaleelara.github.io/WeatherDashboard/" target="_blank" rel="noreferrer noopener">App Link</a></p>
                    </div>
                    <img id="javascriptimg" className="portimg " src={MVC} alt="MVC" />
                </div>

                <div className="portpic port-one">
                <div className="project-info-one hidden">
                        <p>SocialNetworkingAPI</p>
                        <a href="https://github.com/RekhaLeelara/SocialNetworkAPI" target="_blank" rel="noreferrer noopener"><img className="githubicon" src={githublink} alt="githublink" ></img></a>
                        <p><a href="https://drive.google.com/file/d/1kyFi_ES0aZj0IKv19CCRKXCpKRDuD6vK/view?usp=sharing" target="_blank" rel="noreferrer noopener">Video record1</a></p>
                        <p><a href="https://drive.google.com/file/d/1hJ7qwcerFPH62_qx8uMLFUdVTsOlhpEL/view?usp=sharing" target="_blank" rel="noreferrer noopener">Video record12</a></p>
                    </div>
                    <img id="mongoimg" className="portimg" src={mongo} alt="Mongo" />
                </div>

                <div className="portpic port-one">
                <div className="project-info-one hidden">
                        <p>SQL Challenger</p>
                        <a href="https://github.com/RekhaLeelara/SQL_Challenger" target="_blank" rel="noreferrer noopener"><img className="githubicon" src={githublink} alt="githublink" ></img></a>
                        <p><a href="https://drive.google.com/drive/folders/1YK1wm8a_94JniBnXKRlSObI2GlCeW8tw?usp=sharing" target="_blank" rel="noreferrer noopener">Video record1</a></p>
                    </div>
                    <img id="mongoimg" className="portimg" src={MySQL} alt="Mongo" />
                </div>
            </div>
        </div>
    )
}

//exporting the default index
export default index;