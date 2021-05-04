import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import HorizontalSection from '../components/HorizontalSection';
import NavBar from '../components/NavBar';
import SEO from '../components/SEO';

import { Container, ContentWrapper, Content, Intro } from '../styles/pages/Home';

export default function Home() {
  const router = useRouter();

  const handleNavigate = useCallback((route: string) => {    
    router.push(`${route}`);
  }, [router]);
  
  return (
    <>
      <SEO 
        title="Home" 
        description="Solução para calculos de conta de luz"
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
            <article>
              <h1>Porque economizar energia?</h1>
              <p>
                Sabemos que o uso da energia elétrica provoca impactos 
                insubstituíveis na sociedade, mas a questão é: como podemos, 
                a partir dos nossos hábitos diários, mudar ou reduzir este dilema? 
                Muitas pessoas consideram que a diminuição do uso doméstico de 
                aparelhos eletrônicos ou eletroeletrônicos não fazem diferença alguma, 
                mas estão errados, tanto no quesito de impactos na natureza, quanto, 
                por incrível que pareça, no seu bolso.
              </p> 
              <span>
                <Button type="button" onClick={() => handleNavigate('/impactsOnNature')}>
                  Acessar!
                </Button>
              </span>                           
            </article>       

            <div>
              <img src="images/globe.svg" alt="Globe"/>
            </div>
          </HorizontalSection>

          <HorizontalSection reverse>                    
            <div>
              <img src="images/womanAndCalculator.svg" alt="Woman and Calculator"/>
            </div>
            
            
            <article>
              <h1>Nossa Solução</h1>
              <p>
                O save Energy Calculator foi desenvolvido para que você tenha um 
                conhecimento melhor da sua energia elétrica consumida por cada 
                aparelho da sua residência. Você seleciona os equipamentos, 
                informa a potência e o tempo de uso diário de cada aparelho 
                eletrônico e nossa calculadora estimara o consumo e o custo 
                total. No final disponibilizaremos um gráfico para que você 
                possa visualizar de maneira mais clara seu consumo.
              </p> 
              <span>
                <Button type="button" onClick={() => handleNavigate('/calculator')}>
                  Acessar!
                </Button>
              </span>                           
            </article>
                                
          </HorizontalSection>

          <HorizontalSection backgroundColor="#fafafc">                    
            
            <article>
              <h1>Smart grid</h1>
              <p>
                Você já parou para pensar o quão difícil é a nossa vida moderna 
                sem eletricidade? E para mantermos isso precisamos de novos 
                meios de administrá-la, isso é o smart grid, uma maneira de 
                sabermos os nossos gastos de energia na hora para podermos 
                economizar e incrementar novos meios de geração e distribuição 
                de energia.
              </p> 
              <span>
                <Button type="button" onClick={() => handleNavigate('/smartGrid')}>
                  Acessar!
                </Button>
              </span>                           
            </article>
                      

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
