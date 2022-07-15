import Prediction from 'components/atoms/Prediction';
import React, { useState, useEffect } from 'react';
import SearchButtons from '../SearchButtons';
import * as S from './styled';

function SearchPredictions() {
  const [state, setState] = useState('');

  return (
    <S.Container>
      <Prediction
        label="google"
        onDelete={() => console.log('')}
        searchedBefore
      />
      <Prediction
        label="google maps"
        onDelete={() => console.log('')}
        searchedBefore
      />
      <Prediction
        label="google drive"
        onDelete={() => console.log('')}
        searchedBefore
      />
      <Prediction
        label="google play"
        onDelete={() => console.log('')}
        searchedBefore
      />
      <S.ButtonsContainer>
        <SearchButtons />
      </S.ButtonsContainer>
    </S.Container>
  );
}

export default SearchPredictions;
