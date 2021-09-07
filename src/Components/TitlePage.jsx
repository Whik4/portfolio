import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
// import profilePic from "../images/profile-pic2.jpeg";
import Socials from './Socials';

export default function TitlePage() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="left">
                        <div className="profile-pic">
                            <img id="masked" src="https://media-exp1.licdn.com/dms/image/C4E03AQFDE0qoAIZQNg/profile-displayphoto-shrink_800_800/0/1627743930637?e=1636588800&v=beta&t=BCWjsGu1-sDZFLixhRkRsHfy6SUbYXOVFvG48pSMPEo"></img>
                        </div>
                    </div>
                    <div className="right">
                        <div className="title-type">
                            <ReactTypingEffect
                                text={["Hey Fellas! I'm Aman.", "Welcome to my page!"]}
                                cursor="_"
                                speed="50"
                                eraseSpeed="80"
                                typingDelay="500"
                                eraseDelay="3000"
                                cursorRenderer={cursor => <h1 className="title-text">{cursor}</h1>}
                                displayTextRenderer={(text, i) => {
                                return (
                                    <h1 className="title-text" >
                                        {/* {text.split('~').map((snt, index) => {
                                            return <>{snt}<br/></>
                                        })} */}
                                        {text}
                                    </h1>
                                );
                                }}        
                            />
                            <h3 className="title-tags">&lt;Full-stack Developer/&gt;</h3>
                            <p className="title-para">
                                I'm an ambitious CSE undergrad passionate about uprising technologies and implementation of logical approaches towards real-world problems.
                            </p>
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
