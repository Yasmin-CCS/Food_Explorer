
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Note } from '../../components/note';
import { Section } from '../../components/section';
import { ButtonText } from '../../components/ButtonText';
import { Container, Content, FooterContainer, Header, Search } from './styles';
import macaronmob from '../../assets/macaronmob.png';
import macarondesk from '../../assets/macarondesk.png';
import { Footer } from '../../components/footer';
import { TfiClose } from "react-icons/tfi";
import { AiOutlineSearch } from "react-icons/ai";

import { Input } from '../../components/input';


export function Menu() {
  const [search, setSearch] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [ingredientesSelected, setIngredientesSelected] = useState([]);
  const [pratos, setPratos] = useState([]);

  const navigate = useNavigate();



  return (
    <Container>
      <Header>
        <div className="contentHeader"><TfiClose /><p>Menu</p></div>
      </Header>

      <Content>
        <div className='menuContent'>
          <Search>
            <Input
              placeholder="Pesquisar pelo título"
              // onChange={(e) => setSearch(e.target.value)}
              className="searchHeader"
              icon={AiOutlineSearch}
            />
          </Search>
        </div>



      </Content>

      <FooterContainer>
        <Footer />
      </FooterContainer>

    </Container>

  );
}