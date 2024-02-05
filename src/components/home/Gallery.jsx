import styled from "styled-components";
import SectionTitle from '../SectionTitle';
import { ArrowRight } from "@styled-icons/bootstrap";
import Button from '../Button';
import { AppContext } from './../../Context';
import { useContext } from 'react';

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
    const { projects } = useContext(AppContext);
    return (
        <Container>
            <SectionTitle>Gallery</SectionTitle>
            <Grid>
                <ShortGridItem><GridImage src={projects[3]?.cover} /></ShortGridItem>
                <LongGridItem><GridImage src={projects[0]?.cover} /></LongGridItem>
                <ShortGridItem><GridImage src={projects[2]?.cover} /></ShortGridItem>
                <LongGridItem><GridImage src={projects[1]?.cover} /></LongGridItem>
            </Grid>
            <Button primary href="/gallery">
                <LabelText>Go To Gallery</LabelText>
                <LabelIcon />
            </Button>
        </Container>);
}

export default Gallery;