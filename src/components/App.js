import React from 'react';

import ScrollablePanelsContainer from "./containers/ScrollablePanelContainer";
import Aphex from "./videotapes/Aphex";
import Supertape from "./videotapes/Supertape";

import './normalize.scss';
import './app.scss';
import Dynamicron from "./videotapes/Dynamicron";

const App = () => (
    <ScrollablePanelsContainer>
        <Aphex
            title="James"
            subtitle="Paterson"
        />
        <Supertape
            title="Developer"
            subtitle={<a href="https://thejamespaterson.com/cv.pdf">CV</a>}
            subtitleAppendix="Full stack web devel"
            footer="Tripadvisor Exp"
        />
        <Dynamicron
            title={"From across the web"}
            subtitle={"Links"}
            lines={[
                <a href="https://thejamespaterson.com/cv.pdf">CV</a>,
                <a href="https://github.com/jamjar919">Github</a>,
                <a href="https://www.linkedin.com/in/james-paterson-a0114023/">Linkedin</a>,
                <a href="https://stackoverflow.com/users/2453542/james-paterson">StackOverflow</a>,
                <>
                        <a href="https://thejamespaterson.com/scripts">Scripts</a>, or <a href="https://thejamespaterson.com/projects">Projects</a>
                </>
            ]}
        />
    </ScrollablePanelsContainer>
);

export default App;