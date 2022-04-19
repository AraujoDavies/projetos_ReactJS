import { useRoutes } from "react-router-dom";
import { AlbumPage } from "./pages/albums";
import { NoteFound } from "./pages/noteFound";
import { Photos } from "./pages/photos";

export const Routes = () => {
    return (
        useRoutes([
            {path:'/', element: <AlbumPage />},
            {path:'/album/:id', element: <Photos />},
            {path:'*', element: <NoteFound />}
        ])
    );
}