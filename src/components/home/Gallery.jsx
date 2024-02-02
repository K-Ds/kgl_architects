import styled from "styled-components";
import SectionTitle from '../SectionTitle';
import { ArrowRight } from "@styled-icons/bootstrap";
import Button from '../Button';

const projects = [
    { id: "1", title: 'Aetherium Pavilion', url: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg' },
    { id: "2", title: 'Elysian Nexus Center', url: 'https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_1280.jpg' },
    { id: "3", title: 'Quantum Arcology', url: 'https://cdn.pixabay.com/photo/2014/02/25/22/06/staircase-274614_1280.jpg' },
    { id: "4", title: 'Lumina Tower', url: 'https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_1280.jpg' },
    { id: "5", title: 'Offz Tower', url: 'https://cdn.pixabay.com/photo/2013/09/14/19/53/city-182223_1280.jpg' },
];

const Container = styled.div`
    margin-block: 2rem;
    width: 100%;
    display: flex;
    align-items: start;
    gap:2rem;
    flex-direction: column;
    text-align: left;
`;

const Grid = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  width:100%;
`;

const GridImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const LongGridItem = styled.div`
    grid-column-start: span 2;
    width: 100%;
`;

const ShortGridItem = styled.div`
    grid-column-start: span 1;
    display: flex;
    width: 100%;
`;

const LabelText = styled.span`
    font-size:0.9rem;
    letter-spacing: 0.3rem;
    font-weight: 500
`;

const LabelIcon = styled(ArrowRight)`
    color: ${props => props.theme.background};
    width: 1.5rem
`;


const Gallery = () => {
    return (
        <Container>
            <SectionTitle>Gallery</SectionTitle>
            <Grid>
                <ShortGridItem><GridImage src={projects[3].url} /></ShortGridItem>
                <LongGridItem><GridImage src={projects[0].url} /></LongGridItem>
                <ShortGridItem><GridImage src={projects[2].url} /></ShortGridItem>
                <LongGridItem><GridImage src={projects[1].url} /></LongGridItem>
            </Grid>
            <Button primary>
                <LabelText>Go To Gallery</LabelText>
                <LabelIcon />
            </Button>
        </Container>);
}

export default Gallery;