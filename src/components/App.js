import React from 'react';
import Glitch from './effects/Glitch';
import Crt from './effects/Crt'

import './normalize.scss';
import './app.scss';

const App = () => (
    <Crt>
        <div className="fullpage">
            <div className="centeredContainer">
                <Glitch>://james paterson</Glitch>
            </div>
        </div>
    </Crt>
);

export default App;