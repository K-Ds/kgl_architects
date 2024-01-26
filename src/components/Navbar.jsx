import styled from "styled-components";
import Brand from './Brand';

const NavContainer = styled.div`
    display:flex;
    width: 100%;
    padding-block: 2rem;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.span`
    color: ${props => props.theme.primary};
    border-block: ${props => props.$selected ? `2px solid ${props.theme.primary}` : `none`};
    padding-inline: 1rem;
    padding-block: 0.5rem;
    letter-spacing: 2px;
`

const NavList = styled.div`
    display: flex;
    padding-left: 1rem;
    column-gap: 1rem;
    align-items: center;
`;



const Navbar =
    <NavContainer>
        {Brand}
        <NavList>
            <NavItem>HOME</NavItem>
            <NavItem>PROJECTS</NavItem>
            <NavItem $selected>GALLERY</NavItem>
            <NavItem>CERTIFICATIONS</NavItem>
            <NavItem>CONTACT US</NavItem>
        </NavList>
    </NavContainer>

export default Navbar;