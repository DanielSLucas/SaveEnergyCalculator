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
              <h1>Por que economizar energia elétrica é importante, e por qual motivo afeta o meio ambiente?</h1>

              <p>
                O consumo consciente de água se tornou algo indispensável no
                brasil nos últimos anos, e uma forma de equilibrar essa
                racionalização é pelo consumo da energia elétrica, em que, o uso
                da água é deveras muito usado em suas hidrelétricas pelo País
              </p>

              <ImageContainer>
                <div>
                  <Image
                    width={1122}
                    height={718}
                    src="/images/grafico2.png"
                  />
                </div>
              </ImageContainer>

              <p>
                Como podemos observar no gráfico, o uso da energia hidráulica é
                a mais usada no brasil, com 64,9%, ou seja, por este motivo
                devemos economizar energia elétrica, pois automaticamente
                pouparemos água, e ajudaremos o meio ambiente.
              </p>

              <p>
                Mas, por que a energia elétrica esta relacionada ao uso da água?
                Em uma breve explicação, temos que as usinas hidrelétricas são
                movidas por turbinas que só se movem com a força da água, onde
                toda a água fica nesse processo, e assim, é gerado energia elétrica,
                que vai para nossas casas, empresas e afins.
              </p>

              <h2>
                Economizar energia ajuda o meu bolso ao fim do mês?
              </h2>

              <p>
                Agora que percebemos o motivo pelo qual devemos economizar energia,
                pensemos em outro quesito fora o meio ambiente: como isso pode
                ajudar o meu bolso?
              </p>

              <p>
                Usamos a energia elétrica diariamente, e a cada instante. Agora
                provavelmente em sua casa estão ligados, geladeira, TV, computador,
                uma pessoas tomando banho, e tudo isso tem um gasto no final, por
                exemplo, um banho de duas horas com um chuveiro que gasta 5.500W,
                você estará consumindo ao final R$ 7,15, o que é mensalmente cerca
                de R$ 214,50.
              </p>

              <p>
                Contudo estamos aqui para te informar e orientar em como esses
                gastos devem ser diminuídos.
              </p>

              <h2>
                O que mais consome energia elétrica em casa e como podemos diminuir estes gastos?
              </h2>

              <p>
                Como a maioria das pessoas já sabem, eletrodomésticos e eletroeletrônico,
                consomem muita energia da sua casa. Segue abaixo uma lista dos
                que mais exigem energia e como podemos amenizar esse uso diariamente,
                pois é partir de hábitos constantes que podemos ver alguma diferença.
              </p>

              <article>
                <h2>Ar condicionado</h2>
                <p>
                  Este aparelho é usado para o resfriamento do ambiente.
                  Em que, várias famílias optam por não ter pelo simples
                  fato dele ser cerca de 1/3 do valor da sua conta ao fim do
                  mês. Contudo, outras preferem o conforto, então aqui vai
                  algumas dicas de como minimizar o gasto que ele pode trazer:
                    </p>
                <ul>
                  <li>
                    Instalar somente um ar condicionado na casa, onde ficam
                    mais pessoas, ou onde você mais fica;
                      </li>
                  <li>
                    Fazer a instalação em um lugar propicio para que o ar
                    frio não sai pela janela e permaneça no cômodo;
                      </li>
                  <li>
                    Sempre manter o filtro de ar limpo, quando mais sujo mais
                    força este ar fara para o resfriamento
                      </li>
                  <li>
                    E claro, sempre desligar ele quando não estiver no ambiente.
                      </li>
                </ul>
              </article>

              <article>
                <h2>Geladeira</h2>
                <p>
                  Talvez este seja o mais usado em todas as casas, e não existe
                  a possibilidade de mantê-lo desligado os afins, porém existem
                  método que fazem com que ele economize energia, mesmo que o
                  mínimo possível:
                </p>
                <ul>
                  <li>
                    Sempre manter ele limpa, pois ela congelada ou com esse de 
                    gelo no freezer ou portas, faz com que aconteça um uso 
                    excessivo de energia;
                  </li>
                  <li>
                  	Reparar sempre se a borracha da porta está devidamente 
                    grudada ou que não gasta demais, com ela dessa maneira 
                    ocasionara a perca de energia na geladeira, o que fara ela 
                    puxar mais energia para dentro dela;
                  </li>
                  <li>
                  	E por fim, não abra ela a cada instante, somente quando 
                    houver necessidade. Quando abrimos, o ar frio sai e o quente 
                    entra, o que faz ele ter que fazer todo o processo de 
                    resfriamento novamente.
                  </li>
                </ul>
              </article>

              <article>
                <h2>Iluminação da casa (lâmpadas)</h2>
                <p>
                  Normalmente nas residências, usamos as lâmpadas incandescentes, 
                  por serem mais baratas, contudo, elas usam mais energia que a 
                  de fluorescentes ou LED.
                </p>
                <p>
                  Lâmpadas fluorescentes ou LED, podem até ser um pouco mais 
                  caras que as incandescentes, porém duram 3 vezes mais que 
                  elas, logo, valem mais a pena pelo custo benefício.
                </p>
                <p>
                  Lembrando sempre de ao sair de um cômodo, desligar cada uma delas.
                </p>
              </article>

              <article>
                <h2>Chuveiro</h2>
                <p>
                  Todos sabemos que tomar banho é uma das horas mais satisfatórias 
                  do dia, e sabemos também que é um dos eletrodomésticos que mais 
                  consomem energia, logo devemos emendar a nossa satisfação com o 
                  que é necessário, a diminuição do consumo.
                </p>
                <ul>
                  <li>
                    Tomar banho de até 15 minutos é o necessário para manter uma base de gasto boa;
                  </li>
                  <li>
                  	Sempre limpar os buracos que pelos quais a água sai, para aumentar a vazão;
                  </li>
                  <li>
                    Se possível, tomar banho no modo verão, pois ele pode economizar 30% da sua energia;
                  </li>
                  <li>
                  	E claro, verificar se a resistência que vai usar no seu chuveiro 
                    é verdadeira e adequada para o se modelo.
                  </li>
                </ul>
              </article>

              <article>
                <h2>Para eletrodomésticos em gerais</h2>
                <ul>
                  <li>
                  	Sempre comprar eletrodomésticos com o selo Procel, para maior garantia;
                  </li>
                  <li>
                    Nunca durma com a TV ligada, se possível adicione o modo em que 
                    ela desliga em determinada hora e liga em outra, para não a 
                    ver casos que você se esqueça;
                  </li>
                  <li>
                  	Evite lavar roupas uma por uma, faça um acúmulo delas, isso poupara tempo e energia;
                  </li>
                  <li>
                    E, após o uso de micro-ondas, DVDs e afins, desligue na tomada, 
                    pois mesmo com a luz vermelha de “desligado”, eles gastarão energia.
                  </li>
                </ul>
              </article>

              <h2>Sobre o selo de economia PROCEL ser tão importante</h2>

              <p>
                O selo PROCEL (Centro Brasileiro de Informação em eficiência 
                energética), tem como objetivo nos mostrar quais são os 
                eletrodomésticos que usam menos energia. 
              </p>

              <p>
                Ele funciona da seguinte maneira: é adicionado este selo, como 
                da imagem a cima, em cada eletrodoméstico que é submetido a 
                teste pela Eletrobras, onde são situados de A a G, sendo A uma 
                economia muito boa e G nem tão recomendado assim, porém, melhor 
                que um produto que não tem nenhum selo de confiança.
              </p>

              <p>
                Com estes testes, seu aparelho chega a economizar cerca de 8,8% 
                de consumo em energia elétrica em geral.
              </p>

              <p>
                Logo, sempre que for comprar um produto novo, procure o selo da 
                PROCEL, além de ser mais sustentável, economizará uma quantia 
                boa ao fim do mês.
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