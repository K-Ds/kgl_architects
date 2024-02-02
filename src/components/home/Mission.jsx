import styled from "styled-components";
import SectionTitle from '../SectionTitle';

const Container = styled.div`
        padding-block: 2rem;
`;

const StatementContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    gap:2.5rem;
    justify-content: space-between;
`;

const Statement = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    gap:0.5rem
`;

const Text = styled.p`
    color: ${props => props.theme.text}
`;

const NumberBlock = styled.span`
    font-weight: bold;
    font-size:12rem;
    color: ${props => props.theme.light}
`;

const Mission = () => {

    return (
        <Container>
            <SectionTitle>Mission Statements</SectionTitle>
            <StatementContainer>
                <Statement>
                    <NumberBlock>1</NumberBlock>
                    <Text>At KGL Architects, our primary mission is to lead the way in architectural innovation, pushing the boundaries of design to create spaces that inspire and endure. We are committed to fostering sustainable development in Kigali by integrating environmentally conscious practices into our designs. Through collaboration, creativity, and a deep understanding of our clients' needs, we strive to shape environments that not only reflect our commitment to excellence but also contribute positively to the communities we serve.</Text>
                </Statement>
                <Statement>
                    <NumberBlock>2</NumberBlock>
                    <Text>
                        KGL Architects is on a mission to be at the forefront of architectural excellence in Rwanda. Our dedication lies in delivering tailored, client-focused solutions that enhance the quality of life and contribute to the cultural identity of Kigali. We aim to be a catalyst for positive change, embracing the responsibility to design spaces that promote inclusivity, sustainability, and a harmonious balance between aesthetics and functionality.
                    </Text>
                </Statement>
            </StatementContainer>
        </Container>
    )
};

export default Mission;