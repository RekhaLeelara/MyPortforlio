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
                        <a href="https://github.com/RekhaLeelara/WeatherDashboard"><img className="githubicon" src={githublink} alt="githublink" ></img></a>
                    </div>
                    <img id="javascriptimg" className="portimg " src={javascript} alt="javascript" />
                </div>

                <div className="portpic port-one">
                    <div className="project-info-one hidden">
                        <p>MVC_TechBlog</p>
                        <a href="https://github.com/RekhaLeelara/MVC_TechBlog"><img className="githubicon" src={githublink} alt="githublink" ></img></a>
                    </div>
                    <img id="javascriptimg" className="portimg " src={MVC} alt="MVC" />
                </div>

                <div className="portpic port-one">
                <div className="project-info-one hidden">
                        <p>SocialNetworkingAPI</p>
                        <a href="https://github.com/RekhaLeelara/SocialNetworkAPI"><img className="githubicon" src={githublink} alt="githublink" ></img></a>
                    </div>
                    <img id="mongoimg" className="portimg" src={mongo} alt="Mongo" />
                </div>

                <div className="portpic port-one">
                <div className="project-info-one hidden">
                        <p>SQL Challenger</p>
                        <a href="https://github.com/RekhaLeelara/SQL_Challenger"><img className="githubicon" src={githublink} alt="githublink" ></img></a>
                    </div>
                    <img id="mongoimg" className="portimg" src={MySQL} alt="Mongo" />
                </div>
            </div>
        </div>
    )
}

//exporting the default index
export default index;