import styled from "styled-components";
import Slider from "react-slick";
import { useRef, useState } from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon'
import { ArrowRight, ArrowLeft } from "@styled-icons/bootstrap";
import SectionTitle from '../SectionTitle';
import Button from '../Button';
import projects from '../../api/Projects';

const CarouselContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content: space-between;
    gap:5rem;
`;

const CarouselDetails = styled.div`
    width: 40%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const CarouselImages = styled.div`
    width: 60%;
`;

const CarouselImageContainer = styled.div`
    width: 100%;
    padding-bottom: 3rem;
`;

const CarouselImage = styled.img`
    width: 100%;
    aspect-ratio: 4/3;
`;

const CarouselImageLabel = styled.div`
    position: fixed;
    bottom: 3rem;
`;

const CarouselText = styled.span`
    font-size: 3rem;
    font-weight: bold;
    color: ${props => props.theme.color}
`;

const LabelText = styled.span`
    font-size:0.9rem;
    letter-spacing: 0.3rem;
    font-weight: 500
`;

const LabelIcon = styled(ArrowRight)`
    color: ${props => props.theme.text};
    width: 1.5rem
`;

const ButtonContainer = styled.div`
    background-color: ${props => props.theme.light};
    padding-block: 0.5rem;
    padding-inline: 1rem;
    margin-top: 5rem;
`;

const Buttons = styled.div`
    display:flex;
    gap:1rem;
    align-items: center;
    justify-content: start;
    cursor:pointer;

      ${StyledIconBase} {
     color: ${props => props.theme.text};
    width:1.5rem;
  }
`;

const ProjectCarousel = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const sliderRef = useRef(null);

    const carouselSettings = {
        infinite: false,
        swipeToSlide: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCarouselIndex(current),
    };

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleProjectNav = (id) => { };

    return (
        <CarouselContainer>
            <CarouselDetails>
                <SectionTitle>PROJECT</SectionTitle>
                <CarouselText>{projects[carouselIndex].title}</CarouselText>
                <Buttons>
                    <ButtonContainer onClick={previous}>
                        <ArrowLeft />
                    </ButtonContainer>
                    <ButtonContainer onClick={next}>
                        <ArrowRight />
                    </ButtonContainer>
                </Buttons>
            </CarouselDetails>
            <CarouselImages>
                <Slider ref={sliderRef} {...carouselSettings}>
                    {projects.map(project =>
                        <CarouselImageContainer key={project.id}>
                            <CarouselImage src={project.url} alt={project.title} />
                            <CarouselImageLabel>
                                <Button onClick={() => handleProjectNav(project.id)} background>
                                    <LabelText>VIEW PROJECT</LabelText>
                                    <LabelIcon />
                                </Button>
                            </CarouselImageLabel>
                        </CarouselImageContainer>)
                    }
                </Slider>
            </CarouselImages>
        </CarouselContainer>
    );
};

export default ProjectCarousel;