import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Arial;
  gap: 5px;
  line-height: 1.58;
`;

export const URL = styled.p`
  color: #202124;
  font-size: 14px;
  margin: 0;
`;

export const Dot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  font-size: 14px;
  &::after {
    content: '';
    width: 1px;
    height: 1px;
    background-color: #202124;
  }
`;
