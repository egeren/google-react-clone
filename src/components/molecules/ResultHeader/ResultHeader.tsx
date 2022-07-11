import React, { useState, useEffect } from 'react';
import * as S from './styled';
import AnchorText from 'components/atoms/AnchorText';

function ResultHeader() {
  return (
    <S.Container>
      <AnchorText size="medium" variant="link">
        Google
      </AnchorText>
    </S.Container>
  );
}

export default ResultHeader;
