// thumbnails, fotos pequenas de um album
type Props = {
    photo: string
}

export const PhotoThumb = ({photo}: Props) => {
    return(
        <div className='border-2 border-black p-4'>
            <img src={photo} alt="Thumbnail"/>
        </div>
    );
}