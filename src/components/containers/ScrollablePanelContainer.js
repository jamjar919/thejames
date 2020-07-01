import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import ScrollablePanelMenu from "./ScrollablePanelMenu";

import "./css/scrollablePanelContainer.scss";

const PANEL_LOADING_DELAY = 1250; // ms

const ScrollablePanelsContainer = ({ children, withMenu }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [scrollIndex, setScrollIndex] = useState(0);

    useScrollPosition(({ prevPos, currPos }) => {
        const documentHeight = window.innerHeight;
        const scrollPos = -1 * currPos.y;
        const newScrollIndex = Math.floor(Math.abs(scrollPos / documentHeight));

        if (newScrollIndex !== scrollIndex) {
            setIsLoading(true);
            setTimeout(() => {
                setScrollIndex(newScrollIndex);
                setIsLoading(false)
            }, PANEL_LOADING_DELAY);
        }
    }, [scrollIndex, isLoading]);

    const getPanelClassName = (index, isLoading) => {
        const isCurrentPanel = index === scrollIndex;

        // applied when it's the current panel
        const currentPanelClass = isCurrentPanel ? "current-panel" : "";

        // applied when the current panel is animating out
        const fadingPanelClass = (isLoading && isCurrentPanel) ? "fading-panel" : "";

        return ClassNames("fullpage", "panel", currentPanelClass, fadingPanelClass);
    };

    return (
        <>
            { withMenu &&
                <ScrollablePanelMenu
                    numPanels={children.length}
                    activePanel={scrollIndex}
                    onClick={(panelIndex) => { setScrollIndex(panelIndex); }}
                />
            }
            <div className="dummy-panel" /> {/* spacing for the first child */}
            {
                React.Children.map(children, (child, index) => (
                    <div className={getPanelClassName(index, isLoading)}>
                        <div className="centeredContainer">
                            {child}
                        </div>
                    </div>
                ))
            }
        </>
    )
};

ScrollablePanelsContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    withMenu: PropTypes.bool
};

ScrollablePanelsContainer.defaultProps = {
    withMenu: false
};

export default ScrollablePanelsContainer;