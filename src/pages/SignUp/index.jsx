import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { api } from '../../service/api';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar")
        }
      });
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Background>
        <img src={logo} />
        <p>food explorer</p>
      </Background>

      <Form>
        <div className='divForm'>
          <h2>Crie sua conta</h2>
          <div>
            <label>Nome</label>
            <Input
              placeholder="Exemplo: Maria da Silva"
              type="text"

              onChange={e => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Email</label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="text"
              onChange={e => setEmail(e.target.value)}
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

          <Button title="Cadastrar" onClick={handleSignUp} />

          <ButtonText
            title="Já tenho uma Conta"
            onClick={handleBack}
          />
        </div>
      </Form>

    </Container>
  );
}