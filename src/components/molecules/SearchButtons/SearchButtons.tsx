import Button from 'components/atoms/Button/Button';
import React, { useState, useEffect } from 'react';
import * as S from './styled';

function SearchButtons() {
  const [state, setState] = useState('');

  return (
    <S.Container>
      <Button>Google Search</Button>
      <Button>I&apos;m Feeling Lucky</Button>
    </S.Container>
  );
}

export default SearchButtons;
