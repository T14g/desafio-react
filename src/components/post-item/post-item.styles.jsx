import styled from "styled-components";

export const PostBox = styled.div`
    max-width: 390px;
    float:left;
    background: #1E1E23;
    border-top: 50px solid;
    padding-bottom: 20px;
    height: fit-content;

    &.purple{
        border-color: #947DBB;
        
        button{
            background-color: #947DBB; 
        }

        p:first-child{
            color: #947DBB;
        }
    }

    &.blue{
        border-color: #24BADC;

        button{
            background-color: #24BADC; 
        }

        p:first-child{
            color: #24BADC;
        }
    }

    &.yellow{
        border-color: #FFE659;

        button{
            background-color: #FFE659; 
        }

        p:first-child{
            color: #FFE659;
        }
    }

    &:not(:last-child){
        margin-right: 15px;
    }
`

export const PostTitle = styled.p`
    padding: 0 15px;
    font-weight: 800;
    font-size: 25px;
`

export const ContentWrapper = styled.div`
    height:  ${props => props.expanded ? props.height + 'px' : '70px'};
    padding-bottom: 50px;
    transition: height 2s;
    overflow: hidden;
`

export const PostContent = styled.p`
    color: #fff;
    padding: 0 15px;
`

export const Button = styled.button`
    float: right;
    margin-right: 15px;
    display: block;
    border: none;
    padding: 7px 15px;
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
`