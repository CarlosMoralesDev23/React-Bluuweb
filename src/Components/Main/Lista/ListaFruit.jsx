import { ItemFruit } from "./ItemFruit";



export const ListaFruit = ({fruits})=>{
    return (
        <>
            <ul>
                {fruits.map((fruit, index) => (
                    <ItemFruit key={index} fruit={fruit} />
                ))}
            </ul>
        </>
    );
}