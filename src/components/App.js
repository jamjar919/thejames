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
                subtitle="shameless plug"
                content={
                    <p>Example text</p>
                }
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