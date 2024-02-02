import styled from "styled-components";
import Button from './../components/Button';
import PageContainer from './../components/PageContainer';
import PageTitle from './../components/PageTitle';

const contactInfo = {
    address: 'Kigali, Rwanda',
    tel: '+250 799123123',
    email: ''
}

const Container = styled.div`
    display: flex;
    margin-top: 3rem;
    align-items: center;
    gap:2rem;
`;


const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap:2.5rem;
    width: 40%
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap:0.5rem
`;

const Title = styled.span`
    font-weight: 400;
    color: ${props => props.theme.text}
`;

const Body = styled.span`
    font-weight: 600;
    color: ${props => props.theme.text}
`;

const Contact = () => {

    return (
        <PageContainer>
            <PageTitle>Contact Information</PageTitle>
            <Container>
                <Information>
                    <Item>
                        <Title>Address</Title>
                        <Body>{contactInfo.address}</Body>
                    </Item>
                    <Item>
                        <Title>Phone Number</Title>
                        <Body>{contactInfo.tel}</Body>
                    </Item>
                    <Button primary>Email Us</Button>
                </Information>
            </Container>
        </PageContainer>
    );
}

export default Contact;