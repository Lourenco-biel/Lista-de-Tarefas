
import  styled  from 'styled-components';

type ContainerProps={
    done: boolean;
}

export  const Container = styled.div(({done}: ContainerProps)=>(
    `   display: flex;
        background-color:${done ? '#599b5f':'#CCC'};
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;

    label{
        display:block;
        width: 25px;
        height: 25px;
        cursor:pointer;
        margin-right: 10px;
    }

    input{
        position: absolute; 
        transform: scale(0);
    }

    input:checked ~ .checkbox{
        transform: rotate(45deg);
        width:17px;
        margin-left:4px;
        border-color: #24c78e;
        border-top-color: transparent;
        border-left-color: transparent;
        border-radius:0;
    }

    .checkbox{
        display:block;
        width:inherit;
        height:inherit;
        border:3px solid #434343;
        border-radius:6px;
        transition: all 0.375s;
    }

    div{
        color:#fff;
        text-decoration: ${done ? 'line-through':'initial'};
        width: 883px;
        word-break: break-word;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.5;
        }
    }
    `
))

