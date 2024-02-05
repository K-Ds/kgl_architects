import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap";
import Button from '../Button';

const Container = styled.div`
    display: flex;
    gap: 2rem;
    background-color: ${props => props.theme.light};
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 60%;
    img {
        width: 100%;
        height: 100%;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    width:40%;
    padding-right: 3rem;
    padding-block: 1rem;
`;

const Title = styled.h3`
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing:0.3rem;
    color: ${props => props.theme.primary};
`;

const Text = styled.p`
    font-size: 1.2rem;
    line-height: 1.7rem;
font-weight: 300;

`;

const BtnText = styled.span`
    font-size:0.9rem;
    letter-spacing: 0.3rem;
    font-weight: 500
`;

const BtnIcon = styled(ArrowRight)`
    color: ${props => props.theme.text};
    width: 1.5rem
`;

const ProjectCard = ({ project }) => {

    return (
        <Container>
            <ImageContainer>
                <img src={project?.cover} alt={project.title} />
            </ImageContainer>
            <Details>
                <Title>{project?.title}</Title>
                <Text>{project?.description}</Text>
                <Button background href={`/projects/${project?.id}`}>
                    <BtnText>View Details</BtnText>
                    <BtnIcon />
                </Button>
            </Details>
        </Container>
    )
}

export default ProjectCard;