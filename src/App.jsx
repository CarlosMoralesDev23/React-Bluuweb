import { Fragment } from "react";

const Button = () => {

    return <button> I am a button </button>;
};

const OnlineText = () =>{
    return <h3>Online</h3>
}

const OfflineText = () => {
    return <h3>Offline</h3>;
};

const App = () => {
    const title = `Mi titulo desde una constante`;
    const classTitle = "text-center";
    const pathImg = "https://picsum.photos/seed/picsum/200/300";
    const user = true

    return (
        <Fragment>
            <h1 className={classTitle}>{title}</h1>
            <img src={pathImg} alt="montaña nevada" />
            <Button/>
            {
                user ? <OnlineText/> : <OfflineText/>
            }
        </Fragment>
    );
};

export default App;
