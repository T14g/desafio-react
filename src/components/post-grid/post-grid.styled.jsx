import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 50px auto 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 15px;

    &::after{
        display: table;
        content: "";
        clear: both;
    }

    @media(max-width: 989px){
        max-width: 655px;
    }

    @media(max-width: 728px){
        margin-bottom: 50px;
    }
`