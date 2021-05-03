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
              <h1>O Uso Eficiente de Energia</h1>

              <ImageContainer>
                <div>
                  <Image 
                    width={499}
                    height={499}
                    src="/images/balanca.jpg"
                  />
                </div>                
              </ImageContainer>                 

              <p>
                Utilizar com eficiência a energia elétrica em sua casa e no seu 
                trabalho significa combater o desperdício, consumindo apenas o 
                necessário. O uso eficiente da energia tem reflexos positivos 
                tanto na redução de custos quanto na diminuição de emissões de 
                gases de efeito estufa e na preservação de recursos naturais 
                renováveis ou não renováveis. Ademais o desperdício sai caro 
                para você e para o meio ambiente. Consumindo energia de forma 
                consciente, você economiza na conta de luz e ainda ajuda na 
                preservação das nossas reservas naturais.
              </p>                                       

              <p>
                Antes de tudo, você que tem interesse em economizar na conta de 
                luz ao final do mês e consequentemente ajudar o nosso meio 
                ambiente, trouxemos alguns pontos importantes para você. Em 
                primeiro lugar, podemos adotar algumas mudanças, como substituir 
                seus equipamentos ineficientes por outros mais novos e eficientes, 
                sempre dando preferência aos que possuem o selo do Procel (O selo 
                Procel tem por objetivo orientar o consumidor no ato da compra, 
                indicando os produtos que apresentam os melhores níveis de eficiência 
                energética.) Assim, você utiliza a energia elétrica de forma mais 
                segura e econômica, sem abrir mão do seu conforto.
              </p>

              <ImageContainer>
                <div>
                  <Image 
                    width={1080}
                    height={1080}
                    src="/images/seloProcel.png"
                  />
                </div>
              </ImageContainer> 

              <h2>
                Você sabia que você pode acompanhar o seu consumo de energia?
              </h2>

              <p>
                Basicamente, existem dois modelos de relógio de luz: analógico e 
                ciclométrico(digital). No modelo analógico existem 4 ou 5 círculos 
                semelhantes a um relógio, cada um deles com um único ponteiro. 
                Para fazer a leitura do consumo, basta verificar em cada círculo 
                o número que o ponteiro mostra. A leitura é feita da esquerda 
                para a direita e indica a milhar, centena, dezena e unidade de 
                consumo. Se o primeiro relógio estiver marcando o número 4 (quatro), 
                por exemplo, esse será o valor do milhar. A dúvida poderá surgir 
                no caso de o ponteiro estar entre dois algarismos. Diante disso, 
                opte sempre pelo número menor. Quando o ponteiro estiver entre o 
                9 (nove) e 0 (zero) deve ser considerado o nove para efeito de 
                leitura. Já o medidor digital apresenta os algarismos digitais. 
                O número mostrado é o valor da leitura.
              </p>

              <ImageContainer>
                <div>
                  <Image 
                    width={483}
                    height={266}
                    src="/images/relogioDeLuz.png"
                  />
                  <span>
                    À esquerda o modelo analógico e à direita o modelo ciclométrico (digital)
                  </span>
                </div>
              </ImageContainer> 

              <h2>
                Mas como descobrir o consumo de um aparelho?
              </h2>

              <p>
                Normalmente os aparelhos eletrônicos possuem uma indicação de 
                potência, por exemplo 1000W (mil watts). E claro, para te auxiliar 
                no cálculo de consumo de energia e para saber o quanto isso irá 
                lhe custar, o <strong>SAVE ENERGY CALCULATOR</strong>. Basta inserir o nome do 
                aparelho, sua potência e a(s) hora(s) de uso na calculadora que 
                fornecemos o resultado.
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