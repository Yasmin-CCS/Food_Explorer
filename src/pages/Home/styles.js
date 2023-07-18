import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerHomeMenu = styled.div`
.hide {
  display:none;
}

.grid {
  display: grid;
}
.flex {
  display: flex;
}
`


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
  .desktop{
    display:none;
  }

  .mobile{
      display:flex;
    }

  .advertisementdiv{
    width: 100%;
    display:flex;
    align-items: flex-end;
    justify-content:center;
    padding: 1.5rem 1.6rem 6.2rem .6rem;
    color: ${({ theme }) => theme.COLORS.WHITE3};

  }

  .gradient  {
    background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
    padding: 3.4rem 2.1rem 2.2rem 15.3rem;
    height: 12.0rem;
    width:37.6rem;
    position:absolute;
    margin-left:3.6rem;
    margin-right:1.6rem;
  }

    @media (min-width: 500px){
    position: relative;

    .mobile{
      display:none;
    }

    .desktop{
      display:flex
    }

    .advertisementdiv{
      padding: 1.5rem 1.6rem 6.2rem 0rem;
      position: relative;
    }

    .contentHome{
      padding-left: 12.3rem;
      padding-right: 12.3rem;
    }


    .gradient{
      margin: 26.8rem 12.3rem;
      position:absolute;
      height: 26.0rem;
      width: 90%;
    
    }

  }

    @media (min-width: 900px){
    .gradient{
      width: 80%;
      
    }

    .contentHome{
      padding-left: 12.3rem;
      padding-right: 12.3rem;
    }

    .mobile{
      display:none;
    }

    .desktop{
      display:flex
    }

    
  }

  
  `
export const Content = styled.div`

  .contentHome{
    padding-left:12.4rem;

    > .listaProdutos{
    display:flex;
    flex-wrap: nowrap;
    gap:1.6rem;
    margin-bottom: 2.3rem;

    overflow-x: scroll;
    overflow-y: hidden;
    margin-left:10px;
  }
  }


  .section{
    position:relative;
  }

  .right {
      background: linear-gradient(90deg, rgba(248,248,248,0) 0%, rgba(0,10,15,1) 100%);
      left: calc(100vw - 15.3rem);
    }

  .left{
    background: linear-gradient(90deg, rgba(0,10,15,1) 0%, rgba(248,248,248,0) 100%);
  }


  

  @media (min-width: 500px) {

    .note{

    width: 20.4rem;
    transition: all 200ms;
    transition-timing-function: ease;
  }

  .note:hover {
    transform: scale(1.1);


    .contentHome{
      padding: 0rem 12.3rem;
    }

    
  }
  }

`
export const Scroll = styled.button`
display:flex;
    height:26.2rem;
    position: absolute;
    z-index:1;
    align-items: center;
    color:white;
    border:none;
    width: 4.5rem;
`


export const Advertisement = styled.div`
  display: flex;
  position:relative;
  padding-left: 2.4rem;
  
  > div{
    padding-top:6.5rem;
    width:100%;
    display:flex;
    flex-direction: column;
    gap:0.3rem;
  }
  
  > div > h2{
    font-size: 1.6rem;
    font-weight:600;
    line-height: 140%;
  }
  
  > div > h3 {
    font-size: 1rem;
    font-weight:400;
    line-height: 140%;
  };

  @media (min-width: 500px) {
    margin-left:-10rem;
    align-items:flex-end;
    
    .textAdv{
      margin-bottom:5rem;
    }

    > div > h2{
    font-size: 3rem;
    font-weight:500;
    line-height: 140%;

  }
  
  > div > h3 {
    font-size: 2rem;
    font-weight:400;
    line-height: 100%;
  };

}
  @media (min-width: 900px){
    > div > h2{
    font-size: 4rem;
    font-weight:500;
    line-height: 140%;

  }
  
  > div > h3 {
    font-size: 1.6rem;
    font-weight:400;
    line-height: 100%;
  };

  .textAdv{
      margin-bottom:9.2rem;
    }
  }


`

export const Menu = styled.div`
  width:100%;
  height: 100vh;
  display:grid;
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

export const HeaderMenu = styled.div`
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
export const MenuContent = styled.div`
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

