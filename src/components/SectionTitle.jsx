import styled from "styled-components";

const SectionTitle = styled.h2`
    font-size: 3.5rem;
    font-weight: 300;
    letter-spacing:0.5rem;
    color: ${props => props.theme.secondary};
    margin-block: 1rem;
`;

export default SectionTitle;