// exibe a foto em proporções maiores
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Api } from '../Api';
import { LoadPage } from '../components/loading';
import { H2daSection } from '../components/titulo';
import { BtnVoltar } from '../components/voltar';
import { PhotoT } from '../types/photo';

export const PhotoLarge = () => {
    const [photo, setPhoto] = useState<PhotoT>({albumId:0, id:0, title:'', url:'', thumbnailUrl: ''});
    const params = useParams();
    const [loading, setLoading] = useState(false);

    const loadPhoto = async () => {
        setLoading(true);
        let json = (params.idphoto) ? await Api.getPhoto(params.idphoto) : console.log('Error in loadPhoto req');
        setPhoto(json);
        setLoading(false);
    };

    setInterval(()=>{
        console.log(photo.id)
    },1000)

    useEffect(()=>{
        loadPhoto();
    },[params.idphoto])

    return(
        <>
            {loading &&
                <>
                    <BtnVoltar />
                    <LoadPage />
                </>
            }
            
            {!loading &&    
                <>
                    <BtnVoltar />
                    <H2daSection title={photo.title} />
                    <div className='flex items-center'>        
                        <Link to={`/photo/${photo.id - 1}`}>
                            <button className='bg-gray-800 p-2 text-gray-300'>Previous</button>
                        </Link>
                        <img src={photo?.url} alt="" />
                        <Link to={`/photo/${photo.id + 1}`}>
                            <button className='bg-gray-800 p-2 text-gray-300'>Next</button>
                        </Link>
                    </div>
                </>
            }
        </>
    );
}