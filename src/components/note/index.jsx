import { Container } from './styles';
import { Counter } from '../../components/counter'
import { Button } from '../button';
import heart from '../../assets/heart.svg'
import foto from '../../assets/foto.png'
import { api } from '../../service/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { PiPencilSimpleBold } from "react-icons/pi";


export function Note({ data, ...rest }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const fotoUrl = `${api.defaults.baseURL}/files/${data.foto}`
  const [foto, setFoto] = useState(fotoUrl);

  function handleEdit(id) {
    navigate(`/edit/${data.id}`);
  }

  return (
    <div>
      {!user.isAdmin ?

        <Container {...rest}>
          <img src={heart} className='heart' />
          <div  >
            <img src={foto} alt="" className="foto" onClick={() => handleDetails(data.id)} />

            <div className="cardInfo" >
              <h1 component="p" className='tituloprodlista' onClick={() => handleDetails(data.id)} >
                {data.nome}
              </h1>

              <p component="p" className='valorprodlista' onClick={() => handleDetails(data.id)} >
                R$ {data.preco}
              </p>

              <Counter />
            </div>
            <Button
              title="incluir"
            />
          </div>
        </Container>
        :
        <Container {...rest}>
          <Button icon={PiPencilSimpleBold} alt="" className="heart" onClick={() => handleEdit(data.id)} />
          <div  >
            <img src={foto} alt="" className="foto" onClick={() => handleDetails(data.id)} />

            <div className="cardInfo" >
              <h1 component="p" className='tituloprodlista' onClick={() => handleDetails(data.id)} >
                {data.nome}
              </h1>

              <p component="p" className='valorprodlista' onClick={() => handleDetails(data.id)} >
                R$ {data.preco}
              </p>

            </div>
          </div>

        </Container>
      }
    </div>
  )
}