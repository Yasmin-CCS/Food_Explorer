import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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
    width:90%;
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

    .home{
    padding: 0 12.3rem;
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

    .home{
    padding: 0 12.3rem;
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
  padding-left: 2.4rem;
  
  > div{
    
    overflow-y: auto;
    display:flex;
    flex-wrap: nowrap;
    gap:1.6rem;
    margin-bottom: 2.3rem;
  }

`
export const Advertisement = styled.div`
  display: flex;
  position:relative;

  > div{
    padding-top:6.5rem;
    width:100%;
    display:flex;
    flex-direction: column;
    gap:0.3rem;
  }
  
  > div > h2{
    font-size: 1.8rem;
    font-weight:600;
    line-height: 140%;
  }
  
  > div > h3 {
    font-size: 1.2rem;
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

