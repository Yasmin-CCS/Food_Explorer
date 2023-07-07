import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.header`
  height:11.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  justify-content:space-between;
  align-items:center;
  display: flex;
  gap:3.2rem;

  padding: 5.6rem 2.8rem 2.4rem 2.8rem;
  
.logoutIcon{
  display: none;
}

  .nota{
    height:32px;
    width:32px;
  }
  
  .menuIcon{
    align-items:baseline;
    height:24px;
    width:32px;
  }

  .logo {
    display: flex;
    align-items:center;
    gap: 10.27px;
    font-size: 21.1px;
    font-family: Roboto;
    font-weight: 700;
  }

  .logo > img{
    height: 2.4rem;
  }

  .pedidosbtn {
  display:none;
  }

  @media (min-width: 500px){
    display: flex;
    height:10.4rem;
    padding: 2.4rem 2.8rem 2.4rem 2.8rem;
    justify-content:center;
  
  .menuIcon{
    display: none;
  }

  .nota{
    display: none;
  }

  .pedidosbtn {
    display:none;

    }

    .logoutIcon {
      display:flex;
      height:3.2rem;
      width:3.2rem;
    }

    .logo{
      margin-right:1rem;
    }
  
  }

  @media (min-width: 900px){
    .menuIcon{
    display: none;
  }

  .nota{
    display: none;
  }

  .pedidosbtn {
    display:flex;
    width:21.6rem;
    padding: 1.2rem 4.65rem;
    gap: 0.8rem;
    align-items:center;
    justify-content:center;
    margin: 0;
  }
}

`;

export const Search = styled.div`
  grid-area: search;
  display:none;
  

  @media (min-width: 900px){
    display: flex;

  .searchHeader{
    width: 58.1rem;
    height: 4.8rem
  }




  }
`;

