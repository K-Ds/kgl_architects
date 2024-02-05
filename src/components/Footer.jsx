import styled from "styled-components";
import Brand from './BrandLarge';
import WidthContainer from './WidthContainer';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.primary};
    justify-content: space-between;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`;

const FooterSection = styled.div`
    display: flex;
    padding-inline: 1rem;
    flex-direction: column;
    align-items: start;
    color: ${props => props.theme.light}
`;  

const FooterItem = styled(Link)`
    cursor: pointer;
    padding-block: 1rem;
    color: ${props => props.theme.light};
    text-decoration: none;
`;

const FooterHeader = styled.span`
 font-size: 1.1rem;
 font-weight: 600;
 display: flex;
 align-items: center;
 padding-bottom: 1.5rem;
`;

const FooterOrganization = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    padding-block: 2.5rem;
`;

const Footer = <FooterContainer>
    <WidthContainer>
        <FooterOrganization>
            <FooterSection>
                {Brand}
            </FooterSection>
            <FooterSection>
                <FooterHeader>Information</FooterHeader>
                <FooterItem to=''>Home</FooterItem>
                <FooterItem to='projects'>Projects</FooterItem>
                <FooterItem to='gallery'>Gallery</FooterItem>
                <FooterItem to='certs'>Certifications</FooterItem>
            </FooterSection>
            <FooterSection>
                <FooterHeader>Contact Us</FooterHeader>
                <FooterItem>Kigali, Rwanda</FooterItem>
                <FooterItem>+250 799123123</FooterItem>
            </FooterSection>
            <FooterSection>
                <FooterHeader>Socials</FooterHeader>
                <FooterItem>Twitter</FooterItem>
                <FooterItem>Instagram</FooterItem>
                <FooterItem>Linkedin</FooterItem>
            </FooterSection>
        </FooterOrganization>
        <FooterItem to="https://storyset.com/people">Illustrations by Storyset</FooterItem>
    </WidthContainer>
</FooterContainer>;

export default Footer;