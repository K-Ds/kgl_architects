import styled from "styled-components";
import PageContainer from '../components/PageContainer';
import PageTitle from './../components/PageTitle';

const CertList = styled.div`
margin-top: 3rem;
padding-block: 1rem;
    min-height: 20rem;
`;

const Certifications = () => {
    return (
        <PageContainer>
            <PageTitle>Company Certifications</PageTitle>
            <CertList></CertList>
        </PageContainer>
    )
}

export default Certifications;