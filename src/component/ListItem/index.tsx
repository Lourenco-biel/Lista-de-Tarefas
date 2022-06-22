import * as c from './style'
import {Item} from '../../types/Item'
import trash from '../../Assets/trash.svg'




type Props ={
    item: Item,
    onClick: (id:number, done: boolean)=> any,
    onChange: (id: number, done: boolean) => void
}


export const ListItem = ({item, onChange}: Props)=> {


    return(
        <c.Container done={item.done}>
            <input 
            type='checkbox' 
            checked={item.done}
            onChange={e=> onChange(item.id, e.target.checked)}
              
            />
           
            <div>{item.name}</div>
            {/* ESSE É O BUTTON QUE PRECISO CRIAR A FUNÇÃO DE DELETAR */}
            <button 
             > 
                <img src={trash} alt="lixeira"/>
            </button>
        </c.Container>
    )
}
  
