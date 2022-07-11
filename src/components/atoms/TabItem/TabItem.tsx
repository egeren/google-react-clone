import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import { IoSearch } from 'react-icons/io5';
import * as S from './styled';

interface TabItemProps {
  data: {
    icon: IconType;
    label: string;
    isActive?: boolean;
  };
}

function TabItem(props: TabItemProps) {
  const { isActive = false, icon, label } = props.data;
  return (
    <S.Container isActive={isActive}>
      <S.Icon>{React.createElement(icon)}</S.Icon>
      <S.Text>
        <S.Label>{label}</S.Label>
      </S.Text>
    </S.Container>
  );
}

export default TabItem;
