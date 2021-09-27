import styled from "styled-components";

const fontFamily =  "'Open Sans', sans-serif";  

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: ${props => props.top}px;
    background: rgba(0, 0, 0, 0.5);
`

export const ModalContainer = styled.div`
    max-width: 700px;
    background: ${props => props.theme.modalBg};
    margin: 0 auto;
    padding: 20px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-top: 50px solid #FFE659;

    &::after{
        display: table;
        content: "";
        clear: both;
    }

    @media(max-width: 989px){
        max-width: 620px;
    }

    @media(max-width: 676px){
        max-width: 400px;
    }

    @media(max-width: 450px){
        max-width: 265px;
    }
`

export const ModalTitle = styled.h2`
    font-size: 50px;
    margin: 7px 0;
    color: ${props => props.theme.modalText};
    font-family: ${fontFamily};

    @media(max-width: 676px){
        font-size: 35px;
    }

    @media(max-width: 450px){
        font-size: 25px;
    }
`

export const ModalContent = styled.div`
    font-family: ${fontFamily};
    font-size: 20px;
    color: ${props => props.theme.modalText};
    font-height: 500;

    @media(max-width: 676px){
        font-size: 18px;
    }

    @media(max-width: 450px){
        font-size: 16px;
    }
`

export const Button = styled.button`
    font-family: ${fontFamily};
    float: right;
    display: block;
    width: 100%;
    font-size: 30px;
    max-width: 150px;
    font-weight: 800;
    text-transform: uppercase;
    padding: 7px 15px;
    margin-top: 25px;
    background: #FFE659;
    border-radius: 5px;
    border: none;
    
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }

    @media(max-width: 676px){
        font-size: 25px;
    }

    @media(max-width: 450px){
        font-size: 20px;
    }
`