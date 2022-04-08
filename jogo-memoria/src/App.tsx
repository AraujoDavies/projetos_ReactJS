import * as C from './App.styles';
import logoImg from './assets/devmemory_logo.png';
import { Button } from './components/button';
import { InfoItem } from './components/infoItem';
import resetImg from "./svgs/restart.svg";

const App = () => {
  const resetGame = () => {
    alert('kkk')
  }

  
  return (
    <C.Container>
      <C.InfoArea>
        <C.Logo> <img src={logoImg} width="200px" alt="" /></C.Logo>
        <InfoItem label='Timer:' value='00:00'/>
        <InfoItem label='Movimentos:' value='0'/>
        <Button label='Reiniciar' icon={resetImg} onClick={resetGame} />
      </C.InfoArea>
      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  );
}

export default App;