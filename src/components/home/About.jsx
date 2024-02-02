import styled from "styled-components";
import SectionTitle from '../SectionTitle';
import ArchitectIll from "../../assets/Architect.svg"


const Container = styled.div`
    background-color: ${props => props.theme.light};
    padding: 2rem;
    display: flex;
    align-items: center;
    gap:2rem;
    margin-block:3rem;
`;

const Text = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.text};
    margin-top:1rem;    
    width:75%;
    letter-spacing: 0.1rem;
    line-height: 1.7rem;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
    width: 50%;
`;

const Illustration = styled.div`
    display:flex;
    align-items: center;
    width: 50%;
    padding-top:1rem;
`;

const IllustrationImage = styled.img`
    width: 100%;
    aspect-ratio: 4/3;
`;

const About = () => {
    return (<Container>
        <Illustration>
            <IllustrationImage src={ArchitectIll} alt="illustration" />
        </Illustration>
        <Details>
            <SectionTitle>About</SectionTitle>
            <Text>
                Welcome to KGL Architects, your premier architectural firm based in the vibrant city of Kigali. At KGL Architects, we are dedicated to creating innovative and sustainable architectural solutions that enrich the urban landscape of Kigali and beyond. With a passion for design excellence and a commitment to community development, we take pride in transforming ideas into iconic structures that stand the test of time.
            </Text>
        </Details>
    </Container>)
}

export default About;