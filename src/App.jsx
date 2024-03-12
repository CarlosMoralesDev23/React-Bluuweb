import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";


const OnlineText = () =>{
    return <h3>Online</h3>
}

const OfflineText = () => {
    return <h3>Offline</h3>;
};



const App = () => {

    // const pathImg = montañaNevada;
    const user = true

    return (
        <>
            <Header/>
            <Main/>


            {user && <OnlineText />}

        </>
    );
};

export default App;
