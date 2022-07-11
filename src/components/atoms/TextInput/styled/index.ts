import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  height: 40px;
  border-radius: 30px;
  padding: 0 15px;
  gap: 10px;

  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  }
`;

export const Input = styled.input`
  flex: 1 1 auto;
  height: 100%;
  background: none;
  outline: none;
  border: none;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
