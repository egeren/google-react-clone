import React, { useState, useEffect } from 'react';
import { IoSearch, IoTimeOutline } from 'react-icons/io5';
import AnchorText from '../AnchorText';
import * as S from './styled';

interface PredictionProps {
  label: string;
  searchedBefore?: boolean;
  onDelete: (value: string) => void;
}

function Prediction(props: PredictionProps) {
  const { label, searchedBefore, onDelete } = props;

  const handleDeleteClick = () => {
    onDelete(label);
  };

  return (
    <S.Container>
      <S.Icon>{searchedBefore ? <IoTimeOutline /> : <IoSearch />}</S.Icon>
      <S.Label searchedBefore={searchedBefore}>{label}</S.Label>
      <S.DeleteText>
        <AnchorText variant="gray" onClick={handleDeleteClick}>
          Delete
        </AnchorText>
      </S.DeleteText>
    </S.Container>
  );
}

export default Prediction;
