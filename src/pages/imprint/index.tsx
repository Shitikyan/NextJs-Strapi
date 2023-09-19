'use client';

import React from 'react';
import GlobalProvider from '@/app/globalProvider';
import ImprintComponent from '@/components/pages/imprint';

import '../../styles/globals.css';

const Imprint = (): JSX.Element => {
  return (
    <GlobalProvider>
      <ImprintComponent />
    </GlobalProvider>
  );
};

export default Imprint;
