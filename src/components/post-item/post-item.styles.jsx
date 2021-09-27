import styled from "styled-components";

export const PostBox = styled.div`
    max-width: 390px;
    float:left;
    flex: 1 1 300px;
    background: ${props => props.theme.postBlock};
    border-top: 50px solid;
    padding-bottom: 20px;
    height: fit-content;
    margin-bottom: 30px;

    &.purple{
        border-color: #947DBB;
        
        button{
            background-color: #947DBB; 
        }

        > p:first-child{
            color: #947DBB;
        }
    }

    &.blue{
        border-color: #24BADC;

        button{
            background-color: #24BADC; 
        }

        > p:first-child{
            color: #24BADC;
        }
    }

    &.yellow{
        border-color: #FFE659;

        button{
            background-color: #FFE659; 
        }

        > p:first-child{
            color: #FFE659;
        }
    }

    @media(min-width: 990px){
        &:not(:nth-child(3n)){
            margin-right: 30px;
        }
    }

    @media(max-width: 989px){
        &:not(:nth-child(2n)){
            margin-right: 30px;
        }
    }

    @media(max-width: 659px){

        &:not(:nth-child(2n)){
            margin-right: 0;
        }

        flex: initial;
        margin: 0 auto 20px;
        float: none;
        width: 100%;
        max-width: initial;
    }
    
`

export const PostTitle = styled.p`
    padding: 0 15px;
    font-weight: 800;
    font-size: 25px;
`

export const ContentWrapper = styled.div`
    height:  ${props => props.expanded ? props.contentHeight + 'px' : '70px'};
    padding-bottom: 50px;
    transition: height 2s;
    overflow: hidden;
`

export const PostContent = styled.p`
    color: ${props => props.theme.postText};
    padding: 0 15px;
`

export const Button = styled.button`
    font-family: 'Open Sans', sans-serif;  
    float: right;
    margin-right: 15px;
    display: block;
    border: none;
    padding: 7px 15px;
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
    font-style: italic;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`