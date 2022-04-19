import { useEffect, useState } from 'react' 
import { useParams, useNavigate } from "react-router-dom";
import { Api } from "../Api";
import { PhotoT } from "../types/photo";

export const Photos = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [photos, setPhotos] = useState<PhotoT []>([]);

    const LoadPhotos = async () => {
        let json = (params.id) ? await Api.getAllPhotos(params.id) : console.log('LoadPhotos error in req')
        setPhotos(json)
    };

    const backLastPage = () => {
        navigate(-1);
    };
    
    useEffect(()=>{
        LoadPhotos();
    },[])
    return(
        <>
            <button onClick={backLastPage}>Voltar</button>
            {photos.map( (item, index)=>(
                <div key={index}>
                    {item.title}
                </div>
            ))
            }
        </>
    );
}