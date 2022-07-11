import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: fit-content;
  padding: 0px 4px;
  flex-direction: row;
  gap: 5px;
  color: ${(props) => (props.isActive ? '#1a73e8' : '#5f6368')};
  cursor: pointer;
  border-color: '#1a73e8';
  border-style: solid;
  border-width: ${(props) => (props.isActive ? '0 0 2px 0' : '0')};
`;

export const Icon = styled.div``;
export const Text = styled.div``;
export const Label = styled.p`
  font-family: Arial;
  font-size: 14px;
  margin: 0;
`;
