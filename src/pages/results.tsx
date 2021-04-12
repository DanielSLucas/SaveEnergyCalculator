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

interface EletronicItem {
  name: string;
  power: string;
  hours: string;
  kWh: string;
}

const Results: React.FC = () => {
  // const { eletronicItems } = useCalculator();
  const eletronicItems: EletronicItem[] = [
    { name: "Geladeira", power: "3400", hours: "12", kWh: "40.8"},
    { name: "Chuveiro", power: "500", hours: "1", kWh: "0.5"},
    { name: "Televisao", power: "300", hours: "4", kWh: "1.2"},
    { name: "Computador", power: "400", hours: "24", kWh: "1.2"},
    { name: "Luz", power: "30", hours: "18", kWh: "0.54"}
  ];

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
                      <th>Potência (W)</th>
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
                    *Os resultados estão aproximados, utilizando uma taxa de R$0,65 o kWh.
                  </span>
                  <ul>
                    <div>
                      <li>
                        <strong>Total de kWh</strong>: {totals.total}
                      </li>
                      <li>
                        <strong>Total no mês</strong>: {totals.monthTotal}
                      </li>
                    </div>
                    <div>
                      <li>
                        <strong>Total em $</strong>: {totals.totalCost}
                      </li>
                      <li>
                        <strong>Total mensal em $</strong>: {totals.monthTotalCost}
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