import * as C from './App.styles';
import logoImg from './assets/devmemory_logo.png';
import { InfoItem } from './components/infoItem';

const App = () => {
  return (
    <C.Container>
      <C.InfoArea>
        <C.Logo> <img src={logoImg} width="200px" alt="" /></C.Logo>
        <InfoItem label='Timer:' value='00:00'/>
        <InfoItem label='Movimentos:' value='0'/>
        <C.Reiniciar>Reiniciar</C.Reiniciar>
      </C.InfoArea>
      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  );
}

export default App;