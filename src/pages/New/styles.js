import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  'header'
  "content"
  'footer';
  
  > main {
    grid-area: content;
    overflow-y: auto;
  }
  
  > Footer{
    grid-area: footer;
    margin-bottom:0px;
  }
  
  ;`

export const Form = styled.form`
  padding:3.2rem;
  display:flex;
  flex-direction:column;
  max-width: 55.0rem;
  margin-bottom: 2.1rem;
  font-family: Roboto;
  color: ${({ theme }) => theme.COLORS.WHITE2};

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 100%;

  .inputsForm{
    display:flex;
    flex-direction:column;
    gap: 2.1rem;

    .inputLabel{
      display:flex;
      flex-direction:column;
      gap: 1.6rem;
    }



  }
  
.inputingrdients{
     display: flex;
    flex-wrap:wrap;
    align-items: center;
    padding: .8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    gap:1.6rem;
    border-radius: 10px;
}

  .ingredientes .newInput{
      margin-bottom: 0px;
    }


    
  .voltar {
    display:flex;
    margin-bottom:1.6rem;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 140%;
    align-items:center;
    } 


  > header {
    display: flex;
    flex-direction:column;
    align-items: start;
    gap:2.4rem;
    margin-bottom: 36px;

    >h1{
      font-weight:500;
      color: ${({ theme }) => theme.COLORS.WHITE3};
      font-size: 32px;
      line-height:140%;
    }
  }

    @media (min-width: 500px){
      display:flex;
      margin:0px;
      max-width: 100%;
      padding: 4rem 12.4rem;

      .inputsForm{
        display: grid;
        grid-template-columns: repeat(9, minmax(0, 1fr));
        grid-template-rows: 10vh 10vh 22vh;
        gap: 3.2rem;

        align-items: start
      }

    .inputFile{
      grid-column: span 2;
      grid-row: 1;
    }

    .inputName{
      grid-column: span 4;
      grid-row: 1;
    }

    .inputCategoria{
      grid-column: span 3;
      grid-row: 1;
    }

    .ingredientes {
        grid-column: span 7;
        grid-row: 2;
    }

    .preco {
        grid-column: span 2;
        grid-row: 2;
    }

    .descricao {
        grid-column: span 9;
        grid-row: 3;
    }

    .buttonarea{
      display:flex;
      justify-content:flex-end;
    }

    .button{
      align-items:center;
      display:flex;
      height:3.4rem;
      width: 17.2rem;
      padding: 2.4rem;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
    }
}
`