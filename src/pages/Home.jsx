import PageContainer from '../components/PageContainer';
import About from '../components/home/About';
import Mission from '../components/home/Mission';
import ProjectCarousel from '../components/home/ProjectCarousel';
import Gallery from './../components/home/Gallery';
import Contact from './../components/home/Contact';

const Home = () => {

    return (
        <PageContainer>
            <ProjectCarousel />
            <About />
            <Mission />
            <Gallery />
            <Contact />
        </PageContainer>)
}

export default Home;