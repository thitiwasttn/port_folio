import Image from "next/image";
import ProfileInfoComponent from "@/component/home_component/ProfileInfoComponent";
import ContentComponent from "@/component/home_component/ContentComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import {getLastUpdate} from "@/component/home_component/ProfileService"; // Import bootstrap CSS

export default function Home() {
    const lastUpdate = getLastUpdate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 height-100 p-4">
                        <ProfileInfoComponent/>
                    </div>
                    <div className="col-md-9 height-100 p-4">
                        <ContentComponent/>
                    </div>


                </div>

                <footer className={"col-12"}>
                    <small>
                        Last update {lastUpdate}
                    </small>
                </footer>
            </div>


        </>
    );
}
