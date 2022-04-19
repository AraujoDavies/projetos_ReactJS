import { Routes } from "./MainRoutes";

export const App = () => {
  return(
    <div>
      <h1 className="font-black text-3xl p-4">Galeria de Fotos</h1>
      <hr/>
      <section className="p-4">
        <Routes />
      </section>
    </div>
  );
}

export default App