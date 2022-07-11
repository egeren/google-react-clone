import React, { useState, useEffect } from 'react';
import ResultHeader from 'components/molecules/ResultHeader';
import ResultURL from 'components/molecules/ResultURL';
import Description from 'components/atoms/Decription';
import ResultAltLinks from 'components/molecules/ResultAltLinks';

function SearchResult() {
  return (
    <div>
      <ResultURL />
      <ResultHeader />
      <Description>
        Search the world&apos;s information, including webpages, images, videos
        and more. Google has many special features to help you find exactly what
        you&apos;re looking ...
      </Description>
      <ResultAltLinks />
    </div>
  );
}

export default SearchResult;
