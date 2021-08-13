import React from 'react';
import PropTypes from "prop-types";

import "./css/supercolor.scss";

const getStripeContent = (stripes, stripeId) => (
    <span className="supercolor-stripe-content">
        {stripes[stripeId] || null}
    </span>
)

const SuperColor = ({ title, subtitle, content, stripes }) => (
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
                <div className="supercolor-stripe blue">{getStripeContent(stripes, 0)}</div>
                <div className="supercolor-stripe green">{getStripeContent(stripes, 1)}</div>
                <div className="supercolor-stripe yellow">{getStripeContent(stripes, 2)}</div>
                <div className="supercolor-stripe orange">{getStripeContent(stripes, 3)}</div>
                <div className="supercolor-stripe red">{getStripeContent(stripes, 4)}</div>
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
    stripes: PropTypes.arrayOf(PropTypes.node)
};

SuperColor.defaultProps = {
    title: "",
    subtitle: "",
    content: "",
    stripes: []
};



export default SuperColor;

