import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme.header};
`

export const InnerContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    &::after{
        display: table:
        content: '';
        clear: both;
    }
`

export const Logo = styled.img`
    max-width: 150px;
    margin-top: 15px;
`