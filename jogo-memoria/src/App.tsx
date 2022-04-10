import { useEffect, useState } from 'react';
import * as C from './App.styles';
// imgs e svgs
import logoImg from './assets/devmemory_logo.png';
import resetImg from "./svgs/restart.svg";
// components
import { Button } from './components/button';
import { InfoItem } from './components/infoItem';
import { GridItem } from './components/gridItem';
// types
import { GridItemType } from './types/gridItemType';
// dados
import { items } from './data/items'
//helpers
import { formatMinutes } from './helpers/timerInMinutes';

const App = () => {
  const[playing, setPlaying] = useState<boolean>(false) //saber se o jogo foi iniciado
  const[timer, setTimer] = useState<number>(0) //saber tempo corrido
  const[moveCount, setMoveCount] = useState<number>(0) //saber quantidade de movimentos
  const[showCount, setShowCount] = useState<number>(0) //saber quantidade de itens que estão ativos
  const[gridItem, setGridItem] = useState<GridItemType[]>([]) //saber oq acontece com as cartas 

  //começa o jogo ao carregar o site
  useEffect(()=>resetAndCreate(), []) 

  // minutos
  useEffect(()=>{
    const tempoSec = setInterval(()=>{
      setTimer(timer + 1);
    },1000);
    return () => clearInterval(tempoSec)
  },[timer, playing]); 

  // verificar se os cartões virados são iguais
  useEffect(()=>{
    if(showCount === 2) {
      let cardsAbertos = (gridItem.filter( item => item.show))
      if (cardsAbertos.length == 2){
        if (cardsAbertos[0].item == cardsAbertos[1].item){
          let tmpGrid = [...gridItem];
          for(let i in tmpGrid){
            if (tmpGrid[i].show){
              tmpGrid[i].show = false;
              tmpGrid[i].permanentShow = true;
            }
          setGridItem(tmpGrid)
          setShowCount(0)
          }
        } else {
          setTimeout(()=>{
            let tmpGrid = [...gridItem];
            for (let i in tmpGrid){
              if (tmpGrid[i].show){
                tmpGrid[i].show = false
              }
            }
            setGridItem(tmpGrid)
            setShowCount(0)
          }, 1000)
        }
        setMoveCount(moveCount => moveCount + 1)
      }
    }
    console.log(gridItem)
  },[gridItem, showCount])

  // começa um novo jogo
  const resetAndCreate = () => { 
    // resetar informações
    setTimer(0)
    setMoveCount(0)
    setShowCount(0)
    setPlaying(true)

    //criar o GRID vazio
    let tmpGrid: GridItemType[] = []
    for (let i = 0; i < (items.length * 2); i++) tmpGrid.push({item: null, show:false, permanentShow:false});
    
    // jogar Informações no Grid
    for (let w = 0; w < 2; w++){ //esse for roda duas vezes pq as cartas são exibidas duas vezes
      for (let i = 0; i < items.length; i++){ //for que distribui as cartas
        let pos = -1
        while(pos < 0 || tmpGrid[pos].item !== null){
          pos = Math.floor(Math.random()*(items.length*2))
        }
        tmpGrid[pos].item = i;
      }
    }
    // preencher o state
    setGridItem(tmpGrid)
  } 

  const clickCard = ( index: number) => {
    if(playing && gridItem[index] !== null && showCount < 2){
      const tmpGrid = [...gridItem]
        if (tmpGrid[index].permanentShow == false && tmpGrid[index].show == false){
          tmpGrid[index].show = true
          setShowCount(showCount + 1)
        }
      setGridItem(tmpGrid)
    }
  }

  return (
    <C.Container>
      <C.InfoArea>
        <C.Logo> <img src={logoImg} width="200px" alt="" /></C.Logo>
        <InfoItem label='Timer:' value={formatMinutes(timer)} />
        <InfoItem label='Movimentos:' value={moveCount.toString()}/>
        <Button label='Reiniciar' icon={resetImg} onClick={resetAndCreate} />
      </C.InfoArea>
      <C.GridArea>
        <C.Grid>
          {gridItem.map((item, index) => (
            <GridItem 
              key={index}
              item={item}
              onClick={()=>clickCard(index)/*já sei onde cliquei*/} />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;