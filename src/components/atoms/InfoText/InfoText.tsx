import React, { useState, useEffect } from 'react';
import * as S from './styled';

interface InfoTextProps {
  children: React.ReactNode;
}

function InfoText(props: InfoTextProps) {
  const { children } = props;
  return <S.Text>{children}</S.Text>;
}

export default InfoText;
