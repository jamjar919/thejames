import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import Radio from '../../images/radio.svg';
import trackProptype from "./trackProptype";
import {CurrentlyListeningBar} from "./CurrentlyListeningBar";

import './css/RecentTracks.scss';

const THRESHOLD = 60 * 10; // seconds
const isCurrentlyPlaying = (track) => track && (track.timesince === "zero" || track.timesince < THRESHOLD);

const RecentTracks = ({ tracks }) => {
    const [inHover, setHover] = useState(false);

    const mostRecentTrack = tracks ? tracks[0] : null;
    const currentlyListening = isCurrentlyPlaying(mostRecentTrack);

    return (
        <>
            <span className={ClassNames("recent-tracks", currentlyListening ? "currently-listening-icon" : "")}>
                <Radio
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                />
            </span>
            {currentlyListening && inHover ? <CurrentlyListeningBar track={mostRecentTrack} /> : null }
        </>
    );
};

RecentTracks.propTypes = {
    tracks: PropTypes.arrayOf(trackProptype),
    loading: PropTypes.bool
};

export default RecentTracks;