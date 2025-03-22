import SkillComponent from "@/component/home_component/skill/SkillComponent";
import TimelineExperience from "@/component/home_component/timeline_experience/TimelineExperience";
import React from "react";
import ig from "@/public/image/ig.png";
import {getListAreaOfExp} from "@/component/home_component/ProfileService";
import {ExpertiesM} from "@/app/modal/ExpertiesM";

export default async function ContentComponent() {
    const listAreaOfExp: ExpertiesM[] = await getListAreaOfExp();
    return <>
        <div className={"profileInfo shadow bg-body-tertiary rounded-4 overflow-auto"}>
            <div className={"container-fluid "}>
                <div className={"row mt-5 mb-5"}>
                    <div className={"col-12"}>
                        <p className="h4">AREAS OF EXPERTISE</p>
                    </div>
                    <div className={"col-12"}>
                        <ul className="list-group list-group-flush rounded-4">
                            {listAreaOfExp.map(value => {
                                return <li key={value.expertiseValue} className="list-group-item">{value.expertiseDisplay}</li>
                            })}
                        </ul>
                    </div>
                </div>


                {/*    skill */}
                <div className={"row mb-5"}>
                    <div className={"col-12"}>
                        <p className="h4">SKILLS</p>
                    </div>
                    <div className={"col-12"}>
                        <SkillComponent/>
                    </div>
                </div>

                <div className={"row mb-5"}>
                    <div className={"col-12"}>
                        <p className="h4">EXPERIENCE</p>
                    </div>
                    <div className={"col-12"}>
                        <TimelineExperience/>
                    </div>
                </div>

                <div className={"row mb-5"}>
                    <div className={"col-12"}>
                        <p className="h4">EDUCATION</p>
                    </div>
                    <div className={"col-12"}>
                        <div className="card rounded-4"
                             style={{borderColor: "rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important"}}>
                            <div className="card-header">
                                {"Bachelor's degree"} GPA : 3.26
                            </div>
                            <div className="card-body">
                                <p className="card-text">Rajamangala University Of Technolog Faculty of technical
                                    Education Computer Technology</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row mb-5"}>
                    <div className={"col-12"}>
                        <p className="h4">CONFERENCES & COURSES</p>
                    </div>
                    <div className={"col-12"}>
                        <div className="card rounded-4"
                             style={{borderColor: "rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important"}}>
                            <div className="card-header">
                                Internal training
                            </div>
                            <ul className="list-group list-group-flush rounded-4">
                                <li className="list-group-item">Python for data science</li>
                                <li className="list-group-item">Shell script</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={"row mb-5"}>
                    <div className={"col-12"}>
                        <p className="h4">CERTIFICATES</p>
                    </div>
                    <div className={"col-12"}>
                        <ul className="list-group list-group-flush rounded-4 list-group-numbered">
                            <li className="list-group-item">
                                <a
                                    className={"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"}
                                    target={"_blank"}
                                    href="https://drive.google.com/file/d/1c0D_bKT56jT0YCecw1_rNNyrV6Ehwgpl/view?usp=sharing">
                                    Kubernetes for beginner</a>
                            </li>
                            <li className="list-group-item">
                                <a
                                    className={"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"}
                                    target={"_blank"}
                                    href="https://drive.google.com/file/d/1hlt4CJIn9JAKtIgLavOwAtUhGLW-dzNA/view?usp=sharing">
                                    Build Reactive MicroServices using Spring WebFlux/ SpringBoot
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className={"row mb-5"}>
                    <div className={"col-12"}>
                        <p className="h4">INTEREST</p>
                    </div>
                    <div className={"col-12"}>
                        <ul className="list-group list-group-flush rounded-4">
                            <li className="list-group-item">
                                Photography <a href="https://www.instagram.com/thitiwas.photography/"
                                               className={"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"}
                                               target={"_blank"}><img src={ig.src} className={""} height={30}
                                                                      alt={"IG"}/>My Work</a>
                            </li>
                            <li className="list-group-item">
                                Investment
                            </li>
                            <li className="list-group-item">
                                Books
                            </li>
                            <li className="list-group-item">
                                Movies
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}
