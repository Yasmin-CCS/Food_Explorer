import { Container } from './styles';
import { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export function Counter({ title, loading = false, ...rest }) {
  const [quantidade, setQuantidade] = useState(0);

  function subtracao(){
    let resultado = quantidade - 1;
    setQuantidade(resultado)
  }


  function soma(){
    let resultado = quantidade + 1;
    setQuantidade(resultado)
  }


  return (
    <>
      <Container>

      <button onClick={subtracao}>
        <AiOutlineMinus className='countBtn'/>
        </button>

      <div className='countInput'> {quantidade} </div>

      <button onClick={soma}>
        <AiOutlinePlus className='countBtn' /> 
      </button>

      </Container>
    </>

  );
}