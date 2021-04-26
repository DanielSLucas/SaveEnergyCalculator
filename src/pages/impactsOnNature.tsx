import { useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi';

import SEO from '../components/SEO';
import NavBar from '../components/NavBar';

import { 
  Container, 
  ContentWrapper, 
  Header, 
  MainSection,
  ImageContainer,
} from '../styles/pages/ImpactsOnNature';
import Footer from '../components/Footer';

const ImpactsOnNature: React.FC = () => {
  const router = useRouter();
  
  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);
  
  return (
    <>
      <SEO 
        title="Impactos na natureza" 
        description="Impactos do consumo de energia na natureza"
        shouldExludeTitleSuffix
      />

      <Container>
        <NavBar />

        <ContentWrapper>

          <Header>
            <button type="button" onClick={handleGoBack}>
              <FiArrowLeft />
            </button>          
          </Header>

          <MainSection>
            <section>
              <h1>Economizar energia ajuda o meio ambiente?</h1>

              <p>
                Inicialmente, é importante esclarecer o lugar de onde vem uma 
                das principais fontes para o abastecimento das hidroelétricas:
              </p>

              <ImageContainer>
                <Image 
                  width={577}
                  height={331}
                  src="/images/grafico.png"
                />
              </ImageContainer>              

              <p>
                Após a análise do gráfico, vimos que, a energia hidráulica, 
                obtida a partir da energia potencial de uma massa de água, é uma 
                das principais fontes de energia do país. Como citado no próprio 
                exemplo, usamos a água como uma fonte renovável. Logo, concluímos 
                que o gasto indevido de energia acarreta diretamente no desperdício 
                de água.
              </p>
              
              <ImageContainer>
                <Image 
                  width={499}
                  height={499}
                  src="/images/balanca.jpg"
                />
              </ImageContainer>              

              <p>
                Como podemos notar, o gasto de energia elétrica prejudica o meio 
                ambiente em que vivemos. Além disso prejudica o nosso bolso, o 
                que na maioria das vezes é o que mais importa para as pessoas.
              </p>

              <p>
                Portanto, pensemos de forma prática: ao economizarmos em um banho 
                de uma hora, conseguiremos descontar de nossa conta cerca de 50 reais, 
                e ao mesmo tempo estaríamos conservando cerca de 420 litros de água. 
                Desse modo, entramos em um consenso, entre a economia e o bem estar da natureza.
              </p>

            </section>
          </MainSection>
        </ContentWrapper>
        <Footer />
      </Container>
    </>
  );
}

export default ImpactsOnNature;