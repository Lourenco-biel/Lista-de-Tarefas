import React, {useState} from 'react';
import * as c from './style'
import {Item} from '../types/Item'
import { ListItem } from '../component/ListItem';
import {AddArea} from '../component/AddArea';

const App= () => {
  const [list, setList] = useState<Item[]>([]);
  
  const handleAddTask = (taskName: string) =>{
  let newList = [...list];
  newList.push({
    id: list.length +1,
    name:taskName,
    done:false
  });
  setList(newList)
  }

  const handleTaksChange = (id:number, done: boolean) =>{
    let newList =[...list]
    for(let i in newList) {
      if(newList[i].id === id){
        newList[i].done = done
      }
    }
    setList(newList);
  }

  return (
    <c.Container>
      <c.Area>
        <c.Header>Lista de Tarefas</c.Header>

      <AddArea  onEnter={handleAddTask}/>

      {list.map((item, index)=> (
          <ListItem key={index} 
          item={item} 
          onChange={handleTaksChange}/>
      ))}


      </c.Area>
    </c.Container>
  );
}

export default App;
