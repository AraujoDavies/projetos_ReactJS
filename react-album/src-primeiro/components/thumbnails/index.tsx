import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Api } from "../../api";
import { Thumb } from '../../types/thumbnail';

export const Thumbnails = () => {
    // armazena as imagens
    const [thumbnails, setThumbnails] = useState<Thumb[]>([]);
    // auxilia function que verifica a URL
    const [urlOk, setUrlOk] = useState<Boolean>(true)
    // pegando valor da URL
    const params = useParams();
    // nome do album
    const [albumName, setAlbumName] = useState('');
    // carrega API e filtra o album de acordo com a URL
    const loadingThumbs = async () => {
        try{
            let json = await Api.getAllPhotos()
            let filterAlbum: Thumb[] = [];
            json.forEach((item: Thumb)=> {
                if (item.albumId.toString() == params.album_id){
                    filterAlbum.push(item);
                }        
            })
            setThumbnails(filterAlbum);
            // verifica URL com tamanho do filterAlbum(QUANTIDADE DE ITENS EXIBIDOS) que é dinâmico
            verifyUrl(filterAlbum.length);
        } catch(e){
            console.log(e)
            setThumbnails([]);
            verifyUrl(0);
        }
    }

    //redireciona para o NoteFound se não existirem itens no State
    const verifyUrl = (value: number) => {
        // se thumnails sem itens para exibir, URL não OK (FALSE)
        if (value < 1) {
            setUrlOk(false);
        }    
    }
    // passa o nome do Album para ser exibido na tela
    const loadingAlbumName = async () => {
        try{
            let json = await Api.getAllAlbuns(); // armazenando dados da requisição
            let albumID = (params.album_id != undefined) ? parseInt(params.album_id) : 0;
            setAlbumName(json[albumID - 1].title);
        }catch(error){
            setAlbumName('');
            console.log(error);
        }
    }
    // renderiza as informações
    useEffect(()=>{
        loadingThumbs();
        loadingAlbumName();
    },[])
    
    return (
        <div className="p-2 " >
            {urlOk &&
            <>
                <Link to="/"> <button className="bg-blue-200 rounded p-2  m-2">Voltar</button> </Link>
                <h2>{albumName}</h2>
                <div className="grid grid-cols-5 gap-6">
                    {thumbnails.map ((item, index) => (
                        <Link to={`photo_${item.id}`}>        
                            <div key={index} className="cursor-pointer border-2 rounded border-black p-5">
                                <img  src={item.thumbnailUrl} alt="" width="200px" />  
                                <span> {item.title}</span> 
                            </div>        
                        </Link>
                    ))
                    }
                </div>
            </>
            }
            {!urlOk &&
            <>
                <Link to="/"> <button className="bg-blue-200 rounded p-2  m-2">Voltar</button> </Link>
                <h3 className="p-10 text-4xl">
                    Album não Encontrado D:
                </h3>
            </>
            }
        </div>
    );
}