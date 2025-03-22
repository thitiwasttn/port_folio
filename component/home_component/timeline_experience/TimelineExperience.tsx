'use client'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent, timelineOppositeContentClasses} from "@mui/lab";
import React from "react";
import {Experience} from "@/app/modal/ExperienceM";
import {getExperience} from "@/component/home_component/ProfileService";


export default function TimelineExperience() {
    const experience: Experience[] = getExperience();
    return <>
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0,
                },
            }}
        >
            {
                experience.map(value => {
                    return <>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                {/*<span className={"text-secondary"}>{value.date}</span>*/}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className={"row"}>
                                    <div className={"col-12"}>
                                        <span className={"text-secondary"}>{value.date}</span>
                                    </div>
                                    <div className={'col-12 mt-2'}>
                                        {value.image.map(value1 => {
                                            // eslint-disable-next-line @next/next/no-img-element
                                            return <img key={value1} src={value1} className={"me-2"} height={30}
                                                        alt={value1}/>
                                        })}
                                    </div>
                                    <div className={"col-12 mt-2"}>
                                        <span className={"text-black fw-bold"}>
                                            <a href={value.link}
                                               target="_blank"
                                               className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                                            {value.name}
                                        </a></span>
                                    </div>
                                    <div className={"col-12 mt-2"}>
                                        <div className="card border-light" style={{}}>
                                            <div className="card-header bg-secondary-subtle">
                                                <strong>Responsibilities</strong>
                                            </div>
                                            <ul className="list-group list-group-flush ">
                                                {value.responsibilities.map(value1 => {
                                                    return <li key={value1}
                                                               className="list-group-item  text-black">{value1}
                                                    </li>
                                                })}
                                            </ul>
                                            <div className="card-header bg-secondary-subtle">
                                                <strong>Projects</strong>
                                            </div>
                                            <ul className="list-group list-group-flush list-group-numbered">
                                                {value.project.map(value1 => {
                                                    return <li key={value1}
                                                               className="list-group-item text-black">{value1}
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </>
                })
            }
        </Timeline>
    </>
}