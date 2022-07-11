import React, { useState, useEffect } from 'react';
import AnchorText from '../../atoms/AnchorText';
import * as S from './styled';

function ResultURL() {
  return (
    <S.Container>
      <S.URL>http://google.com</S.URL>
      <S.Dot />
      <AnchorText variant="link" size="small">
        Translate this page
      </AnchorText>
    </S.Container>
  );
}

export default ResultURL;
