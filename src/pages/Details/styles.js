import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area:content;
    overflow-y: scroll;
    padding: 3.65rem 5.6rem;

  }

  @media (min-width: 500px){
  > main {
    grid-area:content;
    overflow-y: scroll;
    padding: 2.4rem 12.1rem 15.5rem;
  }
  }
`;


export const Content = styled.div`
  max-width: 55.0rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align:center;
  align-items:center;

  .detailsInfo > .buttonsDetails > .desktop{
    display	: none;
  }

  .detailsInfo > .buttonsDetails > .mobile{
    display:flex;
  }

  .detailsStart > img {
    width: 26.4rem;
  }

  .detailsStart > button:first-child{
    align-self:start;
  }

  .detailsInfo > h1 {
    font-size: 2.7rem;
    font-weight: 500;
    margin-top:1.6rem;
  }

  .detailsInfo > p {
    font-size: 1.6rem;
    margin: 2.4rem 0rem;
    
  }

  .voltar {
    display:flex;
    margin-bottom:1.6rem;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    align-items:center;
    } 

    .detailsInfo .buttonsDetails {
      display:flex;
      justify-content:center;
      align-items:flex-end;
      gap:1.6rem;
      width:100%;

      .buttonPedir {
        margin-top:0;
        padding: .8rem 1.6rem;
        gap: 0.8rem;
        font-size: .9464rem;
        font-weight: 500;
        line-height: 1.6225rem;
        align-items:center;
        justify-content:center;
      }
    }
    .detailsInfo .tags{
        display:flex;
        gap: 2.4rem;
        justify-content:center;
        margin-bottom:4.8rem;
      }
      
      @media (min-width: 500px){
        display:flex;
        flex-direction:row;
        text-align: left;
        max-width: 100%;
        justify-content: flex-start;
        gap: 4.78rem;
      
        .detailsInfo > .buttonsDetails {
          align-items: center;
          justify-content:flex-start;

        }

        .detailsInfo > .buttonsDetails > .desktop{
          display:flex;
        }
        
        .detailsInfo > .buttonsDetails > .mobile{
          display: none;
        }

        .detailsStart > img {
          width: 39rem;
        }

        .detailsInfo > h1 {
          font-size: 4rem;
          line-height: 140%;
        }

        .detailsInfo > p {
          font-size: 2.4rem;
          font-weight:400;
          line-height: 140%;
        }

      .detailsInfo .tags{
        font-size:1.4rem;
        gap: 1.2rem;
        justify-content:flex-start;
        margin-bottom:4.8rem;
      }

      .detailsInfo > .buttonsDetails >.buttonPedir {
        font-size: 1.4rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        align-items:center;
        justify-content:center;
        width:16.5rem;
      }
    }
`;