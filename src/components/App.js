import React from 'react';

import Aphex from "./effects/Aphex";

import './normalize.scss';
import './app.scss';

const App = () => (
    <div className="fullpage">
        <div className="centeredContainer">
            <Aphex
                title={"Aphex"}
                subtitle={"Videocassette"}
            />
        </div>
    </div>
);

export default App;