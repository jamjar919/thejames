import React from 'react';

import PanelContainer from "./containers/PanelContainer";
import Aphex from "./videotapes/Aphex";
import Supertape from "./videotapes/Supertape";
import Dynamicron from "./videotapes/Dynamicron";
import SuperColor from "./videotapes/SuperColor";
import RecentTracks from "./parts/RecentTracks";

import useMusic from "../hooks/useMusic";

import './normalize.scss';
import './app.scss';

const App = () => {
    const { tracks, loadingTracks } = useMusic();

    return (
        <PanelContainer withMenu>
            <Aphex
                title="James"
                subtitle="Paterson"
            />
            <SuperColor
                title="About"
                subtitle="bit of a shameless plug"
                content={
                    <>
                        <h3>Hiya!</h3>
                        <p>
                            I'm James, a full stack web developer living in Oxford, UK.
                            My areas of expertise are <strong>React</strong>, <strong>Typescript</strong>, <strong>SCSS</strong>, <strong>Responsive Web Design</strong>, and working with <strong>asynchronous Javascript</strong>.
                            I've also worked with plenty of backend tech like Node, Java Spring, PHP, and more. Check out my <a href={"https://github.com/jamjar919"} target="_blank">Github</a> for examples of things that I've built in the past.
                        </p>
                        <p>
                            I'm currently working at Tripadvisor Experiences. You can find links to my CV and LinkedIn
                            at the bottom of the page.
                        </p>
                    </>
                }
                stripes={[
               /*     <div>EffBee Analyser</div>,
                    <div>Spotify Graph Explorer</div>,
                    <div>FeelFit Gym Member Count</div>,
                    <div>Julia Set Viewer</div> */
                ]}
            />
            <Supertape
                title="Developer"
                subtitle={<RecentTracks tracks={tracks} loading={loadingTracks} />}
                subtitleAppendix="Full stack web devel"
                footer="Tripadvisor Exp"
            />
            <Dynamicron
                title={"From across the web"}
                subtitle={"Links"}
                lines={[
                    <a href="https://thejamespaterson.com/cv.pdf">CV</a>,
                    <a href="https://github.com/jamjar919">Github</a>,
                    <a href="https://www.linkedin.com/in/%F0%9F%92%BB-james-paterson-a0114023/">Linkedin</a>,
                    <a href="https://stackoverflow.com/users/2453542/james-paterson">StackOverflow</a>,
                    <>
                        <a href="https://thejamespaterson.com/scripts">Scripts</a>, or <a href="https://thejamespaterson.com/projects">Projects</a>
                    </>
                ]}
            />
        </PanelContainer>
    );
};

export default App;