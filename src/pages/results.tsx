import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';

import SEO from '../components/SEO';
import NavBar from '../components/NavBar';

import { Container, ContentWrapper, Header, MainSection } from '../styles/pages/Results';

const Results: React.FC = () => {
  const router = useRouter();
  
  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);
  
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
            <button type="button" onClick={handleGoBack}>
              <FiArrowLeft />
            </button>          
          </Header>

          <MainSection>
            <section>
              <h1>Save Energy Calculator</h1>

              <div>
                <h2>Resultados:</h2>
                <hr/>                            

                <table>
                  <thead>
                    <tr>
                      <th>Aparelho</th>
                      <th>Potência (W)</th>
                      <th>Horas por dia</th>
                      <th>Gasto (kWh)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chuveiro</td>  
                      <td>5400</td>  
                      <td>0.5</td>  
                      <td>2.7</td>  
                    </tr>    
                  </tbody>                
                </table>

                <footer>
                  <span>
                    *Os resultados estão aproximados, utilizando uma taxa de R$0,65 o kWh.
                  </span>
                  <ul>
                    <div>
                      <li>
                        <strong>Total de kWh</strong>: 2.7
                      </li>
                      <li>
                        <strong>Total no mês</strong>: 81
                      </li>
                    </div>
                    <div>
                      <li>
                        <strong>Total em $</strong>: 2.7 * 0,65
                      </li>
                      <li>
                        <strong>Total mensal em $</strong>: 81 * 0,65
                      </li>
                    </div>
                  </ul>
                </footer>
              </div>
            </section>
          </MainSection>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default Results;