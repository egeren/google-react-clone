import React, { useState, useEffect } from 'react';
import * as S from './styled';

interface AnchorTextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'normal' | 'link' | 'gray';
}
function AnchorText(props: AnchorTextProps) {
  const { children, size = 'small', variant = 'normal', ...rest } = props;
  return (
    <S.AnchorText variant={variant} size={size} {...rest}>
      {children}
    </S.AnchorText>
  );
}

export default AnchorText;
