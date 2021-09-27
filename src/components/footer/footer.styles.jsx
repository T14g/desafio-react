import styled from "styled-components";

const Link = ({ className, href, children }) => (
    <a className={className} href={href}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
`

export const FooterContainer = styled.footer`
    background: ${props => props.theme.footer};
`

export const InnerContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 15px 0;

    &::after{
        display: table;
        content: "";
        clear: both;
    }

    @media(max-width: 728px){
        display:flex;
        flex-flow: column;
        padding-bottom: 20px;
    }
`

export const CopyRights = styled.div`
    float: left;

    @media(max-width: 728px){
        float: none;
        order: 2;
        text-align: center;
    }
`

export const SocialIcons = styled.div`
    float: right;
    position: relative;
    top: -11px;
    right: -10px;

    @media(max-width: 728px){
        top: initial;
        right: initial;
        float: none;
        order: 1;
        margin: 0 auto;
    }
`

export const Icon = styled.img`
    &:hover{
        opacity: 0.8;
    }
`