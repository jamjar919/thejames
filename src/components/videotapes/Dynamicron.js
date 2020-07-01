import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './css/dynamicron.scss';

const Dynamicron = ({ title, subtitle, lines }) => (
    <div className="dynamicron-whitebox">
        <div className="dynamicron-container">
            <header className="dynamicron-header">
                <div className="dynamicron-title">{title}</div>
                <div className="dynamicron-subtitle">{subtitle}</div>
            </header>
            <div className="dynamicron-stripes">
                {
                    lines.map((line, index) => (
                        <div key={getStripeColor(index)} className={ClassNames("dynamicron-stripe", getStripeColor(index))}>
                            {line}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
);

const getStripeColor = index => {
    return ["yellow", "red", "crimson", "sunset", "purple"][index];
};

Dynamicron.propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lines: PropTypes.arrayOf(PropTypes.node)
};

export default Dynamicron;