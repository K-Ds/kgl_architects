import styled from "styled-components";
import SectionTitle from '../SectionTitle';
import Button from '../Button';
import SendIllustration from '../../assets/Message.svg';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-block: 3rem;
`;

const Details = styled.div`
    display:flex;
    gap:1rem;
    justify-content:space-between;
    align-items:center;
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:start;
    gap:1rem;
    width:40%;
`;

const Input = styled.input`
    background-color:${props => props.theme.light};
    padding-block: 1rem;
    padding-inline: 1.5rem;
    color:${props => props.theme.text};
    border:0;
    width:80%
`;

const TextArea = styled.textarea`
    background-color:${props => props.theme.light};
    padding-block: 1rem;
    padding-inline: 1.5rem;
    color:${props => props.theme.text};
     border:0;
    width:80%
`;

const LabelText = styled.span`
    font-size:0.9rem;
    letter-spacing: 0.3rem;
    font-weight: 500
`;

const ImageContainer = styled.div`
    width: 35%;
    img {
        width: 100%;
    }
`;

const Contact = () => {
    return (
        <Container>
            <SectionTitle>Contact Us</SectionTitle>
            <Details>
                <Form>
                    <Input type="text" placeholder="Name" />
                    <Input type="tel" placeholder="Phone Number" />
                    <Input type="email" placeholder="E-mail" />
                    <Input type="text" placeholder="Subject" />
                    <TextArea placeholder="Message" />
                    <Button primary>
                        <LabelText>Send Message</LabelText>
                    </Button>
                </Form>
                <ImageContainer>
                    <img src={SendIllustration} alt="" />
                </ImageContainer>
            </Details>

        </Container>
    )
}

export default Contact;