import styled from "styled-components";

const Brand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BrandIcon = styled.span`
    font-size: 2rem;
    color: ${props => props.theme.secondary};
    font-weight: bold;
    letter-spacing: 5px;
`;

const BrandName = styled.span`
    color: ${props => props.theme.secondary};
    letter-spacing: 2px;
`;

export default <Brand>
    <BrandIcon>KA</BrandIcon>
    <BrandName>KIGALI ARCHITECTS</BrandName>
</Brand>;