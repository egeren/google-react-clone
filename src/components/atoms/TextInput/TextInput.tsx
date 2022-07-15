import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { IconType } from 'react-icons';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: IconType;
  rightIcon?: IconType;
  containerStyle?: React.HTMLAttributes<HTMLDivElement>['style'];
}

function TextInput(props: TextInputProps) {
  const { leftIcon, rightIcon, containerStyle, ...rest } = props;
  return (
    <S.Container style={containerStyle}>
      {leftIcon && <S.Icon>{React.createElement(leftIcon)}</S.Icon>}
      <S.Input type="text" {...rest} />
      {rightIcon && <S.Icon>{React.createElement(rightIcon)}</S.Icon>}
    </S.Container>
  );
}

export default TextInput;
