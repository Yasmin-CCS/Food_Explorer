import { Container } from './styles';
import { Counter } from '../../components/counter'
import { Button } from '../button';
import heart from '../../assets/heart.svg'
import foto from '../../assets/foto.png'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <img src={heart} className='heart'/>
      <div>
      <img src={foto} alt="" className="foto" />
      
      <div className="cardInfo">
        <h1 component="p" className='tituloprodlista'>
          Salada Ravanello
        </h1>

        <p component="p" className='valorprodlista'>
          R$ 49,79
        </p>

    <Counter/>
      </div>
      <Button
        title="incluir"
      />
      </div>
    </Container>
  )
}