import styled from "styled-components";
import PageContainer from './../components/PageContainer';
import PageTitle from './../components/PageTitle';
import { useParams } from 'react-router';
import projects from './../api/Projects';


const Container = styled.div`
    display: flex;
    gap:3rem;
    margin-top: 4rem;

`;

const ImageContainer = styled.div`
    width: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const TextContainer = styled.div`
    width: 50%
`;

const Grid = styled.div`
    margin-top:2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Project = (props) => {
    const { id } = useParams();

    const project = projects.find(project => project.id === id);

    return (
        <PageContainer>
            <PageTitle>{project?.title}</PageTitle>
            <Container>
                <ImageContainer><img src={project?.cover} /></ImageContainer>
                <TextContainer>{project?.description}</TextContainer>
            </Container>
            <Grid>{project.images}</Grid>
        </PageContainer>
    )
}

export default Project;