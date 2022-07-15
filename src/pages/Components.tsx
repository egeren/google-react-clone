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
import Searchbar from 'components/molecules/Searchbar';
import Prediction from 'components/atoms/Prediction';
import SearchPredictions from 'components/molecules/SearchPredictions';
import SearchButtons from 'components/molecules/SearchButtons';
import PageNumber from 'components/atoms/PageNumber';
import Page from 'components/molecules/Page';
import Pagination from 'components/organisms/Pagination';

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

      <Searchbar />
      <SearchButtons />
      <Pagination />
    </div>
  );
}

export default Components;
