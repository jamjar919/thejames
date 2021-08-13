import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import ScrollablePanelMenu from "./ScrollablePanelMenu";

import "./css/panelContainer.scss";

const DOCUMENT_HEIGHT = window.innerHeight;

const PanelContainer = ({ children, withMenu }) => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const switchToPanel = (panelId) => {
        if (panelId < children.length) {
            window.scrollTo({
                left: 0,
                top: DOCUMENT_HEIGHT * panelId,
                behavior: 'smooth'
            });
            setScrollIndex(panelId);
        }
    };

    useScrollPosition(({currPos}) => {
        const scrollPos = -1 * currPos.y;
        const newScrollIndex = Math.floor(Math.abs(scrollPos / DOCUMENT_HEIGHT));

        if (newScrollIndex !== scrollIndex) {
            setScrollIndex(newScrollIndex);
        }
    }, [scrollIndex], null, true, 0);

    return (
        <>
            {withMenu &&
                <ScrollablePanelMenu
                    numPanels={children.length}
                    activePanel={scrollIndex}
                    onClick={(panelIndex) => {
                        switchToPanel(panelIndex);
                    }}
                />
            }
            {
                /* Includes stupid hack to fix text overflowing in SuperColor */
                React.Children.map(children, (child, index) => (
                    <>
                        <div className={ClassNames(index !== 1 && "fullpage", "panel", "current-panel")}>
                            <div className="centeredContainer">
                                {child}
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    )
};

PanelContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    withMenu: PropTypes.bool
};

PanelContainer.defaultProps = {
    withMenu: false
};

export default PanelContainer;