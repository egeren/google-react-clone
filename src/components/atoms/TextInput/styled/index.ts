import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dfe1e5;
  height: 40px;
  padding: 0 15px;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
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
