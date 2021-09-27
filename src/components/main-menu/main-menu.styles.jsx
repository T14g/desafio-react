import styled from "styled-components";

const Link = ({ className, href, children }) => (
    <a className={className} href={href}>
        {children}
    </a>
)

export const MenuContainer = styled.ul`
    color: ${props => props.lights ? '#000' : '#fff'}
    list-style: none;
    float:right;
`

export const MenuItem = styled.li`
    display: inline;

    &:not(:last-child){
        margin-right: 10px;
        font-weight: 600;
    }
`
export const StyledLink = styled(Link)`
    &:hover{
        cursor: pointer;
    }
`