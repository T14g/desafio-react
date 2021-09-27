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
`

export const CopyRights = styled.div`
    float: left;
`

export const SocialIcons = styled.div`
    float: right;
    position: relative;
    top: -11px;
    right: -10px;
`

export const Icon = styled.img`
`