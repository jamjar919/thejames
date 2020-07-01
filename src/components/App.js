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
        <Dynamicron />
    </ScrollablePanelsContainer>
);

export default App;