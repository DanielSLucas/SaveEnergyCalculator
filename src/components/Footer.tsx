import Image from 'next/image';
import { FiMail } from 'react-icons/fi';
import {
  Content,
  FooterContainer,
  FooterWrapper,
  Links,
  List,
  ImgContainer,
} from '../styles/components/Footer';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Content>
        <FooterContainer>
          <Links>
            <List>
              <strong>Projeto integrador UNISAL</strong>
              <address>
                <ul>
                  <li><a href="mailto:daniellucas-pms@hotmail.com"><FiMail/> Daniel Lucas</a></li>
                  <li><a href="mailto:bernadowolfes@gmail.com"><FiMail/> Fernando Martins</a></li>
                  <li><a href="mailto:meirellesliandra@gmail.com"><FiMail/> Liandra Meirelles</a></li>
                  <li><a href="mailto:victoraarao16@gmail.com"><FiMail/> Victor Aarão</a></li>
                  <li><a href="mailto:vitaodark@gmail.com"><FiMail/> Vitor Emanuel</a></li>
                </ul>
              </address>              
            </List>
          </Links>

          <ImgContainer>
            <Image
              src="/logoSmall.svg"
              alt="Calculator"
              width={97.65}
              height={103}
            />
          </ImgContainer>
        </FooterContainer>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;
