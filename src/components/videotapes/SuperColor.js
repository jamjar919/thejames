import React from 'react';
import PropTypes from "prop-types";

import "./css/supercolor.scss";

const SuperColor = ({ title, subtitle, content }) => (
    <div className="supercolor-container">
        <div className="supercolor-header">
            <h1 className="supercolor-title">{title}</h1>
            <div className="supercolor-top-strip-container">
                <div className="supercolor-top-strip red" />
                <div className="supercolor-top-strip green" />
                <div className="supercolor-top-strip blue" />
            </div>
            <h2 className="supercolor-subtitle">{subtitle}</h2>
        </div>
        <div className="supercolor-main">
            <div className="supercolor-stripes">
                <div className="supercolor-stripe blue"/>
                <div className="supercolor-stripe green" />
                <div className="supercolor-stripe yellow" />
                <div className="supercolor-stripe orange" />
                <div className="supercolor-stripe red" />
            </div>
            <div className="supercolor-content">
                {content}
            </div>
        </div>
    </div>
);

SuperColor.propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    content: PropTypes.node,
};

SuperColor.defaultProps = {
    title: "",
    subtitle: "",
    content: "",
};



export default SuperColor;

