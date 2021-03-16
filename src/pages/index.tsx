import Button from '../components/Button';
import Footer from '../components/Footer';
import HorizontalSection from '../components/HorizontalSection';
import NavBar from '../components/NavBar';
import SEO from '../components/SEO';

import { Container, ContentWrapper, Content, Intro } from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Solução para calculos de conta de luz"
        image="brand.jpeg"
      />
      <Container>
        <NavBar />
        
        <ContentWrapper>
          <Intro>
            <Content>
              <article>
                <h1>Save Energy Calculator</h1>
                <p>Uma solução simples para cálculos complexos.</p>
              </article>
            </Content>
          </Intro>

          <HorizontalSection backgroundColor="#fafafc">                    
            <div>
              <article>
                <h1>Porque economizar energia?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Pellentesque porttitor mauris diam. Proin consectetur ante eu 
                  tempus porttitor. Aliquam neque est, congue sed semper at, 
                  ultricies efficitur odio. Proin a diam bibendum, varius ante in, 
                  convallis dolor. Curabitur a maximus eros. Vivamus nec tempus elit, 
                  gravida viverra justo.
                </p> 
                <span>
                  <Button>
                    Acessar!
                  </Button>
                </span>                           
              </article>
            </div>          

            <div>
              <img src="images/globe.svg" alt="Globe"/>
            </div>
          </HorizontalSection>

          <HorizontalSection reverse>                    
            <div>
              <img src="images/womanAndCalculator.svg" alt="Woman and Calculator"/>
            </div>
            
            <div>
              <article>
                <h1>Nossa Solução</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Pellentesque porttitor mauris diam. Proin consectetur ante eu 
                  tempus porttitor. Aliquam neque est, congue sed semper at, 
                  ultricies efficitur odio. Proin a diam bibendum, varius ante in, 
                  convallis dolor. Curabitur a maximus eros. Vivamus nec tempus elit, 
                  gravida viverra justo.
                </p> 
                <span>
                  <Button>
                    Acessar!
                  </Button>
                </span>                           
              </article>
            </div>                    
          </HorizontalSection>

          <HorizontalSection backgroundColor="#fafafc">                    
            <div>
              <article>
                <h1>Smart grid</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Pellentesque porttitor mauris diam. Proin consectetur ante eu 
                  tempus porttitor. Aliquam neque est, congue sed semper at, 
                  ultricies efficitur odio. Proin a diam bibendum, varius ante in, 
                  convallis dolor. Curabitur a maximus eros. Vivamus nec tempus elit, 
                  gravida viverra justo.
                </p> 
                <span>
                  <Button>
                    Acessar!
                  </Button>
                </span>                           
              </article>
            </div>          

            <div>
              <img src="images/smartGrid.svg" alt="Smart grid"/>
            </div>
          </HorizontalSection>

          <Footer/>
        </ContentWrapper>
      </Container>
    </>
  )
}
