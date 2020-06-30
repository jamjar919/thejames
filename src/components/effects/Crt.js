import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './css/crt.scss';

const Crt = props => {
    const [off, setOff] = useState(false);

    return (
        <div className={ClassNames("crt", off ? "off" : "")} onClick={() => setOff(!off)}>
            {props.children}
        </div>
    );
};

Crt.propTypes = {
    children: PropTypes.node.isRequired
};

export default Crt;