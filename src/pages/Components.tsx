import React, { useState, useEffect } from 'react';
import TextInput from 'components/atoms/TextInput';
import { IoClose, IoSearch } from 'react-icons/io5';
import AnchorText from 'components/atoms/AnchorText';
import Button from 'components/atoms/Button/Button';
import ResultHeader from 'components/molecules/ResultHeader';
import ResultURL from 'components/molecules/ResultURL';
import SearchResult from 'components/organisms/SearchResult/SearchResult';
import TabItem from 'components/atoms/TabItem';
import SearchTabs from 'components/molecules/SearchTabs';

function Components() {
  const [state, setState] = useState('');

  return (
    <div
      style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        paddingLeft: '50px',
      }}
    >
      <TextInput leftIcon={IoSearch} rightIcon={IoClose} />

      <AnchorText>Anchored Text</AnchorText>

      <Button>Search with Google</Button>

      <SearchResult />

      <SearchTabs></SearchTabs>
    </div>
  );
}

export default Components;
