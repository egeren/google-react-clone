import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ShareIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  color: #767676;
  padding-left: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 160px;
  min-height: 160px;

  & img {
    margin: 16px;
  }
`;
