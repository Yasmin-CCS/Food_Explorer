import { useState } from 'react';
import { Footer } from '../../components/footer';
import { SlArrowLeft } from "react-icons/sl";
import { MdOutlineFileUpload } from "react-icons/md";

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
  const [categorias, setCategorias] = useState("");
  const [preco, setPreco] = useState("");
  const [description, setDescription] = useState("");

  const [ingredientes, setIngredientes] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  function handleAddIngredient() {
    if (!newIngredient) {
      return alert("Não é possível adicionar o campo vazio.", {

      });
    }
    setIngredientes(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredientes(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleClickBack() {
    navigate(-1);
  }

  async function handleAddNewDish() {
    const formData = new FormData();

    if (!nome || !preco || !description || !ingredientes || !image) {
      return alert("Preencha todos os campos para criar o prato.", {

      });
    }

    if (newIngredient) {
      return alert("Você deixou o campo de ingrediente incompleto, finalize ou apague o conteúdo para adicionar o ingrediente.", {

      });
    }

    formData.append("nome", nome);
    formData.append("categorias", categorias);
    formData.append("preco", preco);
    formData.append("ingredientes", ingredientes);
    formData.append("description", description);
    formData.append("foto", image);
   

    try {

      await api.post("/pratos", formData);

      alert("Prato criado com sucesso!");
      navigate(-1);

    } catch (error) {
      alert("Não foi possível criar o prato.", {
      });
    }
    }
  

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText
              title='voltar'
              onClick={handleClickBack}
              icon={SlArrowLeft}
              className="voltar"
            />
            <h1>Novo Prato</h1>
          </header>

          <div className="inputsForm">
            <div className="inputLabel inputFile">
              <label>Imagem do prato</label>
              <input
                type="file"
                onChange={e => setImage(e.target.files[0])}/*{ onChange={handleFileChange}*/ />
              <label>
                <MdOutlineFileUpload className="icon" />
                Selecione Imagem
              </label>
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
              <select
                id="category"
                onChange={e => setCategorias(e.target.value)}
              >
                <option value="undefined">Selecione a Categoria</option>
                <option value="Refeicoes">Refeições</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Sobremesas">Sobremesas</option>
              </select>


            </div>

            <div className="inputLabel ingredientes">
              <label>Ingredientes</label>
              <div className="inputingredients">
                {
                  ingredientes.map((ingredient, index) => (
                    <NoteItem
                      value={String(ingredient)}
                      key={index}
                      onClick={() => handleRemoveIngredient(ingredient)}
                      className='inputsNew'
                    />
                  ))
                }
                <NoteItem
                  isNew
                  placeholder="Adicionar"
                  onChange={e => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
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
              onClick={handleAddNewDish}
            />
          </div>
        </Form>
        <Footer />
      </main>


    </Container>
  )
}