import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommended from './Recommended';
import Trending from './Trending';
import Viewer from './Viewer';

function Home() {
    return (
     <Container>
        <ImageSlider/>
        <Viewer/>
        <Recommended/>
        <Trending/>
        <Originals/>
        <NewDisney/>
     </Container>
    )
}

export default Home;

const Container = styled.main`
    position: relative;
    top: 72px;
    padding: 30px;
    overflow: hidden;
    min-height: calc(100vh - 250px);

    &:after{
        background: url('/images/home-background.png');
        position: absolute;
        top:0;
        content: '';
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`;