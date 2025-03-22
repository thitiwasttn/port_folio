'use client'
import './DownloadCv.css'
import {getLinkCV} from "@/component/home_component/ProfileService";

export default function DownloadCvComponent() {
    const linkCV: string = getLinkCV();

    function downloadCV() {
        const newWindow = window.open(linkCV, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return <>
        <button id="bottone5" onClick={downloadCV}>Download CV</button>
    </>
}