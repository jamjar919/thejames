import "babel-polyfill";

import {useEffect, useState} from "react";

const FETCH_MUSIC_URL = "https://thejamespaterson.com/scripts/recent/";

const useMusic = () => {
    const [tracks, setTracks] = useState(undefined);
    const [loadingTracks, setLoading] = useState(true);

    useEffect(() => {
        if (loadingTracks) {
            async function fetchData() {
                const response = await fetch(FETCH_MUSIC_URL);
                const json = await response.json();
                setTracks(json);
                setLoading(false);
            }
            fetchData().then()
        }
    }, [tracks, loadingTracks]);

    return { tracks, loadingTracks };
};

export default useMusic;