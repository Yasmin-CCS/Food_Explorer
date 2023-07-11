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


export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

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
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <div className='detailsStart'>
              <ButtonText
                title='voltar'
                onClick={handleBack}
                icon={SlArrowLeft}
                className="voltar"
              />
              <img src={foto} />
            </div>
            <div className='detailsInfo'>
              <h1>
                {data.title}
              </h1>

              <p>
              doloremque oposam em sa aut reprehenderit nulla omnis animi. Optio eos iste porro modi error voluptatibus id, eum consectetur?
                {/* {data.description} */}
              </p>
              <div className='tags'>
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </div>
              <div className='buttonsDetails'>
                <Counter />
                <Button
                  title='pedir ∙ R$25,00'
                  icon={PiReceiptBold}
                  className="buttonPedir mobile"
                />
                <Button
                  title='incluir ∙ R$25,00'
                  className="buttonPedir desktop"
                />

              </div>
            </div>

          </Content>
        </main>
      }
      <Footer/>
    </Container>

  )
};
