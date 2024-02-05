import styled from "styled-components";
import projects from './../api/Projects';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';

const Grid = styled.div`
margin-top:2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Gallery = () => {
    return (
        <PageContainer>
            <PageTitle>Photo Gallery</PageTitle>
            <Grid>
                {projects.map((project) => <img key={project.id} src={project.cover} alt={project.title} />)}
            </Grid>
        </PageContainer>
    )
}

export default Gallery;