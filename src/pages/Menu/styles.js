import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 15vh 85vh auto; 

  .menuSection{
    display:flex;
    align-items:flex-start;
    width: 100%;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE3} ;
    border: none;
    background:transparent;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    padding:1rem;
  }

`
export const FooterContainer = styled.div`
 grid-row: 3;
 margin-bottom:0px;

`

export const Header = styled.div`
  grid-row: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  display:flex;
  align-items: flex-end;

  .contentHeader{
  display:flex;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: Roboto;
  font-size: 21.163px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 3.2rem;
  margin-left: 2.8rem;
  gap: 1.6rem;
  }

`
export const Content = styled.div`
  grid-row: 2;
  display: grid;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .menuContent{
    grid-row: 1;
    padding: 3.6rem 2.8rem 1.3rem;
  }

`

export const Search = styled.div`
  grid-area: search;
  display: flex;
  margin-bottom: 3.6rem;
  
  .searchHeader{
    width: 100%;
    height: 4.8rem;
  }

`