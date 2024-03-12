
export const Welcome =({user})=>{
    return <>{user ? <h3>Online</h3> : <h3>Offline</h3>}</>;
}