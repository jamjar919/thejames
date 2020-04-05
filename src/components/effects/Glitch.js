import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import './css/glitch.scss';

const REFRESH = 100;
const MIN_CLIP = 50;
const MAX_TRANSFORM = 20;

const getFloatInRange = (min, max) =>  Math.random() * (max - min) + min

const OverlayGlitch = props => {
    const {
        width,
        height,
        children,
        ref
    } = props;

    const style = {
        clip: `rect(${getFloatInRange(MIN_CLIP, height)}px,${getFloatInRange(MIN_CLIP, width)}px, ${getFloatInRange(MIN_CLIP, height)}px, ${getFloatInRange(MIN_CLIP, width)}px)`,
        transform: `translate(${getFloatInRange(-MAX_TRANSFORM, MAX_TRANSFORM)}px, ${getFloatInRange(-MAX_TRANSFORM, MAX_TRANSFORM)}px)`,
        opacity: getFloatInRange(0.25, 1)
    }
    return (
        <div className="overlay" style={style} ref={ref}>{children}</div>
    );
};

class Glitch extends React.Component {

    constructor() {
        super();
        this.contentRef = React.createRef();
        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        this.setState({
            width: this.contentRef.current.offsetWidth,
            height: this.contentRef.current.offsetHeight
        });

        setInterval(() => {
            this.forceUpdate();
        }, REFRESH);
    }

    render() {
        const { children } = this.props;
        const { width, height } = this.state;
    
        const glitches = [];
        for(let i = 0; i < getFloatInRange(0, 5); i++) {
            glitches.push(
                <OverlayGlitch key={uuid()} width={width} height={height}>{children}</OverlayGlitch>
            );
        }

        return (
            <div className="glitch">
                {glitches}
                <div className="content" ref={this.contentRef}>{children}</div>
            </div>
        );
    }
}

Glitch.propTypes = {
    children: PropTypes.node.isRequired
}

export default Glitch;