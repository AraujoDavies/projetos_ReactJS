// Primeira página, lista albums.
import React, { useEffect, useState } from "react";
import { Api } from "../Api";
import { AlbumList } from "../components/albumList";
import { AlbumT } from "../types/album";
import { LoadPage } from "../components/loading";

export const AlbumPage = () => {
    const[albums, setAlbums] = useState<AlbumT[]>([]) // state q armazena TODOS os dados da requisição
    const[loading, setLoading] = useState(false); // carregando...

    const LoadAlbums = async () => {
        setLoading(true);
        let json = await Api.getAllAlbums(); // faz a requisição de todos albuns
        setAlbums(json); // armazena no State
        setLoading(false);
    }
    
    useEffect(()=>{
        LoadAlbums();// carrega ao renderizar pagina
    },[])

    return(
        <div>
            {loading &&
                <LoadPage />
            }

            {!loading &&
                <>
                {albums.map( (item, index) => (  /*carrega todos os itens*/
                    <div key={index}> 
                        <AlbumList id={item.id.toString()} title={item.title}/>
                    </div>
                ))}
                </>
            }
        </div>
    );
}