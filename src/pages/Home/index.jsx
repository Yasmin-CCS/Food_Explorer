
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Note } from '../../components/note';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { ButtonText } from '../../components/ButtonText';
import { Container, Content, Advertisement } from './styles';
import macaronmob from '../../assets/macaronmob.png'
import macarondesk from '../../assets/macarondesk.png'


export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search])

  return (
    <Container>

      <Header />
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
          <Section title="Refeições">
          </Section>
          <div>
            {
              notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </div>

          <Section title="Pratos Principais">
          </Section>
          <div>
            {
              notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </div>

          <Section title="Sobremesas">
          </Section>
          <div>
            {
              notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </div>

          <Section title="Bebidas">
          </Section>
          <div>
            {
              notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </div>

        </Content>
      </div>

    </Container>

  );
}