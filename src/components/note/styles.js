import styled from 'styled-components';

export const Container = styled.button`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
border:none;
border-radius:10px;
position:relative;
margin-bottom: 16px;
display: flex;

> div {
  padding: 24px;
}

.cardInfo {
  display: flex;
  flex-direction:column;
  gap: 1.2rem;
  align-items:center;
}

.cardInfo > h1 {
color: ${({ theme }) => theme.COLORS.WHITE3};
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
width: 16.2rem;
}
.cardInfo > p {
color: ${({ theme }) => theme.COLORS.BLUE_200};
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 100%;

}


> footer {
  width: 100%;
  display: flex;
  margin-top: 24px;
}

.foto{
  width:8.8rem;
}

.heart {
  margin-top: 1.6rem;
  margin-left: 16.6rem;
  position:absolute;
  align-items: start;
}

`