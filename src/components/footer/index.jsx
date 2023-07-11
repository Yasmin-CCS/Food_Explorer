import { Container} from './styles';
import logoFooter from '../../assets/logoFooter.svg';





export function Footer() {


  return (
    <Container>


      <div className="logo">
        <img src={logoFooter} />
        <p>food explorer</p>
      </div>

    <p>© 2023 - Todos os direitos reservados.</p>

    </Container>
  );
}