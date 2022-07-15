import React, { useState, useEffect } from 'react';
import AnchorText from '../AnchorText';
import * as S from './styled';

interface PageNumberProps {
  isActive?: boolean;
  children: React.ReactNode;
}

function PageNumber(props: PageNumberProps) {
  const { children, isActive = false } = props;
  return (
    <S.Container>
      <S.Image isActive={isActive} />
      {children}
    </S.Container>
  );
}

export default PageNumber;
