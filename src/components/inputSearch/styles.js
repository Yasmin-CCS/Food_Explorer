import styled from 'styled-components';

export const Container = styled.div`
  width: 58.1rem;
  display: flex;
  align-items: center;
  padding: 0rem 10rem ;
  gap:1.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding:0 !important;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border:0;


    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > svg {
      margin-left: 16px;
    }
  }

`