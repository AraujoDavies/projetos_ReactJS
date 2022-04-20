//nome dos albuns com borda em volta
import { Link } from 'react-router-dom';

// Recebe ID do album e o título via PROPS
type Props = {
    id: string,
    title: string
}

export const AlbumList = ( {id, title}: Props ) => {
    return(
        <Link to={`/album/${id}`}>
            <div className="border-2 border-black rounded mb-2 cursor-pointer hover:bg-slate-50">
                <div className="p-2 text-center">
                    <span>
                        {title}
                    </span>
                </div>
            </div>
        </Link>       
    )
}