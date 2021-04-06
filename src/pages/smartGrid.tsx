import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';

import SEO from '../components/SEO';
import NavBar from '../components/NavBar';

import { 
  Container, 
  ContentWrapper, 
  Header, 
  MainSection, 
} from '../styles/pages/SmartGrid';

const SmartGrid: React.FC = () => {
  const router = useRouter();
  
  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);
  
  return (
    <>
      <SEO 
        title="Smart grid" 
        description="Uma maneira inteligente de produzir e consumir energia"
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
              <h1>Smart grid</h1>

              <img 
                src="https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1.jpg" 
                alt="Natureza"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                vel iaculis sapien, et hendrerit tortor. Vestibulum vel pretium lacus. 
                Morbi non erat convallis neque ornare volutpat. Donec vulputate fermentum 
                neque vel luctus. Nullam eu eros mollis, ultricies risus ut, hendrerit 
                augue. Donec a fermentum quam. Duis sagittis lectus tortor, at auctor 
                massa vehicula in.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                vel iaculis sapien, et hendrerit tortor. Vestibulum vel pretium lacus. 
                Morbi non erat convallis neque ornare volutpat. Donec vulputate fermentum 
                neque vel luctus. Nullam eu eros mollis, ultricies risus ut, hendrerit 
                augue. Donec a fermentum quam. Duis sagittis lectus tortor, at auctor 
                massa vehicula in.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                vel iaculis sapien, et hendrerit tortor. Vestibulum vel pretium lacus. 
                Morbi non erat convallis neque ornare volutpat. Donec vulputate fermentum 
                neque vel luctus. Nullam eu eros mollis, ultricies risus ut, hendrerit 
                augue. Donec a fermentum quam. Duis sagittis lectus tortor, at auctor 
                massa vehicula in.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                vel iaculis sapien, et hendrerit tortor. Vestibulum vel pretium lacus. 
                Morbi non erat convallis neque ornare volutpat. Donec vulputate fermentum 
                neque vel luctus. Nullam eu eros mollis, ultricies risus ut, hendrerit 
                augue. Donec a fermentum quam. Duis sagittis lectus tortor, at auctor 
                massa vehicula in.
              </p>
            </section>
          </MainSection>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default SmartGrid;