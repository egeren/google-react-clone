import React, { useState, useEffect } from 'react';
import * as S from './styled';

interface TitleProps {
  children: React.ReactNode;
}

function Title(props: TitleProps) {
  const { children } = props;

  return <S.Title>{children}</S.Title>;
}

export default Title;
