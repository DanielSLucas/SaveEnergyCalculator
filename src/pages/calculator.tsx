import { useRouter } from 'next/router';
import { FormEvent, useCallback, useState } from 'react';
import { FiArrowLeft, FiPlus, FiTrash2 } from 'react-icons/fi';

import { useCalculator } from '../hooks/CalculatorContext';

import SEO from '../components/SEO';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Button from '../components/Button';

import { 
  Container, 
  ContentWrapper, 
  Header, 
  MainSection, 
  InputGroup, 
  ButtonsGroup 
} from '../styles/pages/Calculator';

interface EltronicItem {
  name: string;
  power: string;
  hours: string;
}

const Calculator: React.FC = () => {
  const { updateEletronicItems } = useCalculator();
  const router = useRouter();

  const [eletronicItems, setEletronicItems] = useState<EltronicItem[]>([{
    name: "", power: "", hours: ""
  }]);

  const addNewScheduleItem = useCallback(() => {
    setEletronicItems([
      ...eletronicItems,
      { name: "", power: "", hours: "" }
    ])
  }, [eletronicItems]);

  const setEletronicItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updateEletronicItems = eletronicItems.map((eletronicItem, index) => {
        if (index === position) {
          return { ...eletronicItem, [field]: value };
        }
        return eletronicItem;
      });
      setEletronicItems(updateEletronicItems);
    }, 
    [eletronicItems]
  );

  const removeEletronicItem = useCallback((position: number) => {
    const updateEletronicItems = eletronicItems.filter((_item, index) => index !== position);    
    
    setEletronicItems(updateEletronicItems);

  }, [eletronicItems]);
  
  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    updateEletronicItems(eletronicItems);
  }, [eletronicItems]);

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
                <h2>Adicione aparelhos eletroeletrônicos:</h2>
                <hr/>
                
                <form onSubmit={handleSubmit}>
                  {eletronicItems.map((eletronicItem, index) => (
                    <InputGroup key={index}>
                      <Input 
                        label="Eletrônico"
                        value={eletronicItem.name}
                        onChange={e => setEletronicItemValue(index, 'name', e.target.value)}
                        setValue={(value) => setEletronicItemValue(index, 'name', value) }
                        selectOptions={[
                          "Geladeira", 
                          "Chuveiro", 
                          "Secador", 
                          "Máquina de lavar", 
                          "Microondas"
                        ]} 
                      />
                      <Input 
                        label="Potência (Watts)" 
                        value={eletronicItem.power}
                        onChange={e => setEletronicItemValue(index, 'power', e.target.value)}
                        centered
                      />
                      <Input 
                        label="Horas de uso" 
                        value={eletronicItem.hours}
                        onChange={e => setEletronicItemValue(index, 'hours', e.target.value)} 
                        centered                   
                      />
                      <span>
                        <button type="button" onClick={() => removeEletronicItem(index)}>
                          <FiTrash2 />
                        </button>
                      </span>
                    </InputGroup>
                  ))}
                  
                  <ButtonsGroup>
                    <Button icon={FiPlus} type="button" onClick={addNewScheduleItem}>
                      Add outro
                    </Button>

                    <Button type="submit">
                      Calcular!
                    </Button>
                  </ButtonsGroup>
                </form>            
              </div>
            </section>
          </MainSection>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default Calculator;