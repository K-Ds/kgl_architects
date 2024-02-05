import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
 padding-block: 1.7rem;
    color: ${props => props.secondary ? props.theme.background : props.background ? props.theme.text : props.theme.background};
    padding-inline: 2rem;
    background-color: ${props => props.secondary ? props.theme.secondary : props.background ? props.theme.background : props.theme.primary};
    display: flex;
    gap:1rem;
    align-items:center;
    width: fit-content;
    cursor: pointer;
`;

const LinkContainer = styled(Link)`
 padding-block: 1.7rem;
    color: ${props => props.secondary ? props.theme.background : props.background ? props.theme.text : props.theme.background};
    padding-inline: 2rem;
    background-color: ${props => props.secondary ? props.theme.secondary : props.background ? props.theme.background : props.theme.primary};
    display: flex;
    gap:1rem;
    align-items:center;
    width: fit-content;
    text-decoration: none;
`;


const Button = ({ children, href, onClick, secondary, background }) => {
    if (href) {
        return (
            <LinkContainer to={href} secondary={secondary} background={background}>
                {children}
            </LinkContainer>
        )
    }
    else {
        return (
            <Container onClick={onClick} secondary={secondary} background={background}>
                {children}
            </Container>
        )
    }
}

export default Button;