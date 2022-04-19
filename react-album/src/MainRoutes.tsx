import { useRoutes } from "react-router-dom";
import { AlbumPage } from "./pages/albums";
import { NoteFound } from "./pages/noteFound";

export const Routes = () => {
    return (
        useRoutes([
            {path:'/', element: <AlbumPage />},
            {path:'*', element: <NoteFound />}
        ])
    );
}