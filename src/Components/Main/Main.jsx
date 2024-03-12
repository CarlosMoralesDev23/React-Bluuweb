import { Button } from "./Buttons/Button";
import { ImagenMontaña } from "./Imagen/ImageMontaña"
import { ItemFruit } from "./Lista/ItemFruit";


const fruits = ["🍉", "🥥", "🍇"];

export const Main = ()=>{
    return (
        <>
            <ImagenMontaña />
            <Button text="botón 2" edad="10" />
            <Button text="botón 3" edad="10" />
            <Button text="botón 1" edad="10" />
            <ul>
                {fruits.map((fruit, index) => (
                    <ItemFruit key={index} fruit={fruit} />
                ))}
            </ul>
        </>
    );
}