import React from 'react'
import ChainMailerLogo from "../images/chainmailer-logo.svg";
import ChainMailerPage from "../images/chainmailer-page.png";
import SanskritamPage from "../images/sanskritam-page.png";
import SanskritamLogo from "../images/sanskritam-logo.png";

export default function Projects() {

    const projectData = [
        {
            "title":"Sanskritam",
            "url":"http://shoutloud.in:3000/",
            "description":"Sanskritam is a website that makes your sanskrit learning experience easy. It provides multiple quizes, video links, wikis, etc.",
            "logo": SanskritamLogo,
            "bgcolor": "#2d3047",
            "page": SanskritamPage,
        },
        {
            "title":"ChainMailer",
            "url":"https://fliprhackathon.herokuapp.com/",
            "description":"ChainMailer is a platform to schedule your business chain mails for newsletters, updates and notices to subscribers.",
            "logo": ChainMailerLogo,
            "bgcolor": "black",
            "page": ChainMailerPage,
        },
    ]

    return (
        <div className="container">
            <div className="project-section" id="projects">
                <h1 className="sec-heading">Projects</h1>
                <br/>
                {projectData.map((project, idx)=>{
                    return (
                        <>
                        <div className="row">
                            <div className="left">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front" style={{backgroundColor:project.bgcolor}}>
                                            <img className="flip-card-front-img" src={project.logo}/>
                                        </div>
                                        <div class="flip-card-back">
                                            <img className="flip-card-back-img" src={project.page} onClick={()=>{window.location.href=project.url}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="project-desc-sec">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        </>)
                })}
            </div>
        </div>
    )
}
