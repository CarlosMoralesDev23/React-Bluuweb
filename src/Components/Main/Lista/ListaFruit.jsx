import { ItemFruit } from "./ItemFruit";

const fruits = ["🍉", "🥥", "🍇"];


export const ListaFruit = ()=>{
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