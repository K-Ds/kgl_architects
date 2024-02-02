import styled from "styled-components";
import SectionTitle from '../components/SectionTitle';
import PageContainer from './../components/PageContainer';
import projects from './../api/Projects';
import ProjectCard from '../components/projects/ProjectCard';
import PageTitle from '../components/PageTitle';


const SectionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top:3rem;
`;

const Projects = () => {
    return (
        <PageContainer>
            <PageTitle>Our Projects</PageTitle>
            <SectionList>
                {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </SectionList>
        </PageContainer>
    )
}

export default Projects;