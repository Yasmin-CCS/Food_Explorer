
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Note } from '../../components/note';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { ButtonText } from '../../components/ButtonText';
import { Container, Content, Advertisement, Scroll, Menu, MenuContent, FooterContainer, HeaderMenu, ContainerHomeMenu, Search } from './styles';
import macaronmob from '../../assets/macaronmob.png';
import macarondesk from '../../assets/macarondesk.png';
import { Footer } from '../../components/footer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import React, { useRef } from 'react';
import { useAuth } from '../../hooks/auth';
import { TfiClose } from "react-icons/tfi";
import { Input } from '../../components/input';
import { AiOutlineSearch } from "react-icons/ai";



export function Home() {
  const [search, setSearch] = useState("");
  const [pratos, setPratos] = useState([]);
  const [categoriasId, setCategoriasId] = useState("")
  const [nome, setNome] = useState("")
  const [ingredientes, setIngredientes] = useState("")
  const [termoBusca, setTermoBusca] = useState("");

  const containerRefRef = useRef(null);
  const containerRefSob = useRef(null);
  const containerRefBeb = useRef(null);
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleNewPrato(){
    navigate("/new");
  }

  

  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  function handleSignOut() {
    navigate("/");
    signOut();
  }

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

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  const scrollToLeftRef = () => {
      if (containerRefRef.current) {
        containerRefRef.current.scrollLeft -= 100;// Valor de deslocamento horizontal
      }
  };

  const scrollToRightRef = () => {
      if (containerRefRef.current) {
        containerRefRef.current.scrollLeft += 100; // Valor de deslocamento horizontal
    
      }
  };

  const scrollToLeftSob = () => {
    if (containerRefSob.current) {
      containerRefSob.current.scrollLeft -= 100;// Valor de deslocamento horizontal
    }
  };

  const scrollToRightSob = () => {
    if (containerRefSob.current) {
      containerRefSob.current.scrollLeft += 100; // Valor de deslocamento horizontal
   }
  };

  const scrollToLeftBeb = () => {
    if (containerRefBeb.current) {
      containerRefBeb.current.scrollLeft -= 100;// Valor de deslocamento horizontal
    }
  };

  const scrollToRightBeb = () => {
    if (containerRefBeb.current) {
      containerRefBeb.current.scrollLeft += 100; // Valor de deslocamento horizontal
    }
  };
  

  return (
    <ContainerHomeMenu>
    {!user.isAdmin ? 
      
      <Menu className={`${mostrarMenu ? 'grid' : 'hide'}`}>
        <HeaderMenu>
          <div className="contentHeader">
            <TfiClose onClick={toggleMenu}/>
            
            <p>
              Menu
            </p>
          </div>
        </HeaderMenu>

        <MenuContent>
          <div className='menuContent'>
            <Search>
              <Input
                placeholder="Pesquisar pelo título"
                // onChange={(e) => setSearch(e.target.value)}
                className="searchHeader"
                icon={AiOutlineSearch}
                onChange={(e) => setTermoBusca(e.target.value)}
              />
            </Search>

            <button className="menuSection">
              Sair
            </button>
          </div>



        </MenuContent>

        <FooterContainer>
          <Footer />
        </FooterContainer>

      </Menu>
      :
      <Menu  className={`${mostrarMenu ? 'grid' : 'hide'}`}>
        <HeaderMenu>
          <div className="contentHeader">
            <TfiClose onClick={toggleMenu}/>
            
            <p>
              Menu
            </p>
          </div>
        </HeaderMenu>

        <MenuContent>
          <div className='menuContent'>
            <Search>
              <Input
                placeholder="Pesquisar pelo título"
                // onChange={(e) => setSearch(e.target.value)}
                className="searchHeader"
                icon={AiOutlineSearch}
                onChange={(e) => setTermoBusca(e.target.value)}
              />
            </Search>
            <button className="menuSection" onClick={handleNewPrato}>
              Novo Prato
            </button>
            <button className="menuSection" onClick={handleSignOut}>
              Sair
            </button>
          </div>



        </MenuContent>

        <FooterContainer>
          <Footer />
        </FooterContainer>

      </Menu>
    }


    <Container className= {`${mostrarMenu ? 'hide' : 'flex' }`}>

      <Header
        onChange={(e) => setTermoBusca(e.target.value)}
        onClick={toggleMenu}
        >
        
        </Header>

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
            <Section title="Refeições" className="section">
              <Scroll
                direction="prev"
                onClick={scrollToLeftRef}
                className="left desktop"

              >
                <FiChevronLeft size={25} />
              </Scroll>

              <Scroll
                direction="next"
                onClick={scrollToRightRef}
                className="right desktop"
              >
                <FiChevronRight size={25} />
              </Scroll>
            </Section>
            <div className="listaProdutos" ref={containerRefRef}>


              {
                pratos.filter(prato => prato.categorias_id === 2).map(prato => (
                  <Note
                    key={String(prato.id)}
                    data={prato}
                    className="note"
                  />
                ))
              }




            </div>


            <Section title="Sobremesas">
              <Scroll
                direction="prev"
                onClick={scrollToLeftSob}
                className="left desktop"

              >
                <FiChevronLeft size={25} />
              </Scroll>

              <Scroll
                direction="next"
                onClick={scrollToRightSob}
                className="right desktop"
              >
                <FiChevronRight size={25} />
              </Scroll>
            </Section>
          <div className="listaProdutos" ref={containerRefSob}>
            {
              pratos.filter(prato => prato.categorias_id === 3).map(prato => (
                <Note
                  key={String(prato.id)}
                  data={prato}
                  className="note"

                />
              ))
            }
          </div>

          <Section title="Bebidas">
            <Scroll
              direction="prev"
              onClick={scrollToLeftBeb}
              className="left desktop"

            >
              <FiChevronLeft size={25} />
            </Scroll>

            <Scroll
              direction="next"
              onClick={scrollToRightBeb}
              className="right desktop"
            >
              <FiChevronRight size={25} />
            </Scroll>
        </Section>
        <div className="listaProdutos" ref={containerRefBeb}>
          {
            pratos.filter(prato => prato.categorias_id === 1).map(prato => (
              <Note
                key={String(prato.id)}
                data={prato}
                className="note"
              />
            ))
          }
        </div>
      </div>
      <Footer />
    </Content>
      </div >

    </Container >
    </ContainerHomeMenu>
  );
}