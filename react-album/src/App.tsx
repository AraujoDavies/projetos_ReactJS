//components
import { AlbumItem } from "./components/albumItem";
import { Thumbnails } from "./components/thumbnails";
import { Routers } from "./rotas";

export const App = () => {
  return(
    <>
      <h1 className="pl-2 py-3 font-black text-3xl">Galeria de Fotos</h1>
      <hr/>
      <Routers />
    </>
  );
}

export default App