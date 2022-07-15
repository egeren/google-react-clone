import styled from 'styled-components';

interface FirstLetterProps {
  isFirstPage: boolean;
}

interface LastLetterProps {
  isLastPage: boolean;
}

interface LetterContainerProps {
  type: 'first' | 'last';
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LetterContainer = styled.div<LetterContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.type === 'first' ? 'flex-end' : 'flex-start'};
  margin: 0;

  & a#prev {
    margin-right: 35px;
  }

  & a#next {
    margin-left: 53px;
  }
`;

export const FirstLetter = styled.span<FirstLetterProps>`
  width: ${(props) => (props.isFirstPage ? '28px' : '53px')};
  height: 40px;
  background: url(/images/image_map.webp) no-repeat;
  background-position: ${(props) => (props.isFirstPage ? '-24px 0' : '0 0')};
  background-size: 167px;
  cursor: pointer;
`;

export const LastLetter = styled.span<LastLetterProps>`
  width: ${(props) => (props.isLastPage ? '45px' : '71px')};
  height: 40px;
  background: url(/images/image_map.webp) no-repeat;
  background-position: -96px 0;
  background-size: 167px;
  cursor: pointer;
`;
