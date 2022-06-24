import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    background-color: ${done ? '#17181f' : 'rgb(66 92 172 / 50%)' };
    color: ${done ? '#6d6c6c' : '##CCC'};
    min-height: 100vh;
    
    .Area{
        margin: auto;
        max-width: 980px;
        padding: 10px;
    }
    
    
    .header{
        margin: 0;
        padding: 0;
        color: ${done ? '#fff': '#333981' };
        text-align: center;
        border-bottom: 1px solid #CCC;
        padding-bottom: 20px;
    }
    
    .toggler{
        display: block;
        width: 83px;
        height: 31px;
        border: 2px solid  ${done ? '#CCC':'#333981' };
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
            font-size:${done ? '14px': '10px'}
        }
    
        .moon{
            right: 5px;
            font-size:${done ? '10px': '14px'}
        }
        
        .ball{ 
            display: inline-block;
            height: 29px;
            width: 29px;
            background-color: ${done ?  '#CCC' : '#333981' };
            border-radius: 50%;
            left: -1px;
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








