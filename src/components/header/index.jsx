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
import { InputSearch } from '../inputSearch';
import { AiOutlineSearch } from "react-icons/ai";



export function Header({onChange, onClick}) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleNewPrato(){
    navigate("/new");
  }


  return (
    <div>
    {!user.isAdmin ?
    <Container>
{/* Header para não admins */}
          <div>
            <AiOutlineMenu className='menuIcon' onClick={onClick}/>
          </div>

          <div className="logo">
            <img src={logo} />
            <p>food explorer</p>
          </div>
          <Search>
            <InputSearch
              onChange={onChange}
              className="searchHeader"
              placeholder="Busque por pratos e ingredientes"
              icon={AiOutlineSearch}
  
            />
          </Search>

          <Button className="pedidosbtn" title="Pedidos (0)" icon={PiReceiptBold} />
          <LuLogOut className='logoutIcon' onClick={handleSignOut}/>
          <PiReceiptBold className='nota' />
          </Container>

        :
// Header para Admins
        <Container>
          <div>
            <AiOutlineMenu className='menuIcon' onClick={onClick}/>
          </div>

          <div className="logo">
            <img src={logo} />
            <div className='admin'>
            <p>Food Explorer</p>
            <p>admin</p>
            </div>
          </div>
          <Search>
            <Input
              onChange={onChange}
              className="searchHeader"
            />
          </Search>

          <Button className="pedidosbtn" title="Novo Prato" onClick={handleNewPrato}/>
          <LuLogOut className='logoutIcon' onClick={handleSignOut}/>

      </Container>
      }

      </div>

  );
}