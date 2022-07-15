import TextInput from 'components/atoms/TextInput';
import React, { useState, useEffect } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import SearchPredictions from '../SearchPredictions';
import * as S from './styled';

function Searchbar() {
  const [isActive, setIsActive] = useState(false);

  const handleInputFocus = () => {
    setIsActive(true);
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  return (
    <S.Container isActive={isActive}>
      <S.TextInputContainer
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="searchbar-input-container"
      >
        <TextInput
          containerStyle={{ border: 'none' }}
          leftIcon={IoSearch}
          rightIcon={IoClose}
        />
      </S.TextInputContainer>
      {isActive && (
        <>
          <S.Divider />
          <S.PredictionContainer>
            <SearchPredictions />
          </S.PredictionContainer>
        </>
      )}
    </S.Container>
  );
}

export default Searchbar;
