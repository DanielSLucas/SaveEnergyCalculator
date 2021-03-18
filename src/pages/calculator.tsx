import SEO from '../components/SEO';
import NavBar from '../components/NavBar';

import { Container, ContentWrapper, Header, MainSection, InputGroup, ButtonsGroup } from '../styles/pages/Calculator';
import { FiArrowLeft, FiPlus, FiTrash2 } from 'react-icons/fi';
import Input from '../components/Input';
import Button from '../components/Button';

const Calculator: React.FC = () => {
  return (
    <>
      <SEO 
        title="Calculator" 
        description="Calculadora da consumo"
        image="brand.jpeg"
        shouldExludeTitleSuffix
      />

      <Container>
        <NavBar />

        <ContentWrapper>

          <Header>
            <FiArrowLeft />            
          </Header>

          <MainSection>
            <section>
              <h1>Save Energy Calculator</h1>

              <div>
                <h2>Adicione aparelhos eletroeletrônicos:</h2>
                <hr/>
                
                <InputGroup>
                  <Input label="Eletrônico" />
                  <Input label="Potência (Watts)" />
                  <Input label="Horas de uso" />
                  <span>
                    <button>
                      <FiTrash2 />
                    </button>
                  </span>
                </InputGroup>

                <InputGroup>
                  <Input label="Eletrônico" />
                  <Input label="Potência (Watts)" />
                  <Input label="Horas de uso" />
                  <span>
                    <button>
                      <FiTrash2 />
                    </button>
                  </span>
                </InputGroup>

                <InputGroup>
                  <Input label="Eletrônico" />
                  <Input label="Potência (Watts)" />
                  <Input label="Horas de uso" />
                  <span>
                    <button>
                      <FiTrash2 />
                    </button>
                  </span>
                </InputGroup>
                
                <ButtonsGroup>
                  <Button icon={FiPlus}>
                    Adicionar outro aparelho
                  </Button>

                  <Button>
                    Calcular!
                  </Button>
                </ButtonsGroup>

              </div>
            </section>
          </MainSection>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default Calculator;