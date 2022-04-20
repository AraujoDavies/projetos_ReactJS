// exibe a foto em proporções maiores
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../Api';
import { H2daSection } from '../components/titulo';
import { BtnVoltar } from '../components/voltar';
import { PhotoT } from '../types/photo';

export const PhotoLarge = () => {
    const [photo, setPhoto] = useState<PhotoT>({albumId:0, id:0, title:'', url:'', thumbnailUrl: ''});
    const params = useParams();

    const loadPhoto = async () => {
        let json = (params.idphoto) ? await Api.getPhoto(params.idphoto) : console.log('Error in loadPhoto req');
        setPhoto(json);
    };

    useEffect(()=>{
        loadPhoto();
    },[])

    return(
        <>
            <BtnVoltar />
            <H2daSection title={photo.title} />
            <img src={photo?.url} alt="" />
        </>
    );
}