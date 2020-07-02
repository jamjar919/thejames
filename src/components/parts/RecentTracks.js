import React from 'react';
import PropTypes from 'prop-types';

import Album from '../../images/album.svg';

import './css/RecentTracks.scss';

const RecentTracks = ({ tracks, loading }) => (
    <span className="recent-tracks">
        <Album/>
    </span>
);

const trackPropType = PropTypes.shape({
    album: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    timesince: PropTypes.number,
});

RecentTracks.propTypes = {
    tracks: PropTypes.arrayOf(trackPropType),
    loading: PropTypes.bool
};

export default RecentTracks;