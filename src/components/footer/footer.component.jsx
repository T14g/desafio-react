import {
    FooterContainer,
    InnerContainer,
    CopyRights,
    SocialIcons,
    Icon,
    StyledLink
} from './footer.styles';

const Footer = () => {

    const socialIcons = [
        { src: './assets/images/fb-icon.png' },
        { src: './assets/images/twitter-icon.png' },
        { src: './assets/images/ln-icon.png' },
        { src: './assets/images/yt-icon.png' },
        { src: './assets/images/ig-icon.png' }
    ];

    return (
        <FooterContainer>
            <InnerContainer>
                <CopyRights>
                    &copy; Compasso UOL - 1996 - 2021 - Todos os direitos reservados
                </CopyRights>
                <SocialIcons>
                    {
                        socialIcons.map((icon, index) =>
                            <StyledLink href="#" key={index}>
                                <Icon src={icon.src} />
                            </StyledLink>
                        )
                    }
                </SocialIcons>
            </InnerContainer>
        </FooterContainer>
    );
}

export default Footer;