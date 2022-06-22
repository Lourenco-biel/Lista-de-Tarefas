
import  styled  from 'styled-components';

type ContainerProps={
    done: boolean;
}

export  const Container = styled.div(({done}: ContainerProps)=>(
    `
display: flex;
background-color: #20212C;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;
/* justify-content: space-between; */

input{
    width: 25px;
    height: 25px;
    margin-right: 8px;
}


div{
    color:#CCC;
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

