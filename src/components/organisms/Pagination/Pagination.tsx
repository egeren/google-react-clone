import AnchorText from 'components/atoms/AnchorText';
import Page from 'components/molecules/Page';
import React, { useState, useEffect } from 'react';
import * as S from './styled';

const dummy = [1, 1, 1, 1, 1, 1, 1, 1, 1];

function Pagination() {
  const [state, setState] = useState('');

  return (
    <S.Container>
      <S.LetterContainer type="first">
        <S.FirstLetter isFirstPage={false} />
        <AnchorText id="prev" variant="link">
          Previous
        </AnchorText>
      </S.LetterContainer>

      {dummy.map((item, index) => (
        <Page key={index} page={index + 1} />
      ))}

      <S.LetterContainer type="last">
        <S.LastLetter isLastPage={false} />
        <AnchorText id="next" variant="link">
          Next
        </AnchorText>
      </S.LetterContainer>
    </S.Container>
  );
}

export default Pagination;
