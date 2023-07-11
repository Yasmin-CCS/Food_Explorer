import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 0.5rem 0.7rem;
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  gap:.4rem;
  border-radius: 8px;


  > button {
    border: none;
    background:none;
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add{
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    display:flex;
    align-content: stretch;
    align-items:center;
    height:1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 50%;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      width: fit-content;
    }
  }


`