import { useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';

import SEO from '../components/SEO';
import NavBar from '../components/NavBar';
import ReadingProgressBar from '../components/ReadingProgressBar';

import { 
  Container, 
  ContentWrapper, 
  Header, 
  MainSection,
  ImageContainer,
} from '../styles/pages/SmartGrid';
import Footer from '../components/Footer';

const SmartGrid: React.FC = () => {
  const router = useRouter();
  const containerRef = useRef(null);
  
  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);
  
  return (
    <>
      <SEO 
        title="Smart grid" 
        description="Uma maneira inteligente de produzir e consumir energia"
        shouldExludeTitleSuffix
      />
      <ReadingProgressBar containerRef={containerRef}/>
      <Container ref={containerRef}>
        <NavBar />

        <ContentWrapper>

          <Header>
            <button type="button" onClick={handleGoBack}>
              <FiArrowLeft />
            </button>          
          </Header>

          <MainSection>
            <section>
              <h1>Smart grid</h1>

              <ImageContainer>
                <div>
                  <Image
                    width={1024}
                    height={512}
                    src="/images/smartGridImage.jpg"
                  />
                </div>
              </ImageContainer>

              <p>
                As “redes inteligentes” ou smart grid se trata da junção da rede 
                de distribuição e transmissão de energia elétrica com recursos 
                digitais da Tecnologia da Informação (TI), de forma que amplia 
                sua eficiência operacional comparado com a rede elétrica padrão, 
                a smart grid graças a tecnologia consegue cumprir as demandas da 
                sociedade moderna, tanto na necessidade elétrica, quanto em relação 
                ao desenvolvimento sustentável.
              </p>

              <h2>Funcionalidade</h2>

              <p>
                Quando os sensores da rede detectam informações de algum ocorrido 
                os dados são mandados de volta para o software central, que 
                analisa esses dados e determina o que esta errado com a rede 
                e o que deve ser feito para melhorar o desempenho. Por exemplo, 
                num caso de um apagão o software detecta o local onde a tensão 
                foi cortada e irá instruir os dispositivos na rede para mudar 
                sua rota de distribuição para que se tenha energia enquanto uma 
                equipe técnica é mandada ao local, podendo assim evitar acidentes
              </p>

              <h2>Benefícios da Smart Grid</h2>

              <h3>Eficiência</h3>

              <p>
                Ela ajuda a empresa concessionaria de energia a fornecer níveis 
                melhores de qualidade aos clientes, mantendo a demanda enquanto 
                diminui os custos e a emissão de carbono, ajudando o meio ambiente.
              </p>

              <h3>Confiabilidade</h3>

              <p>
                A rede inteligente irá detectar problemas de falhas ou declínios 
                de desempenho e mandar para a concessionaria e sua localização, 
                podendo ser reparado com rapidez e precisão antes que haja uma 
                queda de energia. A rede inteligente também permite isolar o 
                local da falha para que menos clientes sejam afetados pela falta 
                de energia.
              </p>

              <h3>Integração de ponta</h3>

              <p>
                Para ter conexão com a rede podemos ter um medidor inteligente que 
                ajuda na interação com o sistema de gestão dos clientes, painéis 
                solares gerando energia limpa, tomadas para se carregar veículos 
                elétricos, isso tudo vai se usar dessa interação com a rede para 
                ter melhor desempenho. 
              </p>

              <h2>Medidores Inteligentes</h2>

              <ImageContainer>
                <div>
                  <Image
                    width={1000}
                    height={560}
                    src="/images/smartMeter.jpg"
                  />
                </div>
              </ImageContainer>

              <p>
                Parte importante da smart grid são os medidores inteligentes 
                (do inglês smart meter) que são responsáveis por fazer medidas 
                do consumo elétrico de cada consumidor e enviá-los para a 
                companhia elétrica, normalmente se enviam os dados coletados 
                em intervalos de 15 minutos. Além dessa coleta de dados que 
                ajuda na otimização e operação da rede elétrica, esses medidores 
                são responsáveis por um novo modelo de cobrança de energia 
                elétrica, onde não existe mais coleta manual dos medidores 
                na companhia, tudo acontece automaticamente com a comunicação 
                do medidor nas casas com a companhia elétrica.  
              </p>

              <h2>Smart grid no Brasil</h2>
              <p>
                No Brasil as Redes inteligentes estão em sua fase piloto, sendo 
                aplicadas em pequenos municípios a princípio, alguns desses lugares são:
              </p>

              <ul>
                <li>
                  <p>
                    Parintins (Eletrobras Amazonas Energia) - Cidade de Parintins/AM
                  </p>                  
                </li>
                <li>
                  <p>
                    Cidade Inteligente Aquiraz (Coelce/Endesa) - Cidade de Fortaleza/CE
                  </p>                  
                </li>
                <li>
                  <p>
                    Arquipélago de Fernando de Noronha (CELPE) - Ilha de Fernando de Noronha/PE
                  </p>                  
                </li>
                <li>
                  <p>
                    Cidades do Futuro (Cemig) - Cidade de Sete Lagoas/MG
                  </p>                  
                </li>
                <li>
                  <p>
                    Cidade Inteligente Búzios (Ampla/Endesa Brasil) - Cidade de Búzios/RJ
                  </p>                  
                </li>
                <li>
                  <p>
                    Smart Grid Light (Light) - Cidade do Rio de Janeiro/RJ
                  </p>                  
                </li>
                <li>
                  <p>
                    Smart Grid (AES Eletropaulo) - Bairro do Ipiranga, São Paulo/SP
                  </p>                  
                </li>
                <li>
                  <p>
                    InovCity (EDP Bandeirantes) - Cidade Aparecida/SP
                  </p>                  
                </li>
                <li>
                  <p>
                    Fazenda Rio Grande - Curitiba (Copel) - Cidade de Fazenda Rio Grande/PR
                  </p>                  
                </li>
              </ul>

              <h2>Referências:</h2>

              <ul>
              <li>
                  <p>
                    <a href="https://www.youtube.com/watch?v=KJZNGVGJ_hk">
                      Redes Inteligentes Smart Grid
                    </a> 
                  </p>                  
                </li>
                <li>
                  <p>
                    <a href="https://gereportsbrasil.com.br/voc%C3%AA-sabe-o-que-%C3%A9-smart-grid-tire-suas-d%C3%BAvidas-no-ge-reports-brasil-191fc22998c4">
                      Tire suas dúvidas sobre Smart Grid
                    </a>                     
                  </p>                  
                </li>
                <li>
                  <p>
                    <a href="http://blog.minhacasasolar.com.br/smart-grid/">
                      Conheça sobre a smart grid, a rede elétrica inteligente! 
                    </a>
                  </p>                  
                </li>
                <li>
                  <p>
                    <a href="http://redesinteligentesbrasil.org.br/index.php">
                      Redes Inteligentes Brasil 
                    </a>                    
                  </p>                  
                </li>
              </ul>
            </section>
          </MainSection>
        </ContentWrapper>
        <Footer />
      </Container>
    </>
  );
}

export default SmartGrid;