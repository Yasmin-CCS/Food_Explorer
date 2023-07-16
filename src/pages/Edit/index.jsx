import { useState, useEffect } from 'react';
import { Footer } from '../../components/footer';
import { SlArrowLeft } from "react-icons/sl";

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form } from './styles';
import { api } from '../../service/api';
import { ButtonText } from '../../components/ButtonText';
import { InputFile } from '../../components/inputfile';
import { InputList } from '../../components/inputlist';



export function Edit() {
  const [pratos, setPratos] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchPratos() {
      const response = await api.get(`/pratos/${params.id}`)
      setPratos(response.data);
    }
  
    fetchPratos();
  }, [])
  
  const [nome, setNome] = useState("");

  const [description, setDescription] = useState("");
  const [foto, setFoto] = useState("");
  const [preco, setPreco] = useState("");
  const [categorias, setCategorias] = useState('');

  const [ingredientes, setIngredientes] = useState([]);
  const [ingredientesBackend, setIngredientesBackend] = useState([]);
  const [newIngredientes, setNewIngredientes] = useState("");
  

  const navigate = useNavigate();

  
  useEffect(() => {
    if (pratos) {
      setNome(pratos.nome)
      setDescription(pratos.description)
      setPreco(pratos.preco)
      setCategorias(pratos.categorias_id)

      const nomesIngredientes = pratos.ingredientes.map(ingrediente => ingrediente.nome);
      setIngredientes(nomesIngredientes);
    }
  }, [pratos]);
  
  useEffect(() => {
    console.log(ingredientes); // Exibe o valor atualizado de ingredientes
  }, [ingredientes]);

  function handleAddIngrediente() {
    // setIngredientes(prevState => [...prevState, newIngredientes]);
    const ArrayIngredientes = [...ingredientes, newIngredientes]
    setIngredientes( ArrayIngredientes )
    setNewIngredientes("")
  }
  console.log(ingredientes)

  
  function handleRemoveIngredientes(deleted) {
    setIngredientes(prevState => prevState.filter(ingrediente => ingrediente !== deleted));
  }


  
 
      function categoriasOrganize(categoria_id) {
        let categoria = '';
        if (categoria_id === 1) {
          categoria = "Bebidas";
        } else if (categoria_id === 2) {
          categoria = "Refeicoes";
        } else if (categoria_id === 3) {
          categoria = "Sobremesas";
        }
        return(categoria);
      }
      
      async function handleDeletePrato () {
        try {
      
          await api.delete(`/pratos/${params.id}`);
          
          alert("Prato deletado com sucesso!");
          navigate(-2);
    
        } catch (error) {
          alert("Não foi possível deletar o prato.", {
          });
        }
      }

    async function handleUpdate() {

    const formData = new FormData();

    formData.append("id", params.id);
    formData.append("nome", nome);
    formData.append("categorias", categorias);
    formData.append("preco", preco);
    formData.append("ingredientes", ingredientes);
    formData.append("description", description);
    formData.append("foto", foto);

    try {
      
      await api.put(`/pratos/${params.id}`, formData);
      
      alert("Prato atualizado com sucesso!");
      navigate(-1);

    } catch (error) {
      alert("Não foi possível atualizar o prato.", {
      });
    }
  }
  

  
  function handleBack() {
    navigate(-1);
  }
  
  
  return (
    <Container>
      <Header />
      {pratos &&
        <main>
          <Form>
            <header>
              <ButtonText
                title='voltar'
                onClick={handleBack}
                icon={SlArrowLeft}
                className="voltar"
              />
              <h1>Editar Prato</h1>
            </header>

            <div className="inputsForm">
              <div className="inputLabel inputFile">
                <label>Imagem do prato</label>
                <input
                  type="file"
                  onChange={e => setFoto(e.target.files[0])}
                  files={`${api.defaults.baseURL}/files/${pratos.foto}`}/*{ onChange={handleFileChange}*/ />
              </div>

              <div className="inputLabel inputName">
                <label>Nome</label>
                <Input
                  defaultValue={pratos.nome}
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
                  <option  defaultValue={e => setCategorias(categoriasOrganize(pratos.categorias_id))}>{categoriasOrganize(pratos.categorias_id)}</option>
                  <option value="Refeicoes">Refeições</option>
                  <option value="Bebidas">Bebidas</option>
                  <option value="Sobremesas">Sobremesas</option>
                </select>


              </div>

              <div className="inputLabel ingredientes">
                <label>Ingredientes</label>
                 { 
                  pratos.ingredientes &&
                <div className="inputingredients">
                 {
                    ingredientes.map((ingrediente, index) => (
                      <NoteItem
                        key={index}
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
                }
              </div>
              <div className="inputLabel .second-row preco">
                <label>Preço</label>
                <Input
                  onChange={e => setPreco(e.target.value)}
                  className='inputsNew'
                  defaultValue={`R$ ${pratos.preco}`}
                  />
              </div>

              <div className="inputLabel descricao">
                <label>Descrição</label>
                <Textarea
              
              onChange={e => setDescription(e.target.value)}
              className='inputsNew '
              defaultValue={pratos.description}
              />
              </div>

            </div>
            <div className='buttonarea'>
              <Button
                className="button cancel"
                title="Excluir Prato"
                onClick={handleDeletePrato}
                />
              <Button
                className="button"
                title="Salvar alterações"
                onClick={handleUpdate}
                />
            </div>
          </Form>
          <Footer />
        </main>

}
    </Container>
  )
}

  // function handleFotoChange(file) {
  //   if (file) {
  //     let fileName = file.name.slice(0, 16)
      
  //     if (file.name.length > 16) {
  //       const fileExtension = file.name.split('.').pop()
  //       fileName += `.${fileExtension}`
  //     }
      
  //     setFoto(file)
  //     setFotoName(fileName)
  //   }
  // }