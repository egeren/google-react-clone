import styled from 'styled-components';

interface TextInputContainerProps {
  isActive: boolean;
}

export const Container = styled.div<TextInputContainerProps>`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  position: relative;

  ${(props) =>
    props.isActive
      ? `
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-radius: 30px 30px 0 0;

    & .searchbar-input-container{
      border-radius: 30px 30px 0px 0px;
      border-left: 1px solid #dfe1e5;
      border-right: 1px solid #dfe1e5;
      border-top: 1px solid #dfe1e5;
    }
    `
      : `
    border: 1px solid #dfe1e5;
    & .searchbar-input-container:hover {
      box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    }
  `}
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 30px;
`;

export const Divider = styled.div`
  display: flex;
  height: 1px;
  border-left: 1px solid #dfe1e5;
  border-right: 1px solid #dfe1e5;
  &:after {
    content: '';
    background: #dfe1e5;
    width: 95%;
    height: 1px;
    margin: 0 auto;
  }
`;

export const PredictionContainer = styled.div`
  border-left: 1px solid #dfe1e5;
  border-right: 1px solid #dfe1e5;
  border-bottom: 1px solid #dfe1e5;
  border-radius: 0 0 30px 30px;
`;
