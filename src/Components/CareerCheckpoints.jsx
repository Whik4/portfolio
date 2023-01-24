import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default function CareerCheckpoints() {

    const checkpoints = [
        {
            "title" : "B.Tech in CSE",
            "company" : "MNIT Jaipur",
            "time" : "2019-2023"
        },
        {
            "title" : "Django Backend Developer",
            "company" : "HEU Tech Pvt. Ltd.",
            "time" : "July 2020-Oct 2020"
        },
        {
            "title" : "SDE Intern",
            "company" : "Salesforce",
            "time" : "June 2022-Aug 2022"
        }
    ];

    return (
        <div className="timeline">
            <Timeline align="alternate">
                {checkpoints.map((cp, idx)=>{
                    return <TimelineItem>
                        <TimelineOppositeContent>
                            <h3 className="timeline-time">{cp.time}</h3>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            {idx==checkpoints.length-1?"":<TimelineConnector />}
                            {/* <TimelineConnector /> */}
                        </TimelineSeparator>
                        <TimelineContent>
                            <h3 className="timeline-title">{cp.title}</h3>
                            <h4 className="timeline-company">{cp.company}</h4>
                        </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>
        </div>
    )
}
