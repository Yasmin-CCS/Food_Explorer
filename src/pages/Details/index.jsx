import { useState, useEffect } from 'react';
import { Container, Content } from "./styles";
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/tag';
import { Counter } from '../../components/counter';
import { api } from '../../service/api';
import foto from '../../assets/foto.png';
import { SlArrowLeft } from "react-icons/sl";
import { PiReceiptBold } from "react-icons/pi";
import { Footer } from '../../components/footer';
import { useAuth } from '../../hooks/auth';


export function Details() {

  const [data, setData] = useState(null);
  const [pratos, setPratos] = useState(null);
  const fotoUrl = pratos && `${api.defaults.baseURL}/files/${pratos.foto}`
  const [foto, setFoto] = useState(fotoUrl);



  const { user } = useAuth();


  const params = useParams();
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/edit/${params.id}`);
  }


  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack();
    }
  }

  useEffect(() => {
    async function fetchPratos() {
      const response = await api.get(`/pratos/${params.id}`)
      setPratos(response.data);
    }

    fetchPratos();
  }, [])


  return (
    <div>
      {user.isAdmin == 1 ?

        <Container>
          <Header />
          {
            pratos &&
            <main>
              <Content>
                <div className='detailsStart'>
                  <ButtonText
                    title='voltar'
                    onClick={handleBack}
                    icon={SlArrowLeft}
                    className="voltar"
                  />
                  <img src={fotoUrl} />
                </div>
                <div className='detailsInfo'>
                  <h1>
                    {pratos.nome}
                  </h1>

                  <p>
                    {pratos.description}
                  </p>
                  <div className='tags'>
                    {
                      pratos.ingredientes.map(ingrediente => (
                        <Tag
                          key={String(ingrediente.id)}
                          title={ingrediente.nome}
                        />
                      ))
                    }
                  </div>
                  <div className='buttonsDetails'>
                    <Button
                      title='Editar prato'
                      className="buttonPedir desktop"
                      onClick={handleEdit}
                    />

                  </div>
                </div>

              </Content>
            </main>
          }
          <Footer />
        </Container>
        :
        /* Detalhes para admins */
        <Container>
          <Header />
          {
            pratos &&
            <main>
              <Content>
                <div className='detailsStart'>
                  <ButtonText
                    title='voltar'
                    onClick={handleBack}
                    icon={SlArrowLeft}
                    className="voltar"
                  />
                  <img src={fotoUrl} />
                </div>
                <div className='detailsInfo'>
                  <h1>
                    {pratos.nome}
                  </h1>

                  <p>
                    {pratos.description}
                  </p>
                  <div className='tags'>
                    {
                      pratos.ingredientes.map(ingrediente => (
                        <Tag
                          key={String(ingrediente.id)}
                          title={ingrediente.nome}
                        />
                      ))
                    }
                  </div>
                  <div className='buttonsDetails'>
                    <Counter />
                    <Button
                      title={`pedir ∙ R$${pratos.preco}`}
                      icon={PiReceiptBold}
                      className="buttonPedir mobile"
                    />
                    <Button
                      title={`incluir ∙ R$${pratos.preco}`}
                      className="buttonPedir desktop"
                    />

                  </div>
                </div>

              </Content>
            </main>
          }
          <Footer />
        </Container>
      }
    </div>
  )
};
