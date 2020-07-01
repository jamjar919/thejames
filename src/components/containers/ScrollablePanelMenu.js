import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './css/scrollablePanelMenu.scss'

const ScrollablePanelMenu = ({ numPanels, activePanel, onClick }) => {

    const range = [...Array(numPanels).keys()];

    return (
        <nav className="scrollable-panel-menu">
            <ul>
                {
                    range.map((index) => (
                        <li key={index} className={index === activePanel ? "selected" : ""}>
                            <button onClick={() => { onClick(index) }} />
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

ScrollablePanelMenu.propTypes = {
    numPanels: PropTypes.number,
    activePanel: PropTypes.number,
    onClick: PropTypes.func,
};

ScrollablePanelMenu.defaultProps = {
    numPanels: 0,
    activePanel: null,
    onClick: () => {}
};

export default ScrollablePanelMenu;

