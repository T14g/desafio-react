import styled from "styled-components";

export const Container = styled.div`

`

export const Row = styled.div`
    max-width: 1200px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;

    &::after{
        display: table;
        content: "";
        clear: both;
    }
`