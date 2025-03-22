'use client'
import Accordion from 'react-bootstrap/Accordion';
import {SkillM} from "@/app/modal/SkillM";
import {getSkillService} from '../ProfileService'
import {useEffect, useState} from "react";



export default function SkillComponent() {
    // const skills: SkillM[] = await getSkillService();
    const [skills, setSkills] = useState<SkillM[]>([]);
    // console.log('skills ', skills);
    useEffect(() => {
        getSkillService().then(value => {
            // console.log('value ==> ', value);
            setSkills(value.objectValue)
        })
        console.log('skills ', skills);
    }, [])

    return (
        <>

            <Accordion alwaysOpen>
                {skills.map((value) => {
                    return (
                        <Accordion.Item key={value.value} eventKey={value.value}>
                            <Accordion.Header>{value.display}</Accordion.Header>
                            <Accordion.Body>
                                <div className={"row"}>
                                    {value.details.map(value1 => {
                                        return <div key={value1.title} className={"col-sm-auto col-md-4 col-xl-4 mt-2"}>
                                            <div className="card h-100">
                                                <div className="card-header">
                                                    <strong>{value1.title}</strong>
                                                </div>
                                                {/*<div className="card-body">
                                                    <p className="card-text">{value1.detail}</p>
                                                </div>*/}
                                                <ul className="list-group list-group-flush">
                                                    {value1.framework.map(value2 => {
                                                        return <li key={value2}
                                                                   className="list-group-item">{value2}</li>
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </>
    );
}
