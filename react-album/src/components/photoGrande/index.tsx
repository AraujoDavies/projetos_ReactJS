import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Api } from '../../api';
import { Thumb } from '../../types/thumbnail';

export const PhotoGrande = () => {
    // pegando parametros da URL
    const params = useParams();
    // state que armazena a PHOTO GRANDE da requisição
    const [photo, setPhoto] = useState<Thumb>();
    // requisição 
    const [requisicao, setRequisicao] = useState<Boolean>(false);
    const LoadPhoto =  async () => {
        // Pegando URL da foto que foi clicada:
        let photoId = (params.photo_url != undefined) ? parseInt(params.photo_url) : 0; 
        // pega foto pelo ID no array da requisição
        photoId = photoId - 1; 
        // req and set
        try{
            let json = await Api.getAllPhotos();
            setPhoto(json[photoId]);
            // se a requisição ocorreu então eu guardo isso no STATE
            (json.length > 1) ? setRequisicao(true) : setRequisicao(false);
        } catch(e){
            console.log(e);
            setPhoto(undefined);
        }   
    }

    useEffect(()=>{
        LoadPhoto();
    },[])
    
    return(
        <div className='p-2'>
            <Link to={`/album_${params.album_id}`}>
                <button className="bg-blue-200 rounded p-2  m-2">
                Voltar
                </button>
            </Link>
            {photo != undefined &&
                <>
                    <h2>{photo.title}</h2>
                    <img src={`${photo.url}`} alt="" width="400px" />
                </>
            }
        </div>
    );
}