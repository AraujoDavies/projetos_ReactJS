// Primeira página, lista albums.
import { useEffect, useState } from "react";
import { Api } from "../Api";
import { AlbumList } from "../components/albumList";
import { AlbumT } from "../types/album";

export const AlbumPage = () => {
    const[albums, setAlbums] = useState<AlbumT[]>([]) // state q armazena os dados

    const LoadAlbums = async () => {
        let json = await Api.getAllAlbums(); // faz a requisição de todos albuns
        setAlbums(json) // armazena no State
    }

    useEffect(()=>{
        LoadAlbums();// carrega ao renderizar pagina
    },[])

    return(
        <div>
            {/*carrega todos os itens*/}
            {albums.map( (item, index) => (
                <div key={index}> 
                    <AlbumList id={item.id.toString()} title={item.title}/>
                </div>
            ))}
        </div>
    );
}