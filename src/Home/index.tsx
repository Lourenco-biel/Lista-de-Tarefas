import  {useState} from 'react';
import * as c from './style'
import {Item} from '../types/Item'
import { ListItem } from '../component/ListItem';
import {AddArea} from '../component/AddArea';

export const App= () => {
 const [list, setList] = useState<Item[]>([]);
  
  const handleAddTask = (taskName: string) =>{
    setList([
      ...list,
    {
      id: Math.random(),
      name:taskName,
      done:false,
    },
  ]);

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

  const Delete = (id:Number) =>{
    
    let newList =[...list]
    for(let i in newList) {
      if(newList[i].id !== id){
        setList(newList);
      }
    }
    

  }

  return (
    <c.Container>
      <c.Area>
        <c.Header>Lista de Tarefas</c.Header>

      <AddArea  onEnter={handleAddTask}/>

      {list.map((item, index)=> (
          <ListItem key={index} 
          item={item} 
          onChange={handleTaksChange}
          onClick={()=> Delete(item.id)}
          />
  
      ))}


      </c.Area>
    </c.Container>
  );
}

export default App;
