
const title = `Mi titulo desde una constante y componente`;
const classTitle = "text-center";


export const Header = ()=>{
    return <h1 className={classTitle}>{title}</h1>;
}