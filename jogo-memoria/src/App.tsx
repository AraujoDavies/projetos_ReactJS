import { useEffect, useState } from 'react';
import * as C from './App.styles';
// imgs e svgs
import logoImg from './assets/devmemory_logo.png';
import resetImg from "./svgs/restart.svg";
// components
import { Button } from './components/button';
import { InfoItem } from './components/infoItem';
// types
import { GridItem } from './types/gridItemType';

const App = () => {
  const[playing, setPlaying] = useState<boolean>(false) //saber se o jogo foi iniciado
  const[timer, setTimer] = useState<number>(0) //saber tempo corrido
  const[moveCount, setMoveCount] = useState<number>(0) //saber quantidade de movimentos
  const[showCount, setShowCount] = useState<number>(0) //saber quantidade de itens que estão ativos
  const[gridItem, setGridItem] = useState<GridItem[]>([]) //saber oq acontece com as cartas 

  useEffect(()=>resetAndCreate(), []) //reset o game ao carregar site
  const resetAndCreate = () => {
    
  }

  return (
    <C.Container>
      <C.InfoArea>
        <C.Logo> <img src={logoImg} width="200px" alt="" /></C.Logo>
        <InfoItem label='Timer:' value='00:00'/>
        <InfoItem label='Movimentos:' value='0'/>
        <Button label='Reiniciar' icon={resetImg} onClick={resetAndCreate} />
      </C.InfoArea>
      <C.GridArea>
        <C.Grid></C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;