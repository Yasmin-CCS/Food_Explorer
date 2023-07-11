import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction:column;

  align-items:stretch;

  @media (min-width: 500px){
    flex-direction:row;
  }
`;

export const Form = styled.form`
  padding: 0 ;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > div > h2 {
    font-size: 0px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }


  .divForm {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 0px 47px 235px 65px;
    width:100%;
    text-align:left;
    color: ${({ theme }) => theme.COLORS.WHITE2};
    
    > div {
      display:flex;
      flex-direction: column;
      gap:8px;
    }
  
  }
  
  @media (min-width: 500px){
    width: 50%;
  
    .divForm {
    width:47.6rem;
    background:  ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding:6.4rem;
    border-radius: 1.6rem;
    }

  > div > h2 {
    text-align: center;
    font-size: 3.2rem;
    
  }

  }

  `;

export const Background = styled.div`
   font-size: 3.72rem;
    font-family: Roboto;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items:center;
    gap: 10.27px;
    margin-top:15.8rem;
    margin-bottom:7.3rem;

    @media (min-width: 500px){
      flex:1;
      margin-top:0px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items:center;
    }
  `;