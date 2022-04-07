import * as C from './App.styles';
import logoImg from './assets/devmemory_logo.png';

const App = () => {
  return (
    <C.Container>
      <C.InfoArea>
        <C.Logo> <img src={logoImg} width="200" alt="" /></C.Logo>
        <C.InfoTimer>12:12</C.InfoTimer>
        <C.Reiniciar>Reiniciar</C.Reiniciar>
      </C.InfoArea>
      <C.GridArea>

      </C.GridArea>
    </C.Container>
  );
}

export default App;