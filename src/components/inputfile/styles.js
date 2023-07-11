import styled from 'styled-components';

export const Container = styled.div`
.file-input {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  margin-bottom: 8px;
  border-radius: 10px;

  height: 56px;


  padding: 12px;
}

.file-input input[type="file"] {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  font-size: 100px;
  cursor: pointer;
}

.file-input label {
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  display:flex;
  align-items:center;
}


.icon {
  width: 24px;
height: 24px;
}


`