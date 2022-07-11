import React, { useState, useEffect } from 'react';
import TabItem from 'components/atoms/TabItem';
import * as S from './styled';
import {
  IoEllipsisVertical,
  IoImageOutline,
  IoLocationOutline,
  IoNewspaperOutline,
  IoSearch,
  IoVideocamOutline,
} from 'react-icons/io5';

const tabs = [
  {
    label: 'All',
    icon: IoSearch,
    isActive: true,
  },
  {
    label: 'Images',
    icon: IoImageOutline,
    isActive: false,
  },
  {
    label: 'Videos',
    icon: IoVideocamOutline,
    isActive: false,
  },
  {
    label: 'News',
    icon: IoNewspaperOutline,
    isActive: false,
  },
  {
    label: 'Maps',
    icon: IoLocationOutline,
    isActive: false,
  },
  {
    label: 'More',
    icon: IoEllipsisVertical,
    isActive: false,
  },
];

function SearchTabs() {
  return (
    <S.Container>
      {tabs.map((tab, index) => (
        <TabItem key={index} data={tab} />
      ))}
    </S.Container>
  );
}

export default SearchTabs;
