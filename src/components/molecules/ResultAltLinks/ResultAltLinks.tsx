import Description from 'components/atoms/Decription';
import SearchResult from 'components/organisms/SearchResult/SearchResult';
import React, { useState, useEffect } from 'react';
import ResultHeader from '../ResultHeader';
import * as S from './styled';

function ResultAltLinks() {
  return (
    <S.Container>
      <div>
        <ResultHeader />
        <Description>
          Google&apos;s free service instantly translates words, phrases, and
          ...
        </Description>
      </div>
      <div>
        <ResultHeader />
        <Description>
          Google&apos;s free service instantly translates words, phrases, and
          ...
        </Description>
      </div>
      <div>
        <ResultHeader />
        <Description>
          Google&apos;s free service instantly translates words, phrases, and
          ...
        </Description>
      </div>
    </S.Container>
  );
}

export default ResultAltLinks;
