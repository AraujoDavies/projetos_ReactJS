// exibe as thumbnails
import { useEffect, useState } from 'react' 
import { useParams, Link } from "react-router-dom";
import { Api } from "../Api";

import { PhotoT } from "../types/photo";
import { AlbumT } from "../types/album";

import { PhotoThumb } from '../components/photoThumb';
import { BtnVoltar } from '../components/voltar';
import { H2daSection } from '../components/titulo';

export const Photos = () => {
    const params = useParams(); // parametros da URL
    const [photos, setPhotos] = useState<PhotoT[]>([]); // armazena as fotos
    const [albumName, setAlbumName] = useState<AlbumT>({userId: 0, id: 0, title:''}); //armazena o album

    //reqs
    const LoadPhotos = async () => {
        let json = (params.id) ? await Api.getAllPhotos(params.id) : console.log('LoadPhotos error in req');
        setPhotos(json);
    };
    const LoadAlbum = async () => {
        let name = (params.id) ? await Api.getAlbum(params.id) : console.log('LoadAlbumName error in req');
        setAlbumName(name);
    }
    // renderiza ao abrir
    useEffect(()=>{
        LoadPhotos();
        LoadAlbum();
    },[])
    return(
        <>
            <BtnVoltar /> 
            <H2daSection title={albumName?.title} />
            <div className="grid grid-cols-7 gap-4">
                {photos.map( (item, index)=>(
                    <Link key={index} to={`/photo/${item.id}`}>                        
                        <PhotoThumb photo={item.thumbnailUrl}/>
                    </Link>                    
                ))
                }
            </div>
            
        </>
    );
}