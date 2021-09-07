import React from 'react'
import {icons} from './LanguageIcons'

export default function SkillItem(props) {

    return (
        <div className="skill-badge">
            {/* <div className="scroll-skill">
                <div className="scroll-roll"/>
                <div className="scroll-page">
                    {props.name}
                </div>
                <div className="scroll-roll"/>
            </div> */}
            <img src={icons[props.name]} className="lang-icon"/>
        </div>
    )
}
