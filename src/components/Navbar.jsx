import styled from "styled-components";
import Brand from './Brand';
import { NavLink as Link } from 'react-router-dom';

const navItems = [
    { name: "Home", to: "" },
    { name: "Projects", to: "projects" },
    { name: "Gallery", to: "gallery" },
    { name: "Certifications", to: "certs" },
    { name: "Contacts", to: "contact" },
];

const selected = "projects";


const NavContainer = styled.div`
    display:flex;
    width: 100%;
    padding-block: 2rem;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled(Link)`
    color: ${props => props.theme.primary};
    border-block: ${props => props.$selected ? `2px solid ${props.theme.primary}` : `none`};
    padding-inline: 1rem;
    padding-block: 0.5rem;
    letter-spacing: 2px;
    cursor: pointer;
    text-decoration: none;
    text-transform: capitalize;
`

const NavList = styled.div`
    display: flex;
    padding-left: 1rem;
    column-gap: 1rem;
    align-items: center;

    a.active{
       border-block: ${props => `2px solid ${props.theme.primary}`};
    }
`;



const Navbar =
    <NavContainer>
        {Brand}
        <NavList>
            {navItems.map(navItem => <NavItem key={navItem.name} to={navItem.to} >{navItem.name}</NavItem>)}
        </NavList>
    </NavContainer>

export default Navbar;