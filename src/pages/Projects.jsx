import styled from "styled-components";
import PageContainer from './../components/PageContainer';
import ProjectCard from '../components/projects/ProjectCard';
import PageTitle from '../components/PageTitle';
import { AppContext } from './../Context';
import { useContext } from 'react';


const SectionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top:3rem;
`;

const Projects = () => {
    const { projects } = useContext(AppContext);
    return (
        <PageContainer>
            <PageTitle>Our Projects</PageTitle>
            <SectionList>
                {projects?.map(project => <ProjectCard key={project.id} project={project} />)}
            </SectionList>
        </PageContainer>
    )
}

export default Projects;