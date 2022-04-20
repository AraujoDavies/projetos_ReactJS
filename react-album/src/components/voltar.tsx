// botão voltar
import { useNavigate } from "react-router-dom";

export const BtnVoltar = () => {
    const navigate = useNavigate();
    
    const backLastPage = () => {
        navigate(-1);
    };

    return(
        <button className='p-2 m-2 bg-blue-900 text-slate-200 rounded'
        onClick={backLastPage}> Voltar </button>
    );
}