import Image from 'next/image';

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
              <ul>
                <li>Daniel Lucas</li>
                <li>Fernando Martins</li>
                <li>Liandra Meirelles</li>
                <li>Victor Emanuel</li>
                <li>Vitor Aarão</li>
              </ul>
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
