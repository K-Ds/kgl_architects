import styled from "styled-components";

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


const Button = ({ children, onclick, secondary, background }) => {
    return (
        <Container onclick={onclick} secondary={secondary} background={background}>
            {children}
        </Container>
    );
}

export default Button;