import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 50px auto 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &::after{
        display: table;
        content: "";
        clear: both;
    }
`