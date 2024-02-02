import styled from "styled-components";

const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 500;
    letter-spacing:0.2rem;
    color: ${props => props.theme.primary};
    margin-block: 1rem;
`;

const Accent = styled.span`
    font-size: 3.5rem;
    font-weight: 300;
    letter-spacing:0.2rem;
    color: ${props => props.theme.secondary};
    margin-block: 1rem;
`;


const PageTitle = ({ children }) => {
    const [accent, title] = children?.split(' ');

    return (
        <Title>
            <Accent>{accent}</Accent>  {title}
        </Title>
    )
};

export default PageTitle;