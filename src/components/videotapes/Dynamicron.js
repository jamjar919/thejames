import React from 'react';
import PropTypes from 'prop-types';

import './css/dynamicron.scss';

const Dynamicron = () => (
    <div className="dynamicron-whitebox">
        <div className="dynamicron-container">
            <header className="dynamicron-header">
                <div className="dynamicron-title">Dynamicron</div>
                <div className="dynamicron-subtitle">E-180</div>
            </header>
            <div className="dynamicron-stripes">
                <div className="dynamicron-stripe yellow"/>
                <div className="dynamicron-stripe red"/>
                <div className="dynamicron-stripe crimson"/>
                <div className="dynamicron-stripe sunset"/>
                <div className="dynamicron-stripe purple"/>
            </div>
        </div>
    </div>
);

export default Dynamicron;