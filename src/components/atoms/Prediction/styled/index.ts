import styled from 'styled-components';

interface LabelProps {
  searchedBefore?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 15px;
  &:hover {
    background: #eee;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const Label = styled.p<LabelProps>`
  font-family: Arial;
  font-size: 14px;
  margin: 0;
  margin-left: 10px;
  color: ${(props) => (props.searchedBefore ? '#52188c' : '#000')};
`;

export const DeleteText = styled.p`
  display: flex;
  flex: 1 1 auto;
  flex-shrink: 1;
  align-items: center;
  justify-content: flex-end;
  font-family: Arial;
  font-size: 14px;
  margin: 0;
`;
