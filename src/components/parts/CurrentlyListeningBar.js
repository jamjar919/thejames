import React from "react";
import trackProptype from "./trackProptype";

import './css/CurrentlyListeningBar.scss';

export const CurrentlyListeningBar = ({ track }) => (
    <div className="currently-listening">
        <div className="currently-listening-album">
            <img src={track.image} alt={track.album} />
        </div>
        <div className="currently-listening-scroller">
            {`${track.name} - ${track.artist}`}
        </div>
    </div>
);

CurrentlyListeningBar.propTypes = {
    track: trackProptype
};