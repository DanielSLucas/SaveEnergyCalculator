import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import { Pie, defaults } from 'react-chartjs-2';

import { useCalculator } from '../hooks/CalculatorContext';

import SEO from '../components/SEO';
import NavBar from '../components/NavBar';

import { Container, ContentWrapper, Header, MainSection, ChartContainer } from '../styles/pages/Results';
import formatValue from '../utils/formatValue';
import generateRandomColor from '../utils/generateRandomColor';
import Footer from '../components/Footer';

interface EletronicItem {
  name: string;
  power: string;
  hours: string;
  kWh: string;
}

const Results: React.FC = () => {
  const { eletronicItems } = useCalculator();
  const router = useRouter();
  
  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  const totals = useMemo(() => {
    const eletronicItemskWhWaste = eletronicItems.map(eletronicItem => eletronicItem.kWh);

    const totalWaste = eletronicItemskWhWaste.reduce((accumulator, currentValue) => {
      return String(Number(accumulator) + Number(currentValue));
    });

    const tax = 0.65;

    const total = Number(Number(totalWaste).toFixed(1));
    const monthTotal = total * 30;
    const totalCost = formatValue(total * tax);
    const monthTotalCost = formatValue(monthTotal * tax);

    return {
      total,
      monthTotal,
      totalCost,
      monthTotalCost,
    };

  }, [eletronicItems]);
  
  return (
    <>
      <SEO 
        title="Calculator" 
        description="Calculadora da consumo"
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

                <ChartContainer>
                  <Pie
                    width={1}
                    height={1}
                    data={{                    
                      labels: eletronicItems.map(item => item.name),
                      datasets: [{
                        ... defaults,
                        label: 'Gasto por item',
                        data: eletronicItems.map(item => Number(item.kWh)),
                        backgroundColor: eletronicItems.map(item => generateRandomColor()),
                      }],                      
                    }}
                  />
                </ChartContainer>
              
                <table>
                  <thead>
                    <tr>
                      <th>Aparelho</th>
                      <th>Pot??ncia (W)</th>
                      <th>Horas por dia</th>
                      <th>Gasto (kWh)</th>
                    </tr>
                  </thead>
                  <tbody>

                    {eletronicItems.map((eletronicItem, index) => (
                      <tr key={index}>
                        <td>{eletronicItem.name}</td>  
                        <td>{eletronicItem.power}</td>  
                        <td>{eletronicItem.hours}</td>  
                        <td>{eletronicItem.kWh}</td>  
                      </tr> 
                    ))}                       
                  </tbody>                
                </table>

                <footer>
                  <span>
                    *Os resultados est??o aproximados, utilizando uma taxa de R$0,65 o kWh.
                  </span>
                  <ul>
                    <div>
                      <li>
                        <strong>Total</strong>: {totals.total} kWh
                      </li>
                      <li>
                        <strong>Total mesal</strong>: {totals.monthTotal} kWh
                      </li>
                    </div>
                    <div>
                      <li>
                        <strong>Custo</strong>: {totals.totalCost}
                      </li>
                      <li>
                        <strong>Custo mensal</strong>: {totals.monthTotalCost}
                      </li>
                    </div>
                  </ul>
                </footer>
              </div>
            </section>
          </MainSection>
        </ContentWrapper>
        <Footer />
      </Container>
    </>
  );
}

export default Results;