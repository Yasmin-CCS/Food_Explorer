import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  gap:1.4rem; 
  align-items:center;
  padding: 0.4rem 0;

  >button {
    background:transparent;
    border:none;
  }

  .countInput {
    color: ${({ theme }) => theme.COLORS.WHITE3};
    width: 2.4rem;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }
  
  .countBtn{
    display:flex;
  color: white;
  background:none;
  width: 2.4rem;
  height:2.4rem;
  align-content:center;
}
`