import './ProfileInfoComponent.css'
import avatar from '@/public/image/me.jpg'
import home from '@/public/image/home.png'
import HomeIcon from "@/component/home_component/HomeIcon";
import thailandFlag from '@/public/image/thailand.png'
import emailIcon from '@/public/image/email.png'
import telephoneIcon from '@/public/image/telephone.png'
import SocialMediaButtons from "@/component/home_component/SocialMediaButtons";
import DownloadCvComponent from "@/component/home_component/DownloadCvComponent";
import {ProfileInfoM} from "@/app/modal/ProfileM";
import {getProfile} from "@/component/home_component/ProfileService";


export default function ProfileInfoComponent() {

    const profileM: ProfileInfoM = getProfile();
    return (
        <>
            <div className={"profileInfo shadow bg-body-tertiary rounded-4"}>
                <div className={"container h-100 d-inline-block position-relative"}>
                    <div className={"row mt-5"}>
                        <div className={"col-12 text-center"}>
                            <img src={avatar.src} className="rounded-4 mx-auto d-block img-thumbnail img-fluid"
                                 alt="..."/>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <span className="fs-3 d-flex justify-content-center">{profileM.name}</span>
                        </div>
                        <div className={"col-12 mt-2"}>
                            <span
                                className="fs-5 d-flex justify-content-center fst-italic text-body-secondary">{profileM.rolePosition}</span>
                        </div>
                        {/*<div className={"col-12"}>
                            <hr/>
                        </div>*/}
                        <div className={"col-12 mt-4"}>
                            <div className={"d-flex align-items-center"}>
                                <div>
                                    <span className={"ms-3 me-2"}>
                                    <img src={home.src} height={16} width={16} alt=""/>
                                </span>
                                    <span className={"me-2"}>Bangkok, Thailand</span>
                                    <img src={thailandFlag.src} height={16} width={16} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className={"col-12 mt-2"}>
                            <div className={"d-flex align-items-center "}>
                                <div>
                                    <img className={"ms-3 me-2"} src={emailIcon.src} height={17} width={17} alt=""/>
                                    <span className={"me-2"}>{profileM.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className={"col-12 mt-2"}>
                            <div className={"d-flex align-items-center "}>
                                <div>
                                    <img className={"ms-3 me-2"} src={telephoneIcon.src} height={17} width={17}
                                         alt=""/>
                                    <span className={"me-2"}>{profileM.telno}</span>
                                </div>
                            </div>
                        </div>

                        <div className={"col-12 mt-4"}>
                            <div className={"d-flex justify-content-center"}>
                                <DownloadCvComponent/>
                            </div>
                        </div>

                        <div className={"col-12 mt-2 d-block d-md-none mb-3 "}>
                            <div className={"align-items-center "}>
                                <SocialMediaButtons/>
                            </div>
                        </div>


                    </div>

                    {/*<div className={"bottom-social"}>

                    </div>*/}
                    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-md-block">
                        <SocialMediaButtons/>
                    </div>
                </div>
            </div>
        </>
    )
}