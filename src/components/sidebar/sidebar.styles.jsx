import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    background: #0E0E12;
    width: 100%;
    height: 100vh;
    

    ul{
        float: none;
        text-align: center;
        margin-top: 75px;
        
        li{
            display: block;
            font-size: 20px;
            font-family: 'Open Sans', sans-serif; 
        }
    }
`

export const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    width: 40px;
    height: 35px;
    background: none;
    border: 2px #fff solid;
    color: #fff; 
    font-size: 20px;;
`