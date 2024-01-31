import styled from "styled-components";
import PageContainer from '../components/PageContainer';
import Slider from "react-slick";
import { useState } from 'react';

const projects = [
    { title: 'Project 1', url: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg' },
    { title: 'Project 2', url: 'https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_1280.jpg' },
    { title: 'Project 3', url: 'https://cdn.pixabay.com/photo/2014/02/25/22/06/staircase-274614_1280.jpg' },
    { title: 'Project 4', url: 'https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_1280.jpg' },
];

const ProjectsCarousel = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const carouselSettings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCarouselIndex(next),
        vertical: false
    };

    const CarouselContainer = styled.div`
        display:flex;
        flex-direction:row;
        width:100%;
    `;

    const CarouselDetails = styled.div`
        width: 40%;
    `;

    const CarouselImages = styled.div`
        width: 60%;
    `;

    return (
        <CarouselContainer>
            <CarouselDetails>

            </CarouselDetails>
            <CarouselImages>
                <Slider {...carouselSettings}>
                    {projects.map(project => <img src={project.url} alt={project.title} />)}
                </Slider>
            </CarouselImages>
        </CarouselContainer>);
};

const Home = () => {

    return <PageContainer><ProjectsCarousel /></PageContainer>
}

export default Home;