import React from 'react';
import * as C from './App.styles';
import { useState } from 'react';
import { item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  //State with all tasks
  const [list, setList] = useState<item[]>([
    {id:1 ,name:'Estudar React Segunda, Quarta e sexta', done: false },
    {id:2 ,name:'Estudar Selenium Terça e Quinta', done: false},
    {id:3 ,name:'Dobrar horas de estudos nos Finais de Semana', done: false}
  ])

  //add object with Tasks in List
  const handleAddTask = (taskName: string) => {
    let newList = [...list]; //first step clone the list
    //step two: push object to the newlist
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    // and step three... save in State 
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>  

        <AddArea onEnter={handleAddTask}/>
        
        {list.map((item, index)=>(
            <ListItem key={index} item={item} /> //53
        )
        )}
      </C.Area>  
    </C.Container>
  );
}

export default App;
