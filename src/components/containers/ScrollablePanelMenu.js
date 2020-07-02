import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './css/scrollablePanelMenu.scss'

const ScrollablePanelMenu = ({ numPanels, activePanel, loadingPanel, onClick }) => {

    const range = [...Array(numPanels).keys()];

    return (
        <nav className="scrollable-panel-menu">
            <ul>
                {
                    range.map((index) => (
                        <li key={index} className={ClassNames(
                            index === activePanel ? "selected" : "",
                            index === loadingPanel ? "loading" : ""
                        )}>
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
    loadingPanel: PropTypes.number,
    onClick: PropTypes.func,
};

ScrollablePanelMenu.defaultProps = {
    numPanels: 0,
    activePanel: null,
    loadingPanel: null,
    onClick: () => {}
};

export default ScrollablePanelMenu;

