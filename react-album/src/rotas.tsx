import { useRoutes } from "react-router-dom";
import { AlbumItem } from "./components/albumItem";
import { NoteFound } from "./components/notefound";
import { PhotoGrande } from "./components/photoGrande";
import { Thumbnails } from "./components/thumbnails";

export const Routers = () => {
    return (
        useRoutes([
            {path:"/", element:<AlbumItem />},
            {path:"/album_:album_id", element:<Thumbnails />}, //:nome da CHAVE
            {path:"/album_:album_id/photo_:photo_url", element:<PhotoGrande />},
            {path:"*", element:<NoteFound />}
        ])
    );
};