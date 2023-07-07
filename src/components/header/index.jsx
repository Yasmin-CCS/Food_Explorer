import { Container, Search } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../service/api'
import { useNavigate } from 'react-router-dom';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Input } from '../../components/input';
import logo from '../../assets/logo.svg';
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from '../button';
import { PiReceiptBold } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";




export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Container>
      <div>
        <AiOutlineMenu className='menuIcon'/>
      </div>

      <div className="logo">
        <img src={logo} />
        <p>food explorer</p>
      </div>
      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
          className="searchHeader"
        />
      </Search>

      <Button className="pedidosbtn" title="Pedidos (0)" icon={PiReceiptBold}/>
      <LuLogOut className='logoutIcon'/>
      <PiReceiptBold className='nota'/>
    </Container>
  );
}