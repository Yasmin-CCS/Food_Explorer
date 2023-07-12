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
  const [nome, setNome] = useState("");
  const [description, setDescription] = useState("");
  const [foto, setFoto] = useState("");
  const [preco, setPreco] = useState("");

  const [categorias, setCategorias] = useState([]);

  const [ingredientes, setIngredientes] = useState([]);
  const [newIngredientes, setNewIngredientes] = useState("");

  const navigate = useNavigate();

  function handleFotoChange(file) {
    if (file) {
        let fileName = file.name.slice(0, 16)

        if (file.name.length > 16) {
            const fileExtension = file.name.split('.').pop()
            fileName += `.${fileExtension}`
        }

        setFoto(file)
        setFotoName(fileName)
    }
}

  function handleBack() {
    navigate(-1);
  }

  function handleAddIngrediente() {
    setIngredientes(prevState => [...prevState, newIngredientes]);
    setNewIngredientes("")
  }

  function handleRemoveIngredientes(deleted) {
    setIngredientes(prevState => prevState.filter(ingrediente => ingrediente !== deleted));
  }

  async function handleNewPrato() {
    if (!nome) {
      return alert("Digite o nome do prato");
    }

    if (newIngredientes) {
      return alert("Você deixou um ingrediente no campo, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    await api.post("/pratos", {
      nome,
      description,
      foto,
      preco,
      ingredientes,
      categorias
    });

    alert("Prato cadastrado com sucesso!");
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
                onChange={e => handleFotoChange(e.target.files[0])}
                className='inputsNew '
              />
            </div>

            <div className="inputLabel inputName">
              <label>Nome</label>
              <Input
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setNome(e.target.value)}
                className='inputsNew '
              />
            </div>

            <div className="inputLabel inputCategoria">
              <label>Categoria</label>
              <InputList
                placeholder="Refeições"
                onChange={e => setCategorias(e.target.value)}
                className='inputsNew '
                list='categoria'
              />

              
            </div>

            <div className="inputLabel ingredientes">
              <label>Ingredientes</label>
              <div className="inputingredients">
                {
                  ingredientes.map((ingrediente, index) => (
                    <NoteItem
                      key={String(index)}
                      value={ingrediente}
                      onClick={() => handleRemoveIngredientes(ingrediente)}
                      className='inputsNew'
                    />
                  ))
                }
                <NoteItem
                  isNew
                  placeholder="Adicionar"
                  onChange={e => setNewIngredientes(e.target.value)}
                  value={newIngredientes}
                  onClick={handleAddIngrediente}
                  className='inputsNew'
                />
              </div>
            </div>

            <div className="inputLabel .second-row preco">
              <label>Preço</label>
              <Input
                placeholder="R$ 00,00"
                onChange={e => setPreco(e.target.value)}
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
                onClick={handleNewPrato}
              />
            </div>
        </Form>
        <Footer />
      </main>


    </Container>
  )
}