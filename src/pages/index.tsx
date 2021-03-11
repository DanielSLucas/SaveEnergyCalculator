import NavBar from '../components/NavBar';

import { Container, ContentWrapper, Content, Intro, Nature } from '../styles/pages/Home';


export default function Home() {
  return (
    <Container>
      <NavBar />
      
      <ContentWrapper>
        <Intro>
          <Content>
            <img src="images/lamp.svg" alt=""/>
            <div>
              <h1>Save Energy Calculator</h1>
              <p>Uma solução simples para cálculos complexos.</p>
            </div>
          </Content>
        </Intro>

        <Nature>
          <Content>
            <div>
              <h1>Porque economizar energia?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque porttitor mauris diam. Proin consectetur ante eu 
                tempus porttitor. Aliquam neque est, congue sed semper at, 
                ultricies efficitur odio. Proin a diam bibendum, varius ante in, 
                convallis dolor. Curabitur a maximus eros. Vivamus nec tempus elit, 
                gravida viverra justo.
              </p>
              <div>
                <button>
                  Acessar!
                </button>
              </div>
            </div>

            <img src="images/globe.svg" alt="Globe"/>
          </Content>
        </Nature>
      </ContentWrapper>
    </Container>
  )
}
