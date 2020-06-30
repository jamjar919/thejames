import React from 'react';
import PropTypes from 'prop-types';

import './css/supertape.scss'

const Supertape = ({ title, subtitle, subtitleAppendix, footer }) => (
    <div className="supertape-container">
        <div className="supertape-title">{title}</div>
        <div className="supertape-stripes">
            <div className="supertape-stripe red"/>
            <div className="supertape-stripe green" />
            <div className="supertape-stripe blue" />
        </div>
        <div className="supertape-footer-container">
            <div className="supertape-subtitle">
                <span className="supertape-subtitle-t120">{subtitle}</span>
                <span className="supertape-subtitle-hour">{subtitleAppendix}</span>
            </div>
            <div className="supertape-footer">{footer}</div>
        </div>
    </div>
);

Supertape.propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    subtitleAppendix: PropTypes.node,
    footer: PropTypes.node
};

Supertape.defaultProps = {
    title: "",
    subtitle: "",
    subtitleAppendix: "",
    footer: ""
};


export default Supertape;