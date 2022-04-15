//components
import { AlbumItem } from "./components/albumItem";
import { Thumbnails } from "./components/thumbnails";

export const App = () => {
  return(
    <>
      <h1 className="pl-2 py-3 font-black text-3xl">Galeria de Fotos</h1>
      <hr/>
      <AlbumItem />
    </>
  );
}

export default App