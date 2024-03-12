import { Button } from "./Buttons/Button";
import { ImagenMontaña } from "./Imagen/ImageMontaña"
import { ListaFruit } from "./Lista/ListaFruit";
import { Welcome } from "./Welcome/Welcome";

const user = false;

export const Main = ()=>{
    return (
        <>
            <Welcome user = {user} />
            <ImagenMontaña />
            <Button text="botón 2" edad="10" />
            <Button text="botón 3" edad="10" />
            <Button text="botón 1" edad="10" />
            <ListaFruit/>
        </>
    );
}