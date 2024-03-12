import PropTypes from "prop-types";

export const Button = ({ text, edad }) => {
    return (
        <button>
            {" "}
            {text} - {edad}{" "}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    edad: PropTypes.string.isRequired,
};
