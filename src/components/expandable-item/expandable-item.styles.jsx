import styled from 'styled-components';

export const ExpandableStyles = styled.div`
    max-width: 800px;
    margin: 0 auto 100px;
`;

export const ExpandableItemHeaderTitle = styled.div`
    color : #000;
    font-size: 20px;
    font-weight: 800;
    font-family: 'Open Sans', sans-serif;  
`;

export const ExpandableItemHeader = styled.div`
    background: #ffe659;
    color : #000;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

export const ExpandableItemContent = styled.div`
    height: 0;
    overflow: hidden;
    transition: 1s;
    background: #1E1E23;

    p{
        padding: 15px;
    }

    &.expanded{
        height: 120px;
    }
`;

export const ActionButton = styled.button`
    background: #000;
    color : #ffe659;
    font-family: 'Open Sans', sans-serif;  
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
`;