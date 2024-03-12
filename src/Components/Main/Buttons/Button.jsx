import PropTypes from "prop-types";

export const Button = ({ text, edad }) => {

    const handleClick = (text)=>{
        console.log(`Handle Click ${text}`)
    }
    return (
        <button onClick={()=>handleClick(text)}>
            {" "}
            {text} - {edad}{" "}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    edad: PropTypes.string.isRequired,
};
