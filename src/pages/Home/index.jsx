
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Note } from '../../components/note';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { ButtonText } from '../../components/ButtonText';
import { Container, Content, Advertisement, Scroll } from './styles';
import macaronmob from '../../assets/macaronmob.png';
import macarondesk from '../../assets/macarondesk.png';
import { Footer } from '../../components/footer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


export function Home() {
  const [search, setSearch] = useState("");
  const [pratos, setPratos] = useState([]);
  const [categoriasId, setCategoriasId] = useState("")
  const [nome, setNome] = useState("")
  const [ingredientes, setIngredientes] = useState("")
  const [termoBusca, setTermoBusca] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    async function buscaPratos() {
      const response = await api.get(`/pratos`);
      console.log(response.data)
      if (termoBusca) {
        const pratosFiltrados = response.data.filter(prato => {
          const nomeMatch = prato.nome.toLowerCase().includes(termoBusca.toLowerCase());
          const ingredientesMatch = prato.ingredientes.some(ingrediente =>
            ingrediente.nome.toLowerCase().includes(termoBusca.toLowerCase())
          );
          return nomeMatch || ingredientesMatch;
        });

        setPratos(pratosFiltrados);
      } else {
        setPratos(response.data)
      }
    }

    buscaPratos();
  }, [termoBusca]);

  const handlePrevMealList = () => {
    scrollMealList.current.scrollBy({
      left: -120,
      behavior: 'smooth'
    });
  }

  const handleNextMealList = () => {
    scrollMealList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  const handlePrevDrinkList = () => {
    scrollDrinkList.current.scrollBy({
      left: -120,
      behavior: 'smooth'
    });
  }

  const handleNextDrinkList = () => {
    scrollDrinkList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  const handlePrevDessertList = () => {
    scrollDessertList.current.scrollBy({
      left: -120,
      behavior: 'smooth'
    });
  }

  const handleNextDessertList = () => {
    scrollDessertList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  return (
    <Container>

      <Header
        onChange={(e) => setTermoBusca(e.target.value)}
      />

      <div className='gradient desktop' />
      <div className='home'>
        <div className='advertisementdiv'>
          <div className='gradient mobile' />

          <Advertisement>
            <img src={macaronmob} className='mobile' />
            <img src={macarondesk} className='desktop' />
            <div className='textAdv'>
              <h2>Sabores inigualáveis</h2>
              <h3>Sinta o cuidado do preparo com ingredientes selecionados.</h3>
            </div>
          </Advertisement>
        </div>

        <Content>
          <div className='contentHome'>
            <Section title="Refeições">
            </Section>
            <div className="listaProdutos">
            
              {
                pratos.filter(prato => prato.categorias_id === 2).map(prato => (
                  <Note
                    key={String(prato.id)}
                    data={prato}
                    className="note"
                  />
                ))
              }
              <div className='scrolls'>
              <Scroll
              direction="prev"
              onClick={handlePrevMealList}
              className="left"
            >
              <FiChevronLeft />
            </Scroll>

            <Scroll 
              direction="next" 
              onClick={handleNextMealList}
              className="right"
              >
              <FiChevronRight />
            </Scroll>
            </div>
            </div>

            <Section title="Sobremesas">
            </Section>
            <div className="listaProdutos">
              {
                pratos.filter(prato => prato.categorias_id === 3).map(prato => (
                  <Note
                    key={String(prato.id)}
                    data={prato}
                    onClick={() => handleDetails(prato.id)}
                    className="note"

                  />
                ))
              }
            </div>

            <Section title="Bebidas">
            </Section>
            <div className="listaProdutos">
              {
                pratos.filter(prato => prato.categorias_id === 1).map(prato => (
                  <Note
                    key={String(prato.id)}
                    data={prato}
                    onClick={() => handleDetails(prato.id)}
                    className="note"
                  />
                ))
              }
            </div>
          </div>
          <Footer />
        </Content>
      </div>

    </Container>

  );
}