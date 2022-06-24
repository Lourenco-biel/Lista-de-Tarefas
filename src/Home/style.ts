import styled from "styled-components";

type ContainerProps={
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    background-color: ${done? 'rgb(186 237 240 / 50%)': '#17181f'};
    color:#797A81;
    min-height: 100vh;
    
    .Area{
        margin: auto;
        max-width: 980px;
        padding: 10px;
    }
    
    
    .header{
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
    }
    
    .toggler{
        display: block;
        width: 88px;
        height: 31px;
        border: 2px solid black;
        border-radius: 30px;
        position: relative;
        cursor: pointer;
    
       
        .sun,.moon,.ball{
            position: absolute;
            top: 50%;
            transform:  translateY(-50%);
        }
    
        .sun{
            left: 5px;
        }
    
        .moon{
            right: 5px;
        }
        
        .ball{ 
            display: inline-block;
            height: 29px;
            width: 29px;
            background-color: black;
            border-radius: 50%;
            left: 1px;
            z-index: 10;
            transition: transform .5s ease-in-out;
        }
        #checkbox{
            display: none;
    
            &:checked + .ball{ 
            transform:  translate(52px, -50%);
        }
        }
    
    }
    
    `
    ))








