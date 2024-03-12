
const OnlineText = () => {
    return <h3>Online</h3>;
};

const OfflineText = () => {
    return <h3>Offline</h3>;
};

const user = true;

export const MensajeCondicional =()=>{
    return user && <OnlineText />
}