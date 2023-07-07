import { Container } from './styles';

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export function Counter({ title, loading = false, ...rest }) {
  return (
    <>
      <Container>

      <div type='button'>
        <AiOutlineMinus className='countBtn'/>
      </div>

      <div className='countInput'> 01 </div>

      <div type='button' >
       <AiOutlinePlus className='countBtn'/> 
      </div>

      </Container>
    </>

  );
}