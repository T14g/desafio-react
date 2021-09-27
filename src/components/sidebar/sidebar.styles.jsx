import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    background: ${props => props.theme.sidebar};
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
            color: ${props => props.theme.sidebarText};
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
    border: 2px ${props => props.theme.sidebarText} solid;
    color: ${props => props.theme.sidebarText}; 
    font-size: 20px;
`