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
import Link from 'next/link';

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

              <h2>
                Sobre o selo de economia PROCEL ser tão importante
              </h2>

              <ImageContainer>
                <div>
                  <Image 
                    width={1080}
                    height={1080}
                    src="/images/seloProcel.png"
                  />
                </div>
              </ImageContainer> 

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
                    Sempre manter o filtro de ar limpo, quando mais sujo mais
                    força este ar fara para o resfriamento
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
                    Sempre limpar os buracos que pelos quais a água sai, para 
                    aumentar a vazão;
                  </li>
                  <li>
                    Se possível, tomar banho no modo verão, pois ele pode 
                    economizar 30% da sua energia;
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
                    E, após o uso de micro-ondas, DVDs e afins, desligue na tomada,
                    pois mesmo com a luz vermelha de “desligado”, eles gastarão energia.
                  </li>
                </ul>
              </article>

              <h2>Mas como descobrir o consumo de um aparelho?</h2>

              <p>
                Normalmente os aparelhos eletrônicos possuem uma indicação de 
                potência, por exemplo 1000W (mil watts). E claro, para te 
                auxiliar no cálculo de consumo de energia e saber o quanto 
                isso irá lhe custar, criamos o <Link href="/calculator"><a>SAVE ENERGY CALCULATOR</a></Link>. 
                Basta inserir o nome do aparelho, sua potência e a(s) hora(s) de uso 
                na calculadora que fornecemos o resultado.
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