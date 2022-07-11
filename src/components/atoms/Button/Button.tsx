import React, { useState, useEffect } from 'react';
import * as S from './styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <div>
      <S.Button {...rest}>{children}</S.Button>
    </div>
  );
}

export default Button;
