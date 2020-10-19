import PropTypes from "prop-types";

export default PropTypes.shape({
    album: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    timesince: PropTypes.any,
});