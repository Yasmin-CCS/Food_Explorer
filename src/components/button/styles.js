import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.RED};
color: ${({ theme }) => theme.COLORS.WHITE};

border: 0;
padding: 12px;
margin-top: 16px;
border-radius: 5px;
font-size:1.4rem;
font-weight:500;
line-height:50%;

&:disabled {
  opacity:0.5;
}

`;