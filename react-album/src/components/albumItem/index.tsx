import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api";
//types
import { typeAlbuns } from "../../types/albuns";

export const AlbumItem = () => {
    const [albuns, setAlbuns] = useState<typeAlbuns[]>([]); //array de albuns usado no MAP para listar

    const loadAlbuns = async () => {
        try{
            let json = await Api.getAllAlbuns(); // armazenando dados da requisição
            setAlbuns(json);
        }catch(error){
            setAlbuns([]);
            console.log(error);
        }
    }

    //monitora o state albuns para exibi-lo na tela sempre q o componente for renderizado
    useEffect( () => {
        loadAlbuns()
    }, [])

    return(
        <div>
            <h2 className="font-black pl-2 py-2"> Lista de Albuns: </h2>
    
            <div>
                {albuns.map( (item, index) => ( 
                    <Link to={`/album_${item.id}`}>
                        <div key={index} className="p-1 hover:bg-slate-50 cursor-pointer">
                            <div className="border-2 border-black rounded p-4">
                                <span> {item.title} </span>
                            </div>
                        </div>                    
                    </Link>
                ))}
            </div>
        </div>
    );
}