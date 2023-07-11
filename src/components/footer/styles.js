import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  justify-content:space-between;
  align-items:center;
  display: flex;
  gap:3.2rem;


  padding: 2.4rem 2.8rem 2.4rem 2.8rem;
  font-family: DM Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  
  
  .logo {
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-family: Roboto;
    font-size: 1.52rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    gap: 0.6rem;
    align-items:center;
  }

  .logo > img{
    height: 2.4rem;
  }



  @media (min-width: 500px){
    display: flex;
    height:10.4rem;
    padding: 2.4rem 2.8rem 2.4rem 2.8rem;
    justify-content:center;

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

  .nota{
    display: none;
  }

}

`;


