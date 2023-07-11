import { useState } from 'react';
import { Footer } from '../../components/footer';
import { SlArrowLeft } from "react-icons/sl";

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from './styles';
import { api } from '../../service/api';
import { ButtonText } from '../../components/ButtonText';
import { InputFile } from '../../components/inputfile';
import { InputList } from '../../components/inputlist';



export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }


  function handleBack() {
    navigate(-1);
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    if (newLink) {
      return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText
              title='voltar'
              onClick={handleBack}
              icon={SlArrowLeft}
              className="voltar"
            />
            <h1>Novo Prato</h1>
          </header>

          <div className="inputsForm">
            <div className="inputLabel inputFile">
              <label>Imagem do prato</label>
              <InputFile
                onChange={e => setTitle(e.target.value)}
                className='inputsNew '
              />
            </div>

            <div className="inputLabel inputName">
              <label>Nome</label>
              <Input
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
                className='inputsNew '
              />
            </div>

            <div className="inputLabel inputCategoria">
              <label>Categoria</label>
              <InputList
                placeholder="Refeições"
                onChange={e => setTitle(e.target.value)}
                className='inputsNew '
                list='categoria'
              />

              
            </div>

            <div className="inputLabel ingredientes">
              <label>Ingredientes</label>
              <div className="inputingrdients">
                {
                  tags.map((tag, index) => (
                    <NoteItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                      className='inputsNew'
                    />
                  ))
                }
                <NoteItem
                  isNew
                  placeholder="Adicionar"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                  className='inputsNew'
                />
              </div>
            </div>

            <div className="inputLabel .second-row preco">
              <label>Preço</label>
              <Input
                placeholder="R$ 00,00"
                onChange={e => setTitle(e.target.value)}
                className='inputsNew'
              />
            </div>

            <div className="inputLabel descricao">
              <label>Descrição</label>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={e => setDescription(e.target.value)}
                className='inputsNew '
              />
            </div>

            </div>
            <div className='buttonarea'>
              <Button
                className="button"
                title="Salvar Alterações"
                onClick={handleNewNote}
              />
            </div>
        </Form>
        <Footer />
      </main>


    </Container>
  )
}