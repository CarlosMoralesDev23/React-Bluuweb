import { Fragment } from "react";
import montañaNevada from "./assets/images/montaña-nevada.jpg"
import PropTypes from "prop-types"


const Button = ({ text, edad }) => {

    return <button> {text} - {edad} </button>;

};

Button.propTypes = {
    text : PropTypes.string.isRequired,
    edad : PropTypes.string.isRequired
}

const OnlineText = () =>{
    return <h3>Online</h3>
}

const OfflineText = () => {
    return <h3>Offline</h3>;
};

const ItemFruit = (props)=>{
    return <li>{props.fruit}</li>;
}

const fruits = ['🍉', '🥥', '🍇']

const App = () => {
    const title = `Mi titulo desde una constante`;
    const classTitle = "text-center";
    // const pathImg = montañaNevada;
    const user = true

    return (
        <Fragment>
            <h1 className={classTitle}>{title}</h1>
            <img src={montañaNevada} alt="montaña nevada" />
            <Button text='botón 2' edad ='10' />
            <Button text='botón 3' edad ='10' />
            <Button text='botón 1' edad ='10' />

            {user && <OnlineText />}
            <ul>
                {fruits.map((fruit, index)=>(
                    <ItemFruit key={index} fruit={fruit} />
                ))}
            </ul>
        </Fragment>
    );
};

export default App;
