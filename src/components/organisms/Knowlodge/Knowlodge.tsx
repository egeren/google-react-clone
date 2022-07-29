import React, { useState, useEffect } from 'react';
import KnowlodgeHeader from 'components/molecules/KnowlodgeHeader';
import * as S from './styled';
import KnowlodgeWebsite from 'components/molecules/KnowlodgeWebsite';

function Knowlodge() {
  return (
    <S.Container>
      <KnowlodgeHeader />
      <KnowlodgeWebsite />
    </S.Container>
  );
}

export default Knowlodge;
