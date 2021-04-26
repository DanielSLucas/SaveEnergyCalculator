import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';

import SEO from '../components/SEO';
import NavBar from '../components/NavBar';

import { 
  Container, 
  ContentWrapper, 
  Header, 
  MainSection, 
} from '../styles/pages/SmartGrid';
import Footer from '../components/Footer';

const SmartGrid: React.FC = () => {
  const router = useRouter();
  
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
              <h1>Smart grid</h1>

              <img 
                src="https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1.jpg" 
                alt="Natureza"
              />

              <p>
                Nossa rede elétrica foi construída há mais de 100 anos e até hoje 
                o modelo de distribuição que usamos é basicamente o mesmo de lá 
                pra cá, a energia produzida vai para os distribuidores e depois 
                para as casas e negócios, um dos grandes problemas desse método 
                e que a produtora de energia sempre está trabalhando ao máximo 
                para entregar toda a energia necessária pois só ela faz o trabalho 
                nessa via de mão única, fazendo com que caso ocorra dos fios de 
                energia quebrarem ou ela não conseguir produzir energia suficiente 
                ocorre os apagões, o que pode causar acidentes e fatalidades.
              </p>

              <p>
                A Smart Grid serve para que ao mesmo tempo que você receba energia 
                elétrica, receba os dados dela e repasse para a distribuidora, 
                fazendo assim uma comunicação direta de qualquer coisa que acontecer 
                e enviando para o cliente os gastos na hora em vez de só no final 
                do mês, assim a pessoa recebe via e-mail, sms ou aplicativo qualquer 
                coisa relacionada a sua rede elétrica e corrigir os problemas de 
                maneira remota sem ter que mandar uma equipe para o local. Essa 
                rede inteligente também poderá permitir conexão com outros tipos 
                de fonte de energia, tipo a usina eólica e solar, permitindo que 
                a pessoa produza e use energia de sua própria casa, podendo assim 
                devolver para a rede caso o consumo seja menor que o que está 
                sendo gerado.
              </p>

              <h2>Quais são as vantagens para os consumidores?</h2>

              <p>
                Com a sua tecnologia atual, foi desenvolvido a ferramenta chamada 
                “medidor inteligente”, que em si, contribui para que os consumidores 
                consigam acompanhar com facilidade e em tempo real o seu consumo. 
                Ademais, a Smart Grids torna a rede uma via de mão dupla na 
                transmissão de energia elétrica. Além da energia em si, haveria 
                uma comunicação inteligente com a distribuidora de energia dando 
                a esta uma coordenação maior em compatibilidade com a decisão e 
                relação à sua distribuição, além de permitir fácil percepção de 
                locais onde se está havendo desperdício de energia.
              </p>

              <h2>Locais Brasileiros com a smart grid:</h2>

              <ul>
                <li>
                  <p>
                    Projeto Cidades do Futuro, realizado pela Companhia Energética 
                    de Minas Gerais (Cemig), no município de Sete Lagoas;
                  </p>                  
                </li>
                <li>
                  <p>
                    Projeto Parintins, implantado pela Eletrobras no munícipio de Parintins (AM); 
                  </p>                  
                </li>
                <li>
                  <p>
                    Projeto InovCity, realizado pela Bandeirante, em Aparecida (SP) 
                    e em dois municípios do Espírito Santo: Domingos Martins e Marechal Floriano;
                  </p>                  
                </li>
                <li>
                  <p>
                    Projeto Cidade Inteligente Búzios, realizado pela Ampla, em Armação de Búzios (RJ).
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
                    <a href="https://www.youtube.com/watch?v=JwRTpWZReJk">
                      What is the Smart Grid
                    </a>
                  </p>                  
                </li>
                <li>
                  <p>
                    <a href="https://www.youtube.com/watch?v=jjM0qE6gKmU">
                      O que é Smart Grid
                    </a>                     
                  </p>                  
                </li>
                <li>
                  <p>
                    <a href="https://www.youtube.com/watch?v=jjM0qE6gKmU">
                      The Smart Grid Explained – Na Understading to Everyone
                    </a>
                  </p>                  
                </li>
                <li>
                  <p>
                    <a href="https://gereportsbrasil.com.br/voc%C3%AA-sabe-o-que-%C3%A9-smart-grid-tire-suas-d%C3%BAvidas-no-ge-reports-brasil-191fc22998c4">
                      Tire suas dúvidas sobre Smart Grids
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