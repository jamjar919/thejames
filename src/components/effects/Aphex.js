import React from 'react';
import PropTypes from 'prop-types';

import './css/aphex.scss';

const Aphex = props => (
    <div className="aphex-container">
        <header className="aphex-header">
            <div className="aphex-title">{props.title}</div>
            <div className="aphex-subtitle">{props.subtitle}</div>
        </header>
        <div className="aphex-stripes">
            <div className="aphex-stripe yellow" />
            <div className="aphex-stripe orange" />
            <div className="aphex-stripe red" />
            <div className="aphex-stripe purple" />
            <div className="aphex-stripe blue" />
            <div className="aphex-stripe green" />
        </div>
    </div>
);

Aphex.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Aphex;