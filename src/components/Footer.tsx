import Image from 'next/image';

import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
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
              <strong>Produtos</strong>
              <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sia amet</li>
              </ul>
            </List>

            <List>
              <strong>Company</strong>
              <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sia amet</li>
              </ul>
            </List>

            <List>
              <strong>Social</strong>
              <ul>
                <li>
                  <a href="#">
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiLinkedin />
                  </a>
                </li>
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
