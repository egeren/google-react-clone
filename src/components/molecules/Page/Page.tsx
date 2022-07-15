import React, { useState, useEffect } from 'react';
import AnchorText from 'components/atoms/AnchorText';
import PageNumber from 'components/atoms/PageNumber';

interface PageProps {
  page: number;
}

function Page(props: PageProps) {
  const { page } = props;
  return (
    <PageNumber>
      <AnchorText variant="link">{page}</AnchorText>
    </PageNumber>
  );
}

export default Page;
