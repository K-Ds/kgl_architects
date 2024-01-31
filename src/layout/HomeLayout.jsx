import { Outlet } from "react-router-dom";
import WidthContainer from '../components/WidthContainer';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top:8rem
`;

const StickyTop = styled.div`
    position: fixed;
    top:0;
    background-color: ${(props) => props.theme.background};
    width: 100vw;
    display: flex;
    justify-content: center;
`;


const HomeLayout = () => {
    return <Container>
        <StickyTop>
            <WidthContainer>
                {Navbar}
            </WidthContainer>
        </StickyTop>
        <WidthContainer>
            <Outlet />
        </WidthContainer>
        {Footer}
    </Container>;
}

export default HomeLayout;