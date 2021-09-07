import React from 'react'
import CareerCheckpoints from './CareerCheckpoints'
import Skills from './Skills'

export default function SkillsAndChecks() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {/* node segment */}
                    <div className="column">
                        <h1 className="sec-heading">Experience</h1>
                        <CareerCheckpoints/>
                    </div>
                    <div className="column">
                        <h1 className="sec-heading">Skills</h1>
                        <Skills/>
                    </div>
                </div>
            </div>
        </div>
    )
}
