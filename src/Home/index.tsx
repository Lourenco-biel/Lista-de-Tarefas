import  {useState, useEffect} from 'react';
import * as c from './style'
import {Item} from '../types/Item'
import { ListItem } from '../component/ListItem';
import {AddArea} from '../component/AddArea';


export const App= () => {
 const [list, setList] = useState<Item[]>([]);
 
  useEffect(()=> {
    const storageItem = localStorage.getItem("list");
    if(storageItem){
      const myList = JSON.parse(storageItem);
      setList(myList)
    }
 },[list])

 const setMyList = (listItem:any) =>{
  localStorage.setItem("list",JSON.stringify(listItem));
 }
  
  const handleAddTask = (taskName: string) =>{
    const item = [...list,
    {
      id: Math.random(),
      name:taskName,
      done:false,
    },]
    setList(item)
    setMyList(item)
  }
 
  const handleTaksChange = (id:number, done: boolean) =>{
    const index = list.findIndex(list => list.id === id )
    const updateItem = list[index]
    updateItem.done = done
    const newlist = list
    newlist[index] = updateItem
    setList(newlist);
    setMyList(newlist)
  }

  const Delete = (id:Number) =>{
    const newList = list.filter(list => list.id !== id)
      setList(newList)
      setMyList(newList)
  }

  return (
    <c.Container>
      <c.Area>
        <c.Header>Lista de Tarefas
        
        <c.Label done
        htmlFor="checkbox" className="toggler">
          <input type="checkbox" id="checkbox"/>
          <span  className="ball"></span>
          <i  className="sun"></i>
          <i  className="moon"></i>
        </c.Label> 


        </c.Header>
     

          <AddArea  onEnter={handleAddTask}/>
          {list.map((item, index)=> (
              <ListItem key={index} 
              item={item} 
              onChange={handleTaksChange}
              onClick={(id)=> Delete(id)}
              />
          ))}
      </c.Area>
    </c.Container>
  );
}

export default App;
