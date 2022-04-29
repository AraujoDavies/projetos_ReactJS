import { useEffect, useState } from "react";
import loadIcon from "../assets/load.png"

export const LoadPage = () => {
    const [rotate, setRotate] = useState('rotate-0')

    const changeRotate = () => {
        setTimeout(()=>{
            switch(rotate){
                case 'rotate-0':
                    setRotate('rotate-90');
                break;
                case 'rotate-90':
                    setRotate('rotate-180');
                break;
                case 'rotate-180':
                    setRotate('-rotate-90');
                break;
                case '-rotate-90':
                    setRotate('rotate-0');
                break;
            }
        },300)

        return rotate;
    };

    useEffect(()=>{
        changeRotate();
    },[rotate])

    return (
        <div className="min-h-screen w-full flex justify-center items-center ">
            <img className={`${changeRotate()} h-20 w-20 mb-28`} src={loadIcon} alt="" />
        </div>
    );
}