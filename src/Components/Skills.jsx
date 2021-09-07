import React from 'react'
import SkillItem from './SkillItem'

export default function Skills() {
    
    const skillset = [
        {
            "title": "Languages",
            "skillset": ["cpp", "python", "c", "javascript"],
        },
        {
            "title": "Frameworks",
            "skillset": ["django", "reactjs", "angularjs", "html", "css"],
        },
        {
            "title": "DBMS",
            "skillset": ["mysql"]
        }
    ]

    return (
        <div className="skills-section">
            {skillset.map((skill, idx)=>{
                return <div className="skill-row">
                        <h3>{skill.title}</h3>
                        <div className="skill-items-row">
                            {skill.skillset.map((name, i)=>{
                                return <SkillItem name={name}/>
                            })}
                        </div>
                    </div>
            })}
        </div>
    )
}
