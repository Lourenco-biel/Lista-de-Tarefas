import styled from "styled-components";

export const Container =styled.div`
border: 1px solid #555;
border-radius: 15px;
padding: 10px;
margin: 20px 0;
display: flex;
align-items: center;

button{
    margin-right: 5px;
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

input{
    border: 0;
    background: transparent;
    outline: none;
    color: #FFF;
    font-size: 18px;
    flex: 1px;
}
`