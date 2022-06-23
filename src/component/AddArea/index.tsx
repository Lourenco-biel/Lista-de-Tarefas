import { useState, KeyboardEvent } from 'react'
import * as c from './style'

type Props ={
    onEnter:(taskName: string)=> void
}

export const AddArea =({onEnter}: Props) =>{
const [inputText, setInputText] = useState('')

 const handleKeyUp = (e: KeyboardEvent)=>{
    if( (e.code === 'Enter' || e.code === 'NumpadEnter')&& inputText !== '' ){
        onEnter(inputText)
        setInputText(''); 
    }
}

const handleKey = ()=>{
    if(inputText === ''){
        alert("Nenhuma tarefa adicionada, tente novamente!")
    }else{
        onEnter(inputText);
        setInputText(''); 
    }
    }
    
    return(
        <c.Container>
            <button onClick={handleKey}> ➕</button>
            <input 
            type='text'
            placeholder='Adicione uma tarefa'
            value={inputText}
            onChange={e=> setInputText(e.target.value)}
            onKeyUp={handleKeyUp}/>
        </c.Container>
    )
}