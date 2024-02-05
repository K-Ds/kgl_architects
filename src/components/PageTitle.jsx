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
    const match = children?.match(/^(\S+)\s(.*)$/);



    return (
        <Title>
            <Accent>{match[1]}</Accent>  {match[2]}
        </Title>
    )
};

export default PageTitle;