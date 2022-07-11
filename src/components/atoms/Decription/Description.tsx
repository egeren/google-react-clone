import React, { useState, useEffect } from 'react';
import * as S from './styled';

interface DescriptionProps {
  children?: React.ReactNode;
}

function Description(props: DescriptionProps) {
  const { children } = props;
  const [state, setState] = useState('');

  return <S.Decription>{children}</S.Decription>;
}

export default Description;
