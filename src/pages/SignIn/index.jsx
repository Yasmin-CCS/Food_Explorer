import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/ButtonText';
import logo from '../../assets/logo.svg';
import {useAuth} from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';


export function SignIn() {
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const navigate = useNavigate();

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }

  function handleRegister(){
    navigate('/register');
  }

  return (
    <Container>
      <Background>
        <img src={logo}/>
        <p>food explorer</p>
      </Background>


      <Form>
        <div className='divForm'>

        <h2>Faça seu login</h2>

          <div>
            <label>Email</label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="text"
              onChange={e => setEmail(e.target.value)}
              className='inputLogin'
            />
          </div>

          <div>
            <label>Senha</label>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              onChange={e => setPassword(e.target.value)}
            
            />
          </div>
          
        <Button title="Entrar" onClick={handleSignIn} />

        <ButtonText
            title="Criar uma Conta"
            onClick={handleRegister}
          />
        </div>
      </Form>
      
    </Container>
  );
}