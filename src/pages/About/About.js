import React from "react";
import MissionVision from "./components/MissionVision";
import PressReleases from "./components/PressReleases";
import AboutIntro from "./components/AboutIntro";

function About() {
    return (
        <div>
            <div>
                <AboutIntro />
                <MissionVision />
                <PressReleases />
            </div>
        </div>
    );
}

export default About;