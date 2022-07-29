import AnchorText from 'components/atoms/AnchorText';
import React, { useState, useEffect } from 'react';
import { IoEarth } from 'react-icons/io5';
import * as S from './styled';

function KnowlodgeWebsite() {
  const [state, setState] = useState('');

  return (
    <S.Container>
      <S.IconContainer>
        <IoEarth />
      </S.IconContainer>
      <AnchorText variant="link">google.com</AnchorText>
    </S.Container>
  );
}

export default KnowlodgeWebsite;
